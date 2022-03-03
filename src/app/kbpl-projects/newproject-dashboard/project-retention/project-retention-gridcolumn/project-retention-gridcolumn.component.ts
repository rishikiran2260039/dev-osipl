import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-project-retention-gridcolumn',
  templateUrl: './project-retention-gridcolumn.component.html',
  styleUrls: ['./project-retention-gridcolumn.component.scss']
})
export class ProjectRetentionGridcolumnComponent implements OnInit {
  gridColumnForm: FormGroup;

  constructor(public fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public project: any, public dialogRef: MatDialogRef<ProjectRetentionGridcolumnComponent>) {
    this.createGridColumnGroup();
  }


  ngOnInit() {

  }

  createGridColumnGroup() {

  }
  close(): void {
    this.dialogRef.close();
  }

  saveGridColumns() {
    this.dialogRef.close();
  }

}
