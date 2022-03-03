import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-oem-master-notes',
  templateUrl: './oem-master-notes.component.html',
  styleUrls: ['./oem-master-notes.component.scss']
})
export class OemMasterNotesComponent implements OnInit {

  constructor(public dialog : MatDialogRef<OemMasterNotesComponent>) { }

  ngOnInit() {
  }
  
  close(){
    this.dialog.close();
  }
}
