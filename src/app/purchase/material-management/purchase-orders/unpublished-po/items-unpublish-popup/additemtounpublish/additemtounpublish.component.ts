import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-additemtounpublish',
  templateUrl: './additemtounpublish.component.html',
  styleUrls: ['./additemtounpublish.component.scss']
})
export class AdditemtounpublishComponent implements OnInit {
  selected1 = "Plaster & Boards";
  selected2 = "Commercial";
  selected3 = "VANGYP";
  constructor(public dialogRef: MatDialogRef<AdditemtounpublishComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { 
    
  }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
