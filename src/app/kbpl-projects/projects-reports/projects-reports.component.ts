import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { UsersService } from 'src/app/admin/manage-user/users/users.service';
import { AddhandovermasterComponent } from 'src/app/admin/masterdata-new/handover-master/addhandovermaster/addhandovermaster.component';
import { AddprojectreportsComponent } from './addprojectreports/addprojectreports.component';
import {Location} from '@angular/common';
import { UploadDocComponent } from 'src/app/shared/upload-doc/upload-doc.component';


@Component({
  selector: 'app-projects-reports',
  templateUrl: './projects-reports.component.html',
  styleUrls: ['./projects-reports.component.scss']
})
export class ProjectsReportsComponent implements OnInit {
  status = [{id:1 , value:"Active"} , {id:2 , value:"Inactive"}];
  tableList: Object[] = [];
  montly: Object[] = [ 
    {date2:"2021",status:"View",date1:"January",subjectby:"Jay",subject:"Expected project closure date is 15 Feb 2021.  Current completion level is 85%.",intApplicantId:5,projectpermission:"41/56",specialpermission:" 31/56",vcName:'Bharath', vcEmail:'Bharath@optionmatrix.com',vcStatus:true, vcPhone:9988775588,workHours:8.00,roles:'Manager'},
    {date2:"2021",status:"View",date1:"March",subjectby:"Jay",subject:"All government approvals are in place the blueprint from the architect and civil engineer is received.  Project completion level is 14%.",intApplicantId:5,projectpermission:"41/56",specialpermission:" 31/56",vcName:'Bharath', vcEmail:'Bharath@optionmatrix.com',vcStatus:true, vcPhone:9988775588,workHours:8.00,roles:'Manager'},
    {date2:"2021",status:"View",date1:"April",subjectby:"Jay",subject:"Expected project closure date is 15 Feb 2021.  Current completion level is 85%.",intApplicantId:5,projectpermission:"41/56",specialpermission:" 31/56",vcName:'Bharath', vcEmail:'Bharath@optionmatrix.com',vcStatus:true, vcPhone:9988775588,workHours:8.00,roles:'Manager'},
    {date2:"2021",status:"View",date1:"March",subjectby:"Jay",subject:"All government approvals are in place the blueprint from the architect and civil engineer is received.  Project completion level is 14%.",intApplicantId:5,projectpermission:"41/56",specialpermission:" 31/56",vcName:'Bharath', vcEmail:'Bharath@optionmatrix.com',vcStatus:true, vcPhone:9988775588,workHours:8.00,roles:'Manager'},
    
   ];
   weekly: Object[] = [ 
    {status:"Add",date:"03/11/2021",subjectby:"Raju",subject:"Client visit happened this Wednesday.  We have a good control on the schedule.  Invoicing done for the month of Dec 2021.", intApplicantId: 3, projectpermission:" 43/56",specialpermission:" 7/56",vcName: 'Pranab Ray', vcEmail: "Pranab@gmail.com",vcStatus: true, vcPhone: '7854112547', vcPosition: "Developer", vcSkills: "Java", vcExperience: '3.1', vcCategory: 'IT', vcJobType: "Permanant", vcResumePath: "", dtUpdated: null, intIQ: 108, vcReferral: "Yes", vcHRRecruiter: "Syeda", vcProcess: "2/15",workHours:8.00,roles:'Manager' },
    {status:"Add",date:"04/11/2021",subjectby:"Sriram",subject:"Frequent rains impacted attendnace and there is a one fday schedule delay in carpentary work.",intApplicantId:4,projectpermission:" 12/56",specialpermission:" 25/56",vcName:'Anji', vcEmail:'Anji@optionmatrix.com',vcStatus:true, vcPhone:9875896580,workHours:8.00,roles:'Manager'},
    {status:"Add",date:"03/11/2021",subjectby:"Raju",subject:"Client visit happened this Wednesday.  We have a good control on the schedule.  Invoicing done for the month of Dec 2021.", intApplicantId: 3, projectpermission:" 43/56",specialpermission:" 7/56",vcName: 'Pranab Ray', vcEmail: "Pranab@gmail.com",vcStatus: true, vcPhone: '7854112547', vcPosition: "Developer", vcSkills: "Java", vcExperience: '3.1', vcCategory: 'IT', vcJobType: "Permanant", vcResumePath: "", dtUpdated: null, intIQ: 108, vcReferral: "Yes", vcHRRecruiter: "Syeda", vcProcess: "2/15",workHours:8.00,roles:'Manager' },
    {status:"Add",date:"04/11/2021",subjectby:"Sriram",subject:"Frequent rains impacted attendnace and there is a one fday schedule delay in carpentary work.",intApplicantId:4,projectpermission:" 12/56",specialpermission:" 25/56",vcName:'Anji', vcEmail:'Anji@optionmatrix.com',vcStatus:true, vcPhone:9875896580,workHours:8.00,roles:'Manager'},
    
   ];
   dailyvalues: Object[] = [ 
    {status:"Add",date:"01/11/2021",subjectby:"Rajesh",subject:"They is a delay in supply of flooring material.  Progress update is enclosed.", intApplicantId: 1,projectpermission:" 10/56",specialpermission:" 23/56", vcName: 'Kalyan Kurasala', vcEmail: "Kalyan@optionmatrix.com",vcStatus: true , vcPhone: '9834578945', vcPosition: "Developer", vcSkills: ".Net", vcExperience: '3.5', vcCategory: 'IT', vcJobType: "Permanant", vcResumePath: "", dtUpdated: null, intIQ: 100, vcReferral: "Yes", vcHRRecruiter: "Syeda", vcProcess: "4/15",workHours:8.00,roles:'Admin' },
    {status:"View",date:"02/11/2021",subjectby:"Suresh",subject:"All good.  We are ahead of schedule right now.  Please see my indent request # 2022/IND/467", intApplicantId: 2, projectpermission:" 21/56",specialpermission:" 18/56",vcName: 'S V Radha Krishna', vcEmail: "rk@optionmatrix.com",vcStatus: false, vcPhone: '9584672150', vcPosition: "Developer", vcSkills: "PHP", vcExperience: '2.5', vcCategory: 'IT', vcJobType: "Contract", vcResumePath: "", dtUpdated: null, intIQ: 110, vcReferral: "No", vcHRRecruiter: "Siva", vcProcess: "8/15",workHours:10.00,roles:'Admin' },
    {status:"Add",date:"01/11/2021",subjectby:"Rajesh",subject:"They is a delay in supply of flooring material.  Progress update is enclosed.", intApplicantId: 1,projectpermission:" 10/56",specialpermission:" 23/56", vcName: 'Kalyan Kurasala', vcEmail: "Kalyan@optionmatrix.com",vcStatus: true , vcPhone: '9834578945', vcPosition: "Developer", vcSkills: ".Net", vcExperience: '3.5', vcCategory: 'IT', vcJobType: "Permanant", vcResumePath: "", dtUpdated: null, intIQ: 100, vcReferral: "Yes", vcHRRecruiter: "Syeda", vcProcess: "4/15",workHours:8.00,roles:'Admin' },
    {status:"View",date:"02/11/2021",subjectby:"Suresh",subject:"All good.  We are ahead of schedule right now.  Please see my indent request # 2022/IND/467", intApplicantId: 2, projectpermission:" 21/56",specialpermission:" 18/56",vcName: 'S V Radha Krishna', vcEmail: "rk@optionmatrix.com",vcStatus: false, vcPhone: '9584672150', vcPosition: "Developer", vcSkills: "PHP", vcExperience: '2.5', vcCategory: 'IT', vcJobType: "Contract", vcResumePath: "", dtUpdated: null, intIQ: 110, vcReferral: "No", vcHRRecruiter: "Siva", vcProcess: "8/15",workHours:10.00,roles:'Admin' },
   
   ];
  access = {
    btCreate: false,
    btRead: false,
    btUpdate: false,
    btDelete: false
    };
  // tableList: Object[] = [];
    alltableListLookup:any;
    public pageSize = parseInt(localStorage.getItem('settings') ? localStorage.getItem('settings') : '10');
    public currentPage = 0;
    public totalSize = 0;
    tableListLookup = [];
    public allReports: Array<any> = [];
    sortedData=[];
    filteredAlerts = [];
    ismonthly:boolean = false;
    // Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];
    filterForm:FormGroup;
    
    public popoverTitle: string = 'Confirm Delete';
    public popoverMessage: string = 'Are you sure you want to delete this.?';
    public popoverStatusTitle: string = 'Confirm Status Change';
    public popoverStatusMessage: string = 'Are you sure you want to change this.?';
    public cancelClicked: boolean = false;
    public popoversendMessage: 'Are you sure you want to send.?'
    public popoversendTitle: string = 'Confirm Delete';

    allRoles : any = [];
    filterToggle: boolean;
    public searchText: string;
    public page: any;
    users : any = [];
    allUsers : any = [];
    userData : any = [];
    public color:any;
  constructor(private router: Router,private _location: Location,public dialog: MatDialog, private fb:FormBuilder, private userservice: UsersService , private alertService: AlertService) {
      this.filterForm = this.fb.group({
        Status: new FormControl(null),      
        Keyword: new FormControl('',)
      });
  }

  ngOnInit() {
    this.getAllUsers();
    console.log(this.router.url.split("/"));
    let check = this.router.url.split("/").length;
    this.daily(this.router.url.split("/")[check - 1])
  }
daily(item)
{
  if(item == 'monthly')
  {
    this.ismonthly = true;
    this.tableList = this.montly;  
  }
  else if(item == 'daily')
  {
    this.tableList = this.dailyvalues;
  }
  else if(item == 'weekly')
  {
    this.tableList = this.weekly;
  }

}
  updateStatus(item) {
    this.userservice.updateUserStatus(item).subscribe(data => {
      if(data != null) {
        this.getAllUsers();
      }
    });
  }
  backClicked() {
    this._location.back();
  }
  // bindData(data) {
  //   // this.allRoles = data['RolesList'];
  //   // this.users = data['UsersList'];
  //   this.allUsers = data;
  //   this.filter();
  // }
  uploaddoc()
  {
    let dialogRef = this.dialog.open(UploadDocComponent, {
      data: null,
      height:'auto',
      width:'600px'
    });
    dialogRef.afterClosed().subscribe(data => {
     // this.getAllUsers();
    });
  }
  updateAdminStatus(event, item) {
    this.userservice.updateAdminStatus(item).subscribe(data => {
      if(data != null) {
        this.getAllUsers();
      }
    });
  }

  getAllUsers(){
    this.userservice.GetAllUsers().subscribe((data) => {
      this.users = data['Data'];
      // this.bindData(data);
    })
    // this.userservice.GetAllRoles().subscribe((data) => {
    //   this.allRoles = data;
    // })
  }

  openEditDialog(item){
    let dialogRef = this.dialog.open(AddprojectreportsComponent, {
      data: {data: item,ismonthly: this.ismonthly},
      height:'auto',
      width:'600px'
    });
    dialogRef.afterClosed().subscribe(data => {
      this.getAllUsers();
    });
  }

  
  deleteUser(item){
      if (item != null && item !== undefined) {
        this.userservice.deleteUser(item).subscribe(data => {
          this.getAllUsers();
        });
      }
  }

 

  filter()
  {
    this.users = this.allUsers;
    
    let status = this.filterForm.controls['Status'].value;  
    let keyword = this.filterForm.controls['Keyword'].value;
    
    if (keyword != null && keyword != '') {
      this.users = this.users.filter(function (item) {
      return JSON.stringify(item).toLowerCase().includes(keyword.toLowerCase());
  });
  }

    if (status != null) {
      this.users = this.users.filter(x => x['IsActive'] == status);
    }
    
    this.userData = this.users.slice();
  }

  clearFilter() {
    this.filterForm.reset();
    this.getAllUsers();
  }
  saveStatus(data) {
    this.alertService.createAlert('Successfully saved.', 1);
}
}