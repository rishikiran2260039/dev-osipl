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
    {fromDate:"01-JUN-2021", toDate:"15-JUL-2021", part:"B229900003680", partCode:"V-36XD", partMake:"Volvo", partModel:"EC210", eqptCode:"DX-245", eqptMake:"Volvo", eqptModel:"Bull Dozer", lastReceived:"10-JUN-21", openingStock:100, incomingStock:50, materialIssue:125, in:30, out:20, bookStock:35, physicalStock:33, varience:-2},
    {fromDate:"15-APR-2021", toDate:"30-APR-2021", part:"421-60-35170", partCode:"C-234/6", partMake:"Caterpiller", partModel:"EC240", eqptCode:"CAT356-DX", eqptMake:"Caterpillar", eqptModel:"Cranes-Eicher", lastReceived:"25-APR-21", openingStock:200, incomingStock:50, materialIssue:220, in:50, out:40, bookStock:42, physicalStock:42, varience:0},
    {fromDate:"10-FEB-2021", toDate:"25-FEB-2021", part:"B221000000122", partCode:"TH-134F2", partMake:"Kirlosker", partModel:"EC290", eqptCode:"T-456H", eqptMake:"Tata Hitachi", eqptModel:"Excavator", lastReceived:"20-FEB-21", openingStock:120, incomingStock:30, materialIssue:125, in:40, out:30, bookStock:35, physicalStock:33, varience:-2},
    {fromDate:"25-JAN-2021", toDate:"10-FEB-2021", part:"VO 22075799", partCode:"LA-235G2", partMake:"Ashok Layland", partModel:"EC360", eqptCode:"LA-543", eqptMake:"Ashok Layland", eqptModel:"Motor Grader", lastReceived:"05-FEB-21", openingStock:250, incomingStock:50, materialIssue:225, in:20, out:50, bookStock:45, physicalStock:40, varience:-5},
    {fromDate:"15-APR-2021", toDate:"30-APR-2021", part:"421-60-35170", partCode:"C-234/6", partMake:"Caterpiller", partModel:"EC240", eqptCode:"CAT356-DX", eqptMake:"Caterpillar", eqptModel:"Cranes-Eicher", lastReceived:"25-APR-21", openingStock:200, incomingStock:50, materialIssue:220, in:50, out:40, bookStock:42, physicalStock:42, varience:0},
    {fromDate:"01-JUN-2021", toDate:"15-JUL-2021", part:"B229900003680", partCode:"V-36XD", partMake:"Volvo", partModel:"EC210", eqptCode:"DX-245", eqptMake:"Volvo", eqptModel:"Bull Dozer", lastReceived:"10-JUN-21", openingStock:100, incomingStock:50, materialIssue:125, in:30, out:20, bookStock:36, physicalStock:33, varience:3},
    {fromDate:"25-JAN-2021", toDate:"10-FEB-2021", part:"VO 22075799", partCode:"LA-235G2", partMake:"Ashok Layland", partModel:"EC360", eqptCode:"LA-543", eqptMake:"Ashok Layland", eqptModel:"Motor Grader", lastReceived:"05-FEB-21", openingStock:250, incomingStock:50, materialIssue:225, in:20, out:50, bookStock:45, physicalStock:40, varience:-5},
    {fromDate:"10-FEB-2021", toDate:"25-FEB-2021", part:"B221000000122", partCode:"TH-134F2", partMake:"Kirlosker", partModel:"EC290", eqptCode:"T-456H", eqptMake:"Tata Hitachi", eqptModel:"Excavator", lastReceived:"20-FEB-21", openingStock:120, incomingStock:30, materialIssue:125, in:40, out:30, bookStock:31, physicalStock:33, varience:2},
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
