import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UploadPhysicalStockComponent } from './upload-physical-stock/upload-physical-stock.component';

@Component({
  selector: 'app-project-stockreconciliation',
  templateUrl: './project-stockreconciliation.component.html',
  styleUrls: ['./project-stockreconciliation.component.scss']
})
export class ProjectStockreconciliationComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  ngOnInit() {
  }

  filterToggle = false;

  items = [
    {fromDate:"01-JUN-2021", toDate:"15-JUL-2021", items:"780", varience:12,storelocation:"Hyderabad"},
    {fromDate:"15-APR-2021", toDate:"30-APR-2021", items:"526", varience:9,storelocation:"Mumbai"},
    {fromDate:"10-FEB-2021", toDate:"25-FEB-2021", items:"816", varience:15,storelocation:"Karnataka"},
    {fromDate:"25-JAN-2021", toDate:"10-FEB-2021", items:"600", varience:20,storelocation:"Chennai"},
    {fromDate:"05-MAR-2021", toDate:"20-MAR-2021", items:"850", varience:13,storelocation:"Raipur"},

  ];

  
  public UploadStock(item) {
    let dialogRef = this.dialog.open(UploadPhysicalStockComponent, {
      data:item,
      height: 'auto',
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  } 

  
}
