import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../../manage-user/users/users.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { EditUserComponent } from '../../manage-user/users/edit-user/edit-user.component';
import { AddhandovermasterComponent } from './addhandovermaster/addhandovermaster.component';

@Component({
  selector: 'app-handover-master',
  templateUrl: './handover-master.component.html',
  styleUrls: ['./handover-master.component.scss']
})
export class HandoverMasterComponent implements OnInit {
  status = [{id:1 , value:"Active"} , {id:2 , value:"Inactive"}];
  tableList: Object[] = [
        {subject:"Project Data Sheet",                           intApplicantId: 1,projectpermission:" 10/56",specialpermission:" 23/56", vcName: 'Kalyan Kurasala', vcEmail: "Kalyan@optionmatrix.com",vcStatus: true , vcPhone: '9834578945', vcPosition: "Developer", vcSkills: ".Net", vcExperience: '3.5', vcCategory: 'IT', vcJobType: "Permanant", vcResumePath: "", dtUpdated: null, intIQ: 100, vcReferral: "Yes", vcHRRecruiter: "Syeda", vcProcess: "4/15",workHours:8.00,roles:'Admin' },
        {subject:"Practical Completion Certificate",                intApplicantId: 2, projectpermission:" 21/56",specialpermission:" 18/56",vcName: 'S V Radha Krishna', vcEmail: "rk@optionmatrix.com",vcStatus: false, vcPhone: '9584672150', vcPosition: "Developer", vcSkills: "PHP", vcExperience: '2.5', vcCategory: 'IT', vcJobType: "Contract", vcResumePath: "", dtUpdated: null, intIQ: 110, vcReferral: "No", vcHRRecruiter: "Siva", vcProcess: "8/15",workHours:10.00,roles:'Admin' },
        {subject:"Escalation Chart",                              intApplicantId: 3, projectpermission:" 43/56",specialpermission:" 7/56",vcName: 'Pranab Ray', vcEmail: "Pranab@gmail.com",vcStatus: true, vcPhone: '7854112547', vcPosition: "Developer", vcSkills: "Java", vcExperience: '3.1', vcCategory: 'IT', vcJobType: "Permanant", vcResumePath: "", dtUpdated: null, intIQ: 108, vcReferral: "Yes", vcHRRecruiter: "Syeda", vcProcess: "2/15",workHours:8.00,roles:'Manager' },
        {subject:"Brief Design Concept",                      intApplicantId:4,projectpermission:" 12/56",specialpermission:" 25/56",vcName:'Anji', vcEmail:'Anji@optionmatrix.com',vcStatus:true, vcPhone:9875896580,workHours:8.00,roles:'Manager'},
        {subject:"List Of Materials Supplied & Installed",       intApplicantId:5,projectpermission:"41/56",specialpermission:" 31/56",vcName:'Bharath', vcEmail:'Bharath@optionmatrix.com',vcStatus:true, vcPhone:9988775588,workHours:8.00,roles:'Manager'},
        {subject:"Period Of Defects Liability Period",       intApplicantId:6,projectpermission:" 29/56",specialpermission:" 26/56",vcName:'Amit Kumar', vcEmail:'Amit@optionmatrix.com',vcStatus:true, vcPhone:8575857555,workHours:8.00,roles:'Manager'},
        {subject:"Copy Of PO/WO",intApplicantId:7,projectpermission:" 34/56",specialpermission:" 17/56",vcName:'Durga Prasad', vcEmail:'Durga@optionmatrix.com',vcStatus:false, vcPhone:6987698768,workHours:8.00,roles:'Marketing Staff'},
        {subject:"Warranty / Guarantee Certificates",intApplicantId:8,projectpermission:" 25/56",specialpermission:" 15/56",vcName:'Vamsi', vcEmail:'Vamsi@optionmatrix.com',vcStatus:true, vcPhone:6020504060,workHours:8.00,roles:'Marketing Staff'},
        {subject:"As Built Drawings",intApplicantId:9,projectpermission:" 7/56",specialpermission:" 8/56",vcName:'Praveen', vcEmail:'Praveen@optionmatrix.com',vcStatus:true, vcPhone:8877998877,workHours:8.00,roles:'sales Staff'},
        {subject:"Catalogues / Brouchers",intApplicantId:10,projectpermission:" 18/56",specialpermission:" 23/56",vcName:'Naveen', vcEmail:'Naveen@optionmatrix.com',vcStatus:false, vcPhone:7897897894,workHours:10.00,roles:'sales Staff'},
        {subject:"OPERATION & MAINTENANCE MANUALS: FOR ALL EQUIPMENTS INCLUDING ACCESSORIES AND SHOULD INCLUDE PREVENTIVE / PREDICTIVE MAINTENANCE AND BREAKDOWN MAINTENANCE",intApplicantId:11,projectpermission:" 23/56",specialpermission:" 33/56",vcName:'Vaibhav', vcEmail:'Vaibhav@optionmatrix.com',vcStatus:true, vcPhone:852014789,workHours:8.00,roles:'Marketing Staff'},
        {subject:"Do’s And Don’t’s List", intApplicantId: 1,projectpermission:" 10/56",specialpermission:" 23/56", vcName: 'Kalyan Kurasala', vcEmail: "Kalyan@optionmatrix.com",vcStatus: true , vcPhone: '9834578945', vcPosition: "Developer", vcSkills: ".Net", vcExperience: '3.5', vcCategory: 'IT', vcJobType: "Permanant", vcResumePath: "", dtUpdated: null, intIQ: 100, vcReferral: "Yes", vcHRRecruiter: "Syeda", vcProcess: "4/15",workHours:8.00,roles:'Admin' },
        {subject:"Safety Data Sheet", intApplicantId: 2, projectpermission:" 21/56",specialpermission:" 18/56",vcName: 'S V Radha Krishna', vcEmail: "rk@optionmatrix.com",vcStatus: false, vcPhone: '9584672150', vcPosition: "Developer", vcSkills: "PHP", vcExperience: '2.5', vcCategory: 'IT', vcJobType: "Contract", vcResumePath: "", dtUpdated: null, intIQ: 110, vcReferral: "No", vcHRRecruiter: "Siva", vcProcess: "8/15",workHours:10.00,roles:'Admin' },
        {subject:"DEMO & TRAINING CERTIFICATES", intApplicantId: 3, projectpermission:" 43/56",specialpermission:" 7/56",vcName: 'Pranab Ray', vcEmail: "Pranab@gmail.com",vcStatus: true, vcPhone: '7854112547', vcPosition: "Developer", vcSkills: "Java", vcExperience: '3.1', vcCategory: 'IT', vcJobType: "Permanant", vcResumePath: "", dtUpdated: null, intIQ: 108, vcReferral: "Yes", vcHRRecruiter: "Syeda", vcProcess: "2/15",workHours:8.00,roles:'Manager' },
        {subject:"LIST OF SPECIAL TOOLS & TACKLES REQUIRED FOR MAINTENANCE",intApplicantId:4,projectpermission:" 12/56",specialpermission:" 25/56",vcName:'Anji', vcEmail:'Anji@optionmatrix.com',vcStatus:true, vcPhone:9875896580,workHours:8.00,roles:'Manager'},
        {subject:"DETAILS OF INVENTORY AND ATTIC STOCK OF MATERIALS",intApplicantId:5,projectpermission:"41/56",specialpermission:" 31/56",vcName:'Bharath', vcEmail:'Bharath@optionmatrix.com',vcStatus:true, vcPhone:9988775588,workHours:8.00,roles:'Manager'},
        {subject:"LIST OF ANY LOOSE ITEMS (LIKE REMOTE CONTROLS, KEY LIST ETC.)",intApplicantId:6,projectpermission:" 29/56",specialpermission:" 26/56",vcName:'Amit Kumar', vcEmail:'Amit@optionmatrix.com',vcStatus:true, vcPhone:8575857555,workHours:8.00,roles:'Manager'},
        {subject:"STATUS OF SNAG LIST – REPORT CERTIFIED BY PROJECT MANAGERS / ARCHITECTS / CLIENTS",intApplicantId:7,projectpermission:" 34/56",specialpermission:" 17/56",vcName:'Durga Prasad', vcEmail:'Durga@optionmatrix.com',vcStatus:false, vcPhone:6987698768,workHours:8.00,roles:'Marketing Staff'},
        {subject:"COMMISSIONING REPORT (INCLUSIVE OF TEST REPORTS / CERTIFICATES) WITH ENDORSEMENT FROM RESPECTIVE CONSULTANTS", intApplicantId: 2, projectpermission:" 21/56",specialpermission:" 18/56",vcName: 'S V Radha Krishna', vcEmail: "rk@optionmatrix.com",vcStatus: false, vcPhone: '9584672150', vcPosition: "Developer", vcSkills: "PHP", vcExperience: '2.5', vcCategory: 'IT', vcJobType: "Contract", vcResumePath: "", dtUpdated: null, intIQ: 110, vcReferral: "No", vcHRRecruiter: "Siva", vcProcess: "8/15",workHours:10.00,roles:'Admin' },
        {subject:"Client Appreciation & Feedback", intApplicantId: 3, projectpermission:" 43/56",specialpermission:" 7/56",vcName: 'Pranab Ray', vcEmail: "Pranab@gmail.com",vcStatus: true, vcPhone: '7854112547', vcPosition: "Developer", vcSkills: "Java", vcExperience: '3.1', vcCategory: 'IT', vcJobType: "Permanant", vcResumePath: "", dtUpdated: null, intIQ: 108, vcReferral: "Yes", vcHRRecruiter: "Syeda", vcProcess: "2/15",workHours:8.00,roles:'Manager' },
        {subject:"WEEKLY / COMPLETION PHOTOGRAPHY ", intApplicantId: 1,projectpermission:" 10/56",specialpermission:" 23/56", vcName: 'Kalyan Kurasala', vcEmail: "Kalyan@optionmatrix.com",vcStatus: true , vcPhone: '9834578945', vcPosition: "Developer", vcSkills: ".Net", vcExperience: '3.5', vcCategory: 'IT', vcJobType: "Permanant", vcResumePath: "", dtUpdated: null, intIQ: 100, vcReferral: "Yes", vcHRRecruiter: "Syeda", vcProcess: "4/15",workHours:8.00,roles:'Admin' },
        {subject:"TIME LAPSE", intApplicantId: 2, projectpermission:" 21/56",specialpermission:" 18/56",vcName: 'S V Radha Krishna', vcEmail: "rk@optionmatrix.com",vcStatus: false, vcPhone: '9584672150', vcPosition: "Developer", vcSkills: "PHP", vcExperience: '2.5', vcCategory: 'IT', vcJobType: "Contract", vcResumePath: "", dtUpdated: null, intIQ: 110, vcReferral: "No", vcHRRecruiter: "Siva", vcProcess: "8/15",workHours:10.00,roles:'Admin' },
        {subject:"WALK-THROUGH VIDEOS", intApplicantId: 3, projectpermission:" 43/56",specialpermission:" 7/56",vcName: 'Pranab Ray', vcEmail: "Pranab@gmail.com",vcStatus: true, vcPhone: '7854112547', vcPosition: "Developer", vcSkills: "Java", vcExperience: '3.1', vcCategory: 'IT', vcJobType: "Permanant", vcResumePath: "", dtUpdated: null, intIQ: 108, vcReferral: "Yes", vcHRRecruiter: "Syeda", vcProcess: "2/15",workHours:8.00,roles:'Manager' },
        
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
 
    // Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];
    filterForm:FormGroup;
    
    public popoverTitle: string = 'Confirm Delete';
    public popoverMessage: string = 'Are you sure you want to delete this.?';
    public popoverStatusTitle: string = 'Confirm Status Change';
    public popoverStatusMessage: string = 'Are you sure you want to change status.?';
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

  constructor(public dialog: MatDialog, private fb:FormBuilder, private userservice: UsersService , private alertService: AlertService) {
      this.filterForm = this.fb.group({
        Status: new FormControl(null),      
        Keyword: new FormControl('',)
      });
  }

  ngOnInit() {
    this.getAllUsers();
  }

  updateStatus(item) {
    // this.userservice.updateUserStatus(item).subscribe(data => {
    //   if(data != null) {
    //     this.getAllUsers();
    //   }
    // });
  }

  // bindData(data) {
  //   // this.allRoles = data['RolesList'];
  //   // this.users = data['UsersList'];
  //   this.allUsers = data;
  //   this.filter();
  // }

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
    let dialogRef = this.dialog.open(AddhandovermasterComponent, {
      data: {data: item},
      height:'auto',
      width:'600px'
    });
    dialogRef.afterClosed().subscribe(data => {
      this.getAllUsers();
    });
  }

  
  deleteUser(item){
      // if (item != null && item !== undefined) {
      //   this.userservice.deleteUser(item).subscribe(data => {
      //     this.getAllUsers();
      //   });
      // }
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