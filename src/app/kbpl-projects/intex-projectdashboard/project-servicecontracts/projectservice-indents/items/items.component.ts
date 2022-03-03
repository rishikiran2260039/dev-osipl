import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GriddialogComponent } from '../griddialog/griddialog.component';
import { ItemdialogComponent } from '../itemdialog/itemdialog.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(public dialog:MatDialog) { }
 

  ngOnInit() {
  }

  
  items = [
    {AdjustmentDate:"12-Oct-2019",Doneby:"Abhishek",Part:"B229900003680",PartName:"Komatsu",PartMake:"volvo",PartModel:"P-679/23",EqptCode:"DX-245", EqptName:"Bull Dozer",EqptMake:"Volvo",EqptModel:"Volvo",PhysicalStock:"205",PreviousStock:"200",AdjustmentQty:"5",RevisedBookStock:"205",Category: "Dump Truck", SubCategory: "Breakdown Repairs", ItemName : "Volvo", ItemCode: "FMX480", QuantityRequired: "50",uom:"No.",avilablestock:"25" },
    {AdjustmentDate:"16-Oct-2019",Doneby:"Hari",Part:"421-60-35170",PartName:"volvo",PartMake:"Caterpillar",PartModel:"EC210",EqptCode:"CAT356-DX", EqptName:"Cranes-Eicher",EqptMake:"Caterpillar",EqptModel:"CAT-DX",PhysicalStock:"120",PreviousStock:"100",AdjustmentQty:"20",RevisedBookStock:"120",Category: "Backhoe Loader", SubCategory: "Running Maintenance", ItemName : "Caterpillar", ItemCode: " D85ESS 17", QuantityRequired: "80",uom:"No." ,avilablestock:"40" },
    {AdjustmentDate:"13-Oct-2019",Doneby:"Raghava",Part:"B229900003680",PartName:"Caterpillar",PartMake:"Kirloskar",PartModel:"EC240",EqptCode:"T-456H", EqptName:"Excavator",EqptMake:"Tata Hitachi",EqptModel:"T-4H",PhysicalStock:"320",PreviousStock:"310",AdjustmentQty:"10",RevisedBookStock:"320",Category: "Backhoe Loader ", SubCategory: "Breakdown Repairs", ItemName : "Mercedes", ItemCode: "All Models", QuantityRequired: "20",uom:"No.",avilablestock:"5"  },
    {AdjustmentDate:"19-Oct-2019",Doneby:"Saiprakash",Part:"421-60-35170",PartName:"Kirloskar",PartMake:"Ashok Leyland",PartModel:"EC290",EqptCode:"LA-543", EqptName:"Motor Grade",EqptMake:"Ashok Leyland",EqptModel:"LA-D",PhysicalStock:"180",PreviousStock:"160",AdjustmentQty:"20",RevisedBookStock:"180",Category: "Dump Truck", SubCategory: "Accident Repairs", ItemName : "Tata ", ItemCode: "ACTROS 4841K", QuantityRequired: "30",uom:"No." ,avilablestock:"25" },
    {AdjustmentDate:"14-Oct-2019",Doneby:"vamshi",Part:"521-60-34512",PartName:"Ashok Leyland",PartMake:"Tata",PartModel:"EC360",EqptCode:"ED-234F", EqptName:"Dump Truck",EqptMake:"Caterpillar",EqptModel:"ED-F",PhysicalStock:"280",PreviousStock:"275",AdjustmentQty:"5",RevisedBookStock:"280",Category: "Backhoe Loader", SubCategory: "Accident Repairs", ItemName : "Volvo", ItemCode: "D85ESS 86", QuantityRequired: "50",uom:"No." ,avilablestock:"40" },
  ]


 

  public addnewitem(item) {
    let dialogRef = this.dialog.open(ItemdialogComponent, {
      data:item,
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public openGridColumnsDialog() {
    let dialogRef = this.dialog.open(GriddialogComponent, {
     
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  
  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
  }
 

}
