import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GridcolPopupStockreconciliation2Component } from './gridcol-popup-stockreconciliation2/gridcol-popup-stockreconciliation2.component';

@Component({
  selector: 'app-stock-reconcilliation2',
  templateUrl: './stock-reconcilliation2.component.html',
  styleUrls: ['./stock-reconcilliation2.component.scss']
})
export class StockReconcilliation2Component implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  items = [
    {length:"200 CM",width:"57 CM",height:"113 MM",dimensions:"23*25*15",thickness:"30mm",pstock:"163",bstock:"164",vary:"1",ostock:"200",icom:"16",adj:"0",issue:"52",fromDate:"01-JUN-2021", toDate:"15-JUL-2021", part:"PLY23001", partCode:"Plywood Sheet", partMake:"Volvo", partModel:"Wood", eqptCode:"Plywood", eqptMake:"Volvo", eqptModel:"Bull Dozer", lastReceived:"10-JUN-21", openingStock:100, incomingStock:50, materialIssue:125, in:30, out:20, bookStock:35, physicalStock:33, varience:-2},
    {length:"100 CM",width:"47 CM",height:"63 MM", dimensions:"22*23*15",thickness:"30mm",pstock:"163",bstock:"164",vary:"1",ostock:"200",icom:"16",adj:"0",issue:"52",fromDate:"15-APR-2021", toDate:"30-APR-2021", part:"PLY23002", partCode:"Plumbing Pipes", partMake:"Caterpiller", partModel:"Pipes", eqptCode:"Plastic Pipes", eqptMake:"Caterpillar", eqptModel:"Cranes-Eicher", lastReceived:"25-APR-21", openingStock:200, incomingStock:50, materialIssue:220, in:50, out:40, bookStock:42, physicalStock:42, varience:0},
    {length:"120 CM",width:"44 CM",height:"99 MM", dimensions:"23*25*15",thickness:"20mm",pstock:"163",bstock:"164",vary:"1",ostock:"200",icom:"16",adj:"0",issue:"52",fromDate:"10-FEB-2021", toDate:"25-FEB-2021", part:"PLY23003", partCode:"Plywood Sheet", partMake:"Kirlosker", partModel:"Wood", eqptCode:"Plywood", eqptMake:"Tata Hitachi", eqptModel:"Excavator", lastReceived:"20-FEB-21", openingStock:120, incomingStock:30, materialIssue:125, in:40, out:30, bookStock:35, physicalStock:33, varience:-2},
    {length:"120 CM",width:"44 CM",height:"99 MM", dimensions:"22*23*13",thickness:"30mm",pstock:"163",bstock:"164",vary:"1",ostock:"200",icom:"16",adj:"0",issue:"52",fromDate:"25-JAN-2021", toDate:"10-FEB-2021", part:"PLY23004", partCode:"Plumbing Pipes", partMake:"Ashok Layland", partModel:"Pipes", eqptCode:"Plastic Pipes", eqptMake:"Ashok Layland", eqptModel:"Motor Grader", lastReceived:"05-FEB-21", openingStock:250, incomingStock:50, materialIssue:225, in:20, out:50, bookStock:50, physicalStock:40, varience:5},
    {length:"220 CM",width:"54 CM",height:"193 MM",dimensions:"23*25*15",thickness:"30mm",pstock:"163",bstock:"164",vary:"1",ostock:"200",icom:"16",adj:"0",issue:"52",fromDate:"15-APR-2021", toDate:"30-APR-2021", part:"PLY23006", partCode:"Plywood Sheet", partMake:"Caterpiller", partModel:"Wood", eqptCode:"Plywood", eqptMake:"Caterpillar", eqptModel:"Cranes-Eicher", lastReceived:"25-APR-21", openingStock:200, incomingStock:50, materialIssue:220, in:50, out:40, bookStock:42, physicalStock:42, varience:0},
    {length:"200 CM",width:"57 CM",height:"113 MM",dimensions:"22*25*14",thickness:"40mm",pstock:"163",bstock:"164",vary:"1",ostock:"200",icom:"16",adj:"0",issue:"52",fromDate:"01-JUN-2021", toDate:"15-JUL-2021", part:"PLY23008", partCode:"Plumbing Pipes", partMake:"Volvo", partModel:"Pipes", eqptCode:"Plastic Pipes", eqptMake:"Volvo", eqptModel:"Bull Dozer", lastReceived:"10-JUN-21", openingStock:100, incomingStock:50, materialIssue:125, in:30, out:20, bookStock:35, physicalStock:33, varience:-2},
    {length:"100 CM",width:"47 CM",height:"63 MM", dimensions:"21*25*15",thickness:"30mm",pstock:"163",bstock:"164",vary:"1",ostock:"200",icom:"16",adj:"0",issue:"52",fromDate:"25-JAN-2021", toDate:"10-FEB-2021", part:"PLY23012", partCode:"Plywood Sheet", partMake:"Ashok Layland", partModel:"Wood", eqptCode:"Plywood", eqptMake:"Ashok Layland", eqptModel:"Motor Grader", lastReceived:"05-FEB-21", openingStock:250, incomingStock:50, materialIssue:225, in:20, out:50, bookStock:45, physicalStock:40, varience:-5},
    {length:"120 CM",width:"44 CM",height:"99 MM", dimensions:"23*25*11",thickness:"20mm",pstock:"163",bstock:"164",vary:"1",ostock:"200",icom:"16",adj:"0",issue:"52",fromDate:"10-FEB-2021", toDate:"25-FEB-2021", part:"PLY23014", partCode:"WPC sheet", partMake:"Kirlosker", partModel:"Wood", eqptCode:"WPC", eqptMake:"Tata Hitachi", eqptModel:"Excavator", lastReceived:"20-FEB-21", openingStock:120, incomingStock:30, materialIssue:125, in:40, out:30, bookStock:35, physicalStock:33, varience:-2},
  ]


  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
  }

  openGridColumnsDialog(){
    this.dialog.open( GridcolPopupStockreconciliation2Component, {
      height:'auto',
      width:'700px'
    })
  } 

}
