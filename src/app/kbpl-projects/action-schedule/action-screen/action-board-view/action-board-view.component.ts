import { animate, style, transition, trigger } from '@angular/animations';
import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { transferArrayItem, moveItemInArray, CdkDragDrop, CdkDragMove } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';

type Orientation = ("prev" | "next" | "none");

const speed = 10;

@Component({
  selector: 'app-action-board-view',
  templateUrl: './action-board-view.component.html',
  styleUrls: ['./action-board-view.component.scss'],
  providers: [DatePipe],
  animations: [
    trigger('slideInOut', [
      transition("* => prev", [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition("* => next", [
        style({ transform: 'translateX(100%)' }),
        animate('500ms ease-in', style({ transform: 'translateX(0%)' }))
      ])
    ])]
})

export class ActionBoardViewComponent implements OnInit {

  isMenuOn: boolean = true;
  actionSchedulingList = [];
  currentDate: Date = new Date();
  isActionsSubmitted = false;
  hasError = false;
  filterData = {};
  isSaving = false;
  // permissions: Permissions;
  taskId: number;
  scheduledActionDetails: any;
  getSummaryData = { TaskId: 0, ViewType: 2, FilterForm: {}, FromDate: null, ToDate: null };
  fromDate;
  toDate;
  showWeek: boolean = true;
  showDay: boolean = false;
  connectedTo = [];
  scheduledActionsByWeek = [];
  viewType: number = 2;
  rescheduleActionData = { ActionDetailId: null, ScheduleDate: null, AssignedToUserId: null, UpdateNotes: null, ManageActionId: null, IsPMScheduler: null };
  // subscription: Subscription;
  show: (true | false);
  public orientation: Orientation;
  isPM: boolean;
  isSuperAdmin: boolean;
  constructor(
    // private appSettings: AppSettings,
    // private _activatedRoute: ActivatedRoute,
    private _router: Router,
    // private _globalMethods: GlobalMethods,
    // private _schService: SchedulingService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    // private ele: ElementRef<HTMLElement>,
    private _datePipe: DatePipe) {
    // this.taskId = parseInt(atob(this._activatedRoute.parent.params['value']['taskId']));
    // this.permissions = this._globalMethods.checkPermissions('Action scheduling', 'Scheduling');
    // this.filterData = this.appSettings.filterData$.value;
    // this._activatedRoute.queryParams.subscribe(
    //   queryParams => {
    //     this.fromDate = queryParams['FromDate'];
    //     this.toDate = queryParams['ToDate'];
    //   }
    // )

    // let sessionDetails = JSON.parse(localStorage.getItem('userloginsession'));
    // let roles = sessionDetails['Roles']
    // let btSuperAdmin = sessionDetails['UserDetails']['bt_user_last_loggedin_mode'];
    // if(btSuperAdmin == true || roles.filter(x=> x == 'Super Admin').length > 0){
    this.isSuperAdmin = true;
    // }
    // if(roles.filter(x => x == 'Project Manager').length > 0 && !this.isSuperAdmin && !this.permissions.approval){
    this.isPM = true;
    // }
    // else{
    //   this.isPM = false;
    // }
  }

  @ViewChild('scrollEl')
  scrollEl: ElementRef<HTMLElement>;


  // @ViewChildren(CdkDrag)
  // dragEls: QueryList<CdkDrag>;


  // subs = new Subscription();


  // ngAfterViewInit() {
  //   const onMove$ = this.dragEls.changes.pipe(
  //     startWith(this.dragEls)
  //     , map((d: QueryList<CdkDrag>) => d.toArray())
  //     , map(dragels => dragels.map(drag => drag.moved))
  //     , switchMap(obs => merge(...obs))
  //     , tap(this.triggerScroll)
  //   );

  //   this.subs.add(onMove$.subscribe());

  //   const onDown$ = this.dragEls.changes.pipe(
  //     startWith(this.dragEls)
  //     , map((d: QueryList<CdkDrag>) => d.toArray())
  //     , map(dragels => dragels.map(drag => drag.ended))
  //     , switchMap(obs => merge(...obs))
  //     , tap(this.cancelScroll)
  //   );

  //   this.subs.add(onDown$.subscribe());
  // }

  private animationFrame: number | undefined;


  @bound
  public triggerScroll($event: CdkDragMove) {
    var edgeSize = 200;
    var viewportX = $event.pointerPosition.x;
    var viewportY = $event.pointerPosition.y;
    var viewportWidth = document.documentElement.clientWidth;
    var viewportHeight = document.documentElement.clientHeight;

    let edgeTop = edgeSize;
    let edgeLeft = edgeSize + 200;
    let edgeBottom = (viewportHeight - edgeSize);
    let edgeRight = (viewportWidth - edgeSize);

    let isInLeftEdge: boolean = (viewportX < edgeLeft);
    let isInRightEdge: boolean = (viewportX > edgeRight);
    let isInTopEdge: boolean = (viewportY < edgeTop);
    let isInBottomEdge: boolean = (viewportY > edgeBottom);


    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = undefined;
    }
    this.animationFrame = requestAnimationFrame(() => this.scroll($event, isInTopEdge, isInBottomEdge, isInLeftEdge, isInRightEdge));
  }

  @bound
  private cancelScroll() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = undefined;
    }
  }


  markActionAsCompleted(event, detailId) {
    // if(!this.permissions.approval){
    //   return;
    // }
    // this._schService.MarkActionReviewed(detailId).subscribe(
    //   data=>{
    //       this.getScheduledActionsByWeek();
    //   }
    // )
  }

  private scroll($event: CdkDragMove, isTop: boolean, isBottom: boolean, isLeft: boolean, isRight: boolean) {
    const { x, y } = $event.pointerPosition;
    const baseEl = this.scrollEl.nativeElement;
    const box = baseEl.getBoundingClientRect();
    const scrollTop = baseEl.scrollTop;
    // const scrollLeft = baseEl.scrollLeft;
    const top = box.top + - y;
    // const right = box.right + -x;
    if (isTop == true) {
      const newScroll = scrollTop - speed * Math.exp(top / 50);
      baseEl.scrollTop = newScroll;
      this.animationFrame = requestAnimationFrame(() => this.scroll($event, isTop, isBottom, isLeft, isRight));
      return;
    }
    if (isBottom == true) {
      const bottom = y - box.bottom;
      const newScroll = scrollTop + speed * Math.exp(bottom / 50);
      baseEl.scrollTop = newScroll;
      this.animationFrame = requestAnimationFrame(() => this.scroll($event, isTop, isBottom, isLeft, isRight));
      return;
    }
  }

  ngOnInit() {
    this.getActionSechdulingList({});
    this.getScheduledActionsByWeek();
  }


  toggle() {
    if (this.show)
      this.orientation = "next";
    else
      this.orientation = "prev";
  }

  changeMenu() {
    this.isMenuOn = !this.isMenuOn;
  }

  setValues() {
  }

  getActionSechdulingList(filterData) {
    this.isActionsSubmitted = false;
    this.hasError = false;
    let data = {
      "ActionSchedulingList": [
        {
          "OldFirstTeamMemberId": null,
          "OldSecondTeamMemberId": null,
          "OldThirdTeamMemberId": null,
          "OldNotes": null,
          "OldJobCodeId": null,
          "WasManageActionDeleted": null,
          "ActionGoogleDriveId": null,
          "ManageActionId": 398,
          "TaskId": 10,
          "TaskName": "Field",
          "QuoteId": 250,
          "QuoteNo": "A-025021",
          "SiteId": 246,
          "SiteName": "001 First Site",
          "SiteStreetAddress": null,
          "siteLatitude": null,
          "siteLongitude": null,
          "SiteCity": null,
          "SiteState": null,
          "SiteCountry": null,
          "SowId": 320,
          "SowName": "Test Module",
          "ActionId": 13,
          "ActionName": "1st Draft Review",
          "JobCodeId": 106,
          "JobCode": "1DR",
          "JobCodeTitle": "1st Draft Reviewer",
          "JobCodeStatus": true,
          "PlannedHours": 6,
          "CreatedDate": "2021-05-15T22:45:42.657",
          "CreatedOn": "0001-01-01T00:00:00",
          "DueDate": "2021-05-19T18:30:00",
          "DueDateOptionId": 38,
          "DueDateOption": "Flex Date - Action must be completed on OR before this specific date",
          "DetailsList": [
            {
              "ModifiedBy": null,
              "IsDuplicate": false,
              "AssignedHours": null,
              "AssignedUser": null,
              "ScheduleDate": "2021-06-08",
              "AssignUserList": [
                {
                  "UserId": 71,
                  "UserName": "Cris Leduc",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 46,
                  "UserName": "Joseph Blackmore",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 79,
                  "UserName": "Option Matrix",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 78,
                  "UserName": "Sachin Patil",
                  "userAssignedHours": null,
                  "Status": true
                }
              ],
              "AssignedOn": null,
              "AssignedTo": null,
              "AssignedBy": null,
              "DetailId": null,
              "LogHoursId": null,
              "ActionCompletionStatus": null,
              "Approved": null,
              "Status": null,
              "AssignedUserStatus": null,
              "TimesheetSubmittedDate": null,
              "CompletedDate": null,
              "ActualHours": null,
              "ActualCost": null,
              "WorkedHours": null,
              "RemainingHours": null,
              "TimesheetExists": false
            }
          ],
          "IsRemedialAction": false,
          "TeamMemberId": null,
          "ProjectManagerId": 3,
          "ProjectManagerName": "Kenneth McKee",
          "TotalAssignedHours": 0,
          "TotalScheduledHours": 6,
          "UnScheduled": null,
          "Rescheduled": null,
          "ProjectType": "project",
          "IsProject": true,
          "Notes": "Testing",
          "IsDueToday": true,
          "Address": "Kondapur Main Road, Laxmi",
          "City": "Hyderabad",
          "LogHourId": null,
          "IsApproved": null,
          "IsDelete": false,
          "ShouldUpdateManage": false,
          "IsPreferred": true,
          "FirstTeamMemberId": 79,
          "SecondTeamMemberId": null,
          "ThirdTeamMemberId": null,
          "ScheduledActionsCount": 0,
          "JobCodeRate": null,
          "ActualHours": null,
          "ActualCost": null,
          "WorkedHours": null,
          "RemainingHours": null,
          "OldPlannedHours": 6,
          "PreviousDueDateOptionId": null,
          "PreviousDueDate": null,
          "Remarks": null,
          "Permission": false,
          "IsPMScheduler": null,
          "EncryptedQuoteId": "MjUw",
          "EncryptedQuoteNum": "QS0wMjUwMjE=",
          "EncryptedProjectType": "cHJvamVjdA==",
          "EncryptedSiteId": "MjQ2",
          "EncryptedSowId": "MzIw"
        },
        {
          "OldFirstTeamMemberId": null,
          "OldSecondTeamMemberId": null,
          "OldThirdTeamMemberId": null,
          "OldNotes": null,
          "OldJobCodeId": null,
          "WasManageActionDeleted": null,
          "ActionGoogleDriveId": null,
          "ManageActionId": 323,
          "TaskId": 10,
          "TaskName": "Field",
          "QuoteId": 235,
          "QuoteNo": "A-025011",
          "SiteId": 235,
          "SiteName": "001 Sipcot Industrial Park",
          "SiteStreetAddress": null,
          "siteLatitude": null,
          "siteLongitude": null,
          "SiteCity": null,
          "SiteState": null,
          "SiteCountry": null,
          "SowId": 309,
          "SowName": "SRPR",
          "ActionId": 4,
          "ActionName": "Field Design",
          "JobCodeId": 80,
          "JobCode": "EPC1",
          "JobCodeTitle": "Engineering Party Chief 1",
          "JobCodeStatus": true,
          "PlannedHours": 2,
          "CreatedDate": "2021-02-25T01:31:49.073",
          "CreatedOn": "0001-01-01T00:00:00",
          "DueDate": "2021-02-24T05:00:00",
          "DueDateOptionId": 37,
          "DueDateOption": "Fixed Date - Action must be completed ON this specific date",
          "DetailsList": [
            {
              "ModifiedBy": null,
              "IsDuplicate": false,
              "AssignedHours": null,
              "AssignedUser": null,
              "ScheduleDate": "2021-06-08",
              "AssignUserList": [
                {
                  "UserId": 67,
                  "UserName": "Bob Cormier",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 71,
                  "UserName": "Cris Leduc",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 59,
                  "UserName": "James Smith",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 46,
                  "UserName": "Joseph Blackmore",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 3,
                  "UserName": "Kenneth McKee",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 55,
                  "UserName": "Margaret Smith",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 79,
                  "UserName": "Option Matrix",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 78,
                  "UserName": "Sachin Patil",
                  "userAssignedHours": null,
                  "Status": true
                }
              ],
              "AssignedOn": null,
              "AssignedTo": null,
              "AssignedBy": null,
              "DetailId": null,
              "LogHoursId": null,
              "ActionCompletionStatus": null,
              "Approved": null,
              "Status": null,
              "AssignedUserStatus": null,
              "TimesheetSubmittedDate": null,
              "CompletedDate": null,
              "ActualHours": null,
              "ActualCost": null,
              "WorkedHours": null,
              "RemainingHours": null,
              "TimesheetExists": false
            }
          ],
          "IsRemedialAction": false,
          "TeamMemberId": null,
          "ProjectManagerId": 53,
          "ProjectManagerName": "Andrew Jones",
          "TotalAssignedHours": 0,
          "TotalScheduledHours": 2,
          "UnScheduled": null,
          "Rescheduled": null,
          "ProjectType": "project",
          "IsProject": true,
          "Notes": "NA",
          "IsDueToday": true,
          "Address": "Plot No. A-1, Sipcot Industrial Park",
          "City": "Chennai",
          "LogHourId": null,
          "IsApproved": null,
          "IsDelete": false,
          "ShouldUpdateManage": false,
          "IsPreferred": false,
          "FirstTeamMemberId": null,
          "SecondTeamMemberId": null,
          "ThirdTeamMemberId": null,
          "ScheduledActionsCount": 0,
          "JobCodeRate": null,
          "ActualHours": null,
          "ActualCost": null,
          "WorkedHours": null,
          "RemainingHours": null,
          "OldPlannedHours": 2,
          "PreviousDueDateOptionId": null,
          "PreviousDueDate": null,
          "Remarks": null,
          "Permission": false,
          "IsPMScheduler": null,
          "EncryptedQuoteId": "MjM1",
          "EncryptedQuoteNum": "QS0wMjUwMTE=",
          "EncryptedProjectType": "cHJvamVjdA==",
          "EncryptedSiteId": "MjM1",
          "EncryptedSowId": "MzA5"
        },
        {
          "OldFirstTeamMemberId": null,
          "OldSecondTeamMemberId": null,
          "OldThirdTeamMemberId": null,
          "OldNotes": null,
          "OldJobCodeId": null,
          "WasManageActionDeleted": null,
          "ActionGoogleDriveId": null,
          "ManageActionId": 302,
          "TaskId": 10,
          "TaskName": "Field",
          "QuoteId": 225,
          "QuoteNo": "R-025002",
          "SiteId": 226,
          "SiteName": "001 Norris Court",
          "SiteStreetAddress": null,
          "siteLatitude": null,
          "siteLongitude": null,
          "SiteCity": null,
          "SiteState": null,
          "SiteCountry": null,
          "SowId": 299,
          "SowName": "SRPR",
          "ActionId": 15,
          "ActionName": "Field QC",
          "JobCodeId": 74,
          "JobCode": "FQC",
          "JobCodeTitle": "Field QC Technician",
          "JobCodeStatus": false,
          "PlannedHours": 2,
          "CreatedDate": "2021-02-05T02:38:55.463",
          "CreatedOn": "0001-01-01T00:00:00",
          "DueDate": "2021-02-11T05:00:00",
          "DueDateOptionId": 37,
          "DueDateOption": "Fixed Date - Action must be completed ON this specific date",
          "DetailsList": [
            {
              "ModifiedBy": null,
              "IsDuplicate": false,
              "AssignedHours": null,
              "AssignedUser": null,
              "ScheduleDate": "2021-06-08",
              "AssignUserList": [
                {
                  "UserId": 67,
                  "UserName": "Bob Cormier",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 71,
                  "UserName": "Cris Leduc",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 3,
                  "UserName": "Kenneth McKee",
                  "userAssignedHours": null,
                  "Status": true
                }
              ],
              "AssignedOn": null,
              "AssignedTo": null,
              "AssignedBy": null,
              "DetailId": null,
              "LogHoursId": null,
              "ActionCompletionStatus": null,
              "Approved": null,
              "Status": null,
              "AssignedUserStatus": null,
              "TimesheetSubmittedDate": null,
              "CompletedDate": null,
              "ActualHours": null,
              "ActualCost": null,
              "WorkedHours": null,
              "RemainingHours": null,
              "TimesheetExists": false
            }
          ],
          "IsRemedialAction": false,
          "TeamMemberId": null,
          "ProjectManagerId": 3,
          "ProjectManagerName": "Kenneth McKee",
          "TotalAssignedHours": 0,
          "TotalScheduledHours": 1,
          "UnScheduled": true,
          "Rescheduled": true,
          "ProjectType": "quote",
          "IsProject": false,
          "Notes": "na",
          "IsDueToday": true,
          "Address": "637 Norris Court",
          "City": "Jersey City",
          "LogHourId": null,
          "IsApproved": null,
          "IsDelete": false,
          "ShouldUpdateManage": false,
          "IsPreferred": false,
          "FirstTeamMemberId": null,
          "SecondTeamMemberId": null,
          "ThirdTeamMemberId": null,
          "ScheduledActionsCount": 1,
          "JobCodeRate": null,
          "ActualHours": null,
          "ActualCost": null,
          "WorkedHours": null,
          "RemainingHours": null,
          "OldPlannedHours": 2,
          "PreviousDueDateOptionId": null,
          "PreviousDueDate": null,
          "Remarks": null,
          "Permission": false,
          "IsPMScheduler": null,
          "EncryptedQuoteId": "MjI1",
          "EncryptedQuoteNum": "Ui0wMjUwMDI=",
          "EncryptedProjectType": "cXVvdGU=",
          "EncryptedSiteId": "MjI2",
          "EncryptedSowId": "Mjk5"
        },
        {
          "OldFirstTeamMemberId": null,
          "OldSecondTeamMemberId": null,
          "OldThirdTeamMemberId": null,
          "OldNotes": null,
          "OldJobCodeId": null,
          "WasManageActionDeleted": null,
          "ActionGoogleDriveId": null,
          "ManageActionId": 311,
          "TaskId": 10,
          "TaskName": "Field",
          "QuoteId": 232,
          "QuoteNo": "A-025008",
          "SiteId": 232,
          "SiteName": "001 274 Clyde St.",
          "SiteStreetAddress": null,
          "siteLatitude": null,
          "siteLongitude": null,
          "SiteCity": null,
          "SiteState": null,
          "SiteCountry": null,
          "SowId": 305,
          "SowName": "Final As-Built Survey",
          "ActionId": 13,
          "ActionName": "1st Draft Review",
          "JobCodeId": 106,
          "JobCode": "1DR",
          "JobCodeTitle": "1st Draft Reviewer",
          "JobCodeStatus": true,
          "PlannedHours": 2,
          "CreatedDate": "2021-02-05T02:57:01.963",
          "CreatedOn": "0001-01-01T00:00:00",
          "DueDate": "2021-02-03T05:00:00",
          "DueDateOptionId": 37,
          "DueDateOption": "Fixed Date - Action must be completed ON this specific date",
          "DetailsList": [
            {
              "ModifiedBy": null,
              "IsDuplicate": false,
              "AssignedHours": null,
              "AssignedUser": null,
              "ScheduleDate": "2021-06-08",
              "AssignUserList": [
                {
                  "UserId": 71,
                  "UserName": "Cris Leduc",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 46,
                  "UserName": "Joseph Blackmore",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 79,
                  "UserName": "Option Matrix",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 78,
                  "UserName": "Sachin Patil",
                  "userAssignedHours": null,
                  "Status": true
                }
              ],
              "AssignedOn": null,
              "AssignedTo": null,
              "AssignedBy": null,
              "DetailId": null,
              "LogHoursId": null,
              "ActionCompletionStatus": null,
              "Approved": null,
              "Status": null,
              "AssignedUserStatus": null,
              "TimesheetSubmittedDate": null,
              "CompletedDate": null,
              "ActualHours": null,
              "ActualCost": null,
              "WorkedHours": null,
              "RemainingHours": null,
              "TimesheetExists": false
            }
          ],
          "IsRemedialAction": false,
          "TeamMemberId": null,
          "ProjectManagerId": 59,
          "ProjectManagerName": "James Smith",
          "TotalAssignedHours": 0,
          "TotalScheduledHours": 2,
          "UnScheduled": null,
          "Rescheduled": null,
          "ProjectType": "project",
          "IsProject": true,
          "Notes": "NA",
          "IsDueToday": true,
          "Address": "167 William Fair Drive",
          "City": "Darlington",
          "LogHourId": null,
          "IsApproved": null,
          "IsDelete": false,
          "ShouldUpdateManage": false,
          "IsPreferred": false,
          "FirstTeamMemberId": null,
          "SecondTeamMemberId": null,
          "ThirdTeamMemberId": null,
          "ScheduledActionsCount": 0,
          "JobCodeRate": null,
          "ActualHours": null,
          "ActualCost": null,
          "WorkedHours": null,
          "RemainingHours": null,
          "OldPlannedHours": 2,
          "PreviousDueDateOptionId": null,
          "PreviousDueDate": null,
          "Remarks": null,
          "Permission": false,
          "IsPMScheduler": null,
          "EncryptedQuoteId": "MjMy",
          "EncryptedQuoteNum": "QS0wMjUwMDg=",
          "EncryptedProjectType": "cHJvamVjdA==",
          "EncryptedSiteId": "MjMy",
          "EncryptedSowId": "MzA1"
        }
      ],
      "UnscheduledTotal": 11,
      "ScheduledTotal": 385
    }
    this.actionSchedulingList = data['ActionSchedulingList'];
  }


  highlightUnscheduledAction(actionId) {
    // this._router.navigate(['/IBW/scheduling/action-calendar/' + this._activatedRoute.parent.params['value']['taskId'] + '/gridview/unscheduled'], { queryParams: { actionId: btoa(actionId) } })
  }

  getScheduledActionsByWeek() {
    // if (this.fromDate == null || this.fromDate == '' || this.toDate == null || this.toDate == '') {
    //   this.getSummaryData.FromDate = this.fromDate = null;
    //   this.getSummaryData.ToDate = this.toDate = null;
    // }
    // else {
    //   this.getSummaryData.FromDate = new Date(this._datePipe.transform(this.fromDate, 'yyyy-MM-dd'));
    //   this.getSummaryData.ToDate = new Date(this._datePipe.transform(this.toDate, 'yyyy-MM-dd'));
    // }
    // this.getSummaryData.TaskId = parseInt(atob(this._activatedRoute.parent.params['value']['taskId']));;
    // this.getSummaryData.ViewType = this._activatedRoute.params['value']['viewType'];
    // this.getSummaryData.FilterForm = this.filterData;
    // this._schService.getScheduledActionsByWeek(this.getSummaryData).subscribe(data => {
    //   this.orientation = "none";
    let data = [
      {
        "UserId": 79,
        "UserName": "Option Matrix",
        "ActionScheduledOnDate": [
          {
            "Date": "2021-05-31T00:00:00+05:30",
            "TotalHours": 9,
            "ActionsList": [
              {
                "IsNotYetStarted": false,
                "NotYetStartedRemarks": null,
                "DueDateOption": null,
                "PendingTimesheetExists": false,
                "IsReviewed": true,
                "TimeSheetStatus": null,
                "FilterForm": null,
                "ActionId": 411,
                "ActionDetailId": 258,
                "UserId": 79,
                "TaskId": null,
                "UserName": null,
                "TaskName": "Field",
                "QuoteNo": "A-025021",
                "SiteName": "001 First Site",
                "SowName": null,
                "ActionName": null,
                "JobCode": null,
                "JobCodeTitle": null,
                "AssignedHours": 7,
                "WorkedHours": null,
                "RemainingHours": null,
                "ScheduledDate": null,
                "CompletionDate": null,
                "ViewType": 0,
                "AssignedOn": null,
                "ActionSchedulingStatus": null,
                "ActionDueDateOption": "Flex Date - Action must be completed on OR before this specific date",
                "ManageActionId": 411,
                "PlannedHours": null,
                "DueDate": "2021-05-31",
                "ProjectManager": "Kenneth McKee",
                "Sequence": 1,
                "FromDate": null,
                "ToDate": null,
                "TimesheetId": null,
                "TimesheetApproved": null,
                "IsPreferred": null,
                "FirstTeamMemberId": null,
                "SecondTeamMemberId": null,
                "ThirdTeamMemberId": null,
                "FirstTeamMemberName": null,
                "SecondTeamMemberName": null,
                "ThirdTeamMemberName": null,
                "DueDateOptionId": null,
                "TeamMemberId": null,
                "IsRemedialAction": null,
                "JobCodeId": 106,
                "TimesheetParentExists": null,
                "IsSuperAdmin": false
              },
              {
                "IsNotYetStarted": false,
                "NotYetStartedRemarks": null,
                "DueDateOption": null,
                "PendingTimesheetExists": false,
                "IsReviewed": true,
                "TimeSheetStatus": null,
                "FilterForm": null,
                "ActionId": 400,
                "ActionDetailId": 247,
                "UserId": 79,
                "TaskId": null,
                "UserName": null,
                "TaskName": "Field",
                "QuoteNo": "A-025021",
                "SiteName": "001 First Site",
                "SowName": null,
                "ActionName": null,
                "JobCode": null,
                "JobCodeTitle": null,
                "AssignedHours": 2,
                "WorkedHours": null,
                "RemainingHours": null,
                "ScheduledDate": null,
                "CompletionDate": null,
                "ViewType": 0,
                "AssignedOn": null,
                "ActionSchedulingStatus": null,
                "ActionDueDateOption": "Flex Date - Action must be completed on OR before this specific date",
                "ManageActionId": 400,
                "PlannedHours": null,
                "DueDate": "2021-05-18",
                "ProjectManager": "Kenneth McKee",
                "Sequence": 2,
                "FromDate": null,
                "ToDate": null,
                "TimesheetId": null,
                "TimesheetApproved": null,
                "IsPreferred": null,
                "FirstTeamMemberId": null,
                "SecondTeamMemberId": null,
                "ThirdTeamMemberId": null,
                "FirstTeamMemberName": null,
                "SecondTeamMemberName": null,
                "ThirdTeamMemberName": null,
                "DueDateOptionId": null,
                "TeamMemberId": null,
                "IsRemedialAction": null,
                "JobCodeId": 106,
                "TimesheetParentExists": null,
                "IsSuperAdmin": false
              }
            ],
            "strDate": "Mon | 05-31",
            "Day": "Monday",
            "Availability": "-",
            "Leaves": [],
            "Holidays": [],
            "TotalWorkedHours": 0,
            "TotalRemainingHours": null
          },
          {
            "Date": "2021-06-01T00:00:00+05:30",
            "TotalHours": 0,
            "ActionsList": [],
            "strDate": "Tue | 06-01",
            "Day": "Tuesday",
            "Availability": "-",
            "Leaves": [],
            "Holidays": [],
            "TotalWorkedHours": 0,
            "TotalRemainingHours": 0
          },
          {
            "Date": "2021-06-02T00:00:00+05:30",
            "TotalHours": 0,
            "ActionsList": [],
            "strDate": "Wed | 06-02",
            "Day": "Wednesday",
            "Availability": "-",
            "Leaves": [],
            "Holidays": [],
            "TotalWorkedHours": 0,
            "TotalRemainingHours": 0
          },
          {
            "Date": "2021-06-03T00:00:00+05:30",
            "TotalHours": 0,
            "ActionsList": [],
            "strDate": "Thu | 06-03",
            "Day": "Thursday",
            "Availability": "-",
            "Leaves": [],
            "Holidays": [],
            "TotalWorkedHours": 0,
            "TotalRemainingHours": 0
          },
          {
            "Date": "2021-06-04T00:00:00+05:30",
            "TotalHours": 0,
            "ActionsList": [],
            "strDate": "Fri | 06-04",
            "Day": "Friday",
            "Availability": "-",
            "Leaves": [],
            "Holidays": [],
            "TotalWorkedHours": 0,
            "TotalRemainingHours": 0
          },
          {
            "Date": "2021-06-05T00:00:00+05:30",
            "TotalHours": 0,
            "ActionsList": [],
            "strDate": "Sat | 06-05",
            "Day": "Saturday",
            "Availability": "-",
            "Leaves": [],
            "Holidays": [],
            "TotalWorkedHours": 0,
            "TotalRemainingHours": 0
          },
          {
            "Date": "2021-06-06T00:00:00+05:30",
            "TotalHours": 0,
            "ActionsList": [],
            "strDate": "Sun | 06-06",
            "Day": "Sunday",
            "Availability": "-",
            "Leaves": [],
            "Holidays": [],
            "TotalWorkedHours": 0,
            "TotalRemainingHours": 0
          }
        ],
        "JobCodeIds": [
          53,
          95,
          96,
          99,
          103,
          79,
          86,
          87,
          56,
          93,
          92,
          71,
          72,
          73,
          80,
          81,
          82,
          104,
          107,
          100,
          83,
          84,
          85,
          61,
          70,
          55,
          94,
          89,
          90,
          91,
          59,
          97,
          98,
          106
        ]
      }
    ]
    this.scheduledActionsByWeek = data;
  }

  getStatusClass(item): string {
    if (item.TimeSheetStatus != 'Completed' && item.TimeSheetStatus != 'In Progress') {
      if (item.ActionDueDateOption == 'Fixed Date - Action must be completed ON this specific date'
        || item.DueDateOption == 'Fixed Date - Action must be completed ON this specific date') {
        return 'BoldTextRed';
      }
      else if ((item.ActionDueDateOption == 'Flex Date - Action must be completed on OR before this specific date'
        || item.DueDateOption == 'Flex Date - Action must be completed on OR before this specific date') &&
        (this._datePipe.transform(item.DueDate, 'yyyy-MM-dd') <= this._datePipe.transform(new Date(), 'yyyy-MM-dd'))) {
        return 'BoldTextRed';
      }
      else {
        return 'normal-band';
      }
    }
    else {
      if (item.TimesheetApproved == false) {
        return 'light-red';
      }
      else if (item.TimeSheetStatus == 'Completed') {
        return 'yellow-band';
      }
      else if (item.TimeSheetStatus == 'In Progress') {
        return 'cyan-band';
      }
      else {
        return 'normal-band';
      }
    }
  }

  scheduleUnassignedAction(manageActionId: number, remaininghours, scheduledActionsCount: number) {
  }

  public openAddPhoneNotesDialog(manageActionId, detailId, timesheetStatus) {
  }

  drop(event: CdkDragDrop<string[]>, userId, date, jobCodeIds) {
    if (event.item.element.nativeElement.id == "unassigned") {
      let currentObj = this.actionSchedulingList[event.previousIndex];
      if (!jobCodeIds.includes(currentObj.JobCodeId)) {
        this._snackBar.open("The selected user does not have the required job code", '', {
          duration: 4000,
          panelClass: 'redSnackBar'
        });
        return;
      }
      if (currentObj['DueDate'] == null || currentObj['DueDate'] == undefined) {
        this._snackBar.open('Action with pending due date cannot be dragged', '', {
          duration: 4000,
          panelClass: 'redSnackBar'
        });
        return;
      }
      let actionDetailId = null;
      if (event.container.data[event.currentIndex] != null && event.container.data[event.currentIndex] != undefined) {
        actionDetailId = event.container.data[event.currentIndex]['ActionDetailId'];
      }
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      let newDate = event.container.id.split('|')[1];
      let newUserId = event.container.id.split('|')[0];
      let MainObj = {
        ManageActionId: currentObj.ManageActionId, ScheduledDate: newDate,
        UserId: newUserId, SequenceNumber: event.currentIndex, IsPMScheduler: this.isPM,
        RemainingHours: currentObj.TotalScheduledHours,
        AssignedHours: ((currentObj.TotalScheduledHours > 0) ? currentObj.TotalScheduledHours : currentObj.PlannedHours),
        PlannedHours: currentObj.PlannedHours, ActionDetailId: actionDetailId
      };
      // this._schService.scheduleUnAssignedAction(MainObj).subscribe(
      //   data => {
      //     this.getScheduledActionsByWeek();
      //   }
      // )
      this.getActionSechdulingList(this.filterData);
      // this.rescheduleActionData.ScheduleDate = this._datePipe.transform(newDate, 'yyyy-MM-dd');
      // this.rescheduleActionData.AssignedToUserId = newUserId;
    }
    else {
      var id = event.item.element.nativeElement.id.split('|')[0];
      var status = event.item.element.nativeElement.id.split('|')[1];
      if (status == 'Completed' || status == 'In Progress') {
        this._snackBar.open('Action with Completed or In Progress status cannot be dragged', '', {
          duration: 4000,
          panelClass: 'redSnackBar'
        });
      } else {
        if (event.previousContainer === event.container) {
          moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
          var newList = this.scheduledActionsByWeek.filter(x => x.UserId == userId);
          newList = newList[0].ActionScheduledOnDate.filter(x => x.Date == date)[0].ActionsList.map(x => x.ActionDetailId);
          if (newList.length > 1) {
            // this._schService.updateScheduledActionsSequence(newList).subscribe(data => { });
          }
        }
        else {
          let JobCodeId = event.item.element.nativeElement.id.split('|')[3] ? parseInt(event.item.element.nativeElement.id.split('|')[3]) : 0;
          if (jobCodeIds.includes(JobCodeId) == false) {
            this._snackBar.open("The selected user does not have the required job code", '', {
              duration: 4000,
              panelClass: 'redSnackBar'
            });
            return;
          }
          transferArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex);
          let newDate = event.container.id.split('|')[1];
          let newUserId = event.container.id.split('|')[0];
          this.rescheduleActionData.ActionDetailId = id;// event.item.element.nativeElement.id;
          this.rescheduleActionData.ScheduleDate = this._datePipe.transform(newDate, 'yyyy-MM-dd');
          this.rescheduleActionData.AssignedToUserId = newUserId;
          this.rescheduleActionData.UpdateNotes = false;
          this.rescheduleActionData.ManageActionId = event.item.element.nativeElement.id.split('|')[2];
          this.rescheduleActionData.IsPMScheduler = this.isPM;
          // this._schService.recheduledAction(this.rescheduleActionData).subscribe(data => {
          //   var newList = this.scheduledActionsByWeek.filter(x => x.UserId == userId);
          //   newList = newList[0].ActionScheduledOnDate.filter(x => x.Date == date)[0].ActionsList.map(x => x.ActionDetailId);
          //   if (newList.length > 1) {
          //     this._schService.updateScheduledActionsSequence(newList).subscribe(data => {
          //     });
          //   }
          // });
          this.getScheduledActionsByWeek();
        }
      }
    }
  }

  getScheduledActionsByCustomDate() {
    if (this.fromDate == null || this.fromDate == '' || this.toDate == null || this.toDate == '') {
      this._snackBar.open('Please select dates', '', {
        duration: 3000,
        panelClass: 'redSnackBar'
      });
    } else {
      this.getSummaryData.FromDate = this._datePipe.transform(this.fromDate, 'yyyy-MM-dd');
      this.getSummaryData.ToDate = this._datePipe.transform(this.toDate, 'yyyy-MM-dd');
    }
  }

  toDateChanged(event: any) {
    this.toDate = new Date(event);
    this.fromDate = new Date();
    this.fromDate.setTime(this.toDate.getTime() - (6 * 24 * 3600000));
  }
  ngOnDestroy() {
    // this.subscription.unsubscribe();
    // this.appSettings.BoardViewURL.next({
    //   viewType: this._activatedRoute.params['value']['viewType'], queryParams: {
    //     FromDate: this._activatedRoute.queryParams['value']['FromDate'] ? this._activatedRoute.queryParams['value']['FromDate'] : null,
    //     ToDate: this._activatedRoute.queryParams['value']['ToDate'] ? this._activatedRoute.queryParams['value']['ToDate'] : null
    //   }, showWeekEnd: this.show
    // });
    // this.subs.unsubscribe();
  }

}

export function bound(target: Object, propKey: string | symbol) {
  var originalMethod = (target as any)[propKey] as Function;

  // Ensure the above type-assertion is valid at runtime.
  if (typeof originalMethod !== "function") throw new TypeError("@bound can only be used on methods.");

  if (typeof target === "function") {
    // Static method, bind to class (if target is of type "function", the method decorator was used on a static method).
    return {
      value: function () {
        return originalMethod.apply(target, arguments);
      }
    };
  } else if (typeof target === "object") {
    // Instance method, bind to instance on first invocation (as that is the only way to access an instance from a decorator).
    return {
      get: function () {
        // Create bound override on object instance. This will hide the original method on the prototype, and instead yield a bound version from the
        // instance itself. The original method will no longer be accessible. Inside a getter, 'this' will refer to the instance.
        var instance = this;

        Object.defineProperty(instance, propKey.toString(), {
          value: function () {
            // This is effectively a lightweight bind() that skips many (here unnecessary) checks found in native implementations.
            return originalMethod.apply(instance, arguments);
          }
        });

        // The first invocation (per instance) will return the bound method from here. Subsequent calls will never reach this point, due to the way
        // JavaScript runtimes look up properties on objects; the bound method, defined on the instance, will effectively hide it.
        return instance[propKey];
      }
    } as PropertyDescriptor;
  }

}
function CdkDrag(CdkDrag: any) {
  throw new Error('Function not implemented.');
}