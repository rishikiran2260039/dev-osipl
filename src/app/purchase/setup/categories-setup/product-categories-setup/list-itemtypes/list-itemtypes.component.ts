import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-list-itemtypes',
  templateUrl: './list-itemtypes.component.html',
  styleUrls: ['./list-itemtypes.component.scss']
})
export class ListItemtypesComponent implements OnInit {


  constructor(public dialogRef:MatDialogRef<ListItemtypesComponent>) { }

  items=[
    {name:'Plain'},
    {name:'Duraline Board'},
    {name:'ACOUSTICAL'},
    {name:'MR Board'},
    {name:'Duraline Board'},
    {name:'ACOUSTICAL'},
    {name:'Plain'},
  ]
  ngOnInit() {
  }
  close():void{
    this.dialogRef.close()
  }
}
