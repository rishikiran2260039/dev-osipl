import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddInfoServicepopupComponentComponent } from './add-info-servicepopup-component/add-info-servicepopup-component.component';
import { DownloadExcelService } from 'src/app/download-excel.service';
import { RfquploadformComponent } from 'src/app/purchase/material-management/rfquploadform/rfquploadform.component';

@Component({
  selector: 'app-rfqitem-service-contract',
  templateUrl: './rfqitem-service-contract.component.html',
  styleUrls: ['./rfqitem-service-contract.component.scss']
})
export class RFQItemServiceContractComponent implements OnInit {

  taskData: any;
  alertService: any;
  dialogRef: any;
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

 
  uploadExcelDialog(){
    this.dialog.open(RfquploadformComponent, {
      height: 'auto',
      width:'900px'
    })
  } 

  dowloadExcelFile() {
    this.excelData = []
    this.excelData.push({ 'Job Code': "", 'Job Code Name': "", 'Job Category': "", 'Remarks': ""});

    console.log(this.excelData);
    this.downloadExcelService.exportAsExcelFile(this.excelData, ' Job Code Sample Excel')
  }
  items = [
    {uom:"sqm",remarks:"Complaince over Material issues - to be delivered on time",PartMake:"volvo",PartModel:"P-679/23",ItemName : "Volvo", ItemCode: "FMX480", QuantityRequired: "50",unitprice:"5000",total:"250000", itemCategory: "Hand Tools" },
    {uom:"sqm",remarks:"Need to qualify QA test",AdjustmentDate:"16-Oct-2019",Doneby:"Hari",Part:"421-60-35170",PartName:"volvo",PartMake:"Caterpillar",PartModel:"EC210",EqptCode:"CAT356-DX", EqptName:"Cranes-Eicher",EqptMake:"Caterpillar",EqptModel:"CAT-DX",PhysicalStock:"120",PreviousStock:"100",AdjustmentQty:"20",RevisedBookStock:"120",Category: "Backhoe Loader", SubCategory: "Running Maintenance", ItemName : "Caterpillar", ItemCode: " D85ESS 17", QuantityRequired: "80",unitprice:"3875" ,total:"310000", itemCategory: "Back Hoe Loader"},
    {uom:"sqm",remarks:"Precision Equipments with high Capacity required",AdjustmentDate:"13-Oct-2019",Doneby:"Raghava",Part:"B229900003680",PartName:"Caterpillar",PartMake:"Kirloskar",PartModel:"EC240",EqptCode:"T-456H", EqptName:"Excavator",EqptMake:"Tata Hitachi",EqptModel:"T-4H",PhysicalStock:"320",PreviousStock:"310",AdjustmentQty:"10",RevisedBookStock:"320",Category: "Backhoe Loader ", SubCategory: "Breakdown Repairs", ItemName : "Mercedes", ItemCode: "All Models", QuantityRequired: "20",unitprice:"2500",total:"50000", itemCategory :"Heavy Equipment" },
    {uom:"sqm",remarks:"Need for high performance materials",AdjustmentDate:"19-Oct-2019",Doneby:"Saiprakash",Part:"421-60-35170",PartName:"Kirloskar",PartMake:"Ashok Leyland",PartModel:"EC290",EqptCode:"LA-543", EqptName:"Motor Grade",EqptMake:"Ashok Leyland",EqptModel:"LA-D",PhysicalStock:"180",PreviousStock:"160",AdjustmentQty:"20",RevisedBookStock:"180",Category: "Dump Truck", SubCategory: "Accident Repairs", ItemName : "Tata ", ItemCode: "ACTROS 4841K", QuantityRequired: "30",unitprice:"8333" ,total:"250000", itemCategory: "Hand Tools"},
    {uom:"sqm",remarks:"Need to qualify QA test",AdjustmentDate:"14-Oct-2019",Doneby:"vamshi",Part:"521-60-34512",PartName:"Ashok Leyland",PartMake:"Tata",PartModel:"EC360",EqptCode:"ED-234F", EqptName:"Dump Truck",EqptMake:"Caterpillar",EqptModel:"ED-F",PhysicalStock:"280",PreviousStock:"275",AdjustmentQty:"5",RevisedBookStock:"280",Category: "Backhoe Loader", SubCategory: "Accident Repairs", ItemName : "Volvo", ItemCode: "D85ESS 86", QuantityRequired: "50",unitprice:"800." ,total:"40000", itemCategory: "Bulldozer" },
  ]

  addnewitem(){
    this.dialog.open(AddInfoServicepopupComponentComponent,{
      height:'auto',
      width:'700px'
    });
  }

  // itemstr: HTMLElement[] = [];
  // agestr: HTMLElement[] = [];
  // responsestr: HTMLElement[] = [];
  // str: HTMLElement = <HTMLElement>document.getElementById("new_text");
  // add=true;
  // sometext =true;
  // allFields = [1];
  // allFields1 = [1];
  // allFields2 = [1];
  // removeItem(index){
  //   this.allFields.splice(index, 1);
  // }
  // removeItem1(index){
  //   this.allFields1.splice(index, 1);
  // }
  // removeItem2(index){
  //   this.allFields2.splice(index, 1);
  // }
  copy(type) {
    // if(type=='lookup')
    //   this.itemstr.push(this.str);
    // else if(type=='age')
    //   this.agestr.push(this.str);
    // else
    //   this.responsestr.push(this.str);
    
  //   this.items.push(  {itemname:"Volvo", itemcode:"FMX480", partnumber:"B229900003680	",Partmake:"volvo"},
  //   {itemname:"Caterpillar", itemcode:"D85ESS 17", partnumber:"421-60-35170		",Partmake:"Caterpillar"},)
    
  // }

  // remove(e) {
  //   document.getElementById("repeat-" + e).remove();
  // }

  // saveLookup() {
  //   this.alertService.createAlert('Successfully Saved.', 1);
  //   this.dialogRef.close();
  // }

  
}

}
