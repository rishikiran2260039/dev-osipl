import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MaterialIssuesItemsComponent } from 'src/app/purchase/inventory-management/material-issues/material-issues-items/material-issues-items.component';
import { AddItempopupComponent } from '../add-itempopup/add-itempopup.component';

@Component({
  selector: 'app-material-items',
  templateUrl: './material-items.component.html',
  styleUrls: ['./material-items.component.scss']
})
export class MaterialItemsComponent implements OnInit {
  constructor(public dialog : MatDialog) { }
  ngOnInit() {
  }
  
  items = [
    {item_code:"FMX480",item_name: "Volvo",item_category: "Dump Truck",Qty:10, },
    {item_code:"D85WSS17",item_name: "Caterpillar",item_category: "Backhoe Loader",Qty:10, },
    {item_code:"ACTROSS 4841K",item_name: "Mercedes",item_category: "Backhoe Loader",Qty:10, },
    {item_code:"D85ESS 86",item_name: "Tata",item_category: "Dump Truck",Qty:10, },
    {item_code:"All Models",item_name: "Volvo",item_category: "Backhoe Loader",Qty:10, },
   
     ]

     additem() {
        this.dialog.open(AddItempopupComponent,{
       height:'auto',
       width:'800px'
    
        })
      }

}
