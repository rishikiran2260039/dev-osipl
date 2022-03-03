import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddAdjustmentsDialogComponent } from 'src/app/purchase/material-requirement-planning/stock-adjustments/add-adjustments-dialog/add-adjustments-dialog.component';
import { AddComponent } from './add/add.component';

@Component({
  selector: 'app-project-stickadjustments',
  templateUrl: './project-stickadjustments.component.html',
  styleUrls: ['./project-stickadjustments.component.scss']
})
export class ProjectStickadjustmentsComponent implements OnInit {

  constructor(public dialog:MatDialog, ) { }

  excelData = [];

  ngOnInit() {
  }


  items = [
    {AdjustmentDate:"12-Oct-2019",Doneby:"Abhishek",Part:"B229900003680",PartName:"Komatsu",PartMake:"volvo",PartModel:"P-679/23",EqptCode:"DX-245", EqptName:"Bull Dozer",EqptMake:"Volvo",EqptModel:"Volvo",PhysicalStock:"205",PreviousStock:"200",AdjustmentQty:"5",RevisedBookStock:"205"},
    {AdjustmentDate:"16-Oct-2019",Doneby:"Hari",Part:"421-60-35170",PartName:"volvo",PartMake:"Caterpillar",PartModel:"EC210",EqptCode:"CAT356-DX", EqptName:"Cranes-Eicher",EqptMake:"Caterpillar",EqptModel:"CAT-DX",PhysicalStock:"120",PreviousStock:"100",AdjustmentQty:"20",RevisedBookStock:"120"},
    {AdjustmentDate:"13-Oct-2019",Doneby:"Raghava",Part:"B229900003680",PartName:"Caterpillar",PartMake:"Kirloskar",PartModel:"EC240",EqptCode:"T-456H", EqptName:"Excavator",EqptMake:"Tata Hitachi",EqptModel:"T-4H",PhysicalStock:"320",PreviousStock:"310",AdjustmentQty:"10",RevisedBookStock:"320"},
    {AdjustmentDate:"19-Oct-2019",Doneby:"Saiprakash",Part:"421-60-35170",PartName:"Kirloskar",PartMake:"Ashok Leyland",PartModel:"EC290",EqptCode:"LA-543", EqptName:"Motor Grade",EqptMake:"Ashok Leyland",EqptModel:"LA-D",PhysicalStock:"180",PreviousStock:"160",AdjustmentQty:"20",RevisedBookStock:"180"},
    {AdjustmentDate:"14-Oct-2019",Doneby:"vamshi",Part:"521-60-34512",PartName:"Ashok Leyland",PartMake:"Tata",PartModel:"EC360",EqptCode:"ED-234F", EqptName:"Dump Truck",EqptMake:"Caterpillar",EqptModel:"ED-F",PhysicalStock:"280",PreviousStock:"275",AdjustmentQty:"5",RevisedBookStock:"280"},
  ]

  uploadExcelDialog(){
  //   this.dialog.open(UploadStockComponent, {
  //     height: 'auto',
  //     width:'900px'
  //   })
  }

  dowloadExcelFile() {
  //   this.excelData = []
  //   this.excelData.push({ 'Stocking Date': "", 'Total Items': "", 'Imported': "", 'Exception': "", 'Remarks': "", 'Imported By': "", 'Uploaded On': ""});

  //   console.log(this.excelData);
  //   this.downloadExcelService.exportAsExcelFile(this.excelData, 'Opening Stock Sample Excel')
  }
 
  addadjustments(items){
    this.dialog.open(AddComponent, {
      data:items,
      width: "700px", 
      height: "auto"
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
