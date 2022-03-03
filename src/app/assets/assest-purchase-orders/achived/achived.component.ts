import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IndentArchivedComponent } from './indent-archived/indent-archived.component';
import { InvoiceArchivedComponent } from './invoice-archived/invoice-archived.component';
import { ItemsArchivedComponent } from './items-archived/items-archived.component';

@Component({
  selector: 'app-achived',
  templateUrl: './achived.component.html',
  styleUrls: ['./achived.component.scss']
})
export class AchivedComponent implements OnInit {
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  filterToggle=false;

  items = [
    {projectcode:"G505KA40012",ref:"GRN/BHL/OCT/19-20/2077",balance:"90000",Paid:"80000",Billed:"98000",InVoice:"2",Amount:"95000", poref: "OM/BHL/OCT/19-20/1077", Name:"GV Contractor" , podate: "07-Oct-2020", deliverydate: "19-Nov-2021", requisition: "5", items: "12",update:"Update"},
    {projectcode:"A505KA10012",ref:"GRN/BHL/OCT/19-20/2078",balance:"10000",Paid:"74000",Billed:"199000",InVoice:"3",Amount:"189000", poref: "OM/BHL/OCT/19-20/1078", Name:"ABS Contractor" , podate: "09-Oct-2021", deliverydate: "15-Dec-2021", requisition: "4", items: "13",update:"Update"},
    {projectcode:"G505KA10013",ref:"GRN/BHL/OCT/19-20/2079",balance:"7000",Paid:"23000",Billed:"97000",InVoice:"1",Amount:"84000", poref: "OM/BHL/OCT/19-20/1079", Name:"DLGV Contractor" , podate: "10-July-2021", deliverydate: "07-Aug-2021", requisition: "5", items: "9",update:"Update"},
    {projectcode:"6505KA10012",ref:"GRN/BHL/OCT/19-20/2080",balance:"4000",Paid:"11000",Billed:"69000",InVoice:"2",Amount:"65000", poref: "OM/BHL/OCT/19-20/1080", Name:"HEMAN Contractor" , podate: "12-Oct-2021", deliverydate: "19-Nov-2021", requisition: "5", items: "9",update:"Update"},
    {projectcode:"F505KA10012",ref:"GRN/BHL/OCT/19-20/2081",balance:"24000",Paid:"19823",Billed:"120000",InVoice:"3",Amount:"98000", poref: "OM/BHL/OCT/19-20/1081", Name:"APT Contractor" , podate: "14-Nov-2021", deliverydate: "15-Dec-2021", requisition: "3", items: "9",update:"Update"},
    
  ];
  invoicepop(){
    this.dialog.open(InvoiceArchivedComponent ,{
      height:'auto',
      width:'60%'
    });
  }    
  requsitionpop(){
    this.dialog.open(IndentArchivedComponent ,{
      height:'auto',
      width:'60%'
    });
  }    
  itemspop(){
    this.dialog.open(ItemsArchivedComponent,{
      height:'auto',
      width:'65%'
    });
  }    

}
