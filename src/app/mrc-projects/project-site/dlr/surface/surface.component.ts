import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddupdateDialogComponent } from '../addupdate-dialog/addupdate-dialog.component';

@Component({
  selector: 'app-surface',
  templateUrl: './surface.component.html',
  styleUrls: ['./surface.component.scss']
})
export class SurfaceComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  items = [
    {date:'12-10-2020',nill:'-',remarks:'None'},
    {date:'13-10-2020',nill:'-',remarks:'None'},
    {date:'14-10-2020',nill:'-',remarks:'None'},
    {date:'15-10-2020',nill:'-',remarks:'None'},
    {date:'16-10-2020',nill:'-',remarks:'None'}
  ]

  public openAddUpdate() {
    let dialogRef = this.dialog.open(AddupdateDialogComponent, {
      
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}
