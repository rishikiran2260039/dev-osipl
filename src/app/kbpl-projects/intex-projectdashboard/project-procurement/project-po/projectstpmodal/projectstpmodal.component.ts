import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-projectstpmodal',
  templateUrl: './projectstpmodal.component.html',
  styleUrls: ['./projectstpmodal.component.scss'] 
})
export class ProjectstpmodalComponent implements OnInit {

  constructor(public dialog:MatDialogRef<ProjectstpmodalComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  close(){
    this.dialog.close();
  }
}
