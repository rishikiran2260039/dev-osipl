import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Location } from '@angular/common';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
  selector: 'app-update-work-hours',
  templateUrl: './update-work-hours.component.html',
  styleUrls: ['./update-work-hours.component.scss']
})
export class UpdateWorkHoursComponent implements OnInit {
  public totalSize : any;
  public currentPage = 0;
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  constructor(public dialog: MatDialog,private location:Location) { }

  ngOnInit() {
  }

  
  filterToggle=false;

  totalProjects = [
    {received:"23/12/2021",Intiated:"13/11/2021",logged:"04/07/2021	",serial:"BK-934F321O32	",detail:"Heavy Eqipment",type:"Machinery", stnref: "STO/OTP-OM/OCT-19/10001", date: "07-Oct-2019", requesttitle: "REQUIRED 50 ITEMS", sourceproject: "Singrauli",Status: "Returned",sourcelocation:"Karnataka",receivingproject:"Tata Motors Ltd.",destination:"Hyderabad",Notes:"1",itemsandquantites:"8", workHours:'+ Add',venderName:'Rajesh'},
    {received:"29/11/2021",Intiated:"24/09/2021",logged:"14/08/2021	",serial:"CAT-94T341O92		",detail:"Hand and Power tools		",type:"Machinery",  stnref: "STO/OTP-OM/OCT-19/10004", date: "14-Oct-2019", requesttitle: "NEED 120 ITEMS", sourceproject: "Usha International Ltd", Status: "Returned",sourcelocation:"Bangalore",receivingproject:"Rajesh Exports Ltd.",destination:"Kolkata",Notes:"2",itemsandquantites:"7", workHours:'200 Hours',venderName:'Kumar'},
    {received:"13/12/2021",Intiated:"09/11/2021",logged:"24/10/2021	",serial:"VO-732RE21O35		",detail:"Consumables and Building Materials			",type:"Scafolding)",   stnref: "STO/OTP-OM/OCT-19/10005", date: "15-Oct-2019", requesttitle: "CHECK RC CONDITIONS", sourceproject: "Mallikarjuna Rao Ltd", Status: "Active",sourcelocation:"Chennai",receivingproject:"Indian Oil Corporation Ltd.",destination:"Pune",Notes:"3",itemsandquantites:"9", workHours:'100 Hours',venderName:'Rohana'},
    {received:"03/11/2021",Intiated:"04/07/2021",logged:"12/11/2021	",serial:"HK-724D31R32		",detail:"Hand and Power tools		",type:"Machinery", stnref: "STO/OTP-OM/OCT-19/10007", date: "21-Oct-2019", requesttitle: "EREWRT", sourceproject: "BHEL Ltd", Status: "Closed",sourcelocation:"Thane",receivingproject:"NTPC Ltd.",destination:"Haridwar",Notes:"4",itemsandquantites:"8", workHours:"250 Hours",venderName:'Ramesh'},
    {received:"13/11/2021",Intiated:"10/07/2021",logged:"01/01/2021	",serial:"MI-923X342O70		",detail:"Heavy Eqipment	",type:"Computers", stnref: "STO/OTP-OM/OCT-19/10008", date: "21-Oct-2019", requesttitle: "MATERIAL LOCATION CHECK, STOCK TRANSFER, GRN AND CONSIGNMENTS", sourceproject: "KTPP", Status: "Initiated",sourcelocation:"Delhi",receivingproject:"Vedanta Ltd.",destination:"Mumbai",Notes:"5",itemsandquantites:"5", workHours:'+ Add',venderName:'Mmohammad'},
    {received:"08/11/2021",Intiated:"07/09/2021",logged:"04/12/2021	",serial:"Ad-234T12J56		",detail:"Consumables and Building Materials			",type:"Computers", stnref: "STO/OTP-OM/MAR-21/10010", date: "04-Mar-2021", requesttitle: "IMMEDTIATE NEED FOR 100 ITEMS",sourceproject: "Nagarjuna Ltd", Status: "Initiated",sourcelocation:"Kanpur",receivingproject:"Grasim Industries Ltd.",destination:"Srinagar",Notes:"6",itemsandquantites:"6", workHours: "287 Hours",venderName:'Pramod'},
  ]; 

  goBack() {
    this.location.back();
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



  scrollGrid(side) {
    var ele = document.getElementById('divQuotesGrid');
    if (side == 'right')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
  }

}
