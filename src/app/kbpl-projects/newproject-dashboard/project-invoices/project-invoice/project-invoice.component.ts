import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-invoice',
  templateUrl: './project-invoice.component.html',
  styleUrls: ['./project-invoice.component.scss']
})
export class ProjectInvoiceComponent implements OnInit {
  filterToggle: boolean;
  filterState: string;

  constructor() { }

  ngOnInit() {
  }
  items = [
    { azInvoiceNo: 'A-025011-Inv001', officialInvoiceNo: 'O-025011-Inv001', invoiceTotal: '$1,267.99', balanceAmount: '$1,120.00', invoiceDate: '01-02-2021', daysOld: '11', invoiceStatus: 'send', activityDate: '25-02-2021', sentTo: 'Sachin', sentBy: 'Admin', createdDate: '09-04-2021', sendDate: '25-02-2021', stageColour: '#00ff0040', "Status": 1 },
    { azInvoiceNo: 'A-025011-Inv002', officialInvoiceNo: 'O-025011-Inv001', invoiceTotal: '$2,837.99', balanceAmount: '$1,340.00', invoiceDate: '02-02-2021', daysOld: '31', invoiceStatus: 'send', activityDate: '26-02-2021', sentTo: 'Nikhil', sentBy: 'Admin', createdDate: '10-04-2021', sendDate: '26-02-2021', stageColour: '#00ff0040', "Status": 1 },
    { azInvoiceNo: 'A-025011-Inv003', officialInvoiceNo: 'O-025011-Inv001', invoiceTotal: '$3,767.99', balanceAmount: '$2,000.00', invoiceDate: '03-02-2021', daysOld: '21', invoiceStatus: 'send', activityDate: '27-02-2021', sentTo: 'Sairam', sentBy: 'Admin', createdDate: '11-04-2021', sendDate: '25-02-2021', stageColour: '#00ff0040', "Status": 1 },
    { azInvoiceNo: 'A-025011-Inv004', officialInvoiceNo: 'O-025011-Inv001', invoiceTotal: '$1,867.99', balanceAmount: '$3,440.00', invoiceDate: '04-02-2021', daysOld: '41', invoiceStatus: 'send', activityDate: '29-02-2021', sentTo: 'Vijay', sentBy: 'Admin', createdDate: '12-04-2021', sendDate: '28-02-2021', stageColour: '#00ff0040', "Status": 1 },
    { azInvoiceNo: 'A-025011-Inv005', officialInvoiceNo: 'O-025011-Inv001', invoiceTotal: '$2,967.99', balanceAmount: '$3,900.00', invoiceDate: '05-02-2021', daysOld: '51', invoiceStatus: 'send', activityDate: '30-02-2021', sentTo: 'Surya', sentBy: 'Admin', createdDate: '12-04-2021', sendDate: '29-02-2021', stageColour: '#00ff0040', "Status": 1 }
  ]
  statusOptions = [
    { value: 1, name: 'send', colorCode: '#00ff0040' },
    { value: 2, name: 'New', colorCode: '#C0C0C0' },
    { value: 3, name: 'Revised', colorCode: '#87CEFA' },
  ]
  filterFunction() {
    this.filterToggle = !this.filterToggle;
    this.filterState = this.filterToggle === true ? 'initial' : 'final';
  }
}
