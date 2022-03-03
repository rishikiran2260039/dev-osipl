import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-uploaditemsform',
  templateUrl: './uploaditemsform.component.html',
  styleUrls: ['./uploaditemsform.component.scss']
})
export class UploaditemsformComponent implements OnInit {

  constructor(public dialog: MatDialogRef<UploaditemsformComponent>) { } 

  ngOnInit() {
  }

  close(){
    this.dialog.close()
  }

}
