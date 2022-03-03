import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-allocation',
  templateUrl: './add-allocation.component.html',
  styleUrls: ['./add-allocation.component.scss']
})
export class AddAllocationComponent implements OnInit {

    
  constructor(public dialogRef: MatDialogRef<AddAllocationComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}