import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-re-orderuploadform',
  templateUrl: './re-orderuploadform.component.html',
  styleUrls: ['./re-orderuploadform.component.scss']
})
export class ReOrderuploadformComponent implements OnInit {

  constructor(public dialog: MatDialogRef<ReOrderuploadformComponent>) { } 

  ngOnInit() {
  }
 
  close(){
    this.dialog.close()
  }
}
