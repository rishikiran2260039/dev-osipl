import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-newproject-dashboard',
  templateUrl: './newproject-dashboard.component.html',
  styleUrls: ['./newproject-dashboard.component.scss']
})
export class NewprojectDashboardComponent implements OnInit {

  constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.setTitle("CPM | Project Dashboard");
  }

}