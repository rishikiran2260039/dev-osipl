import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-editrfqformpopup',
  templateUrl: './editrfqformpopup.component.html',
  styleUrls: ['./editrfqformpopup.component.scss']
})
export class EditrfqformpopupComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  selected = "1";

  constructor(public dialogRef: MatDialogRef<EditrfqformpopupComponent>,private _formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public data:any) { 
    
   }

  
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  saveStep() {
    this.dialogRef.close();
  }
  taskData: any;
  alertService: any;
  allFields = [1];
  removeItem(index){
    this.allFields.splice(index, 1);
  }
  
  remove(e) {
    document.getElementById("repeat-" + e).remove();
  }
}
