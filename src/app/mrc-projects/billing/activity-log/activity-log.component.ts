import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddPaymentComponent } from '../../add-payment/add-payment.component';

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.scss']
})
export class ActivityLogComponent implements OnInit {

  filterToggle = false;

  tableList = [
    { date: '12-08-2019', invoice: '#435164034012', cus: 'John', order: '#OD4327-2854-9646', amount: '1270', dueDate: '14-09-2019', pay: 'Add', paid: '0', bal: '1270' },
    { date: '28-12-2018', invoice: '#638765478234', cus: 'John', order: '#OD4327-2854-5467', amount: '1700', dueDate: '30-12-2018', pay: '2', paid: '700', bal: '1000' },
    { date: '30-08-2019', invoice: '#435164039421', cus: 'John', order: '#OD4327-2854-1313', amount: '4290', dueDate: '11-09-2019', pay: 'Add', paid: '0', bal: '4290' },
    { date: '19-12-2018', invoice: '#638765470123', cus: 'John', order: '#OD4327-2854-3284', amount: '3000', dueDate: '29-12-2018', pay: '2', paid: '1000', bal: '2000' },
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  addPayment()
  {
    let dialogueRef = this.dialog.open(AddPaymentComponent, {
      height: 'auto',
      width: '400px'
    })
  }

}
