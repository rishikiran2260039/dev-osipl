import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-notes-archives-stocktransfers',
  templateUrl: './notes-archives-stocktransfers.component.html',
  styleUrls: ['./notes-archives-stocktransfers.component.scss']
})
export class NotesArchivesStocktransfersComponent implements OnInit {

  constructor(public dialog : MatDialogRef<NotesArchivesStocktransfersComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}