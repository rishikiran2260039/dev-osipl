import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-property',
  templateUrl: './project-property.component.html',
  styleUrls: ['./project-property.component.scss']
})
export class ProjectPropertyComponent implements OnInit {
  filterToggle: boolean;
  filterState: string;

  constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  
  ngOnInit() {
    this.setTitle("CPM | Overview");
  }
  filterFunction() {
    this.filterToggle = !this.filterToggle;
    this.filterState = this.filterToggle === true ? 'initial' : 'final';
  }
}
