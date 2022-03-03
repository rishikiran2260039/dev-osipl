import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-project-status-dialog',
  templateUrl: './project-status-dialog.component.html',
  styleUrls: ['./project-status-dialog.component.scss']
})
export class ProjectStatusDialogComponent implements OnInit {
  stageModelForm: FormGroup;
  constructor(public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
     public dialogRef: MatDialogRef<ProjectStatusDialogComponent>,
     public fb: FormBuilder,
     public datePipe: DatePipe) {
      this.stageModelForm = this.fb.group({
        'activityId': 0,
        'quoteId': 0,
        'quoteNumber': "",
        'followUpDate': [null, Validators.compose([Validators.required])],
        'remarks': [null, Validators.compose([Validators.required])],
        'option': "",
        'optionName': "",
        'upatedBy': "",
        'description': "",
        'rating': "",
      })

      }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close()
  }

}
