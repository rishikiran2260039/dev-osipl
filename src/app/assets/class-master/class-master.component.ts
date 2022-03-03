import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DownloadExcelService } from 'src/app/download-excel.service';
import { AddClassMasterComponent } from './add-class-master/add-class-master.component';

@Component({
  selector: 'app-class-master',
  templateUrl: './class-master.component.html',
  styleUrls: ['./class-master.component.scss']
})
export class ClassMasterComponent implements OnInit {
  filterToggle = false;
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  innerscreenname: string = "Overview"
  constructor(public dialog:MatDialog, public downloadExcelService: DownloadExcelService) { }

  excelData = [];

  ngOnInit() {
  }

  items = [
    {length:"200 CM",width:"57 CM",height:"113 MM",brand:"CERA",dimensions:"23*25*15",thickness:"30 MM",stockDate:"12-OCT-2019",tItems:1,imported:1,exception:0,remarks:"Generate OTP to Mobile (Send) | Email (Send)",importedBy:"Super Admin",uploaded:"12-Oct-2019, 03:21 PM", partNo:"TILE0031",eqpModel:"Ceramic Tiles",store:"56Lake",rackCode:"24A",rowCode:"12-1A",binCode:"RD-249/T23",fName:"Kamp",fLName:"K12",partMake:"Tiles",qty:"Flooring",unitPrice:"12000",status:"In Stock"},
    {length:"100 CM",width:"47 CM",height:"63 MM", brand:"Armstrong",dimensions:"22*12*24",thickness:"20 MM",stockDate:"12-OCT-2019",tItems:5,imported:2,exception:3,remarks:"EAS10036 - importing part into different location",importedBy:"Super Admin",uploaded:"12-Oct-2019, 03:18 PM", partNo:"TILE0032",eqpModel:"Wooden Tiles",store:"Lansdown",rackCode:"14/2B",rowCode:"15-2C",binCode:"CF-123/F2",fName:"Astone",fLName:"AF2",partMake:"Tiles",qty:"Flooring",unitPrice:"28000",status:"In Stock"},
    {length:"120 CM",width:"44 CM",height:"99 MM", brand:"CERA",dimensions:"25*11*22",thickness:"40 MM",stockDate:"12-OCT-2019",tItems:5,imported:2,exception:3,remarks:"Uploading qty to same part",importedBy:"Super Admin",uploaded:"12-Oct-2019, 03:16 PM", partNo:"TILE0033",eqpModel:"Ceramic Tiles",store:"56Lake",rackCode:"24A",rowCode:"12-1A",binCode:"RD-249/T23",fName:"Kamp",fLName:"K12",partMake:"Tiles",qty:"Flooring",unitPrice:"12000",status:"Out Of Stock"},
    {length:"120 CM",width:"44 CM",height:"99 MM", brand:"CERA",dimensions:"23*25*15",thickness:"30 MM",stockDate:"12-OCT-2019",tItems:6,imported:16,exception:30,remarks:"Importing quantity for same part with different part make",importedBy:"Super Admin",uploaded:"12-Oct-2019, 11:52 AM", partNo:"TILE0034",eqpModel:"Ceramic Tiles",store:"Lansdown",rackCode:"14/2B",rowCode:"15-2C",binCode:"CF-123/F2",fName:"Astone",fLName:"AF2",partMake:"Tiles",qty:"Flooring",unitPrice:"28000",status:"In Stock"},
    {length:"220 CM",width:"54 CM",height:"193 MM",brand:"Armstrong",dimensions:"25*11*22",thickness:"20 MM",stockDate:"12-OCT-2019",tItems:6,imported:16,exception:30,remarks:"importing file with 47 scenarios covering both positive and negative",importedBy:"Super Admin",uploaded:"12-Oct-2019, 10:25 AM", partNo:"TILE0035",eqpModel:"Wooden Tiles",store:"56Lake",rackCode:"24A",rowCode:"12-1A",binCode:"RD-249/T23",fName:"Kamp",fLName:"K12",partMake:"Tiles",qty:"Flooring",unitPrice:"12000",status:"In Stock"},
    {length:"100 CM",width:"47 CM",height:"63 MM",brand:"CERA",dimensions:"22*12*24",thickness:"40 MM",stockDate:"12-OCT-2019",tItems:5,imported:2,exception:3,remarks:"Uploading qty to same part",importedBy:"Super Admin",uploaded:"12-Oct-2019, 10:10 AM", partNo:"TILE0036",eqpModel:"Ceramic Tiles",store:"Lansdown",rackCode:"14/2B",rowCode:"15-2C",binCode:"CF-123/F2",fName:"Astone",fLName:"AF2",partMake:"Tiles",qty:"Flooring",unitPrice:"28000",status:"In Stock"},
  ]

  // uploadExcelDialog(){
  //   this.dialog.open(UploadformstockComponent, {
  //     height: 'auto',
  //     width:'900px'
  //   })
  // }

  dowloadExcelFile() {
    this.excelData = []
    this.excelData.push({ 'Stocking Date': "", 'Total Items': "", 'Imported': "", 'Exception': "", 'Remarks': "", 'Imported By': "", 'Uploaded On': ""});

    console.log(this.excelData);
    this.downloadExcelService.exportAsExcelFile(this.excelData, 'Opening Stock Sample Excel')
  }

  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
  }
  addnewitem(){
    this.dialog.open(AddClassMasterComponent,{
      height:'auto',
      width:'700px'
    });
  }
  uploaddoc(){
    this.dialog.open(AddClassMasterComponent,{
      height:'auto',
      width:'700px'
    });
  }
}
function UploadformstockComponent(UploadformstockComponent: any, arg1: { height: string; width: string; }) {
  throw new Error('Function not implemented.');
}

function UploadStockComponent(UploadStockComponent: any, arg1: { height: string; width: string; }) {
  throw new Error('Function not implemented.');
}

