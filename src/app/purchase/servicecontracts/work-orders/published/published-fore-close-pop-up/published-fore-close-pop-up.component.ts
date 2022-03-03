import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-published-fore-close-pop-up',
  templateUrl: './published-fore-close-pop-up.component.html',
  styleUrls: ['./published-fore-close-pop-up.component.scss']
})
export class PublishedForeClosePopUpComponent implements OnInit {

  constructor(public dialog:MatDialogRef<PublishedForeClosePopUpComponent>) { } 
  ngOnInit() { } 
  close(){ this.dialog.close() } }