import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ProjPermComponent } from './proj-perm/proj-perm.component';
import { UsersService } from './users.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ResetPasswordDialogComponent } from './reset-password-dialog/reset-password-dialog.component';
import { Subscription } from 'rxjs';
import { MenuService } from 'src/app/theme/components/menu/menu.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  clickEventSubscription: Subscription;

  access = {
    btCreate: false,
    btRead: false,
    btUpdate: false,
    btDelete: false
  };
  tableList: Object[] = [];
  alltableListLookup: any;
  public pageSize = parseInt(localStorage.getItem('settings') ? localStorage.getItem('settings') : '10');
  public currentPage = 0;
  public totalSize = 0;
  tableListLookup = [];
  public allReports: Array<any> = [];
  sortedData = [];
  filteredAlerts = [];
  status = [{ id: 1, value: "Active" }, { id: 2, value: "Inactive" }];
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];
  filterForm: FormGroup;
  filteredUsers = [];

  public popoverTitle: string = 'Mobile Access';
  public popoverMessage: string = 'Are you sure you want to Update Mobile Access ?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';

  public popoverTitle1: string = 'Confirm Delete';
  public popoverMessage1: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle1: string = 'Confirm Status Change';
  public popoverStatusMessage1: string = 'Are you sure you want to change status.?';
  public cancelClicked1: boolean = false;
  public popoversendMessage1: 'Are you sure you want to send.?'
  public popoversendTitle1: string = 'Confirm Delete';

  public popoverTitle2: string = 'Change Status';
  public popoverMessage2: string = 'Are you sure you want to Change the Status ?';
  public popoverStatusTitle2: string = 'Confirm Status Change';
  public popoverStatusMessage2: string = 'Are you sure you want to change status.?';
  public cancelClicked2: boolean = false;
  public popoversendMessage2: 'Are you sure you want to send.?'
  public popoversendTitle2: string = 'Confirm Delete';

  allRoles: any;
  filterToggle: boolean;
  public searchText: string;
  public page: any;
  allUsers: any = [];
  userData: any = [];
  roleId:any;
  constructor(private _activeRoute: ActivatedRoute,private router:Router,public dialog: MatDialog, private fb: FormBuilder, private alertService: AlertService,
     public titleService: Title, public _menuService: MenuService,
    private service: UsersService) {
      this.sortedData = this.users.slice();
    this.filterForm = this.fb.group({
      Status: new FormControl(null),
      Keyword: new FormControl('',)
    });
  }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  users = [];

  ngOnInit() {
    // this.getallusers();
    this.setTitle("OSIPL | Admin | Manage User | User");
//For Permissions
this._activeRoute.paramMap.subscribe(v => {
  console.log(v.get("id"));
  if (v.get("id") !== null && v.get("id") !== undefined) {
    this.roleId = v.get("id");
    this.access = this._menuService.checkUserPermissions('Admin >> Manage Users >> Users');
    if(this.access.btRead) { 
     
      this.service.GetAllUsers().subscribe(data => {
        if (data != null) {
          this.users = data['Data'].filter(x => x.RoleId == this.roleId);
          console.log(this.users);
          this.sortedData = this.users.slice();
          this.bindData(data['Data'].filter(x => x.RoleId == this.roleId));
        }
      });
    }
  }
  else{
    this.access = this._menuService.checkUserPermissions('Admin >> Manage Users >> Users');
    if(this.access.btRead) { 
      console.log(this.access);
      this.getallusers();
    }
  }
});
    //this.access = this._menuService.checkUserPermissions('Manage Users - Users\t\r\n');
 
  }

  getallusers() {
    this.service.GetAllUsers().subscribe(data => {
      if (data != null) {
        this.users = data['Data'];
        this.sortedData = this.users.slice();
        this.bindData(data['Data']);
      }
    });
  } 

  deleteUser(data:any) {
    var list= {
      UserId: data.UserId,
      result: null
    };

    this.service.DeleteUser(list).subscribe(data => {
      // console.log(data);
      this.getallusers();
      this.alertService.createAlert('User Deleted Successfully', 1);
    });
  }

  changestatus(data:any){
    var list= {
      UserId: data.UserId
    };
    this.service.ChangeUserStatus(list).subscribe(res=>{
      // console.log(data);
      this.getallusers();
    })
    this.alertService.createAlert('User Status Changed Successfully', 1);
  }

  openEditDialog(item) {
    let dialogRef = this.dialog.open(EditUserComponent, {
      data: item,
      height: 'auto',
      width: '850px'
    });
    dialogRef.afterClosed().subscribe(data => {
   
      console.log(data, "data")
      if(data === "SAVE"){
        
        this.getallusers();
      }
    });
  }
  onpermclick(item)
  {
    this.router.navigate(['admin/manage-users/permission/'+ item.RoleId]);
  }
  openResetPassword(item) {
    let dialogRef = this.dialog.open(ResetPasswordDialogComponent, {
      data: item,
      height: 'auto',
      width: '550px'
    });
    dialogRef.afterClosed().subscribe(data => {
      this.getallusers();
    });
  }

  openProjectPermissions() {
    let dialogRef = this.dialog.open(ProjPermComponent, {
      data: null,
      height: 'auto',
      width: '600px'
    });
  }

  public bindData(data) {
    //this.allRoles = data['RolesList'];
    this.allRoles = data;
    this.filter();
  }

  filter() {
    console.log(this.filterForm.value);
    this.filteredUsers = this.allRoles;
    let keyword = this.filterForm.controls['Keyword'].value;
    let status = this.filterForm.controls['Status'].value;
  
    if(keyword != null && keyword != '') {
      this.filteredUsers = this.filteredUsers.filter(function (item) {
        return JSON.stringify(item).toLowerCase().includes(keyword.toLowerCase());
    });
    }
    if (status != null) {
      this.filteredUsers = this.filteredUsers.filter(x => x['IsActive'] == status);
    }
  
    this.users = this.filteredUsers.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = this.filteredUsers.length;
    this.sortedData = this.users.slice();
  }

  clearFilter() {
    this.filterForm.reset();
    this.getallusers();
  }

  public handlePage(e: any) {
    this.getallusers();
    this.allReports=this.users;
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.users = this.allReports.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.sortedData = this.users;
    console.log(this.sortedData);
  }
}