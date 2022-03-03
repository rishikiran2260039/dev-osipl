import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-foreclose-popup',
  templateUrl: './foreclose-popup.component.html',
  styleUrls: ['./foreclose-popup.component.scss']
})
export class ForeclosePopupComponent implements OnInit {

  constructor(public dialog:MatDialogRef<ForeclosePopupComponent>) { }
  

  ngOnInit() {
  }

  close(){
    this.dialog.close()
  }

 

}