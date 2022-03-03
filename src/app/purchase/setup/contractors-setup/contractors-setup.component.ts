import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { AddContractorDialogSetupComponent } from './add-contractor-dialog-setup/add-contractor-dialog-setup.component';
import { ContractsDialogSetupComponent } from './contracts-dialog-setup/contracts-dialog-setup.component';

@Component({
  selector: 'app-contractors-setup',
  templateUrl: './contractors-setup.component.html',
  styleUrls: ['./contractors-setup.component.scss']
})
export class ContractorsSetupComponent implements OnInit {

  constructor(public dialog: MatDialog,private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.setTitle("Om Sai Intex | Admin | Contractors");

  }

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle:boolean = false;

  values = [
    {contractor:"GV Contractors",contact:"Ritesh",email:"ritesh@gvc.com",phone:"9978515470",address:"Sector 42",city:"Gurgram",state:"Haryana",country:"India",postalcode:"507032",contratcs:"8",date:"15-12-2019",status:"Active"},
    {contractor:"HBVC Systems",contact:"Arpit",email:"arpit@hbvc.com",phone:"9976829180",address:"Vijay Nagar",city:"Bangalore",state:"Karnataka",country:"India",postalcode:"507032",contratcs:"15",date:"19-11-2019",status:"Inactive"},
    {contractor:"ABC Contractors",contact:"Kabeer",email:"kabeer@abc.com",phone:"7760002206",address:"Bandra",city:"Mumbai",state:"Maharastra",country:"India",postalcode:"507032",contratcs:"12",date:"04-11-2019",status:"Active"},
    {contractor:"HBVC Systems",contact:"Arpit",email:"arpit@hbvc.com",phone:"9976829180",address:"Vijay Nagar",city:"Bangalore",state:"Karnataka",country:"India",postalcode:"507032",contratcs:"15",date:"19-11-2019",status:"Inactive"},
    {contractor:"ABC Contractors",contact:"Kabeer",email:"kabeer@abc.com",phone:"7760002206",address:"Bandra",city:"Mumbai",state:"Maharastra",country:"India",postalcode:"507032",contratcs:"12",date:"04-11-2019",status:"Active"}
  ]

  // openGridColumnsDialog(){
  //   this.dialog.open(GridColumnsContractorsDialogueComponent,{
  //     width:"600px",
  //     height:"auto"
  //   })
  // }

  openAddContractorDialog(){
    this.dialog.open(AddContractorDialogSetupComponent,{
      width:"600px",
      height:"auto"
    })
  }

  openContractsDialog(){
    this.dialog.open(ContractsDialogSetupComponent,{
      width:"600px",
      height:"auto"
    })
  }

  public openAddCategory2(items){
    let dialogRef = this.dialog.open(AddContractorDialogSetupComponent, {
      data:items,
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
  }

}
