import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-list-subcategories',
  templateUrl: './list-subcategories.component.html',
  styleUrls: ['./list-subcategories.component.scss']
})
export class ListSubcategoriesComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ListSubcategoriesComponent>) { }

  items=[
    {name:'Commercial'},
    {name:'BWP'},
    {name:'Marine'},
    {name:'FLEXIPLY'},
    {name:'BWR'},
    {name:'Veneered'},
    {name:'Laminated'},
  ]
  ngOnInit() {
  }
  close():void{
    this.dialogRef.close()
  }

}
