import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-grnpopup-project',
  templateUrl: './grnpopup-project.component.html',
  styleUrls: ['./grnpopup-project.component.scss']
})
export class GrnpopupProjectComponent implements OnInit {

  constructor(public dialog:MatDialogRef<GrnpopupProjectComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
    
  }

}
