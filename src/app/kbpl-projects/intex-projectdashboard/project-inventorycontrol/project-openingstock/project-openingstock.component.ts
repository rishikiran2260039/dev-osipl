import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DownloadExcelService } from 'src/app/download-excel.service';

@Component({
  selector: 'app-project-openingstock',
  templateUrl: './project-openingstock.component.html',
  styleUrls: ['./project-openingstock.component.scss']
})
export class ProjectOpeningstockComponent implements OnInit {

  filterToggle = false;

  constructor(public dialog:MatDialog, public downloadExcelService: DownloadExcelService) { }

  excelData = [];

  ngOnInit() {
  }

  items = [
    {stockDate:"12-OCT-2019",tItems:1,imported:1,exception:0,remarks:"Generate OTP to Mobile (Send) | Email (Send)",importedBy:"Super Admin",uploaded:"12-Oct-2019, 03:21 PM", partNo:56107,eqpModel:"FMX480",store:"56Lake",rackCode:"24A",rowCode:"12-1A",binCode:"RD-249/T23",fName:"Kamp",fLName:"K12",partMake:"Volvo",qty:25,unitPrice:"12000$",status:"In Stock"},
    {stockDate:"12-OCT-2019",tItems:5,imported:2,exception:3,remarks:"EAS10036 - importing part into different location",importedBy:"Super Admin",uploaded:"12-Oct-2019, 03:18 PM", partNo:182048,eqpModel:"CAT D347",store:"Lansdown",rackCode:"14/2B",rowCode:"15-2C",binCode:"CF-123/F2",fName:"Astone",fLName:"AF2",partMake:"Caterpiller",qty:26,unitPrice:"28000$",status:"In Stock"},
    {stockDate:"12-OCT-2019",tItems:5,imported:2,exception:3,remarks:"Uploading qty to same part",importedBy:"Super Admin",uploaded:"12-Oct-2019, 03:16 PM", partNo:56107,eqpModel:"FMX480",store:"56Lake",rackCode:"24A",rowCode:"12-1A",binCode:"RD-249/T23",fName:"Kamp",fLName:"K12",partMake:"Volvo",qty:33,unitPrice:"12000$",status:"Out Of Stock"},
    {stockDate:"12-OCT-2019",tItems:46,imported:16,exception:30,remarks:"Importing quantity for same part with different part make",importedBy:"Super Admin",uploaded:"12-Oct-2019, 11:52 AM", partNo:182048,eqpModel:"CAT D347",store:"Lansdown",rackCode:"14/2B",rowCode:"15-2C",binCode:"CF-123/F2",fName:"Astone",fLName:"AF2",partMake:"Caterpiller",qty:24,unitPrice:"28000$",status:"In Stock"},
    {stockDate:"12-OCT-2019",tItems:46,imported:16,exception:30,remarks:"importing file with 47 scenarios covering both positive and negative",importedBy:"Super Admin",uploaded:"12-Oct-2019, 10:25 AM", partNo:56107,eqpModel:"FMX480",store:"56Lake",rackCode:"24A",rowCode:"12-1A",binCode:"RD-249/T23",fName:"Kamp",fLName:"K12",partMake:"Volvo",qty:32,unitPrice:"12000$",status:"In Stock"},
    {stockDate:"12-OCT-2019",tItems:5,imported:2,exception:3,remarks:"Uploading qty to same part",importedBy:"Super Admin",uploaded:"12-Oct-2019, 10:10 AM", partNo:182048,eqpModel:"CAT D347",store:"Lansdown",rackCode:"14/2B",rowCode:"15-2C",binCode:"CF-123/F2",fName:"Astone",fLName:"AF2",partMake:"Caterpiller",qty:29,unitPrice:"28000$",status:"In Stock"},
  ]

  uploadExcelDialog(){
  //   this.dialog.open(UploadStockComponent, {
  //     height: 'auto',
  //     width:'900px'
  //   })
  }

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

}

