import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LineItemDialogComponent } from './line-item-dialog/line-item-dialog.component';

@Component({
  selector: 'app-unbilled',
  templateUrl: './unbilled.component.html',
  styleUrls: ['./unbilled.component.scss']
})
export class UnbilledComponent implements OnInit {

  items = [
    {site: "Site 1", sow: "SOW 1", awarded: "Yes", fees: "$50", task: "Field", action: "Field Design", jobCode: "S531", expenseCode: "EP005", worked: 5, total: "$1200", expense: "$300", budgetTotal: "$1500", quotedTotal: "$1300", unbilled: "$200", username: "Mary", date: "12-04-2021"},
    {site: "Site 2", sow: "SOW 2", awarded: "No", fees: "$70", task: "Quote", action: "Project Setup", jobCode: "K221", expenseCode: "EP112", worked: 4, total: "$1100", expense: "$200", budgetTotal: "$1300", quotedTotal: "$1100", unbilled: "$200", username: "Brains", date: "05-04-2021"},
    {site: "Site 3", sow: "SOW 3", awarded: "Yes", fees: "$80", task: "Administration", action: "Design Drafting", jobCode: "P578", expenseCode: "EP541", worked: 8, total: "$1600", expense: "$400", budgetTotal: "$2000", quotedTotal: "$1700", unbilled: "$300", username: "Johnson", date: "25-03-2021"},
    {site: "Site 4", sow: "SOW 4", awarded: "Yes", fees: "$70", task: "Management", action: "Project Setup", jobCode: "A958", expenseCode: "EP478", worked: 7, total: "$1500", expense: "$400", budgetTotal: "$1900", quotedTotal: "$1600", unbilled: "$300", username: "Mark", date: "15-03-2021"},
    {site: "Site 5", sow: "SOW 5", awarded: "No", fees: "$60", task: "Quality Control", action: "Field Design", jobCode: "E425", expenseCode: "EP332", worked: 5, total: "$1200", expense: "$300", budgetTotal: "$1500", quotedTotal: "$1300", unbilled: "$200", username: "Stew", date: "12-02-2021"},
  ];

  lineItemDialog(){
    let matDialogRef = this.matDialog.open(LineItemDialogComponent, {
      height:'auto',
      width:'600px'
    })

  }

  constructor(public matDialog: MatDialog) { }

  ngOnInit() {
  }

}
