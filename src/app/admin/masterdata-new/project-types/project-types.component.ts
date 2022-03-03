import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ProjectTypesDialogueComponent } from './project-types-dialogue/project-types-dialogue.component';

@Component({
  selector: 'app-project-types',
  templateUrl: './project-types.component.html',
  styleUrls: ['./project-types.component.scss']
})
export class ProjectTypesComponent implements OnInit {
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  items = [
    {vcStatus:true,type: 'Construction', status: true},
    {vcStatus:true,type: 'Engineering', status: true},
    {vcStatus:true,type: 'Internal', status: true},
    {vcStatus:true,type: 'Legal', status: true},
  ]

  constructor(public dialog: MatDialog, private alertService: AlertService) { }

  ngOnInit() {
  }
  deleteUser(){
    this.alertService.createAlert('Successfully deleted.', 1);
}

saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}
  openActionTypeDialog(value) {
    let dialogRef = this.dialog.open(ProjectTypesDialogueComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

}
