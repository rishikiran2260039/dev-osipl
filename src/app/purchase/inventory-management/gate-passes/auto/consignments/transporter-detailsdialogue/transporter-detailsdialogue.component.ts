import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';



@Component({
  selector: 'app-transporter-detailsdialogue',
  templateUrl: './transporter-detailsdialogue.component.html',
  styleUrls: ['./transporter-detailsdialogue.component.scss']
})
export class TransporterDetailsdialogueComponent implements OnInit {

  constructor(public dialog:MatDialogRef<TransporterDetailsdialogueComponent>) { }

  ngOnInit() {
  }

  filterToggle = false;
  
  close(){
    this.dialog.close();
  }
}
