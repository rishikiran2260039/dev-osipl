import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-notes-archives-material-issues',
  templateUrl: './notes-archives-material-issues.component.html',
  styleUrls: ['./notes-archives-material-issues.component.scss']
})
export class NotesArchivesMaterialIssuesComponent implements OnInit {

  constructor(public dialog : MatDialogRef<NotesArchivesMaterialIssuesComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}
