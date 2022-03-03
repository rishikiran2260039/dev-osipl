import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  selected1 = "Plaster & Boards";
  selected2 = "Commercial";
  selected3 = "VANGYP";
  constructor(public dialogRef: MatDialogRef<AddItemComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { 
    
  }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
