import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-adjustments-dialog',
  templateUrl: './add-adjustments-dialog.component.html',
  styleUrls: ['./add-adjustments-dialog.component.scss']
})
export class AddAdjustmentsDialogComponent implements OnInit {

  selectedPosition: { id: number; value: string; }[];
  selectedItemCode: { id: number; value: string; }[];

  constructor(public dialog : MatDialogRef<AddAdjustmentsDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  positiondata = [
    {id: 1,value: 'Volvo'},
    {id: 2,value: 'Caterpillar'},
    {id: 3,value: 'Mercedes'},
    {id: 4,value: 'Tata'},
  ]; 

itemcodedata = [
  {id:1 ,value:'FMX480'},
  {id: 2,value:'D85ESS 17'},
  { id: 3,value: 'All Models' },
  { id: 4,value: 'ACTROS 4841K'},
  {id: 5,value: 'D85ESS 86'},
]
ngOnInit() {
  this.selectedPosition = this.positiondata
  this.selectedItemCode = this.itemcodedata
}

searchPosition(value: string){
  const filter = value.toLowerCase();
  return this.positiondata.filter(option => option.value.toLowerCase().includes(filter));
}

onKeyPosition(value) { 
  this.selectedPosition =  this.searchPosition(value);
}

searchItemCode(value: string){
  const filter = value.toLowerCase();
  return this.itemcodedata.filter(option => option.value.toLowerCase().includes(filter));
}

onKeyItemCode(value) { 
  this.selectedItemCode =  this.searchItemCode(value);
}

close(){
  this.dialog.close();
}
  
}