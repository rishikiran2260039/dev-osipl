import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-variantsinitem',
  templateUrl: './variantsinitem.component.html',
  styleUrls: ['./variantsinitem.component.scss']
})
export class VariantsinitemComponent implements OnInit {
  isadd:boolean = false;
  items = [
    {name: '12.5 MM', code: 'ACR', status: true},
    {name: '9.5 MM', code: 'BDR', status: true},
    {name: '15 MM', code: 'CLS', status: true},
    {name: '600 x 600 x 9 MM', code: 'GET', status: true},
    {name: '9.5 MM', code: 'OVH', status: true},
    {name: '12.5 MM', code: 'PVM', status: true},
    {name: '600 x 600 x 9 MM', code: 'RFD', status: true},
    {name: '12.5 MM', code: 'RNM', status: true},
    {name: '9.5 MM', code: 'SHM', status: true},
    {name: '600 x 600 x 9 MM', code: 'UCG', status: true},
  ]

  constructor(public dialog: MatDialog, private alertService: AlertService,public dialogRef: MatDialogRef<VariantsinitemComponent>,) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';

  ngOnInit() {
  }
add(item)
{
  if(item == 'add')
  {
    this.isadd = true;
  }
if(item == 'update'){
  this.isadd = true;
}
}

  saveStatus() {
    this.isadd = false;
}
close(): void {
  this.dialogRef.close();
}

}
