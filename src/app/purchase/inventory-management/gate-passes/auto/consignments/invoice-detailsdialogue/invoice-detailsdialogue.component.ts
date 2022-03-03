import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatDialogRef } from '@angular/material';
import { ChangesmadeinconsignmentsComponent } from '../changesmadeinconsignments/changesmadeinconsignments.component';

@Component({
  selector: 'app-invoice-detailsdialogue',
  templateUrl: './invoice-detailsdialogue.component.html',
  styleUrls: ['./invoice-detailsdialogue.component.scss']
})
export class InvoiceDetailsdialogueComponent implements OnInit {

  constructor(public dialog: MatDialog ,public dialog1:MatDialogRef<InvoiceDetailsdialogueComponent>) { }
  filterToggle = false;

  ngOnInit() {
  }

  
  

  items = [
    {PORef:" BGR/OM/BHL/APR/19-20/1004", Invoice:"INV-456667",InvoiceValue:"3,92,940.00",InvoiceDate:"10-Apr-2020"},
    

  ]

  

  public changesmadeinconsignment() {
    let dialogRef = this.dialog.open(ChangesmadeinconsignmentsComponent, {
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  close(){
    this.dialog1.close();
  }


  

  
}