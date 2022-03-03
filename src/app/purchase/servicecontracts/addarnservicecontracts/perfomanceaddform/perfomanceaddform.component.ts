import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-perfomanceaddform',
  templateUrl: './perfomanceaddform.component.html',
  styleUrls: ['./perfomanceaddform.component.scss']
})
export class PerfomanceaddformComponent implements OnInit {

  constructor(public dialog : MatDialogRef<PerfomanceaddformComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }
}
