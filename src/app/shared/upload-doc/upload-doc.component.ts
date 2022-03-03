// import { Component, Inject, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RolesService } from 'src/app/admin/manage-user/roles/roles.service';
import { UsersService } from 'src/app/admin/manage-user/users/users.service';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../services/alert.service';

import * as _ from 'lodash';


@Component({
  selector: 'app-upload-doc',
  templateUrl: './upload-doc.component.html',
  styleUrls: ['./upload-doc.component.scss']
})
export class UploadDocComponent implements OnInit {

 
//   isSubmitting = false;
//   user: any;
//   roles:any = [];
//   myGroup: FormGroup;

//   constructor(public _rolesService: RolesService, public fb: FormBuilder,private userService: UsersService, public dialogRef: MatDialogRef<UploadDocComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
//     this.myGroup = this.fb.group({
//       Subject:new FormControl(''),
//       Doc:new FormControl('', Validators.compose([Validators.required])),
//     })
//   }

//   ngOnInit() {
//     this.getAllRoles();
//     if(this.data != null) {
//       this.roles = this.data['Data']
//       if(this.data['data'] != null) {
//         this.user = this.data['data'];
//         this.myGroup.controls["UserId"].setValue(this.user['UserId']);
//         this.myGroup.controls['UserName'].setValue(this.user['UserName']);
//         this.myGroup.controls['UserEmail'].setValue(this.user['UserEmail']);
//         this.myGroup.controls['UserPhone'].setValue(this.user['UserPhone']);
//         // this.myGroup.controls['RoleId'].setValue(this.user['RoleId']);
//       }
//     }
//   }

//   getAllRoles(){
//     this._rolesService.GetAllRoles().subscribe((data) => {
//       this.roles = data;
//     })
//   }

//   close(): void {
//     this.dialogRef.close();
//   }

//   saveData(){
//     // if (this.myGroup.valid) {
//     //   this.userService.editUsers(this.myGroup.value).subscribe(data => {
//     //     console.log(this.myGroup.value);
//     //     this.dialogRef.close(data['Data']);
//     //     if(data != null) {
//     //       if(data['Success'] != null) {
//     //         if(data['Success']) {
//     //           this.dialogRef.close(data['Data']);
//     //         }
//     //         else {
//     //           this.isSubmitting = false;
//     //         }
//     //       }
//     //     }
//     //   });
//     // }
//     if (this.myGroup.valid) {
//       this.userService.editUsers(this.myGroup.value).subscribe(data => {
//         if(data != null) {
//           this.dialogRef.close(data['Data']);
//         }
//       });
//     }
//   }

//   inputNotAllowed() {
//     return false;
//   }
//   onlyNumbers(event) {
//     let k;
//     k = event.charCode;
//     return ((k > 47 && k < 58));
//   }
//   onlyAlphabets(event) {
//     let k;
//     k = event.charCode;
//     return ((k > 64 && k < 91) || (k > 96 && k < 123));
//   }
//   alphaNumeric(event) {
//     let k;
//     k = event.charCode;
//     return ((k > 47 && k < 58) || (k > 64 && k < 91) || (k > 96 && k < 123));
//   }
// }


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})

  public formBuilder: FormBuilder
  fileUploadForm: FormGroup;
  fileInputLabel: string;
  disable = true;
  response: any;
  fileName:string;
  loadingSpinner: boolean = false;


  overWriteStatus: boolean  = false;

  @ViewChild('UploadFileInput') uploadFileInput: ElementRef;
  constructor(
    private http: HttpClient, 
    public fb: FormBuilder, 
    private alertService: AlertService,
     public dialogRef: MatDialogRef<UploadDocComponent>, 
     @Inject(MAT_DIALOG_DATA) public data: any) {
    this.fileUploadForm = this.fb.group({
      overWriteStatus: [false],
      myfile: [''],
   
    });
    this.fileName = (this.data);
    console.log(this.data)
    console.log(this.fileUploadForm)


  }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveInfo() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }


  onFileSelect(event) {
    console.log(this.fileUploadForm)

    let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // console.log(file);

      if (!_.includes(af, file.type)) {
        // alert('Only EXCEL Docs Allowed!');
        this.disable = true;
        this.alertService.createAlert('Please Upload only excel files.', 0);

      } else {
       
        this.fileUploadForm.get('myfile').setValue(file);
        this.disable = false;
        this.alertService.createAlert('File Added Successfully.', 1);
      }
    }
  }

  enableOverWrite(){
    this.overWriteStatus != this.overWriteStatus;
  }




}


