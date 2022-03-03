import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-add-projects-notes',
  templateUrl: './add-projects-notes.component.html',
  styleUrls: ['./add-projects-notes.component.scss']
})
export class AddProjectsNotesComponent implements OnInit {
  NotesForm: FormGroup;
  isProject:boolean = false;
  isSaveBtnClicked:boolean=false;
  todayDate = new Date();
  manageService: any;
  
  constructor(public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
     public dialogRef: MatDialogRef<AddProjectsNotesComponent>,
     public fb: FormBuilder,public datePipe: DatePipe) {

      // this.NotesForm = this.fb.group({
      //   'projectId': 0,
      //   'projectNumber': "",
      //   'activityDate': [null, Validators.compose([Validators.required])],
      //   'remarks': [null, Validators.compose([Validators.required])],
      //   'isProject':false
      // })
      // this.NotesForm.controls.activityDate.setValue(new Date());
      // this.NotesForm.controls.projectId.setValue(this.data.projectId);
      // this.NotesForm.controls.projectNumber.setValue(this.data.projectNumber);
      // this.NotesForm.controls.isProject.setValue(this.data.isProject);
      // this.isProject = this.data.isProject;
    }
  ngOnInit() {
  }
  onSubmitNotesForm(formValues){
    if (this.NotesForm.valid) {
      this.isSaveBtnClicked=true;
      formValues.activityDate = this.datePipe.transform(formValues['activityDate'], 'yyyy-MM-dd');
      this.manageService.AddProjectNotes(formValues).subscribe(data => {
        if(data['Status'] == true){
          this.close('yes');
        }
        this.isSaveBtnClicked = false;
      });
    }
    else{
      this.NotesForm.controls.activityDate.markAsTouched();
      this.NotesForm.controls.remarks.markAsTouched();
    }
  }
  close(value) {
    this.dialogRef.close(value);
  }
}

