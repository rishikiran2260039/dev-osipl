import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatOption, Sort } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-project-expenses',
  templateUrl: './project-expenses.component.html',
  styleUrls: ['./project-expenses.component.scss']
})
export class ProjectExpensesComponent implements OnInit {
  total = 0;
  grandTotal = 0;
  filterToggle: boolean = false;
  isSelected: boolean;
  columns: string;
  partyChief: string;
  fieldAssistant: string;
  validatedby: string;
  amount: number;
  isApproved: boolean;
  isDeclined: boolean;
  subject: string;
  role: string;
  tillDateAmount: number;
  isPending: boolean;
  checked: boolean;
  allowAssign: boolean = true;
  InvoiceType: any = 'new';
  isNew: boolean = true;
  public pageSize = parseInt(localStorage.getItem('settings') ? localStorage.getItem('settings') : '5');
  public currentPage = 0;
  public totalSize = 0;
  qId: number;
  qNumber: string;
  allLoggedExpenses: any[];
  constLoggedExpenses: any[];
  expenseFolderId: string;
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
    private titleService: Title,
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
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
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
    this.getAllLoggedExpeneseOfQuote(this.qId);
    this.setTitle("CPM | Expenses");

  }

  getAllLoggedExpeneseOfQuote(quoteId) {
  }
  getSows(siteId) {
    this.filterForm.controls['sowId'].setValue(null);
    let SOWs = this.constLoggedExpenses.filter(x => x.siteId == siteId).map(x => ({ sowId: x.sowId, sowName: x.sowName }));
    const uniqueSOWs = Array.from(new Set(SOWs.map(a => a.sowId)))
      .map(id => {
        return SOWs.find(a => a.sowId === id)
      })
    SOWs = uniqueSOWs;

  }
  sortData(sort: Sort) {
    const data = this.allLoggedExpenses.slice();
    if (!sort.active || sort.direction === '') {
      this.allLoggedExpenses = data;
      return;
    }

    this.allLoggedExpenses = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'siteName': return this.compare(a.siteName.toLowerCase(), b.siteName.toLowerCase(), isAsc);
        case 'sowName': return this.compare(a.sowName.toLowerCase(), b.sowName.toLowerCase(), isAsc);
        case '3': return this.compare(a.manageActionName.toLowerCase(), b.manageActionName.toLowerCase(), isAsc);
        case '4': return this.compare(a.jobCode.toLowerCase(), b.jobCode.toLowerCase(), isAsc);
        case '5': return this.compare(a.expenseCode.toLowerCase(), b.expenseCode.toLowerCase(), isAsc);
        case '6': return this.compare(a.limitType.toLowerCase(), b.limitType.toLowerCase(), isAsc);
        case '7': return this.compare(a.expenseRate, b.expenseRate, isAsc);
        case '8': return this.compare(a.quantity, b.quantity, isAsc);
        case '10': return this.compare(a.isReimbursable, b.isReimbursable, isAsc);
        case '11': return this.compare(a.loggedDate.toLowerCase(), b.loggedDate.toLowerCase(), isAsc);
        case '12': return this.compare(a.loggedBy.toLowerCase(), b.loggedBy.toLowerCase(), isAsc);
        case 'createdDate': return this.compare(a.dt_created_date, b.dt_created_date, isAsc);
        default: return 0;
      }
    });
    this.currentPage = 0;
    this.loggedExpenses = this.allLoggedExpenses.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = this.allLoggedExpenses.length;
  }

  public compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  filterBy(formValues) {
    this.allLoggedExpenses = this.constLoggedExpenses;
    if ((formValues.siteId != null && formValues.siteId != '')
      || (formValues.sowId != null && formValues.sowId != '')
      || (formValues.taskId != null && formValues.taskId.length != 0)
      || (formValues.actionName != null && formValues.actionName.length != 0)
      || (formValues.userId != null && formValues.userId.length != 0)) {
      this.allLoggedExpenses = this.allLoggedExpenses.filter(x => (formValues.siteId == null || formValues.siteId == '' || x.siteId == formValues.siteId)
        && (formValues.sowId == null || formValues.sowId == '' || x.sowId == formValues.sowId)
        && (formValues.taskId == null || formValues.taskId.length == 0 || formValues.taskId.includes(x.taskId))
        && (formValues.actionName == null || formValues.actionName.length == 0 || formValues.actionName.includes(x.manageActionName))
        && (formValues.userId == null || formValues.userId.length == 0 || formValues.userId.includes(x.createdBy)))
    }
    if (formValues.fromDate != null && formValues.fromDate != '') {
      this.allLoggedExpenses = this.allLoggedExpenses.filter(x => this._datePipe.transform(x.loggedDate, 'yyyy-MM-dd') >= this._datePipe.transform(formValues.fromDate, 'yyyy-MM-dd'));
    }
    if (formValues.toDate != null && formValues.toDate != '') {
      this.allLoggedExpenses = this.allLoggedExpenses.filter(x => this._datePipe.transform(x.loggedDate, 'yyyy-MM-dd') <= this._datePipe.transform(formValues.toDate, 'yyyy-MM-dd'));
    }
    this.totalSize = this.allLoggedExpenses.length;
    this.currentPage = 0;
    this.loggedExpenses = this.allLoggedExpenses.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    //this.calculateTotal();
  }
  resetFilter() {
    this.currentPage = 0;
    this.pageSize = parseInt(localStorage.getItem('settings') ? localStorage.getItem('settings') : '5');
    this.getAllLoggedExpeneseOfQuote(this.qId);
    this.filterForm.reset();

  }
  funSelect(value) {
    if (this.checked == true) {
      this.allowAssign = false;
    }
    else {
      this.allowAssign = true;
    }
  }

  fnInvoiceType(value) {
    if (value == 'new') {
      this.isNew = true;
    }
    else {
      this.isNew = false;
    }
  }

  scrollActions(side) {
    var ele = document.getElementById('expenseTable');
    if (side == 'left')
      ele.scrollLeft += 190;
    else
      ele.scrollLeft -= 190;
  }

  @ViewChild('addSowModal') addSowModal: ModalDirective;
  @ViewChild('assignEstimateModal') assignEstimateModal: ModalDirective;

  showChildModal(): void {
    this.addSowModal.show();
  }

  hideChildModal(): void {
    this.addSowModal.hide();
  }

  showEstimateModal() {
    this.assignEstimateModal.show();
  }

  hideEstimateModal() {
    this.assignEstimateModal.hide();
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

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.loggedExpenses = this.allLoggedExpenses.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    //this.calculateTotal();
  }


  public opengridColDialog(lead) {

  }
  public openMessagesDiolog(item) {
    //console.log(item);
    item.actionName = item.manageActionName;
    item.SOWName = item.sowName;
    item.quoteNumber = this.qNumber;
    item.completionDate = item.loggedDate;
  }
  public showUpdateDetailsDialog(item) {
    //console.log(item);
    item.actionName = item.manageActionName;
    item.SOWName = item.sowName;
    item.quoteNumber = this.qNumber;
    item.completionDate = item.loggedDate;
    item.modifiedDate = item.modifiedDateTime;
  }

  // calculateTotal() {
  //   this.total = 0;
  //   this.grandTotal = 0;
  //   this.loggedExpenses.filter(x => x.status == true).forEach(x => {
  //     this.total = this.total + (x.expenseRate * x.quantity);
  //   });
  //   this.constLoggedExpenses.filter(x => x.status == true).forEach(x => {
  //     this.grandTotal = this.grandTotal + (x.expenseRate * x.quantity);
  //   });
  // }


  loggedExpenses = [
    {loggedDate:'11/05/2021', loggedBy:"Ajay",jobCode:"1DR",siteName:"First Site",sowName:"Test Module",manageActionName:"1st Draft Review",expenseCode:"Mileage",limitType:"No limit",expenseRate:0.50,quantity:30,expenseDescription:"-",isReimbursable:"Yes",status:'',createdDate:"11/05/2021"},
    {loggedDate:'11/05/2021', loggedBy:"Vijay",jobCode:"3RK",siteName:"Second Site",sowName:"Test Module",manageActionName:"2nd Draft Review",expenseCode:"Performance",limitType:"No limit",expenseRate:0.50,quantity:50,expenseDescription:"-",isReimbursable:"Yes",status:'',createdDate:"11/05/2021"},
  ]
}
