import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-compose-email-dialog',
  templateUrl: './compose-email-dialog.component.html',
  styleUrls: ['./compose-email-dialog.component.scss']
})
export class ComposeEmailDialogComponent implements OnInit {

  constructor(public dialog: MatDialogRef<ComposeEmailDialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close()
  }

  toolBar = {
    "toolbar": [
      ["bold", "italic", "underline", "strikeThrough"],
      ["justifyLeft", "justifyRight", "justifyFull", "outdent"]
    ]
  }

}
