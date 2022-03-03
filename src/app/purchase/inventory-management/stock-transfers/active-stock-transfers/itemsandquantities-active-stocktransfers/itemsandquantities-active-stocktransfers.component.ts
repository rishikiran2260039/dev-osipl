import { NotesActiveStockComponent } from './../../notes-active-stock/notes-active-stock.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NotesActiveStocktransfersComponent } from '../notes-active-stocktransfers/notes-active-stocktransfers.component';

@Component({
  selector: 'app-itemsandquantities-active-stocktransfers',
  templateUrl: './itemsandquantities-active-stocktransfers.component.html',
  styleUrls: ['./itemsandquantities-active-stocktransfers.component.scss']
})
export class ItemsandquantitiesActiveStocktransfersComponent implements OnInit {
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
 
  constructor(public dialog:MatDialog) { }
 

  ngOnInit() {
  }

  
  items = [
    {length:"200 CM",width:"57 CM",height:"113 MM",dimen:"200 x 130 x 70 MM",thick:"65 MM",Make:"IGL",AdjustmentDate:"12-Oct-2019",Doneby:"Abhishek",Part:"B229900003680",PartName:"Komatsu",PartMake:"volvo",PartModel:"P-679/23",EqptCode:"DX-245", EqptName:"Bull Dozer",EqptMake:"Volvo",EqptModel:"Volvo",PhysicalStock:"205",PreviousStock:"200",AdjustmentQty:"5",RevisedBookStock:"205",Category: "Plaster & Boards", SubCategory: "Commercial", ItemName : "Volvo", ItemCode: "FMX480", QuantityRequired: "50",uom:"SMX480",avilablestock:"25" },
    {length:"100 CM",width:"47 CM",height:"63 MM", dimen:"550 x 230 x 30 MM",thick:"25 MM",Make:"GYPROC",AdjustmentDate:"16-Oct-2019",Doneby:"Hari",Part:"421-60-35170",PartName:"volvo",PartMake:"Caterpillar",PartModel:"EC210",EqptCode:"CAT356-DX", EqptName:"Cranes-Eicher",EqptMake:"Caterpillar",EqptModel:"CAT-DX",PhysicalStock:"120",PreviousStock:"100",AdjustmentQty:"20",RevisedBookStock:"120",Category: "Ply/Boards", SubCategory: "FLEXIPLY", ItemName : "Caterpillar", ItemCode: " D85ESS 17", QuantityRequired: "80",uom:"GMX480" ,avilablestock:"40" },
    {length:"120 CM",width:"44 CM",height:"99 MM", dimen:"550 x 230 x 30 MM",thick:"25 MM",Make:"VANGYP",AdjustmentDate:"13-Oct-2019",Doneby:"Raghava",Part:"B229900003680",PartName:"Caterpillar",PartMake:"Kirloskar",PartModel:"EC240",EqptCode:"T-456H", EqptName:"Excavator",EqptMake:"Tata Hitachi",EqptModel:"T-4H",PhysicalStock:"320",PreviousStock:"310",AdjustmentQty:"10",RevisedBookStock:"320",Category: "Steel ", SubCategory: "Commercial", ItemName : "Mercedes", ItemCode: "All Models", QuantityRequired: "20",uom:"FMX480",avilablestock:"5"  },
    {length:"120 CM",width:"44 CM",height:"99 MM", dimen:"540 x 200 x 30 MM",thick:"15 MM",Make:"GYPROC",AdjustmentDate:"19-Oct-2019",Doneby:"Saiprakash",Part:"421-60-35170",PartName:"Kirloskar",PartMake:"Ashok Leyland",PartModel:"EC290",EqptCode:"LA-543", EqptName:"Motor Grade",EqptMake:"Ashok Leyland",EqptModel:"LA-D",PhysicalStock:"180",PreviousStock:"160",AdjustmentQty:"20",RevisedBookStock:"180",Category: "Plaster & Boards", SubCategory: "FLEXIPLY", ItemName : "Tata ", ItemCode: "ACTROS 4841K", QuantityRequired: "30",uom:"FKE480" ,avilablestock:"25" },
    {length:"220 CM",width:"54 CM",height:"193 MM",dimen:"540 x 100 x 70 MM",thick:"15 MM",Make:"IGL",AdjustmentDate:"14-Oct-2019",Doneby:"vamshi",Part:"521-60-34512",PartName:"Ashok Leyland",PartMake:"Tata",PartModel:"EC360",EqptCode:"ED-234F", EqptName:"Dump Truck",EqptMake:"Caterpillar",EqptModel:"ED-F",PhysicalStock:"280",PreviousStock:"275",AdjustmentQty:"5",RevisedBookStock:"280",Category: "Ply/Boards", SubCategory: "BWP", ItemName : "Volvo", ItemCode: "D85ESS 86", QuantityRequired: "50",uom:"KIX480" ,avilablestock:"40" },
  ];

  // AvailbalePopup(){
  //   this.dialog.open(AvailabilityDetailsPopupComponent ,{
  //     height:'auto',
  //     width:'1100px'
  //   });
  // }  

  public addnewitem(item) {
    let dialogRef = this.dialog.open(NotesActiveStocktransfersComponent, {
      data:item,
      height: 'auto',
      width: 'auto'
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
