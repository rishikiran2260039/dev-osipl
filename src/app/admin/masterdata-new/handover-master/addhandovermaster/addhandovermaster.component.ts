
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RolesService } from 'src/app/admin/manage-user/roles/roles.service';
import { UsersService } from 'src/app/admin/manage-user/users/users.service';


@Component({
  selector: 'app-addhandovermaster',
  templateUrl: './addhandovermaster.component.html',
  styleUrls: ['./addhandovermaster.component.scss']
})
export class AddhandovermasterComponent implements OnInit {

  isSubmitting = false;
  user: any;
  roles:any = [];
  myGroup: FormGroup;

  constructor(public _rolesService: RolesService, public fb: FormBuilder,private userService: UsersService, public dialogRef: MatDialogRef<AddhandovermasterComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.myGroup = this.fb.group({
      Subject:new FormControl(''),
      Doc:new FormControl('', Validators.compose([Validators.required])),
      IsActive:new FormControl(''),
    })
  }

  ngOnInit() {
    this.getAllRoles();
    if(this.data != null) {
      this.roles = this.data['Data']
      if(this.data['data'] != null) {
        this.user = this.data['data'];
        this.myGroup.controls["UserId"].setValue(this.user['UserId']);
        this.myGroup.controls['UserName'].setValue(this.user['UserName']);
        this.myGroup.controls['UserEmail'].setValue(this.user['UserEmail']);
        this.myGroup.controls['UserPhone'].setValue(this.user['UserPhone']);
        // this.myGroup.controls['RoleId'].setValue(this.user['RoleId']);
      }
    }
  }

  getAllRoles(){
    this._rolesService.GetAllRoles().subscribe((data) => {
      this.roles = data;
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  saveData(){
    // if (this.myGroup.valid) {
    //   this.userService.editUsers(this.myGroup.value).subscribe(data => {
    //     console.log(this.myGroup.value);
    //     this.dialogRef.close(data['Data']);
    //     if(data != null) {
    //       if(data['Success'] != null) {
    //         if(data['Success']) {
    //           this.dialogRef.close(data['Data']);
    //         }
    //         else {
    //           this.isSubmitting = false;
    //         }
    //       }
    //     }
    //   });
    // }
    if (this.myGroup.valid) {
      this.userService.editUsers(this.myGroup.value).subscribe(data => {
        if(data != null) {
          this.dialogRef.close(data['Data']);
        }
      });
    }
  }

  inputNotAllowed() {
    return false;
  }
  onlyNumbers(event) {
    let k;
    k = event.charCode;
    return ((k > 47 && k < 58));
  }
  onlyAlphabets(event) {
    let k;
    k = event.charCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123));
  }
  alphaNumeric(event) {
    let k;
    k = event.charCode;
    return ((k > 47 && k < 58) || (k > 64 && k < 91) || (k > 96 && k < 123));
  }
}
