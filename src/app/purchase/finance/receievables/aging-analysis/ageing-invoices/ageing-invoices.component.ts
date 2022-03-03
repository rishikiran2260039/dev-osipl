import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-ageing-invoices',
  templateUrl: './ageing-invoices.component.html',
  styleUrls: ['./ageing-invoices.component.scss']
})
export class AgeingInvoicesComponent implements OnInit {
  gridCmp: any;
  value = 50;
  bufferValue = 75;

  filterToggle = false;

  items = [
    {projectname:'Pulse', date: '12-08-2019', invoice: '#435164034012', cus: 'John', order: '#OD4327-2854-9646', amount: '1270000', dueDate: '14-09-2019', pay: 'Add', paid: '0', bal: '1270000',Status:1, stageColour: '#00ff0040' },
    {projectname:'CPM', date: '28-12-2018', invoice: '#638765478234', cus: 'Mark', order: '#OD4327-2854-5467', amount: '1700000', dueDate: '30-12-2018', pay:'View', paid: '700000', bal: '1000000' ,Status:2, stageColour: '#C0C0C0' },
    {projectname:'Instant', date: '30-08-2019', invoice: '#435164039421', cus: 'Michael', order: '#OD4327-2854-1313', amount: '4290000', dueDate: '11-09-2019', pay: 'Add', paid: '0', bal: '4290000',Status:3 ,stageColour: '#87CEFA'  },
    {projectname:'Inscape', date: '19-12-2018', invoice: '#638765470123', cus: 'Kenneth', order: '#OD4327-2854-3284', amount: '3000000', dueDate: '29-12-2018', pay: 'View', paid: '1000000', bal: '2000000' ,Status:2 , stageColour: '#FFA50069'},
  ]
  statusOptions = [
    {value:1, name: 'Submitted', colorCode: '#00ff0040', potential:"1",},
    {value:2, name: 'Partial', colorCode: '#C0C0C0', potential:"2",},
    {value:3, name: 'Paid', colorCode: '#87CEFA', potential:"1",},
    {value:4, name: 'Cancelled', colorCode: '#FFA50069', potential:"3",},
  ]

  constructor(public dialog:MatDialog,private alertService: AlertService) { }

  ngOnInit() {
  }
  back(){
    window.history.back();
    }
}


