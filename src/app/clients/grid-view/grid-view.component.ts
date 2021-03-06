import { Component, OnInit, Inject } from '@angular/core';
// import { AddClientDialogComponent } from '../add-client-dialog/add-client-dialog.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { PageEvent, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { ProjectsDialogComponent } from '../projects-dialog/projects-dialog.component'; 
import { AddClientDialogComponent } from '../add-client-dialog/add-client-dialog.component';
import { GridViewClientsComponent } from './grid-view-clients/grid-view-clients.component';
import { ResetPasswordDialogComponent } from 'src/app/admin/manage-user/users/reset-password-dialog/reset-password-dialog.component';
import { ContactsPopupComponent } from '../contacts-popup/contacts-popup.component';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  
  public single: any[];
  public multi: any[];
  public triple: any[];
  public showLegend = false;
  public gradient = false;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;
  
  pageEvent: PageEvent;
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle = false;
  status = [{'status_id':'1','status_name':'Active'},
  {'status_id':'2','status_name':'Inactive'}]
  
  public status_filter = ""; 
  contactName = new FormControl();
  clientName = new FormControl();
  jobTitle = new FormControl();
  contactNumber = new FormControl();
  statu = new FormControl();
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;
  totalProjects = [
    {GST:"37AADCS0472N1Z1",PAN:"CEUGE1646I",contactname:"David", clientname:'Amazon', clienttype:'E-Com', email:'abhi@gmail.com', phone:'9888459875', address:'D-46/2/1b', city:'Delhi', postal:'110056', contact:'2', quotes:'1', projects:'1', created:'07-07-2020', status:'true', state:"New York" , country:"USA" , projectCount:"5"},
    {GST:"48AABCU9643R1ZF",PAN:"CFRUGE1516I",contactname:"Collin", clientname:'Flipkart', clienttype:'E-Com', email:'012amit@gmail.com', phone:'9882942885', address:'45/2/1c', city:'Hartana', postal:'215584', contact:'1', quotes:'1', projects:'3', created:'07-07-2020', status:'true', state:"Ontario" , country:"Canada" , projectCount:"2" },
    {GST:"38ARBCU9633R1ZM",PAN:"CTUGE1215I",contactname:"Warner", clientname:'E-Square', clienttype:'Architect', email:'rajesh12@gmail.com', phone:'9888736885', address:'C-120', city:'Delhi', postal:'110051', contact:'5', quotes:'2', projects:'5', created:'07-07-2020', status:'false', state:"Mumbai" , country:"India" , projectCount:"7"},
    {GST:"48AABCU9643R1ZF",PAN:"CRUGR1417I",contactname:"Stokes", clientname:'Stonefield', clienttype:'Hospitality', email:'sameer90@gmail.com', phone:'9235452885', address:'C-13/ B-block', city:'Delhi', postal:'110036', contact:'1', quotes:'2', projects:'0', created:'07-07-2020', status:'true', state:"Telangana" , country:"India" , projectCount:"4"},
    {GST:"58AABFU9653R1ZE",PAN:"CRUGE1713A",contactname:"Clive", clientname:'Bluedart', clienttype:'Courier', email:'abhi@gmail.com', phone:'9888459875', address:'D-46/2/1b', city:'Delhi', postal:'110056', contact:'2', quotes:'1', projects:'1', created:'07-07-2020', status:'true', state:"New Jersey" , country:"USA" , projectCount:"3"},
    {GST:"68AABCU9D63R1ZH",PAN:"CTUGF1615D",contactname:"Woakes", clientname:'Ebay', clienttype:'Courier', email:'012amit@gmail.com', phone:'9882942885', address:'45/2/1c', city:'Hartana', postal:'215584', contact:'1', quotes:'1', projects:'3', created:'07-07-2020', status:'true', state:"Ottawa" , country:"Canada" , projectCount:"2"},
    {GST:"37AADCS0472N1Z1",PAN:"CQUGF13194",contactname:"Smith", clientname:'FedEx', clienttype:'Courier', email:'rajesh12@gmail.com', phone:'9888736885', address:'C-120', city:'Delhi', postal:'110051', contact:'5', quotes:'2', projects:'5', created:'07-07-2020', status:'false', state:"Alabama" , country:"Switzerland" , projectCount:"5"},
    {GST:"88AABCU9693R1ZH",PAN:"CCUGF1911R",contactname:"Jason", clientname:'Ocean 8', clienttype:'Hospitality', email:'sameer90@gmail.com', phone:'9235452885', address:'C-13/ B-block', city:'Delhi', postal:'110036', contact:'1', quotes:'2', projects:'0', created:'07-07-2020', status:'true', state:"Sydney" , country:"Australia" , projectCount:"3"},
    {GST:"98AABCU9693R1ZB",PAN:"CRUGF1415E",contactname:"Rashid", clientname:'RedBull', clienttype:'Hospitality', email:'abhi@gmail.com', phone:'9888459875', address:'D-46/2/1b', city:'Delhi', postal:'110056', contact:'2', quotes:'1', projects:'1', created:'07-07-2020', status:'true', state:"British Columbia" , country:"Canada" , projectCount:"6"},
    {GST:"37AADCS0472N1Z1",PAN:"CMUGE1616I",contactname:"Williamson", clientname:'Beacon', clienttype:'Mining', email:'012amit@gmail.com', phone:'9882942885', address:'45/2/1c', city:'Hartana', postal:'215584', contact:'1', quotes:'1', projects:'3', created:'07-07-2020', status:'true', state:"California" , country:"USA" , projectCount:"1"}
  ];
  
  constructor(public dialog: MatDialog,public appSettings:AppSettings) {
    const single = [
      {
        name: 'Telangana',
        value: 40
      },
      {
        name: 'Haryana',
        value: 49
      },
      {
        name: 'Gujarat',
        value: 36
      },
      {
        name: 'Delhi',
        value: 52
      },
      {
        name: 'Karnataka',
        value: 27
      },
      {
        name: 'Other',
        value: 10
      }
    ];
    const multi = [
      {
        name: 'Residential',
        value: 45
      },
      {
        name: 'Industrial',
        value: 70
      },
      {
        name: 'Commercial',
        value: 94
      },
      {
        name: 'Heavy Civil',
        value: 64
      },
    ];
    const triple = [
      {
        name: 'New',
        value: 147
      },
      {
        name: 'Repeat',
        value: 224
      },
    ];
    this.settings = this.appSettings.settings; 
    Object.assign(this, {single,multi,triple}); 
  }
  
  ngOnInit() {
    
  }
  
  public onSelect(event) {
    console.log(event);
  }
  
  // openProjectDialog(stat){
  //   let dialogRef = this.dialog.open(AddClientDialogComponent, {
  //     data: stat,
  //     height: 'auto',
  //     width: '750px',
  //     autoFocus: false,
  //   });
  
  //   dialogRef.afterClosed().subscribe(prospects => {
  //     if(prospects == 'save') {
  
  //     }
  //   });
  // }
  
  openDeleteDialog(assets) {
    let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      data: assets,
      height: 'auto',
      width: 'auto',
      autoFocus: false
    });
    
    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }
  openResetPassword(item){
    let dialogRef = this.dialog.open(ResetPasswordDialogComponent, {
      data: item,
      height:'auto',
      width:'500px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  
  openProjectsDilog(stat) {
    let dialogRef = this.dialog.open(ProjectsDialogComponent, {
      data: stat,
      height: 'auto',
      width: '900px',
      autoFocus: false
    });
    
    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }

  openContactsDilog(stat) {
    let dialogRef = this.dialog.open(ContactsPopupComponent, {
      data: stat,
      height: 'auto',
      width: '900px',
      autoFocus: false
    });
    
    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }
  
  openClientDialog(stat) {
    let dialogRef = this.dialog.open(AddClientDialogComponent, {
      data: stat,
      height: 'auto',
      width: '700px',
      autoFocus: false
    });
    
    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }

  openGridColumnsDialog(){
    this.dialog.open(GridViewClientsComponent,{
      width:"600px",
      height:"auto"
    })
  }
  
}
