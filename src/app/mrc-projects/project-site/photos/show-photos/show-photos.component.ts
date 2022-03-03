import { MatDialog, MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-photos',
  templateUrl: './show-photos.component.html',
  styleUrls: ['./show-photos.component.scss']
})
export class ShowPhotosComponent implements OnInit {

  items = [{ title: 'assets/tables.jpg' }, { title: 'assets/wires.jpg' }, { title: 'assets/tiles.jpg' },{ title: 'assets/pipes.jpg' }];
  
      
  constructor(public dialogRef: MatDialogRef<ShowPhotosComponent>) { }

  ngOnInit() {
  }


  
  
  
  close(): void {
    this.dialogRef.close();
  }





}

