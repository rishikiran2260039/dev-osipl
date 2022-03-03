import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-notes-active-material-issues',
  templateUrl: './notes-active-material-issues.component.html',
  styleUrls: ['./notes-active-material-issues.component.scss']
})
export class NotesActiveMaterialIssuesComponent implements OnInit {

  constructor(public dialog : MatDialogRef<NotesActiveMaterialIssuesComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}
