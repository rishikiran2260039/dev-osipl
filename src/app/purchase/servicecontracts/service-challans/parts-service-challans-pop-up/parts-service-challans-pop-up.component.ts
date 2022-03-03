import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material'; 
import { AddPartsComponent } from './add-parts/add-parts.component';
import { DownloadExcelService } from 'src/app/download-excel.service';
import { PartuploadformComponent } from './partuploadform/partuploadform.component';

@Component({
  selector: 'app-parts-service-challans-pop-up',
  templateUrl: './parts-service-challans-pop-up.component.html',
  styleUrls: ['./parts-service-challans-pop-up.component.scss']
})
export class PartsServiceChallansPopUpComponent implements OnInit {

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  excelData: any[];
  constructor(public dialog:MatDialog, public downloadExcelService: DownloadExcelService) { }

ngOnInit() {
}
 
items = [
  {Make:"Volvo",dimensions:"23*25*15",thickness:"30mm",AdjustmentDate:"12-Oct-2019",Doneby:"Abhishek",Part:"B229900003680",PartName:"Komatsu",PartMake:"volvo",PartModel:"P-679/23",EqptCode:"DX-245", EqptName:"Bull Dozer",EqptMake:"Volvo",EqptModel:"Volvo",PhysicalStock:"205",PreviousStock:"200",AdjustmentQty:"5",RevisedBookStock:"205",Category: "Dump Truck", SubCategory: "Breakdown Repairs", ItemName : "Volvo", ItemCode: "FMX480", QuantityRequired: "50",uom:"No.",avilablestock:"25" },
  {Make:"Caterpillar",dimensions:"23*25*15",thickness:"30mm",AdjustmentDate:"16-Oct-2019",Doneby:"Hari",Part:"421-60-35170",PartName:"volvo",PartMake:"Caterpillar",PartModel:"EC210",EqptCode:"CAT356-DX", EqptName:"Cranes-Eicher",EqptMake:"Caterpillar",EqptModel:"CAT-DX",PhysicalStock:"120",PreviousStock:"100",AdjustmentQty:"20",RevisedBookStock:"120",Category: "Backhoe Loader", SubCategory: "Running Maintenance", ItemName : "Caterpillar", ItemCode: " D85ESS 17", QuantityRequired: "80",uom:"No." ,avilablestock:"40" },
  {Make:"Mercedes",dimensions:"23*25*15",thickness:"30mm",AdjustmentDate:"13-Oct-2019",Doneby:"Raghava",Part:"B229900003680",PartName:"Caterpillar",PartMake:"Kirloskar",PartModel:"EC240",EqptCode:"T-456H", EqptName:"Excavator",EqptMake:"Tata Hitachi",EqptModel:"T-4H",PhysicalStock:"320",PreviousStock:"310",AdjustmentQty:"10",RevisedBookStock:"320",Category: "Backhoe Loader ", SubCategory: "Breakdown Repairs", ItemName : "Mercedes", ItemCode: "All Models", QuantityRequired: "20",uom:"No.",avilablestock:"5"  },
  {Make:"Tata",dimensions:"23*25*15",thickness:"30mm",AdjustmentDate:"19-Oct-2019",Doneby:"Saiprakash",Part:"421-60-35170",PartName:"Kirloskar",PartMake:"Ashok Leyland",PartModel:"EC290",EqptCode:"LA-543", EqptName:"Motor Grade",EqptMake:"Ashok Leyland",EqptModel:"LA-D",PhysicalStock:"180",PreviousStock:"160",AdjustmentQty:"20",RevisedBookStock:"180",Category: "Dump Truck", SubCategory: "Accident Repairs", ItemName : "Tata ", ItemCode: "ACTROS 4841K", QuantityRequired: "30",uom:"No." ,avilablestock:"25" },
  {Make:"Volvo",dimensions:"23*25*15",thickness:"30mm",AdjustmentDate:"14-Oct-2019",Doneby:"vamshi",Part:"521-60-34512",PartName:"Ashok Leyland",PartMake:"Tata",PartModel:"EC360",EqptCode:"ED-234F", EqptName:"Dump Truck",EqptMake:"Caterpillar",EqptModel:"ED-F",PhysicalStock:"280",PreviousStock:"275",AdjustmentQty:"5",RevisedBookStock:"280",Category: "Backhoe Loader", SubCategory: "Accident Repairs", ItemName : "Volvo", ItemCode: "D85ESS 86", QuantityRequired: "50",uom:"No." ,avilablestock:"40" },
]

back(){
  window.history.back();
  }
  uploadExcelDialog(){
    this.dialog.open(PartuploadformComponent, {
      height: 'auto',
      width:'900px'
    })
  }

  dowloadExcelFile() {
    this.excelData = []
    this.excelData.push({ 'Item Name': "", 'Item Code': "", 'Item Category': "", 'Exception': "", 'Item Sub Category': "", 'Quantity': "",});

    console.log(this.excelData);
    this.downloadExcelService.exportAsExcelFile(this.excelData, 'Item Sample Excel')
  }
  addparts(){
    this.dialog.open(AddPartsComponent,{
      height:'auto',
      width:'740px'
    })

  }

  addnewitem(){
    this.dialog.open(AddPartsComponent,{
      height:'auto',
      width:'740px'
    })
  }

}