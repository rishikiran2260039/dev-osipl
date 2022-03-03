import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShowIssueComponent } from 'src/app/kbpl-projects/projects-gridview/show-issue/show-issue.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AddEditRentalsComponent } from './add-edit-rentals/add-edit-rentals.component';
import { AddWorksHoursComponent } from './add-works-hours/add-works-hours.component';
import { NotesComponent } from './notes/notes.component';
import { ViewDocsComponent } from './view-docs/view-docs.component';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.scss']
})
export class RentalsComponent implements OnInit {
  public totalSize : any;
  public currentPage = 0;
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  
  filterToggle=false;

  totalProjects = [
    {wor:"WO/OTP-OM/OCT-19/10001",received:"23/12/2021",Intiated:"13/11/2021",logged:"04/07/2021	",serial:"BK-934F321O32	",detail:"Heavy Eqipment",type:"Machinery", stnref: "STO/OTP-OM/OCT-19/10001", date: "07-Oct-2019", requesttitle: "REQUIRED 50 ITEMS", sourceproject: "Singrauli",Status: "Returned",sourcelocation:"Karnataka",receivingproject:"Tata Motors Ltd.",destination:"Hyderabad",Notes:"3",itemsandquantites:"4", workHours:'+ Add',venderName:'Rajesh',pcode:"P001",ref:'#OD4327-2854-9646',doc:"2"},
    {wor:"WO/OTP-OM/OCT-19/10002",received:"29/11/2021",Intiated:"24/09/2021",logged:"14/08/2021	",serial:"CAT-94T341O92		",detail:"Hand and Power tools		",type:"Machinery",  stnref: "STO/OTP-OM/OCT-19/10004", date: "14-Oct-2019", requesttitle: "NEED 120 ITEMS", sourceproject: "Usha International Ltd", Status: "Returned",sourcelocation:"Bangalore",receivingproject:"Rajesh Exports Ltd.",destination:"Kolkata",Notes:"3",itemsandquantites:"4", workHours:'200 Hours',venderName:'Kumar',pcode:"P002",ref:'#OD4327-2854-9646',doc:"2"},
    {wor:"WO/OTP-OM/OCT-19/10003",received:"13/12/2021",Intiated:"09/11/2021",logged:"24/10/2021	",serial:"VO-732RE21O35		",detail:"Consumables and Building Materials			",type:"Scafolding)",   stnref: "STO/OTP-OM/OCT-19/10005", date: "15-Oct-2019", requesttitle: "CHECK RC CONDITIONS", sourceproject: "Mallikarjuna Rao Ltd", Status: "Active",sourcelocation:"Chennai",receivingproject:"Indian Oil Corporation Ltd.",destination:"Pune",Notes:"3",itemsandquantites:"4", workHours:'100 Hours',venderName:'Rohana',pcode:"P002",ref:'#OD4327-2854-9646',doc:"2"},
    {wor:"WO/OTP-OM/OCT-19/10004",received:"03/11/2021",Intiated:"04/07/2021",logged:"12/11/2021	",serial:"HK-724D31R32		",detail:"Hand and Power tools		",type:"Machinery", stnref: "STO/OTP-OM/OCT-19/10007", date: "21-Oct-2019", requesttitle: "EREWRT", sourceproject: "BHEL Ltd", Status: "Closed",sourcelocation:"Thane",receivingproject:"NTPC Ltd.",destination:"Haridwar",Notes:"3",itemsandquantites:"4", workHours:"250 Hours",venderName:'Ramesh',pcode:"P005",ref:'#OD4327-2854-9646',doc:"2"},
    {wor:"WO/OTP-OM/OCT-19/10005",received:"13/11/2021",Intiated:"10/07/2021",logged:"01/01/2021	",serial:"MI-923X342O70		",detail:"Heavy Eqipment	",type:"Computers", stnref: "STO/OTP-OM/OCT-19/10008", date: "21-Oct-2019", requesttitle: "MATERIAL LOCATION CHECK, STOCK TRANSFER, GRN AND CONSIGNMENTS", sourceproject: "KTPP", Status: "Initiated",sourcelocation:"Delhi",receivingproject:"Vedanta Ltd.",destination:"Mumbai",Notes:"3",itemsandquantites:"4", workHours:'+ Add',venderName:'Mmohammad',pcode:"P007",ref:'#OD4327-2854-9646',doc:"2"},
    {wor:"WO/OTP-OM/OCT-19/10006",received:"08/11/2021",Intiated:"07/09/2021",logged:"04/12/2021	",serial:"Ad-234T12J56		",detail:"Consumables and Building Materials			",type:"Computers", stnref: "STO/OTP-OM/MAR-21/10010", date: "04-Mar-2021", requesttitle: "IMMEDTIATE NEED FOR 100 ITEMS",sourceproject: "Nagarjuna Ltd", Status: "Initiated",sourcelocation:"Kanpur",receivingproject:"Grasim Industries Ltd.",destination:"Srinagar",Notes:"3",itemsandquantites:"4", workHours: "287 Hours",venderName:'Pramod',pcode:"P008",ref:'#OD4327-2854-9646',doc:"2"},
  ]; 


  openEditDialog(status) {
    let dialogRef = this.dialog.open(AddEditRentalsComponent, {
      data: status,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    
    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }

  openNotesDialog(stat) {
    let dialogRef = this.dialog.open(NotesComponent, {
      data: stat,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    
    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }

  openDeleteDialog(assets) {
    let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      data: assets,
      height: 'auto',
      width: 'auto',
      autoFocus: false
    });
    
    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }

  openWorkHoursDialog(item)
  {
    console.log(item);
    let dialogRef = this.dialog.open(AddWorksHoursComponent, {
      data : item,
      height: 'auto',
      width: 'auto'
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }

  scrollGrid(side) {
    var ele = document.getElementById('divQuotesGrid');
    if (side == 'right')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
  }
  opendocs() {
    let dialogRef = this.dialog.open(ViewDocsComponent, {
     
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }


}
