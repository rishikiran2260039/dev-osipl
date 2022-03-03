import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-line-item-dialog',
  templateUrl: './add-line-item-dialog.component.html',
  styleUrls: ['./add-line-item-dialog.component.scss']
})
export class AddLineItemDialogComponent implements OnInit {

  constructor( public dialogRef : MatDialogRef<AddLineItemDialogComponent> ) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
