import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddInfopopupComponent } from './add-infopopup/add-infopopup.component'; 
import { DownloadExcelService } from 'src/app/download-excel.service';
import { RfquploadformComponent } from '../../rfquploadform/rfquploadform.component';

@Component({
  selector: 'app-info-rfq',
  templateUrl: './info-rfq.component.html',
  styleUrls: ['./info-rfq.component.scss']
})
export class InfoRfqComponent implements OnInit {

  taskData: any;
  alertService: any; 
  dialogRef: any;
  excelData = []; 
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  innerscreenname: string = "Overview"

  filterToggle = false;
  constructor(public dialog:MatDialog, public downloadExcelService: DownloadExcelService) { }

  ngOnInit() {
  }

  uploadExcelDialog(){
    this.dialog.open(RfquploadformComponent, {
      height: 'auto',
      width:'900px'
    })
  }

  dowloadExcelFile() {
    this.excelData = []
    this.excelData.push({ 'Item Name': "", 'Indent Reference': "", 'Project Code': "", 'Item Code': "", 'Item Catagory': "", 'Make': "", 'Quantity': ""});

    console.log(this.excelData);
    this.downloadExcelService.exportAsExcelFile(this.excelData, 'RFQ Sample Excel')
  }
 

  items = [
    {length:"200 CM",width:"57 CM",height:"113 MM",qrequired:"50",subcategory:"Breakdown Repairs",dimesions:"23*25*15",thickness:"30mm",uom:"No's",itemtype:"Plain",variant:"0",projectcode:"E005KA10012",PartMake:"Volvo",PartModel:"P-679/23",ItemName : "Volvo", ItemCode: "FMX480", QuantityRequired: "50",unitprice:"5000",total:"250000", itemCategory: "Hand Tools", reference:"OM/REQ/SPA-FEB-19/1057" },
    {length:"100 CM",width:"47 CM",height:"63 MM", qrequired:"30",subcategory:"Running Maintenance",dimesions:"22*12*24",thickness:"20mm",uom:"No's",itemtype:"ACOUSTICAL",variant:"1",projectcode:"E005KA10013",AdjustmentDate:"16-Oct-2019",Doneby:"Hari",Part:"421-60-35170",PartName:"volvo",PartMake:"Caterpillar",PartModel:"EC210",EqptCode:"CAT356-DX", EqptName:"Cranes-Eicher",EqptMake:"Caterpillar",EqptModel:"CAT-DX",PhysicalStock:"120",PreviousStock:"100",AdjustmentQty:"20",RevisedBookStock:"120",Category: "Backhoe Loader", SubCategory: "Running Maintenance", ItemName : "Caterpillar", ItemCode: " D85ESS 17", QuantityRequired: "80",unitprice:"3875" ,total:"310000", itemCategory: "Back Hoe Loader", reference:"OM/REQ/SPA/APR-20/1005"},
    {length:"120 CM",width:"44 CM",height:"99 MM", qrequired:"40",subcategory:"Breakdown Repairs",dimesions:"24*22*12",thickness:"25mm",uom:"No's",itemtype:"Plain",variant:"2",projectcode:"E005KA10014",AdjustmentDate:"13-Oct-2019",Doneby:"Raghava",Part:"B229900003680",PartName:"Caterpillar",PartMake:"Kirloskar",PartModel:"EC240",EqptCode:"T-456H", EqptName:"Excavator",EqptMake:"Tata Hitachi",EqptModel:"T-4H",PhysicalStock:"320",PreviousStock:"310",AdjustmentQty:"10",RevisedBookStock:"320",Category: "Backhoe Loader ", SubCategory: "Breakdown Repairs", ItemName : "Mercedes", ItemCode: "All Models", QuantityRequired: "20",unitprice:"2500",total:"50000", itemCategory :"Heavy Equipment", reference:"OM/REQ/SPA-FEB-19/1041" },
    {length:"120 CM",width:"44 CM",height:"99 MM", qrequired:"50",subcategory:"Accident Repairs",dimesions:"22*25*13",thickness:"40mm",uom:"No's",itemtype:"ACOUSTICAL",variant:"1",projectcode:"E005KA10015",AdjustmentDate:"19-Oct-2019",Doneby:"Saiprakash",Part:"421-60-35170",PartName:"Kirloskar",PartMake:"Ashok Leyland",PartModel:"EC290",EqptCode:"LA-543", EqptName:"Motor Grade",EqptMake:"Ashok Leyland",EqptModel:"LA-D",PhysicalStock:"180",PreviousStock:"160",AdjustmentQty:"20",RevisedBookStock:"180",Category: "Dump Truck", SubCategory: "Accident Repairs", ItemName : "Tata ", ItemCode: "ACTROS 4841K", QuantityRequired: "30",unitprice:"8333" ,total:"250000", itemCategory: "Hand Tools", reference:"OM/REQ/SPA/FEB-21/1077"},
    {length:"220 CM",width:"54 CM",height:"193 MM",qrequired:"40",subcategory:"Accident Repairs",dimesions:"33*24*15",thickness:"15mm",uom:"No's",itemtype:"Plain",variant:"1",projectcode:"E005KA10016",AdjustmentDate:"14-Oct-2019",Doneby:"vamshi",Part:"521-60-34512",PartName:"Ashok Leyland",PartMake:"Tata",PartModel:"EC360",EqptCode:"ED-234F", EqptName:"Dump Truck",EqptMake:"Caterpillar",EqptModel:"ED-F",PhysicalStock:"280",PreviousStock:"275",AdjustmentQty:"5",RevisedBookStock:"280",Category: "Backhoe Loader", SubCategory: "Accident Repairs", ItemName : "Volvo", ItemCode: "D85ESS 86", QuantityRequired: "50",unitprice:"800." ,total:"40000", itemCategory: "Bulldozer", reference:"OM/REQ/SPA/MAR-21/1086" },
  ]

  addnewitem(){
    this.dialog.open(AddInfopopupComponent,{
      height:'auto',
      width:'700px' 
    });
  }


}