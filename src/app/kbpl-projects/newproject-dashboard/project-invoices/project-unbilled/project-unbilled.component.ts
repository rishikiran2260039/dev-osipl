import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-unbilled',
  templateUrl: './project-unbilled.component.html',
  styleUrls: ['./project-unbilled.component.scss']
})
export class ProjectUnbilledComponent implements OnInit {
  filterToggle: boolean;
  filterState: string;

  constructor() { }

  ngOnInit() {
  }
  items = [
    { fee: "100", site: 'Site 1', sow: 'SRPR', awarded: 'No', task: 'Quality Control', action: 'Project Setup', jobCode: 'J001', expensesCode: 'Ex001', worked: '12', total: '30', expense: '11', budgetTotal: '$6,845.70', quotedTotal: '$6,846.00', unbilled: '	$3,423.00', userName: 'Akhil', date: '25-05-2021' },
    { fee: "1020", site: 'Site 2', sow: 'SRPR', awarded: 'No', task: 'Quote', action: 'Field Design', jobCode: 'J002', expensesCode: 'Ex002', worked: '10', total: '28', expense: '29', budgetTotal: '$6,845.70', quotedTotal: '$6,846.00', unbilled: '	$3,423.00', userName: 'Nikhil', date: '05-05-2021' },
    { fee: "293", site: 'Site 3', sow: 'SRPR', awarded: 'No', task: 'Administration', action: 'Design Drafting', jobCode: 'J003', expensesCode: 'Ex004', worked: '23', total: '29', expense: '23', budgetTotal: '$6,845.70', quotedTotal: '$6,846.00', unbilled: '	$3,423.00', userName: 'Alpha', date: '20-05-2021' },
    { fee: "390", site: 'Site 4', sow: 'SRPR', awarded: 'No', task: 'Field', action: 'Project Setup', jobCode: 'J004', expensesCode: 'Ex00166', worked: '34', total: '30', expense: '29', budgetTotal: '$6,845.70', quotedTotal: '$6,846.00', unbilled: '	$3,423.00', userName: 'Vamsi', date: '27-05-2021' },
    { fee: "180", site: 'Site 5', sow: 'SRPR', awarded: 'No', task: 'Management', action: 'Field Design', jobCode: 'J005', expensesCode: 'Ex009', worked: '13', total: '50', expense: '19', budgetTotal: '$6,845.70', quotedTotal: '$6,846.00', unbilled: '	$3,423.00', userName: 'Sachin', date: '12-05-2021' }
  ]
  filterFunction() {
    this.filterToggle = !this.filterToggle;
    this.filterState = this.filterToggle === true ? 'initial' : 'final';
  }
}