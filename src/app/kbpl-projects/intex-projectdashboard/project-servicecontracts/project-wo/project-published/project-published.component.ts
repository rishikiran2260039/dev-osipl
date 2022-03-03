import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ForeclosurePopupComponent } from 'src/app/kbpl-projects/foreclosure-popup/foreclosure-popup.component';
import { RequisitionUnpublishPopupComponent } from 'src/app/purchase/material-management/purchase-orders/unpublished-po/requisition-unpublish-popup/requisition-unpublish-popup.component';
import { ItemsComponent } from '../project-pending/items/items.component';
import { PendingReqComponent } from '../project-pending/pending-req/pending-req.component';

@Component({
  selector: 'app-project-published',
  templateUrl: './project-published.component.html',
  styleUrls: ['./project-published.component.scss']
})
export class ProjectPublishedComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  filterToggle=false;

  items = [
    {balance:"90000",Paid:"80000",Billed:"98000",InVoice:"#435164034012",Amount:"95000", poref: "OM/BHL/OCT/19-20/1077", Name:"GV Contractor" , podate: "07-Oct-2020", deliverydate: "19-Nov-2021", requisition: "5", items: "7",update:"Update"},
    {balance:"10000",Paid:"74000",Billed:"199000",InVoice:"#435164089121",Amount:"189000", poref: "OM/BHL/OCT/19-20/1078", Name:"ABS Contractor" , podate: "09-Oct-2021", deliverydate: "15-Dec-2021", requisition: "4", items: "8",update:"Update"},
    {balance:"7000",Paid:"23000",Billed:"97000",InVoice:"#435164090345",Amount:"84000", poref: "OM/BHL/OCT/19-20/1079", Name:"DLGV Contractor" , podate: "10-July-2021", deliverydate: "07-Aug-2021", requisition: "5", items: "9",update:"Update"},
    {balance:"4000",Paid:"11000",Billed:"69000",InVoice:"#435164077454",Amount:"65000", poref: "OM/BHL/OCT/19-20/1080", Name:"HEMAN Contractor" , podate: "12-Oct-2021", deliverydate: "19-Nov-2021", requisition: "5", items: "7",update:"Update"},
    {balance:"24000",Paid:"19823",Billed:"120000",InVoice:"#435164081238",Amount:"98000", poref: "OM/BHL/OCT/19-20/1081", Name:"APT Contractor" , podate: "14-Nov-2021", deliverydate: "15-Dec-2021", requisition: "3", items: "9",update:"Update"},
    
  ];

  // PublishedRequistionPopUp(){
  //   this.dialog.open(PublishedRequistionPopUpComponent, {
  //     height: 'auto',
  //     width:'700px'
  //   })
  
  // }    
  // PublishedItemPopUp(){
  //   this.dialog.open(PublishedItemPopUpComponent, {
  //     height:'auto',
  //     width: '700px'
  //   })
    
  // }    

  // foreclose(){
  //   this.dialog.open(PublishedForeClosePopUpComponent,{
  //     height:'auto',
  //     width:'700px'
  // })
  //   ;}

  //  foreclose(){
  //     this.dialog.open({
  //       height:'auto',
  //       width:'700px'
  //     });
  //   }
    reviseresend(){

    }
 

    PublishedRequistionPopUp(){
      this.dialog.open(PendingReqComponent ,{
        height:'auto',
        width:'1000px'
      });
    }    
    PublishedItemPopUp(){
      this.dialog.open(ItemsComponent,{
        height:'auto',
        width:'1000px'
      });  
    }
    foreclose(){
      this.dialog.open(ForeclosurePopupComponent,{ 
        height:'auto',
        width:'700px'
      });
    }
}
