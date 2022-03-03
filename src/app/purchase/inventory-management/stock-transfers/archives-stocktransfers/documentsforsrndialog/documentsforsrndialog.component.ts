import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-documentsforsrndialog',
  templateUrl: './documentsforsrndialog.component.html',
  styleUrls: ['./documentsforsrndialog.component.scss']
})
export class DocumentsforsrndialogComponent implements OnInit {

  constructor(public dialog:MatDialogRef<DocumentsforsrndialogComponent>){}

  ngOnInit() {
  }
  // <td class="text-center">{{item.Waybill}}<mat-icon>download</mat-icon></td>
  //               <td class="text-center">{{item.LR}}</td>
  //               <td class="text-center" style="color: blue; cursor: pointer;">{{item.Signed}}<mat-icon>download</mat-icon></td>
  items = [
    {Waybill:"view", LR:"-", Signed:"view"},
  ];

  close(){
    this.dialog.close();
  }

  pdf(){
    window.open('../../assets/sample.pdf')
  }
}
