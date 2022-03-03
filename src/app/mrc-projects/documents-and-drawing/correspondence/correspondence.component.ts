import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import {AddCorrespondenceDialogComponent} from './add-correspondence-dialog/add-correspondence-dialog.component';

@Component({
  selector: 'app-correspondence',
  templateUrl: './correspondence.component.html',
  styleUrls: ['./correspondence.component.scss']
})
export class CorrespondenceComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  filterToggle:boolean;

  ngOnInit() {
    console.log("correspondence works");
  }

  items: any =[
    {date:"13-09-2020",subject:"For the attention of Financial Manager",sender:"Parmeet",recipient:"Aman",status:"Draft",remarks:"Regarding the Financials"},
    {date:"15-10-2020",subject:"For the attention of Financial Manager",sender:"John",recipient:"Aman",status:"Signed",remarks:"Regarding the Financials"},
    {date:"18-10-2020",subject:"For the attention of Financial Manager",sender:"Vijay",recipient:"Aman",status:"Draft",remarks:"Regarding the Financials"},
    {date:"26-11-2020",subject:"For the attention of Financial Manager",sender:"Parmeet",recipient:"Aman",status:"Signed",remarks:"Regarding the Financials"},

  ]

  openAddCorrespondence(assets){
    let dialogRef = this.dialog.open(AddCorrespondenceDialogComponent, {
      data: assets,
      height: 'auto',
      width: '600px',
      autoFocus: false,
    })

    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }

  openDeleteDialog(assets) {
    let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      data: assets,
      height: 'auto',
      width: 'auto',
      autoFocus: false
    });
    
    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }

}
