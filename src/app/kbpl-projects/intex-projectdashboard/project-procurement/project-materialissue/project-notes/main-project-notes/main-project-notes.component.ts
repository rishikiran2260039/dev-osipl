import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-main-project-notes',
  templateUrl: './main-project-notes.component.html',
  styleUrls: ['./main-project-notes.component.scss']
})
export class MainProjectNotesComponent implements OnInit {

  constructor(public dialog : MatDialogRef<MainProjectNotesComponent>) { }

  ngOnInit() {
  }
  
  close(){
    this.dialog.close();
  }
}
