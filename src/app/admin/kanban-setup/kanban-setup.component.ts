import { Component,ViewChild, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragHandle} from '@angular/cdk/drag-drop';
import {MatTable} from '@angular/material/table';

import { AlertService } from 'src/app/shared/services/alert.service';
import { KanbanDialogComponent } from './kanban-dialog/kanban-dialog.component';

export interface items {
  project: string;
  status : boolean;
}

const project: items[] = [
  {project: 'Awarded', status: true}, 
  {project: 'Blueprint',status: true}, 
  {project: 'Initiated',status: true}, 
  {project: 'Progress ',status: true}, 
  {project: 'Near Completion',status: true}, 
  {project: 'Completed',status: true}, 
  {project: 'Cancelled  ',status: true}, 
  {project: 'On Hold',status: true}, 
]

@Component({
  selector: 'app-kanban-setup',
  templateUrl: './kanban-setup.component.html',
  styleUrls: ['./kanban-setup.component.scss']

})
export class KanbanSetupComponent implements OnInit {
  status = [{id:1 , value:"Active"} , {id:2 , value:"Inactive"}];
  filterForm:FormGroup;
  
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  @ViewChild('table') table: MatTable<items>;
  displayedColumns: string[] = ['project','status'];
  dataSource = project;

  items = [
    {project: 'Awarded', Status: true}, 
    {project: 'Blueprint', Status: true}, 
    {project: 'Initiated', Status: true}, 
    {project: 'Progress', Status: true}, 
    {project: 'Near Completion', Status: true}, 
    {project: 'Completed', Status: true}, 
    {project: 'Cancelled ', Status: true}, 
    {project: 'On Hold', Status: true}, 
    
  ];
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

  dropTable(event: CdkDragDrop<items[]>) {
    const prevIndex = this.dataSource.findIndex((d) => d === event.item.data);
    moveItemInArray(this.dataSource, prevIndex, event.currentIndex);
    this.table.renderRows();
  }

  constructor(public dialog: MatDialog, private alertService: AlertService) {}

  ngOnInit() {
  }

  public openleadDialog() {
    let dialogRef = this.dialog.open(KanbanDialogComponent, {
        data: false,
        height: 'auto',
        width: '600px',
        disableClose: true
    });
  }
  saveStatus(data) {
    this.alertService.createAlert('Successfully saved.', 1);
}
}
