import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-pending-add-form',
  templateUrl: './pending-add-form.component.html',
  styleUrls: ['./pending-add-form.component.scss']
})
export class PendingAddFormComponent implements OnInit {

  constructor(public dialog:MatDialogRef<PendingAddFormComponent>) { } 

  ngOnInit() {
  }
  close(){
    this.dialog.close()
  }

}
