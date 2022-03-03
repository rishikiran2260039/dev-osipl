import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ForeclosePopupComponent } from 'src/app/purchase/material-management/purchase-orders/published-po/foreclose-popup/foreclose-popup.component';
import { PublishedForeClosePopUpComponent } from './published-fore-close-pop-up/published-fore-close-pop-up.component';
import { PublishedRequistionPopUpComponent } from './published-requistion-pop-up/published-requistion-pop-up.component';

@Component({
  selector: 'app-published',
  templateUrl: './published.component.html',
  styleUrls: ['./published.component.scss']
})
export class PublishedComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  filterToggle=false;

  items = [
    {pcode:"E005KA10012",wotype:"MEP",balance:"90000",Paid:"80000",Billed:"98000",InVoice:"#435164034012",Amount:"95000", poref: "OM/BHL/OCT/19-20/1077", Name:"GV Contractor" , podate: "07-Oct-2020", deliverydate: "19-Nov-2021", requisition: "5", items: "7",update:"Update"},
    {pcode:"E005KA10013",wotype:"Sub Contract",balance:"10000",Paid:"74000",Billed:"199000",InVoice:"#435164089121",Amount:"189000", poref: "OM/BHL/OCT/19-20/1078", Name:"ABS Contractor" , podate: "09-Oct-2021", deliverydate: "15-Dec-2021", requisition: "4", items: "8",update:"Update"},
    {pcode:"E005KA10014",wotype:"MEP",balance:"7000",Paid:"23000",Billed:"97000",InVoice:"#435164090345",Amount:"84000", poref: "OM/BHL/OCT/19-20/1079", Name:"DLGV Contractor" , podate: "10-July-2021", deliverydate: "07-Aug-2021", requisition: "5", items: "9",update:"Update"},
    {pcode:"E005KA10015",wotype:"Sub Contract",balance:"4000",Paid:"11000",Billed:"69000",InVoice:"#435164077454",Amount:"65000", poref: "OM/BHL/OCT/19-20/1080", Name:"HEMAN Contractor" , podate: "12-Oct-2021", deliverydate: "19-Nov-2021", requisition: "5", items: "7",update:"Update"},
    {pcode:"E005KA10016",wotype:"MEP",balance:"24000",Paid:"19823",Billed:"120000",InVoice:"#435164081238",Amount:"98000", poref: "OM/BHL/OCT/19-20/1081", Name:"APT Contractor" , podate: "14-Nov-2021", deliverydate: "15-Dec-2021", requisition: "3", items: "9",update:"Update"},
    
  ];

  PublishedRequistionPopUp(){
    this.dialog.open(PublishedRequistionPopUpComponent, {
      height: 'auto',
      width:'700px'
    })
  
  }    
  // PublishedItemPopUp(){
  //   this.dialog.open(PublishedItemPopUpComponent, {
  //     height:'auto',
  //     width: '700px'
  //   })
    
  // }    

  foreclose(){
    this.dialog.open(PublishedForeClosePopUpComponent,{
      height:'auto',
      width:'700px'
  })
    ;}

  //  foreclose(){
  //     this.dialog.open({
  //       height:'auto',
  //       width:'700px'
  //     });
  //   }
    reviseresend(){

    }










}
