import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-assets-indent',
  templateUrl: './add-assets-indent.component.html',
  styleUrls: ['./add-assets-indent.component.scss']
})
export class AddAssetsIndentComponent implements OnInit {

  selectedPosition: { id: number; value: string; }[];

  constructor(public dialogRef: MatDialogRef<AddAssetsIndentComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  positiondata = [
    {id: 1,value: 'E005KA10012'},
    {id: 2,value: 'E005KA10022'},
    {id: 3,value: 'E005KA10023'},
    {id: 4,value: 'E005KA10045'},
  ]; 

  ngOnInit() {
    this.selectedPosition = this.positiondata
  }


  searchPosition(value: string){
    const filter = value.toLowerCase();
    return this.positiondata.filter(option => option.value.toLowerCase().includes(filter));
  }

  onKeyPosition(value) { 
    this.selectedPosition =  this.searchPosition(value);
  }
  
  close(): void {
    this.dialogRef.close();
  }

}
