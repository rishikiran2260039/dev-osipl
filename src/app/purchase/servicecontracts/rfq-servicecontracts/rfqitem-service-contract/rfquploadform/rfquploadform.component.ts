import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-rfquploadform',
  templateUrl: './rfquploadform.component.html',
  styleUrls: ['./rfquploadform.component.scss']
})
export class RfquploadformComponent implements OnInit {

  constructor(public dialog: MatDialogRef<RfquploadformComponent>) { } 

  ngOnInit() {
  }
  close(){
    this.dialog.close()
  }
}
