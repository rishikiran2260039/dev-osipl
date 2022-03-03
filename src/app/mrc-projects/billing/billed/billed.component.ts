import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billed',
  templateUrl: './billed.component.html',
  styleUrls: ['./billed.component.scss']
})
export class BilledComponent implements OnInit {

  items = [
    {site: "Site 1", sow: "SOW 1", fees: "Fixed", task: "Field", action: "Field Design", jobCode: "S531", expenseCode: "EP005", worked: 5, total: "$1200", expense: "$300", budgetTotal: "$1500", quotedTotal: "$1300", billed: "$1200", unbilled: "$300", invoiceNo: "#01528"},
    {site: "Site 2", sow: "SOW 2", fees: "Variable", task: "Quote", action: "Project Setup", jobCode: "K221", expenseCode: "EP112", worked: 4, total: "$1100", expense: "$200", budgetTotal: "$1300", quotedTotal: "$1100", billed: "$1100", unbilled: "$200", invoiceNo: "#01532"},
    {site: "Site 3", sow: "SOW 3", fees: "Fixed", task: "Administration", action: "Design Drafting", jobCode: "P578", expenseCode: "EP541", worked: 8, total: "$1600", expense: "$400", budgetTotal: "$2000", quotedTotal: "$1700", billed: "$1700", unbilled: "$300", invoiceNo: "#01539"},
    {site: "Site 4", sow: "SOW 4", fees: "Variable", task: "Management", action: "Project Setup", jobCode: "A958", expenseCode: "EP478", worked: 7, total: "$1500", expense: "$400", budgetTotal: "$1900", quotedTotal: "$1600", billed: "$1700", unbilled: "$200", invoiceNo: "#01545"},
    {site: "Site 5", sow: "SOW 5", fees: "Variable", task: "Quality Control", action: "Field Design", jobCode: "E425", expenseCode: "EP332", worked: 5, total: "$1200", expense: "$300", budgetTotal: "$1500", quotedTotal: "$1300", billed: "$1300", unbilled: "$200", invoiceNo: "#01552"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
