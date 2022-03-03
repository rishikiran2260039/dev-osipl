import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-grnpopup',
  templateUrl: './grnpopup.component.html',
  styleUrls: ['./grnpopup.component.scss']
})
export class GrnpopupComponent implements OnInit {

  constructor(public dialog:MatDialogRef<GrnpopupComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}
