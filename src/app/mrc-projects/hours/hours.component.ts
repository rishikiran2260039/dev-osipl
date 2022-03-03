import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatOption, Sort } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss']
})
export class HoursComponent implements OnInit {

  filterToggle: boolean = false;
  allowAssign: boolean = true;
  InvoiceType: any = 'new';
  isNew: boolean = true;
  checked: boolean;

  totalWorkedHours = 0;
  grandTotalWorkedHours = 0;
  total = 0;
  grandTotal = 0;
  public actionLogHours = [];
  public contActionLogHours = [];
  qId: number;
  public pageSize = parseInt(localStorage.getItem('settings') ? localStorage.getItem('settings') : '5');
  public currentPage = 0;
  public totalSize = 0;
  qNumber: string;
  allActionLogHours: any[];
  // dialog: any;
  filterForm: FormGroup;
  allSites: any[];
  allTasks: any[];
  allActions: any[];
  allUsers: any[];
  allSOWs: any[];
  constructor(
    public dialog: MatDialog,
    private activeRoute: ActivatedRoute,
    private _datePipe: DatePipe,
    // private _manageService: ManageService,
    private _fb: FormBuilder) {
    this.activeRoute.parent.params.subscribe(params => {
      this.qId = parseInt(atob(params['qId'].toString()));
      this.qNumber = atob(params['qNumber'].toString());
    })

    this.filterForm = this._fb.group({
      'siteId': [null],
      'taskId': [null],
      'actionName': [null],
      'userId': [null],
      'sowId': [null],
      'fromDate': [null],
      'toDate': [null]
    });
  }

  //tasks filter all
  @ViewChild('allSelectedTasks') private allSelectedTasks: MatOption;
  tosslePerOneTasks(all) {
    if (this.allSelectedTasks.selected) {
      this.allSelectedTasks.deselect();
      return false;
    }
    if (this.filterForm.controls.taskId.value.length >= this.allTasks.length) {
      this.allSelectedTasks.select();
    }
  }
  toggleAllSelectionTasks() {
    if (this.allSelectedTasks.selected) {
      this.filterForm.controls.taskId
        .patchValue([...this.allTasks.map(item => item.taskId), 0]);
    } else {
      this.filterForm.controls.taskId.patchValue([]);
    }
  }
  //actions filter all
  @ViewChild('allSelectedActions') private allSelectedActions: MatOption;
  tosslePerOneActions(all) {
    if (this.allSelectedActions.selected) {
      this.allSelectedActions.deselect();
      return false;
    }
    if (this.filterForm.controls.actionName.value.length >= this.allActions.length) {
      this.allSelectedActions.select();
    }
  }
  toggleAllSelectionActions() {
    if (this.allSelectedActions.selected) {
      this.filterForm.controls.actionName
        .patchValue([...this.allActions.map(item => item), 0]);
    } else {
      this.filterForm.controls.actionName.patchValue([]);
    }
  }
  //actions filter all
  @ViewChild('allSelectedUsers') private allSelectedUsers: MatOption;
  tosslePerOneUsers(all) {
    if (this.allSelectedUsers.selected) {
      this.allSelectedUsers.deselect();
      return false;
    }
    if (this.filterForm.controls.userId.value.length >= this.allUsers.length) {
      this.allSelectedUsers.select();
    }
  }
  toggleAllSelectionUsers() {
    if (this.allSelectedUsers.selected) {
      this.filterForm.controls.userId
        .patchValue([...this.allUsers.map(item => item.userId), 0]);
    } else {
      this.filterForm.controls.userId.patchValue([]);
    }
  }
  ngOnInit() {
    this.getAllActionLogHoursOfQuote({})
  }
  getAllActionLogHoursOfQuote(quoteId) {
    // this._manageService.getAllActionLogHoursOfQuote(quoteId).subscribe(
    //   data => {
    //     console.log(data, 'Quote Log Hours');
    //     if (data['Data']) {
    //       this.allActionLogHours = data['Data'];
    //       let Sites = this.allActionLogHours.filter(x => x.siteName != '-').map(x => ({ siteId: x.siteId, siteName: x.siteName }));
    //       const uniqueSites = Array.from(new Set(Sites.map(a => a.siteId)))
    //         .map(id => {
    //           return Sites.find(a => a.siteId === id)
    //         })
    //       Sites = uniqueSites;
    //       // this.allSites = _.sortBy(Sites, 'siteName');

    //       let tasks = this.allActionLogHours.filter(x => x.taskName != '-').map(x => ({ taskId: x.taskId, taskName: x.taskName }));
    //       const uniqueTasks = Array.from(new Set(tasks.map(a => a.taskId)))
    //         .map(id => {
    //           return tasks.find(a => a.taskId === id)
    //         })
    //       tasks = uniqueTasks;
    //       // this.allTasks = _.sortBy(tasks, 'taskName');

    //       let actions = this.allActionLogHours.filter(x => x.manageActionName != '-').map(x => x.manageActionName);
    //       const uniqueActions = Array.from(new Set(actions.map(a => a)))
    //         .map(id => {
    //           return actions.find(a => a === id)
    //         })
    //       actions = uniqueActions;
    //       // this.allActions = _.sortBy(actions);

    //       let users = this.allActionLogHours.filter(x => x.loggedBy != '-').map(x => ({ userId: x.createdBy, userName: x.loggedBy }));
    //       const uniqueUsers = Array.from(new Set(users.map(a => a.userId)))
    //         .map(id => {
    //           return users.find(a => a.userId === id)
    //         })
    //       users = uniqueUsers;
    //       // this.allUsers = _.sortBy(users, 'userName');

    //       this.contActionLogHours = this.allActionLogHours;
    this.actionLogHours = [
      {
        "logHourId": 73,
        "quoteID": 251,
        "siteId": 247,
        "siteName": "Site3",
        "sowId": 321,
        "sowName": "SOW 3",
        "taskId": 10,
        "taskName": "Field",
        "manageActionId": null,
        "manageActionName": "Field Design",
        "jobCode": "EPC1",
        "jobCodeTitle": "Engineering Party Chief 1",
        "status": true,
        "updatedBy": "Super Admin",
        "updatedDate": "2021-05-24",
        "dueDate": "2021-05-19",
        "loggedDate": "2021-05-12",
        "loggedBy": "Sachin Patil",
        "logHoursStatus": "Completed",
        "logHourRemarks": "Done",
        "googleDriveId": "1o16ryWrKd8mU5YbyuID8jEDgOV4g9nLc",
        "plannedHours": 5,
        "workedHours": 5,
        "remainingHours": 0,
        "pmMessage": "-",
        "isAssigned": 1,
        "projectManager": "James Smith",
        "notesCount": 1,
        "assignedHours": 5,
        "actualCost": 500,
        "createdBy": 78,
        "createdDate": "2021-05-12T13:15:29.66",
        "modifiedBy": "Super Admin",
        "modifiedDate": "2021-05-24",
        "modifiedDateTime": "2021-05-24T08:46:23.103"
      },
      {
        "logHourId": 74,
        "quoteID": 251,
        "siteId": 247,
        "siteName": "Site3",
        "sowId": 321,
        "sowName": "SOW 3",
        "taskId": 10,
        "taskName": "Field",
        "manageActionId": null,
        "manageActionName": "Field Drafting",
        "jobCode": "CCAD3",
        "jobCodeTitle": "Construction CAD 3",
        "status": null,
        "updatedBy": "Option Matrix",
        "updatedDate": "2021-05-12",
        "dueDate": "2021-05-13",
        "loggedDate": "2021-05-12",
        "loggedBy": "Option Matrix",
        "logHoursStatus": "Completed",
        "logHourRemarks": "Done",
        "googleDriveId": "14PKIwYfG9ET9pKkCwUJNhkRG_alyooxR",
        "plannedHours": 2,
        "workedHours": 2,
        "remainingHours": 0,
        "pmMessage": "-",
        "isAssigned": 1,
        "projectManager": "James Smith",
        "notesCount": 1,
        "assignedHours": 2,
        "actualCost": 190,
        "createdBy": 79,
        "createdDate": "2021-05-12T13:24:03.14",
        "modifiedBy": "Option Matrix",
        "modifiedDate": "2021-05-12",
        "modifiedDateTime": "2021-05-12T13:24:03.14"
      }
    ]
    //       this.totalSize = this.allActionLogHours.length;
    //     }
    //     this.calculateTotal();
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // )
  }
  getSows(siteId) {
    this.filterForm.controls['sowId'].setValue(null);
    let SOWs = this.contActionLogHours.filter(x => x.siteId == siteId).map(x => ({ sowId: x.sowId, sowName: x.sowName }));
    const uniqueSOWs = Array.from(new Set(SOWs.map(a => a.sowId)))
      .map(id => {
        return SOWs.find(a => a.sowId === id)
      })
    SOWs = uniqueSOWs;
    // this.allSOWs = _.sortBy(SOWs, 'sowName');

  }
  filterBy(formValues) {
    console.log(formValues, 'formValues log')
    this.allActionLogHours = this.contActionLogHours;
    if ((formValues.siteId != null && formValues.siteId != '')
      || (formValues.sowId != null && formValues.sowId != '')
      || (formValues.taskId != null && formValues.taskId.length != 0)
      || (formValues.actionName != null && formValues.actionName.length != 0)
      || (formValues.userId != null && formValues.userId.length != 0)) {
      this.allActionLogHours = this.allActionLogHours.filter(x => (formValues.siteId == null || formValues.siteId == '' || x.siteId == formValues.siteId) &&
        (formValues.sowId == null || formValues.sowId == '' || x.sowId == formValues.sowId)
        && (formValues.taskId == null || formValues.taskId.length == 0 || formValues.taskId.includes(x.taskId))
        && (formValues.actionName == null || formValues.actionName.length == 0 || formValues.actionName.includes(x.manageActionName))
        && (formValues.userId == null || formValues.userId.length == 0 || formValues.userId.includes(x.createdBy)))
    }
    if (formValues.fromDate != null && formValues.fromDate != '' && (formValues.toDate == null || formValues.toDate == '')) {
      this.allActionLogHours = this.allActionLogHours.filter(x => this._datePipe.transform(x.loggedDate, 'yyyy-MM-dd') >= this._datePipe.transform(formValues.fromDate, 'yyyy-MM-dd'));
    }
    if (formValues.toDate != null && formValues.toDate != '' && (formValues.fromDate == null || formValues.fromDate == '')) {
      this.allActionLogHours = this.allActionLogHours.filter(x => this._datePipe.transform(x.loggedDate, 'yyyy-MM-dd') <= this._datePipe.transform(formValues.toDate, 'yyyy-MM-dd'));
    }
    if (formValues.fromDate != null && formValues.fromDate != '' && formValues.toDate != null && formValues.toDate != '') {
      this.allActionLogHours = this.allActionLogHours.filter(x => this._datePipe.transform(x.loggedDate, 'yyyy-MM-dd') >= this._datePipe.transform(formValues.fromDate, 'yyyy-MM-dd') && this._datePipe.transform(x.loggedDate, 'yyyy-MM-dd') <= this._datePipe.transform(formValues.toDate, 'yyyy-MM-dd'));
    }

    this.totalSize = this.allActionLogHours.length;
    this.currentPage = 0;
    this.actionLogHours = this.allActionLogHours.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.calculateTotal();
  }
  resetFilter() {
    this.currentPage = 0;
    this.pageSize = parseInt(localStorage.getItem('settings') ? localStorage.getItem('settings') : '5');
    this.getAllActionLogHoursOfQuote(this.qId);
    this.filterForm.reset();

  }
  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.actionLogHours = this.allActionLogHours.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.calculateTotal();
  }
  @ViewChild('addSowModal') addSowModal: ModalDirective;
  @ViewChild('assignEstimateModal') assignEstimateModal: ModalDirective;

  sortData(sort: Sort) {
    const data = this.allActionLogHours.slice();
    if (!sort.active || sort.direction === '') {
      this.allActionLogHours = data;
      return;
    }

    this.allActionLogHours = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'siteName': return this.compare(a.siteName.toLowerCase(), b.siteName.toLowerCase(), isAsc);
        case 'sowName': return this.compare(a.sowName.toLowerCase(), b.sowName.toLowerCase(), isAsc);
        case '3': return this.compare(a.taskName.toLowerCase(), b.taskName.toLowerCase(), isAsc);
        case '4': return this.compare(a.manageActionName.toLowerCase(), b.manageActionName.toLowerCase(), isAsc);
        case '5': return this.compare(a.jobCode.toLowerCase(), b.jobCode.toLowerCase(), isAsc);
        case '6': return this.compare(a.dueDate.toLowerCase(), b.dueDate.toLowerCase(), isAsc);
        case '7': return this.compare(a.loggedDate.toLowerCase(), b.loggedDate.toLowerCase(), isAsc);
        case '8': return this.compare(a.loggedBy.toLowerCase(), b.loggedBy.toLowerCase(), isAsc);
        case '9': return this.compare(a.logHoursStatus.toLowerCase(), b.logHoursStatus.toLowerCase(), isAsc);
        case '10': return this.compare(a.actualCost, b.actualCost, isAsc);
        case '11': return this.compare(a.plannedHours, b.plannedHours, isAsc);
        case '12': return this.compare(a.assignedHours, b.assignedHours, isAsc);
        case '13': return this.compare(a.workedHours, b.workedHours, isAsc);
        case '14': return this.compare(a.remainingHours, b.remainingHours, isAsc);
        case 'createdDate': return this.compare(a.dt_created_date, b.dt_created_date, isAsc);
        default: return 0;
      }
    });
    this.currentPage = 0;
    this.totalSize = this.allActionLogHours.length;
    this.actionLogHours = this.allActionLogHours.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

  calculateTotal() {
    this.total = 0;
    this.grandTotal = 0;
    this.totalWorkedHours = 0;
    this.grandTotalWorkedHours = 0;
    this.actionLogHours.filter(x => x.status == true).forEach(x => {
      this.total = this.total + x.actualCost;
      this.totalWorkedHours = this.totalWorkedHours + x.workedHours;
    });
    this.contActionLogHours.filter(x => x.status == true).forEach(x => {
      this.grandTotal = this.grandTotal + x.actualCost;
      this.grandTotalWorkedHours = this.grandTotalWorkedHours + x.workedHours;
    });
  }

  public compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  showChildModal(): void {
    this.addSowModal.show();
  }

  hideChildModal(): void {
    this.addSowModal.hide();
  }

  funSelect(value) {
    if (this.checked == true) {
      this.allowAssign = false;
    }
    else {
      this.allowAssign = true;
    }
  }

  funSelectAll(e) {
    if (e == true) {
      this.checked = true;
      this.allowAssign = false;

    }
    else {
      this.checked = false;
      this.allowAssign = true;

    }
  }

  showEstimateModal() {
    this.assignEstimateModal.show();
  }

  hideEstimateModal() {
    this.assignEstimateModal.hide();
  }


  scrollActions(side) {
    var ele = document.getElementById('expenseTable');
    if (side == 'left')
      ele.scrollLeft += 190;
    else
      ele.scrollLeft -= 190;
  }

  fnInvoiceType(value) {
    if (value == 'new') {
      this.isNew = true;
    }
    else {
      this.isNew = false;
    }
  }

  public opengridColDialog(lead) {
    // this.dialog.open(HoursGridColComponent, {
    //   data: lead,
    //   height: 'auto',
    //   width: '600px',
    // });
  }
  public openMessagesDiolog(item) {
    item.actionName = item.manageActionName;
    item.SOWName = item.sowName;
    item.quoteNumber = this.qNumber;
    item.completionDate = item.loggedDate;
    // this._manageService.getTimesheetExpenseNotes(item.logHourId, true, item.isAssigned == 1 ? true : false, false).subscribe(data => {
    //   this.dialog.open(ShowMessagesComponent, {
    //     data: { notes: data['Data'], details: item },
    //     height: 'auto',
    //     width: '750px',
    //   }).afterClosed().subscribe(data => {
    //   });
    // })
  }

  public showUpdateDetailsDialog(item) {
    item.actionName = item.manageActionName;
    item.SOWName = item.sowName;
    item.quoteNumber = this.qNumber;
    item.completionDate = item.loggedDate;
    item.modifiedDate = item.modifiedDateTime;
    // this._manageService.getTimesheetExpenseNotes(item.logHourId, true, item.isAssigned == 1 ? true : false, true).subscribe(data => {
    //   console.log(data,'check data');
    //   let dialogRef = this.dialog.open(ViewUpdatedDetailsComponent, {
    //     data: { notes: data['Data'], details: item },
    //     height: 'auto',
    //     width: '750px',
    //   });
    //   dialogRef.afterClosed().subscribe(data => {
    //   });
    // })
    // var details = { modifiedByName: data.updatedBy, modifiedDate: data.updatedDate, pm_message: data.pmMessage}
    //   let dialogRef = this.dialog.open(ViewUpdatedDetailsComponent, {
    //     data: details,
    //     height: 'auto',
    //     width: '750px',
    //   });
    //   dialogRef.afterClosed().subscribe(data => {
    //   });
  }

}
