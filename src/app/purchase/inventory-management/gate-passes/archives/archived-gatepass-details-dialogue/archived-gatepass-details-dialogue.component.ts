import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-archived-gatepass-details-dialogue',
  templateUrl: './archived-gatepass-details-dialogue.component.html',
  styleUrls: ['./archived-gatepass-details-dialogue.component.scss']
})
export class ArchivedGatepassDetailsDialogueComponent implements OnInit {

  constructor(public dialog:MatDialogRef<ArchivedGatepassDetailsDialogueComponent> ) { }

  ngOnInit() {
  }
  
  close(){
    this.dialog.close();
  }
}
