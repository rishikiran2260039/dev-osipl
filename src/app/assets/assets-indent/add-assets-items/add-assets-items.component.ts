import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DownloadExcelService } from 'src/app/download-excel.service';
import { AddNewItemDialogComponent } from 'src/app/purchase/requisition/items-and-quantities/add-new-item-dialog/add-new-item-dialog.component';
import { AvailabilityDetailsPopupComponent } from 'src/app/purchase/requisition/items-and-quantities/availability-details-popup/availability-details-popup.component';
import { GridcolPopupComponent } from 'src/app/purchase/requisition/items-and-quantities/gridcol-popup/gridcol-popup.component';
import { PurchaseIndentuploadComponent } from 'src/app/purchase/requisition/items-and-quantities/purchase-indentupload/purchase-indentupload.component';
import { AddAssetItemDialogComponent } from '../add-asset-item-dialog/add-asset-item-dialog.component';

@Component({
  selector: 'app-add-assets-items',
  templateUrl: './add-assets-items.component.html',
  styleUrls: ['./add-assets-items.component.scss']
})
export class AddAssetsItemsComponent implements OnInit {

  excelData: any[];
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  innerscreenname: string = "Overview"
  
 
  constructor(public dialog:MatDialog, public downloadExcelService: DownloadExcelService) { }
 

  ngOnInit() {
  }

  
  items = [
    {length:"200 CM",width:"57 CM",height:"113 MM", dimesions:"23*25*15",thickness:"30mm",itemtype:"Plain",variant:"0",Make:"Volvo",AdjustmentDate:"12-Oct-2019",Doneby:"Abhishek",Part:"B229900003680",PartName:"Komatsu",PartMake:"volvo",PartModel:"P-679/23",EqptCode:"DX-245", EqptName:"Bull Dozer",EqptMake:"Volvo",EqptModel:"Volvo",PhysicalStock:"205",PreviousStock:"200",AdjustmentQty:"5",RevisedBookStock:"205",Category: "Dump Truck", SubCategory: "Breakdown Repairs", ItemName : "Volvo", ItemCode: "FMX480", QuantityRequired: "50",uom:"No.",avilablestock:"25" },
    {length:"100 CM",width:"47 CM",height:"63 MM",  dimesions:"22*12*24",thickness:"20mm",Make:"Caterpillar",AdjustmentDate:"16-Oct-2019",Doneby:"Hari",Part:"421-60-35170",PartName:"volvo",PartMake:"Caterpillar",PartModel:"EC210",EqptCode:"CAT356-DX", EqptName:"Cranes-Eicher",EqptMake:"Caterpillar",EqptModel:"CAT-DX",PhysicalStock:"120",PreviousStock:"100",AdjustmentQty:"20",RevisedBookStock:"120",Category: "Backhoe Loader", SubCategory: "Running Maintenance", ItemName : "Caterpillar", ItemCode: " D85ESS 17", QuantityRequired: "80",uom:"No." ,avilablestock:"40" },
    {length:"120 CM",width:"44 CM",height:"99 MM",  dimesions:"25*11*22",thickness:"20mm",Make:"Mercedes",AdjustmentDate:"13-Oct-2019",Doneby:"Raghava",Part:"B229900003680",PartName:"Caterpillar",PartMake:"Kirloskar",PartModel:"EC240",EqptCode:"T-456H", EqptName:"Excavator",EqptMake:"Tata Hitachi",EqptModel:"T-4H",PhysicalStock:"320",PreviousStock:"310",AdjustmentQty:"10",RevisedBookStock:"320",Category: "Backhoe Loader ", SubCategory: "Breakdown Repairs", ItemName : "Mercedes", ItemCode: "All Models", QuantityRequired: "20",uom:"No.",avilablestock:"5"  },
    {length:"120 CM",width:"44 CM",height:"99 MM",  dimesions:"20*22*14",thickness:"20mm",Make:"Tata",AdjustmentDate:"19-Oct-2019",Doneby:"Saiprakash",Part:"421-60-35170",PartName:"Kirloskar",PartMake:"Ashok Leyland",PartModel:"EC290",EqptCode:"LA-543", EqptName:"Motor Grade",EqptMake:"Ashok Leyland",EqptModel:"LA-D",PhysicalStock:"180",PreviousStock:"160",AdjustmentQty:"20",RevisedBookStock:"180",Category: "Dump Truck", SubCategory: "Accident Repairs", ItemName : "Tata ", ItemCode: "ACTROS 4841K", QuantityRequired: "30",uom:"No." ,avilablestock:"25" },
    {length:"220 CM",width:"54 CM",height:"193 MM", dimesions:"28*12*34",thickness:"20mm",Make:"Volvo",AdjustmentDate:"14-Oct-2019",Doneby:"vamshi",Part:"521-60-34512",PartName:"Ashok Leyland",PartMake:"Tata",PartModel:"EC360",EqptCode:"ED-234F", EqptName:"Dump Truck",EqptMake:"Caterpillar",EqptModel:"ED-F",PhysicalStock:"280",PreviousStock:"275",AdjustmentQty:"5",RevisedBookStock:"280",Category: "Backhoe Loader", SubCategory: "Accident Repairs", ItemName : "Volvo", ItemCode: "D85ESS 86", QuantityRequired: "50",uom:"No." ,avilablestock:"40" },
  ]


  AvailbalePopup(){
    this.dialog.open(AvailabilityDetailsPopupComponent ,{
      height:'auto',
      width:'1100px'
    });
  }  

  public addnewitem(item) {
    let dialogRef = this.dialog.open(AddAssetItemDialogComponent, {
      data:item,
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public openGridColumnsDialog() {
    let dialogRef = this.dialog.open(GridcolPopupComponent, {
     
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
  
  uploadExcelDialog(){
    this.dialog.open(PurchaseIndentuploadComponent, {
      height: 'auto',
      width:'900px'
    })
  }

  dowloadExcelFile() {
    this.excelData = []
    this.excelData.push({ 'Item Name': "", 'Item Code': "", 'Make': "", 'Category': "", 'Sub Category': "", 'UOM': "", '': "", 'Available Qty': "", 'Quantity Required': ""});

    console.log(this.excelData);
    this.downloadExcelService.exportAsExcelFile(this.excelData, 'Purchase Indent Sample')
  }

}
