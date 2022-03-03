import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-billed',
  templateUrl: './project-billed.component.html',
  styleUrls: ['./project-billed.component.scss']
})
export class ProjectBilledComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items = [
    { invoiceNo: "A-025011-Inv001", fee: "Fixed", site: 'Site 1', sow: 'SRPR', awarded: 'No', task: 'Quality Control', action: 'Project Setup', jobCode: 'J001', expensesCode: 'Ex001', worked: '12', total: '30', expense: '11', budgetTotal: '$6,845.70', quotedTotal: '$6,846.00', billed: '$1,126.00', unbilled: '	$3,423.00', userName: 'Akhil', date: '25-05-2021' },
    { invoiceNo: "A-025011-Inv002", fee: "Variable", site: ' Site 2', sow: 'SRPR', awarded: 'No', task: 'Quote', action: 'Field Design', jobCode: 'J002', expensesCode: 'Ex002', worked: '10', total: '28', expense: '29', budgetTotal: '$6,845.70', quotedTotal: '$6,846.00', billed: '$2,146.00', unbilled: '	$3,423.00', userName: 'Nikhil', date: '05-05-2021' },
    { invoiceNo: "A-025011-Inv003", fee: "Fixed", site: 'Site 3', sow: 'SRPR', awarded: 'No', task: 'Administration', action: 'Design Drafting', jobCode: 'J003', expensesCode: 'Ex004', worked: '23', total: '29', expense: '23', budgetTotal: '$6,845.70', quotedTotal: '$6,283.00', billed: '$6,846.00', unbilled: '	$3,423.00', userName: 'Alpha', date: '20-05-2021' },
    { invoiceNo: "A-025011-Inv004", fee: "Fixed", site: 'Site 4', sow: 'SRPR', awarded: 'No', task: 'Field', action: 'Project Setup', jobCode: 'J004', expensesCode: 'Ex00166', worked: '34', total: '30', expense: '29', budgetTotal: '$6,845.70', quotedTotal: '$6,846.00', billed: '$2,846.00', unbilled: '	$3,423.00', userName: 'Vamsi', date: '27-05-2021' },
    { invoiceNo: "A-025011-Inv005", fee: "Variable", site: 'Site 5', sow: 'SRPR', awarded: 'No', task: 'Management', action: 'Field Design', jobCode: 'J005', expensesCode: 'Ex009', worked: '13', total: '50', expense: '19', budgetTotal: '$6,845.70', quotedTotal: '$6,846.00', billed: '$6,126.00', unbilled: '	$3,423.00', userName: 'Sachin', date: '12-05-2021' }
  ]
}
