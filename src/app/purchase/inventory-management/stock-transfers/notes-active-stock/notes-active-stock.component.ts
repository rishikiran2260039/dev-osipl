import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-notes-active-stock',
  templateUrl: './notes-active-stock.component.html',
  styleUrls: ['./notes-active-stock.component.scss']
})
export class NotesActiveStockComponent implements OnInit {

  constructor(public dialog : MatDialogRef<NotesActiveStockComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }


}
