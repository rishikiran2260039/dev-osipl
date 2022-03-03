import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DownloadExcelService } from 'src/app/download-excel.service';
import { AutoComponent } from '../../inventory-management/gate-passes/auto/auto.component';
import { AddAdjustmentsDialogComponent } from './add-adjustments-dialog/add-adjustments-dialog.component';

@Component({
  selector: 'app-stock-adjustments',
  templateUrl: './stock-adjustments.component.html',
  styleUrls: ['./stock-adjustments.component.scss']
})
export class StockAdjustmentsComponent implements OnInit {
  public filterToggle : boolean = false;
  constructor(public dialog:MatDialog, ) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  innerscreenname: string = "Overview"
  excelData = [];

  ngOnInit() {
  }


  items = [
    {length:"200 CM",width:"57 CM",height:"113 MM",brand:"Volvo",dimensions:"22*25*13",thickness:"30mm",icategory:"Wood",isubcategory:"Plywood",icode:"PLY23001",iname:"Plywood Sheet",adjqty:"1",AdjustmentDate:"12-Oct-2019",Doneby:"Abhishek",Part:"B229900003680",PartName:"Komatsu",PartMake:"volvo",PartModel:"P-679/23",EqptCode:"DX-245", EqptName:"Bull Dozer",EqptMake:"Volvo",EqptModel:"Volvo",PhysicalStock:"205",PreviousStock:"200",AdjustmentQty:"5",RevisedBookStock:"205"},
    {length:"100 CM",width:"47 CM",height:"63 MM", brand:"Caterpiller",dimensions:"24*25*15",thickness:"20mm",icategory:"Pipes",isubcategory:"Plastic Pipes",icode:"PLU26803",iname:"Plumbing Pipes",adjqty:"1",AdjustmentDate:"16-Oct-2019",Doneby:"Hari",Part:"421-60-35170",PartName:"volvo",PartMake:"Caterpillar",PartModel:"EC210",EqptCode:"CAT356-DX", EqptName:"Cranes-Eicher",EqptMake:"Caterpillar",EqptModel:"CAT-DX",PhysicalStock:"120",PreviousStock:"100",AdjustmentQty:"20",RevisedBookStock:"120"},
    {length:"120 CM",width:"44 CM",height:"99 MM", brand:"Kirlosker",dimensions:"23*25*12",thickness:"30mm",icategory:"Wood",isubcategory:"Plywood",icode:"PLY23001",iname:"Plywood Sheet",adjqty:"1",AdjustmentDate:"13-Oct-2019",Doneby:"Raghava",Part:"B229900003680",PartName:"Caterpillar",PartMake:"Kirloskar",PartModel:"EC240",EqptCode:"T-456H", EqptName:"Excavator",EqptMake:"Tata Hitachi",EqptModel:"T-4H",PhysicalStock:"320",PreviousStock:"310",AdjustmentQty:"10",RevisedBookStock:"320"},
    {length:"120 CM",width:"44 CM",height:"99 MM", brand:"Ashok Layland",dimensions:"21*25*15",thickness:"40mm",icategory:"Pipes",isubcategory:"Plastic Pipes",icode:"PLU26803",iname:"Plumbing Pipes",adjqty:"1",AdjustmentDate:"19-Oct-2019",Doneby:"Saiprakash",Part:"421-60-35170",PartName:"Kirloskar",PartMake:"Ashok Leyland",PartModel:"EC290",EqptCode:"LA-543", EqptName:"Motor Grade",EqptMake:"Ashok Leyland",EqptModel:"LA-D",PhysicalStock:"180",PreviousStock:"160",AdjustmentQty:"20",RevisedBookStock:"180"},
    {length:"220 CM",width:"54 CM",height:"193 MM",brand:"Caterpiller",dimensions:"23*25*14",thickness:"30mm",icategory:"Wood",isubcategory:"Plywood",icode:"PLY23001",iname:"Plywood Sheet",adjqty:"1",AdjustmentDate:"14-Oct-2019",Doneby:"vamshi",Part:"521-60-34512",PartName:"Ashok Leyland",PartMake:"Tata",PartModel:"EC360",EqptCode:"ED-234F", EqptName:"Dump Truck",EqptMake:"Caterpillar",EqptModel:"ED-F",PhysicalStock:"280",PreviousStock:"275",AdjustmentQty:"5",RevisedBookStock:"280"},
  ]

  // uploadExcelDialog(){
  //   this.dialog.open(UploadStockComponent, {
  //     height: 'auto',
  //     width:'900px'
  //   })
  // }

  // dowloadExcelFile() {
  //   this.excelData = []
  //   this.excelData.push({ 'Stocking Date': "", 'Total Items': "", 'Imported': "", 'Exception': "", 'Remarks': "", 'Imported By': "", 'Uploaded On': ""});

  //   console.log(this.excelData);
  //   this.downloadExcelService.exportAsExcelFile(this.excelData, 'Opening Stock Sample Excel')
  // }
 
  addadjustments(items){
    this.dialog.open(AddAdjustmentsDialogComponent, {
      data : items,
     height: 'auto',
     width: "700px", 
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
