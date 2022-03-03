import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DownloadExcelService } from 'src/app/download-excel.service';
import { AddItemReorderComponent } from './add-item-reorder/add-item-reorder.component';
import { ReOrderuploadformComponent } from './re-orderuploadform/re-orderuploadform.component';
import { SafetyStockComponent } from './safety-stock/safety-stock.component';

@Component({
  selector: 'app-reorder-levels',
  templateUrl: './reorder-levels.component.html',
  styleUrls: ['./reorder-levels.component.scss']
})
export class ReorderLevelsComponent implements OnInit {

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

  items = [
    {length:"200 CM",width:"57 CM",height:"113 MM",uom:"ft",brand:"Volvo",dimensions:"22*25*11",thickness:"30mm",subcategory:"Plywood",part:"PLY23001", partName:"Plywood Sheet",itcategory:"Wood",stockingDate:"12-NOV-2020", updatedDate:"12-MAY-2021", available:23, leadTime:7 , safetyStock:15, dailyUsage:300,buffer:2100, reorder:6000, reorderDate:"12-JUL-2021",moq:"10",reorderinterval:"60"},
    {length:"100 CM",width:"47 CM",height:"63 MM",uom:"sqmt",brand:"Caterpiller",dimensions:"22*25*13",thickness:"30mm",subcategory:"Plastic Pipes",part:"PLU26803", partName:"Plumbing Pipes",itcategory:"Pipes",stockingDate:"12-JAN-2020", updatedDate:"12-APR-2021", available:25, leadTime:8 , safetyStock:20, dailyUsage:280,buffer:1800, reorder:4000, reorderDate:"18-AUG-2021",moq:"15",reorderinterval:"80"},
    {length:"120 CM",width:"44 CM",height:"99 MM",uom:"ft",brand:"Kirlosker	",dimensions:"22*25*12",thickness:"30mm",subcategory:"Copper Wire",part:"ELE20010", partName:"Coil wire",itcategory:"Wire",stockingDate:"12-FEB-2020", updatedDate:"12-NOV-2021", available:50, leadTime:4 , safetyStock:30, dailyUsage:170,buffer:740, reorder:3000, reorderDate:"23-MAY-2021",moq:"20",reorderinterval:"100"},
    {length:"120 CM",width:"44 CM",height:"99 MM",uom:"sqmt",brand:"Ashok Layland",dimensions:"23*25*13",thickness:"30mm",subcategory:"WPC",part:"PLY23007", partName:"WPC sheet",itcategory:"Wood",stockingDate:"12-DEC-2020", updatedDate:"12-JAN-2021", available:73, leadTime:6 , safetyStock:50, dailyUsage:210,buffer:1200, reorder:2500, reorderDate:"31-AUG-2021",moq:"10",reorderinterval:"60"},


  ];

  safetyStockDialog(item){
    this.dialog.open(SafetyStockComponent, {
      data: item,
      height:'auto',
      width: '900px'
    })
  }


  uploadExcelDialog(){
    this.dialog.open(ReOrderuploadformComponent, {
      height: 'auto',
      width:'900px'
    })
  } 

  dowloadExcelFile() {
    this.excelData = []
    this.excelData.push({ 'Item Code': "", 'Item Name': "", 'Item Category': "", 'Last Received': "", 'Last Issued': "", 'Available Qty': "", 'Lead Time': "", 'MOQ': "", 'Safety Stock': ""});

    console.log(this.excelData);
    this.downloadExcelService.exportAsExcelFile(this.excelData, 'RFQ Sample Excel')
  }
  addnewitem(){
    this.dialog.open(AddItemReorderComponent,{
      height:'auto',
      width:'700px'
    });
  }
  uploaddoc(){
    this.dialog.open(AddItemReorderComponent,{
      height:'auto',
      width:'700px'
    });
  }
}
