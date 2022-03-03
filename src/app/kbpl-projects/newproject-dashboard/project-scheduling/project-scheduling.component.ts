import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-scheduling',
  templateUrl: './project-scheduling.component.html',
  styleUrls: ['./project-scheduling.component.scss']
})
export class ProjectSchedulingComponent implements OnInit {
  filterToggle: boolean;
  tabNumber: number = 1;

  constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  ngOnInit() {
    this.setTitle("CPM | Scheduling");

  }

  navigatePage(value) {
    this.tabNumber = value;
  }

}
