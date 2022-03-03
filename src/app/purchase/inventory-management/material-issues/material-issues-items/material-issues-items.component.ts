import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-material-issues-items',
  templateUrl: './material-issues-items.component.html',
  styleUrls: ['./material-issues-items.component.scss']
})
export class MaterialIssuesItemsComponent implements OnInit {

  constructor(public dialog:MatDialogRef<MaterialIssuesItemsComponent>) { }

  ngOnInit() {
  }
  
  items = [
    {item_code:"FMX480",item_name: "Volvo",item_category: "Dump Truck",Qty:10, },
    {item_code:"D85WSS17",item_name: "Caterpillar",item_category: "Backhoe Loader",Qty:10, },
    {item_code:"ACTROSS 4841K",item_name: "Mercedes",item_category: "Backhoe Loader",Qty:10, },
    {item_code:"D85ESS 86",item_name: "Tata",item_category: "Dump Truck",Qty:10, },
    {item_code:"All Models",item_name: "Volvo",item_category: "Backhoe Loader",Qty:10, },
   
     ]

  close(){
    this.dialog.close();
  }

}
