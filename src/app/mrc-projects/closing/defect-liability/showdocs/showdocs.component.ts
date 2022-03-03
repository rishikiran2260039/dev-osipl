import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-showdocs',
  templateUrl: './showdocs.component.html',
  styleUrls: ['./showdocs.component.scss']
})
export class ShowdocsComponent implements OnInit {

  items=[
    {"name":"Electrical Document"},
    {"name":"Construction Document"},
    {"name":"Tools Document"}
   
  ]
   
  constructor(public dialogRef: MatDialogRef<ShowdocsComponent>) { 
    
  }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
