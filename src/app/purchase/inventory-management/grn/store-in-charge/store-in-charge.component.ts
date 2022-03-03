 import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ChangesdialougeComponent } from './changesdialouge/changesdialouge.component';
import { TaxInvoicePopGrnComponent } from './tax-invoice-pop-grn/tax-invoice-pop-grn.component';

@Component({
  selector: 'app-store-in-charge',
  templateUrl: './store-in-charge.component.html',
  styleUrls: ['./store-in-charge.component.scss']
})
export class StoreInChargeComponent implements OnInit {

  tableNumber: number = 0;
  filterToggle=false;
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  constructor(public dialog: MatDialog) { }


  ngOnInit() {
  }
  

//   approvaldialog(){
//     this.dialog.open(ApprovalPopComponent,{
//       height:'auto',
//       width:'1100px'
//     })
//   }


  
  
//   // popup(){
//   //   this.dialog.open(ApprovalPopComponent,{
//   //     height:'auto',
//   //     width:'1100px'
//   //   })
  
//   // }

// Itempop(){
//   this.dialog.open(ItemsPopupActiveComponent,{
//     height:'auto',
//     width:'1100px'
//   })

// }
// invoicepopup(){
//   this.dialog.open(InvoicepopupComponent,{
//     height:'auto',
//     width:'700px'
//   })

// }
  
//   Purchasepop(){
//     this.dialog.open(PurchaseOrderPopupComponent,{
//       height:'auto',
//       width:'1100px'
//     })
  
//   }

  // onDelOpen(e) {
  //   this.taskData[e.index]['selecteddel'] = true;
  // }
  // onDelClose(e) {
  //   this.taskData[e.index]['selecteddel'] = false;
  // }

  // del(){
  //   this.dialog.open(ApprovalPopComponent,{
  //     height:'auto',
  //     width:'1100px'
  //   })
  
  // }

  
  openTable(value: number) {
    this.tableNumber = value;
  }
 
  // grnpopup($event) {
  //   if ($event.target.checked === true) {
  //     this.dialog.open(GrnpopupComponent,{
  //       width:'1100px',
  //       height:'200px',
  //     })
  //     }
  //     else{
  //      return false;
  //     }
    
  // }
  Editquotationspopup()
  {
    
  }
  items = [
    {projectcode:"E005KA10012", gref:"GRN/BHL/OCT/19-20/2077",consignment_reference: "DEL1037272/768", Date_Shipped: "16-07-2021", con_Items: "5",Status: 1,stageColour: '#00ff0040',Purchase_Orders:"3",Delivery_Date:"09-08-2021",Invoice:"1",Con_Details:"view"},
    {projectcode:"A0058KI0013", gref:"GRN/BHL/OCT/19-20/2078",consignment_reference: "DEL1037272/786", Date_Shipped: "26-07-2021", con_Items: "2",Status: 2,stageColour: '#C0C0C0',Purchase_Orders:"9",Delivery_Date:"04-08-2021",Invoice:"4",Con_Details:"view"},
    {projectcode:"S002KA10032", gref:"GRN/BHL/OCT/19-20/2079",consignment_reference: "DEL1037272/732", Date_Shipped: "24-07-2021", con_Items: "6",Status: 3,stageColour: '#87CEFA',Purchase_Orders:"7",Delivery_Date:"01-08-2021",Invoice:"3",Con_Details:"view"},
    {projectcode:"E005KA10052", gref:"GRN/BHL/OCT/19-20/2080",consignment_reference: "DEL1037272/616", Date_Shipped: "09-07-2021", con_Items: "8",Status: 4,stageColour: '#FFA50069',Purchase_Orders:"3",Delivery_Date:"02-08-2021",Invoice:"8",Con_Details:"view"},
    {projectcode:"EZ00KA10012", gref:"GRN/BHL/OCT/19-20/2081",consignment_reference: "DEL1037272/321", Date_Shipped: "10-07-2021", con_Items: "9",Status: 5,stageColour: '#ee420dfb',Purchase_Orders:"2",Delivery_Date:"03-08-2021",Invoice:"4",Con_Details:"view"},
    
    
  ];
  statusOptions = [
    {value:1, name: 'In Transit', colorCode: '#00ff0040'},
    {value:2, name: 'At Destination', colorCode: '#C0C0C0'},
    {value:3, name: 'Out of Deleivery', colorCode: '#87CEFA'},
    {value:4, name: 'Delivered', colorCode: '#FFA50069'},
    {value:5, name: 'Returned', colorCode: '#ee420dfb'},
  ]
}

