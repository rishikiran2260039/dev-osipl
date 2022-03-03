import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-quotesscreen-add-dialogue',
  templateUrl: './quotesscreen-add-dialogue.component.html',
  styleUrls: ['./quotesscreen-add-dialogue.component.scss']
})
export class QuotesscreenAddDialogueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<QuotesscreenAddDialogueComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
