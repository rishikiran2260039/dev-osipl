import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditQalogComponent } from './edit-qalog/edit-qalog.component';

@Component({
  selector: 'app-qalog-arn',
  templateUrl: './qalog-arn.component.html',
  styleUrls: ['./qalog-arn.component.scss']
})
export class QalogArnComponent implements OnInit {

  constructor(public dialog:MatDialog) { }
 

  ngOnInit() {
  }

  
  items = [
    {itemname:"Volvo",itemcode:"	FMX480",category:"Dump Truck",subcategory:"Breakdown Repairs",orderqty:"25",previousreceipt:"27-01-2020",currentreceipt:"12-06-2021",qtyrecived:"25",qtyaccepted:"24",qtydeclined:"1",remarks:"Immidiate Despatch of goods required"},
    {itemname:"Caterpillar",itemcode:"	D85ESS 17",category:"Backhoe Loader",subcategory:"Running Maintenance",orderqty:"30",previousreceipt:"1-02-2020",currentreceipt:"15-06-2021",qtyrecived:"30",qtyaccepted:"28",qtydeclined:"2",remarks:"Validate the Receipt of ordered products"},
    {itemname:"Mercedes",itemcode:"All Models",category:"	Backhoe Loader	",subcategory:"Accident Repairs",orderqty:"30",previousreceipt:"2-02-2020",currentreceipt:"21-03-2021",qtyrecived:"30",qtyaccepted:"29",qtydeclined:"1",remarks:"Internal proof of Goods received to process is required"},
    {itemname:"Tata",itemcode:"	ACTROS 4841K",category:"	Dump Truck",subcategory:"Breakdown Repairs",orderqty:"16",previousreceipt:"13-03-2020",currentreceipt:"18-04-2021",qtyrecived:"16",qtyaccepted:"14",qtydeclined:"2",remarks:"Immidiate Despatch of goods required"},
    {itemname:"Volvo",itemcode:"D85ESS 86",category:"	Dump Truck",subcategory:"	Running Maintenance",orderqty:"20",previousreceipt:"26-04-2020",currentreceipt:"23-05-2021",qtyrecived:"20",qtyaccepted:"19",qtydeclined:"1",remarks:"Validate the Receipt of ordered products"},
  ]


  // AvailbalePopup(){
  //   this.dialog.open(AvailabilityDetailsPopupComponent ,{
  //     height:'auto',
  //     width:'1100px'
  //   });
  // }  

  // public addnewitem(item) {
  //   let dialogRef = this.dialog.open(AddNewItemDialogComponent, {
  //     data:item,
  //     height: 'auto',
  //     width: '700px'
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }

  // public openGridColumnsDialog() {
  //   let dialogRef = this.dialog.open(GridcolPopupComponent, {
     
  //     height: 'auto',
  //     width: '700px'
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }
  
  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
  }
  addqalogedit(){
    this.dialog.open(EditQalogComponent,{
      height:'auto',
      width:'865px'
    })

  }


}
