import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DownloadExcelService } from 'src/app/download-excel.service';
import { AddInfopopupComponent } from '../../material-management/rfq/info-rfq/add-infopopup/add-infopopup.component';
import { RfquploadformComponent } from '../../material-management/rfquploadform/rfquploadform.component';
import { PoBillGridComponent } from './po-bill-grid/po-bill-grid.component';

@Component({
  selector: 'app-po-bill-status',
  templateUrl: './po-bill-status.component.html',
  styleUrls: ['./po-bill-status.component.scss']
})
export class PoBillStatusComponent implements OnInit {

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

  filterToggle:boolean = false;
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
   {pono:"104202101",podate:"01-Apr-21",vendorName:"Jat Furniture",typeContracts:"Subcon",particulars:"carrying carpentry related works",qty:"1",unit:"lot",rate:"93,765",totalamount:"93,765",gst:"18%",projectname:"BA Continum- Cafeteria",projectcode:"J007TN10001",Billno:"02C",billdate:"13/Apr/2021",billqty:"1",billamountbasic:"93,765",trans:"",othercharges:"",total:"93,765",gstclaimed:"16,877",billvaluestatus:"1,10,642.70",postatus:"closed",balancepoamount:"",poexcess:"",poshortclose:"",processedtodirectors:"26/04/21",processtoaccounts:"27/04/21",roraised:"April/21",poprocessedmth:"April/21",remarks:""},
   {pono:"104202101",podate:"01-Apr-21",vendorName:"Jat Furniture",typeContracts:"Subcon",particulars:"carrying carpentry related works",qty:"1",unit:"lot",rate:"93,765",totalamount:"93,765",gst:"18%",projectname:"BA Continum- Cafeteria",projectcode:"J007TN10001",Billno:"02C",billdate:"13/Apr/2021",billqty:"1",billamountbasic:"93,765",trans:"",othercharges:"",total:"93,765",gstclaimed:"16,877",billvaluestatus:"1,10,642.70",postatus:"closed",balancepoamount:"",poexcess:"",poshortclose:"",processedtodirectors:"26/04/21",processtoaccounts:"27/04/21",roraised:"April/21",poprocessedmth:"April/21",remarks:""},
   {pono:"104202101",podate:"01-Apr-21",vendorName:"Jat Furniture",typeContracts:"Subcon",particulars:"carrying carpentry related works",qty:"1",unit:"lot",rate:"93,765",totalamount:"93,765",gst:"18%",projectname:"BA Continum- Cafeteria",projectcode:"J007TN10001",Billno:"02C",billdate:"13/Apr/2021",billqty:"1",billamountbasic:"93,765",trans:"",othercharges:"",total:"93,765",gstclaimed:"16,877",billvaluestatus:"1,10,642.70",postatus:"closed",balancepoamount:"",poexcess:"",poshortclose:"",processedtodirectors:"26/04/21",processtoaccounts:"27/04/21",roraised:"April/21",poprocessedmth:"April/21",remarks:""},
   {pono:"104202101",podate:"01-Apr-21",vendorName:"Jat Furniture",typeContracts:"Subcon",particulars:"carrying carpentry related works",qty:"1",unit:"lot",rate:"93,765",totalamount:"93,765",gst:"18%",projectname:"BA Continum- Cafeteria",projectcode:"J007TN10001",Billno:"02C",billdate:"13/Apr/2021",billqty:"1",billamountbasic:"93,765",trans:"",othercharges:"",total:"93,765",gstclaimed:"16,877",billvaluestatus:"1,10,642.70",postatus:"closed",balancepoamount:"",poexcess:"",poshortclose:"",processedtodirectors:"26/04/21",processtoaccounts:"27/04/21",roraised:"April/21",poprocessedmth:"April/21",remarks:""},

  ]

  addnewitem(){
    this.dialog.open(AddInfopopupComponent,{
      height:'auto',
      width:'700px' 
    });
  }
  openGridColumnsDialog(){
    this.dialog.open(PoBillGridComponent,{
      width:"600px",
      height:"auto"
    })
  }
}
