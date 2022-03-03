import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-notes-dialogue',
  templateUrl: './add-notes-dialogue.component.html',
  styleUrls: ['./add-notes-dialogue.component.scss']
})
export class AddNotesDialogueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddNotesDialogueComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}
