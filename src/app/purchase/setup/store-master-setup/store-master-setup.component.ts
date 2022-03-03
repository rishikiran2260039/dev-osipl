import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddNewStoreSetupComponent } from './add-new-store-setup/add-new-store-setup.component';
import { EmailsSetupComponent } from './emails-setup/emails-setup.component';
import { SparesSetupComponent } from './spares-setup/spares-setup.component';
import { StoreInchargeSetupComponent } from './store-incharge-setup/store-incharge-setup.component';
import { TechnicalSetupComponent } from './technical-setup/technical-setup.component';
import { TypeSetupComponent } from './type-setup/type-setup.component';

@Component({
  selector: 'app-store-master-setup',
  templateUrl: './store-master-setup.component.html',
  styleUrls: ['./store-master-setup.component.scss']
})
export class StoreMasterSetupComponent implements OnInit {

  gridCmp: any;

  constructor(public dialog: MatDialog, private alertService: AlertService) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';

  ngOnInit() {
  }
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle:boolean = false;

 
           

  values = [
    {Storelocation:"Hyderabad",stores:"3",storename:'Backhoe Loader Store',project:'Legacy Project',storeincharge:'0',technical:'0',poemails:'0',spares:'3',type:'1',location:'Manage',status:true},
    {Storelocation:"Bangalore",stores:"5",storename:'Bulldozer',project:'Legacy Project',storeincharge:'0',technical:'0',poemails:'0',spares:'3',type:'1',location:'Manage',status:true},
    {Storelocation:"Mumbai",stores:"7",storename:'Crane',project:'Singrauli',storeincharge:'0',technical:'0',poemails:'1',spares:'3',type:'1',location:'Manage',status:false},
    {Storelocation:"Gurgaon",stores:"6",storename:'Dumper Store',project:'Lakhanpur OCP',storeincharge:'0',technical:'0',poemails:'0',spares:'3',type:'1',location:'Manage',status:true},
    {Storelocation:"Lucknow",stores:"8",storename:'Dumper Store - Mercedes Benz',project:'Option Matrix',storeincharge:'1',technical:'0',poemails:'0',spares:'3',type:'1',location:'Manage',status:false},
    {Storelocation:"Ahmedabad",stores:"5",storename:'Dumper Store - Scania Volvo',project:'Option Matrix',storeincharge:'1',technical:'0',poemails:'0',spares:'3',type:'1',location:'Manage',status:true},
    {Storelocation:"Chennai",stores:"3",storename:'Dumper Store - Volvo',project:'Option Matrix',storeincharge:'1',technical:'0',poemails:'1',spares:'3',type:'1',location:'Manage',status:true},
  ]
  statusOptions = [
    {value:1, name: 'Prepared Quote', colorCode: '#00ff0040'},
    {value:2, name: 'PM Quote Review', colorCode: '#C0C0C0'},
    {value:3, name: 'Quote Send', colorCode: '#87CEFA'},
    {value:4, name: 'Awarded', colorCode: '#FFA50069'},
    {value:5, name: 'Rejected', colorCode: '#FFFF00'},
    {value:6, name: 'Document Taker Only', colorCode: '#FF00FF'},
  ]
  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}

  // public openGridColumnsDialog(){
  //   this.dialog.open(QuotesGridColDialogComponent,{
  //     width:"600px",
  //     height:"auto"
  //   })
  // }
  public openleadDialog(id) {
    let dialogRef = this.dialog.open(AddNewStoreSetupComponent, {
        data: id,
        height: 'auto',
        width: '600px',
        disableClose: true
    });

    dialogRef.afterClosed().subscribe(lead => {
      
        if (lead=='yes') {
          this.gridCmp.getQuotes();
        }
    });
}
// public openQuotes(stat) {
//   let dialogRef = this.dialog.open(UpdateQuoteComponent, {
//     data: stat,
//     height: 'auto',
//     width: '750px',
//     autoFocus: false,
//   });
// }

scrollGrid(side) {
  var ele = document.getElementById('grid-table-container');
  if (side == 'right')
      ele.scrollLeft += 210;
  else
      ele.scrollLeft -= 210;
}

public openstoreIncharge(id) {
  let dialogRef = this.dialog.open(StoreInchargeSetupComponent, {
      data: id,
      height: 'auto',
      width: '800px',
      disableClose: true
  });

  dialogRef.afterClosed().subscribe(lead => {
    
      if (lead=='yes') {
        this.gridCmp.getQuotes();
      }
  });
}

public openTechnical(id) {
  let dialogRef = this.dialog.open(TechnicalSetupComponent, {
      data: id,
      height: 'auto',
      width: '800px',
      disableClose: true
  });

  dialogRef.afterClosed().subscribe(lead => {
    
      if (lead=='yes') {
        this.gridCmp.getQuotes();
      }
  });
}

public openPoemails(id) {
  let dialogRef = this.dialog.open(EmailsSetupComponent, {
      data: id,
      height: 'auto',
      width: '800px',
      disableClose: true
  });

  dialogRef.afterClosed().subscribe(lead => {
    
      if (lead=='yes') {
        this.gridCmp.getQuotes();
      }
  });
}

public openSpares(id) {
  let dialogRef = this.dialog.open(SparesSetupComponent, {
      data: id,
      height: 'auto',
      width: '800px',
      disableClose: true
  });

  dialogRef.afterClosed().subscribe(lead => {
    
      if (lead=='yes') {
        this.gridCmp.getQuotes();
      }
  });
}
  
public openType(id) {
  let dialogRef = this.dialog.open(TypeSetupComponent, {
      data: id,
      height: 'auto',
      width: '800px',
      disableClose: true
  });

  dialogRef.afterClosed().subscribe(lead => {
    
      if (lead=='yes') {
        this.gridCmp.getQuotes();
      }
  });
}
}