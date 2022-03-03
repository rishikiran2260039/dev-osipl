import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-partuploadform',
  templateUrl: './partuploadform.component.html',
  styleUrls: ['./partuploadform.component.scss']
})
export class PartuploadformComponent implements OnInit {

  constructor(public dialog: MatDialogRef<PartuploadformComponent>) { } 

  ngOnInit() {
  }
  close(){
    this.dialog.close()
  }
}
