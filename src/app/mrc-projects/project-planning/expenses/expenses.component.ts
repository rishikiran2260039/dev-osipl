import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  items = [
    {date: "19-05-2021", username: "John", jobcode: "S521", site: "Site 1", contract: "Amazon", action: "Project Setup", expenseCode: "EP005", limitType: "limit 1", rate: "$500", quantity: "2", total: "$1000", notes: "1", reimbursable: "$100", manage: "Manage 1", createdDate: "02-01-2021"},
    {date: "12-05-2021", username: "Martin", jobcode: "M234", site: "Site 2", contract: "Raheja", action: "Field Design", expenseCode: "EP115", limitType: "limit 2", rate: "$600", quantity: "3", total: "$1800", notes: "2", reimbursable: "$200", manage: "Manage 2", createdDate: "20-12-2020"},
    {date: "05-04-2021", username: "Jacob", jobcode: "K221", site: "Site 3", contract: "MEIL", action: "Design Drafting", expenseCode: "EP208", limitType: "limit 3", rate: "$700", quantity: "4", total: "$2800", notes: "3", reimbursable: "$400", manage: "Manage 3", createdDate: "18-11-2020"},
    {date: "12-03-2021", username: "Samuels", jobcode: "L198", site: "Site 4", contract: "Dr. Reddy's", action: "Project Setup", expenseCode: "EP778", limitType: "limit 4", rate: "$800", quantity: "4", total: "$3200", notes: "4", reimbursable: "$500", manage: "Manage 4", createdDate: "25-10-2020"},
    {date: "22-02-2021", username: "Tom Jinny", jobcode: "G908", site: "Site 5", contract: "Reva", action: "Field Design", expenseCode: "EP550", limitType: "limit 5", rate: "$900", quantity: "5", total: "$4500", notes: "5", reimbursable: "$600", manage: "Manage 5", createdDate: "08-09-2020"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
