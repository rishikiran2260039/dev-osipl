import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss']
})
export class HoursComponent implements OnInit {

  items = [
    {date: "19-05-2021", username: "John", jobcode: "S521", site: "Site 1", contract: "Amazon", task: "Quote", action: "Project Setup", actionStatus: "In Progress", plan: 6, assigned: 5, worked: 4, remaining: 1, actual: 4, notes: 1, dueDate: "15-06-2021", createdDate: "02-01-2021"},
    {date: "12-05-2021", username: "Martin", jobcode: "M234", site: "Site 2", contract: "Raheja", task: "Administration", action: "Field Design", actionStatus: "Completed", plan: 8, assigned: 6, worked: 5, remaining: 1, actual: 6, notes: 2, dueDate: "09-06-2021", createdDate: "20-12-2020"},
    {date: "05-04-2021", username: "Jacob", jobcode: "K221", site: "Site 3", contract: "MEIL", task: "Field", action: "Design Drafting", actionStatus: "On Hold", plan: 7, assigned: 6, worked: 5, remaining: 1, actual: 6, notes: 3, dueDate: "28-05-2021", createdDate: "18-11-2020"},
    {date: "12-03-2021", username: "Samuels", jobcode: "L198", site: "Site 4", contract: "Dr. Reddy's", task: "Quality Control", action: "Project Setup", actionStatus: "In Progress", plan: 10, assigned: 8, worked: 6, remaining: 2, actual: 8, notes: 4, dueDate: "11-05-2021", createdDate: "25-10-2020"},
    {date: "22-02-2021", username: "Tom Jinny", jobcode: "G908", site: "Site 5", contract: "Reva", task: "Management", action: "Field Design", actionStatus: "To Do", plan: 12, assigned: 9, worked: 7, remaining: 2, actual: 9, notes: 5, dueDate: "19-04-2021", createdDate: "08-09-2020"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
