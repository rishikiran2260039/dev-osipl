import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-itemsdialog',
  templateUrl: './itemsdialog.component.html',
  styleUrls: ['./itemsdialog.component.scss']
})
export class ItemsdialogComponent implements OnInit {


  items=[
    {"number":"20-01-2021","name":"Brick"},
    {"number":"23-01-2021","name":"Steel"},
    {"number":"05-02-2021","name":"Cement"},
    {"number":"16-02-2021","name":"Stone"},
    {"number":"22-02-2021","name":"Concrete"},
  ]
  constructor(public dialogRef: MatDialogRef<ItemsdialogComponent>) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}
