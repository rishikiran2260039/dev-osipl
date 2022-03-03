import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MenuService } from 'src/app/theme/components/menu/menu.service';
import { AddRolesComponent } from './add-roles/add-roles.component';
import { RolesService } from './roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  tableList: Object[] = [];
  alltableListLookup: any;
  public pageSize = parseInt(localStorage.getItem('settings') ? localStorage.getItem('settings') : '10');
  public currentPage = 0;
  public totalSize = 0;
  tableListLookup = [];
  public allReports: Array<any> = [];
  sortedData = [];
  filteredAlerts = [];
  filterForm: FormGroup;
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  filterToggle: boolean;
  public searchText: string;
  public page: any;
  allRoles: any;
  filteredUsers: any;

  constructor(public dialog: MatDialog, private fb: FormBuilder, public alertService: AlertService, public roleService: RolesService, public _menuService: MenuService,
    public router: Router,private _activeRoute: ActivatedRoute,public titleService: Title, private service: RolesService) {
    this.filterForm = this.fb.group({
      Role: new FormControl('',),
      Keyword: new FormControl('',)
    });
    this.type = this._activeRoute.snapshot.queryParams['r'] || null;
    this.navParameter = this._activeRoute.snapshot.queryParams['p'] || null;
  }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  type: any;
  navParameter: any;

  roleDetails: any;
  options = [];

  access = {
    btCreate: false,
    btRead: false,
    btUpdate: false,
    btDelete: false
  };
  ngOnInit() {
    this.setTitle("OSIPL | Admin | Roles");
    //For Permissions

    this.access = this._menuService.checkUserPermissions('Admin >> Manage Users >> Roles');
    if(this.access.btRead) { 
      console.log(this.access);
      this.getAllRoles();
    }
  }

  getAllRoles() {
    this.service.GetAllRoles().subscribe(res => {
      if (res['Success'] == true) {
        console.log(res);
        this.roleDetails = res['Data'];
        this.options = this.roleDetails;
        this.sortedData = this.roleDetails.slice();
        this.bindData(res['Data']);

        //this.getallusers();
      }
      else {
        this.alertService.createAlert(res['Message'], 0);
      }
    });
  }

  userslist: any = [];
  NoofUsers() {
    this.roleDetails.forEach(element => {
      var number = 0;
      this.users.forEach(element1 => {
        if (element1.RoleId == element.RoleId) {
          number++;
        }
      });
      this.userslist.push({ Number: number, RoleName: element.RoleName });
    });
  }
  users: any;
  // getallusers() {
  //   this.service.GetAllUsers().subscribe(data => {
  //     if (data != null) {
  //       this.users = data['Data'];
  //       this.NoofUsers();
  //       // console.log(this.users);
  //       // this.sortedData = this.users.slice();
  //       // this.bindData(data['Data']);
  //     }
  //   });
  // }



  deleteRole(item) {
    var list = {
      RoleId: item.RoleId,
      DeletedBy: null,
      result: null
    }
    this.service.DeleteRole(list).subscribe(res => {
      console.log(res);
      if (res['Success'] == true) {
        this.alertService.createAlert('Role Deleted Successfully', 1);
        this.getAllRoles();
      }
      else {
        this.alertService.createAlert(res['Message'], 0);
      }
    });
  }

  openEditDialog(item) {
    let dialogRef = this.dialog.open(AddRolesComponent, {
      data: { data: item },
      height: 'auto',
      width: '550px'
    });
    dialogRef.afterClosed().subscribe(data => {
      this.getAllRoles();
    });
  }

  public bindData(data) {
    //this.allRoles = data['RolesList'];
    this.allRoles = data;
    this.filter();
  }

  filter() {

    this.filteredUsers = this.allRoles;
    let keyword = this.filterForm.controls['Keyword'].value;
    let role = this.filterForm.controls['Role'].value;

    if (keyword != null && keyword != '') {
      this.filteredUsers = this.filteredUsers.filter(function (item) {
        return JSON.stringify(item).toLowerCase().includes(keyword.toLowerCase());
      });
    }
    if (role != null && role != '') {
      this.filteredUsers = this.filteredUsers.filter(x => x['RoleName'] == role);
    }

    this.roleDetails = this.filteredUsers.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = this.filteredUsers.length;
    this.sortedData = this.roleDetails.slice();
    console.log(this.roleDetails);

  }

  clearFilter() {
    this.filterForm.reset();
    this.getAllRoles();
  }
  onuserclick(item)
  {
    this.router.navigate(['admin/manage-users/users/'+ item.RoleId]);
  }
  onpermclick(item)
  {
    this.router.navigate(['admin/manage-users/permission/'+ item.RoleId]);
  }
  public handlePage(e: any) {
    this.getAllRoles();
    this.allReports = this.roleDetails;
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.roleDetails = this.allReports.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.sortedData = this.roleDetails;
    console.log(this.sortedData);
  }

}