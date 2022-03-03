import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddPopupTermsmasterComponent } from './add-popup-termsmaster/add-popup-termsmaster.component';
import { NarrationsPopupComponent } from './narrations-popup/narrations-popup.component';

@Component({
  selector: 'app-terms-master-setup',
  templateUrl: './terms-master-setup.component.html',
  styleUrls: ['./terms-master-setup.component.scss']
})
export class TermsMasterSetupComponent implements OnInit {
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle:boolean = false;
  constructor(public dialog:MatDialog, private alertService: AlertService) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';

  ngOnInit() {
  }

  items = [
    { Subject: "ACKNOWLEDGEMENT COPY", Narration: "i", Type: "Purchase Order", status: true,},
    { Subject: "DELIVERY DATE", Narration: "i", Type: "Purchase Order", status: true,},
    { Subject: "PAYMENT TERMS", Narration: "i", Type: "Purchase Order", status: true},
    { Subject: "TAX EXEMPTION", Narration: "i", Type: "Purchase Order", status: true,},
    { Subject: "EXPORT LICENCE", Narration: "i", Type: "Purchase Order", status: true,},
    { Subject: "RISK OF LOSS", Narration: "i", Type: "Purchase Order", status: true,},
    { Subject: "FITNESS OF GOODS/PACKING", Narration: "i", Type: "Purchase Order", status: true,},
    { Subject: "WARRANTY CLAUSE", Narration: "i", Type: "Purchase Order", status: true,},
    { Subject: "FORCE MAJEURE", Narration: "i", Type: "Purchase Order",status: true,},
    { Subject: "RIGHTS OF WHO", Narration: "i", Type: "Purchase Order", status: true,},
    { Subject: "INDEMNIFICATION", Narration: "i", Type: "Purchase Order",  status: true,},
    { Subject: "ASSIGNMENT AND INSOLVENCY", Narration: "i", Type: "Purchase Order",  status: true,},
    { Subject: "USE OF NAME, EMBLEM OR OFFICIAL SEAL OF THE WHO", Narration: "i", Type: "Purchase Order",  status: true,},
    { Subject: "ARBITRATION", Narration: "i", Type: "Purchase Order",  status: true,},
    { Subject: "PRIVILEGES AND IMMUNITIES", Narration: "i", Type: "Purchase Order",  status: true,},
    { Subject: "DEFINITIONS & INTERPRETATION", Narration: "i", Type: "Work Order", status: true,},
    { Subject: "RELATIONSHIP OF THE PARTIES", Narration: "i", Type: "Work Order", status: true,},
    { Subject: "SERVICES", Narration: "i", Type: "Work Order", status: true,},
    { Subject: "CONTRACT PRICE AND INVOICES", Narration: "i", Type: "Work Order", status: true,},
    { Subject: "GST", Narration: "i", Type: "Work Order", status: true,},
    { Subject: "INDEMNITY", Narration: "i", Type: "Work Order", status: true,},
    { Subject: "WARRANTIES", Narration: "i", Type: "Work Order", status: true,},
    { Subject: "WARRANTY FOR BUILDING DEFECTS", Narration: "i", Type: "Work Order",status: true,},
    { Subject: "SUSPENSION OF SERVICES AND COMPLETION DATE", Narration: "i", Type: "Work Order", status: true,},
    { Subject: "TERMINATION", Narration: "i", Type: "Work Order", status: true,},
    { Subject: "FORCE MAJEURE", Narration: "i", Type: "Work Order", status: true,},
    { Subject: "INSURANCE", Narration: "i", Type: "Work Order", status: true,},
    { Subject: "CONFIDENTIALITY", Narration: "i", Type: "Work Order", status: true,},
    { Subject: "MISCELLANEOUS", Narration: "i", Type: "Work Order", status: true,},
    
  ];

  narrationspop(){
    this.dialog.open(NarrationsPopupComponent ,{
      height:'auto',
      width:'700px'
    });
  }    
  addpop(item){
    this.dialog.open(AddPopupTermsmasterComponent,{
      data:item,
      height:'auto',
      width:'700px'
    });
  }  
  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}  
}