import { Component, OnInit } from '@angular/core';
import * as gifshot from 'gifshot';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle:boolean = false;
  ngOnInit() {

  }
  
  tableList: Object[] = [
   {subject: "Send approved Indent to Purchase Manager"},
   {subject: "Send copy of Quotation to Purchase Manager"},
   {subject: "Send a copy of PO to Project Manager"},
   {subject: "Send a copy of WO to Project Manager"},
   {subject: "Send a notification to Purchase Manager when GRN is created"},
   {subject: "Send a notification to Purchase Manager when ARN is created"},
   {subject: "Send a notification to Finance Manager when an invoice is logged"},
   {subject: "Send a notification to Purchase manager when an invoice is paid"},
   {subject: "Send a notification to Vendor when the invoice is paid"},
   {subject: "Notity failed login attempt to Administrator"},
   {subject: "Notity Admin Manager when a client is added"},
   {subject: "Notify Admin Manager when a project is added"},
   {subject: "Notify Admin Manager when a project is closed"},
  ];

}
