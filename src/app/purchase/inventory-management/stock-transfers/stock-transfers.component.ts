import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateStockTransferRequestDialogComponent } from './active-stock-transfers/create-stock-transfer-request-dialog/create-stock-transfer-request-dialog.component';

import { NotesActiveStockComponent } from './notes-active-stock/notes-active-stock.component';
import { AddStockTransferComponent } from './stock-transfer-order/add-stock-transfer/add-stock-transfer.component';
import { MatTabChangeEvent } from '@angular/material';
@Component({
  selector: 'app-stock-transfers',
  templateUrl: './stock-transfers.component.html',
  styleUrls: ['./stock-transfers.component.scss']
})
export class StockTransfersComponent implements OnInit {
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  filterToggle=false;
  Category: string[] = [];
  selectedItems: string[] = [];
  singleselectedItems: string[] = [];
  dropdownSettings = {};
  singledropdownSettings = {};
  closeDropdownSelection = false;
  isCollapsed = false;
  collapsed = true;
  screenname = 'Active';
  page = 4;
  page2 = 1;
  currentPage = 3;
  disablepage = 3;
  isDisabled = true;
  pagecustom = 4;
  toggleDisabled() {
  this.isDisabled = !this.isDisabled;
  }
  
  constructor(public dialog : MatDialog) { } 

  ngOnInit(): void {
    this.Category = ['IND Logistics', 'IND Construction', 'IND Manufacturing', 'IND Mining','GEO India','GEO USA'];
    this.selectedItems = ['Chemicals', 'Logistics'];
    this.singleselectedItems = ['Chemicals'];
    this.singledropdownSettings = {
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: this.closeDropdownSelection
  };
  this.dropdownSettings = {
    singleSelection: false,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 5,
    allowSearchFilter:true
  };
  
}
onItemSelect(item: any) {
  console.log(item);
}
onSelectAll(items: any) {
  console.log(items);
}

onLinkClick(event) {
  this.screenname = event.tab.textLabel;
 
}
items = [
  { name:"Initiated",stnref: " 2022/KA/TS/003", date: "07-Oct-2019", requesttitle: " Tiles & Lighting Equipment", sourceproject: "Google",Status: 1,stageColour: '#00ff0040',sourcelocation:"Google CEN Store",receivingproject:"Tata Motors Ltd.",destination:"Hyderabad",Notes:"1",itemsandquantites:"5"},
  { name:"Delayed",stnref: " 2022/KA/TS/002", date: "14-Oct-2019", requesttitle: "Pipes & Kitchen Equipment", sourceproject: "Twitter", Status: 2,stageColour: '#C0C0C0',sourcelocation:"Twitter BLR Store",receivingproject:"Rajesh Exports Ltd.",destination:"Kolkata",Notes:"2",itemsandquantites:"0"},
  { name:"Dispatched",stnref: " 2022/KA/TS/007", date: "15-Oct-2019", requesttitle: "Tiles & Lighting Equipment", sourceproject: "Google", Status: 3,stageColour: '#FFA50069',sourcelocation:"Google HYD Store",receivingproject:"Indian Oil Corporation Ltd.",destination:"Pune",Notes:"3",itemsandquantites:"0"},
  { name:"Initiated",stnref: " 2022/KA/TS/001", date: "21-Oct-2019", requesttitle: "Tiles & Lighting Equipment", sourceproject: "Flipkart", Status: 4,stageColour: '#87CEFA',sourcelocation:"Tesla BLR Store",receivingproject:"NTPC Ltd.",destination:"Haridwar",Notes:"4",itemsandquantites:"5"},
  { name:"Dispatched",stnref: " 2022/KA/TS/009", date: "21-Oct-2019", requesttitle: "Pipes & Kitchen Equipment", sourceproject: "Google", Status: 1,stageColour: '#00ff0040',sourcelocation:"Google BLR Store",receivingproject:"Vedanta Ltd.",destination:"Mumbai",Notes:"5",itemsandquantites:"5"},
  { name:"Delayed",stnref: " 2022/KA/TS/004", date: "04-Mar-2021", requesttitle: " Tiles & Lighting Equipment",sourceproject: "Twitter", Status: 2,stageColour: '#C0C0C0',sourcelocation:"Amazon DEL Store",receivingproject:"Grasim Industries Ltd.",destination:"Srinagar",Notes:"6",itemsandquantites:"6"},
  
  
];
itemss = [
  { stnref: "STO/OTP-OM/OCT-19/10001", date: "07-Oct-2019", requesttitle: "REQUIRED 50 ITEMS", sourceproject: "Singrauli",Status: 1,stageColour: '#00ff0040',sourcelocation:"Karnataka",receivingproject:"Tata Motors Ltd.",destination:"Hyderabad",Notes:"1",itemsandquantites:"8"},
  {  stnref: "STO/OTP-OM/OCT-19/10004", date: "14-Oct-2019", requesttitle: "NEED 120 ITEMS", sourceproject: "Usha International Ltd", Status: 2,stageColour: '#C0C0C0',sourcelocation:"Bangalore",receivingproject:"Rajesh Exports Ltd.",destination:"Kolkata",Notes:"2",itemsandquantites:"7"},
  {  stnref: "STO/OTP-OM/OCT-19/10005", date: "15-Oct-2019", requesttitle: "CHECK RC CONDITIONS", sourceproject: "Mallikarjuna Rao Ltd", Status: 3,stageColour: '#FFA50069',sourcelocation:"Chennai",receivingproject:"Indian Oil Corporation Ltd.",destination:"Pune",Notes:"3",itemsandquantites:"9"},
  { stnref: "STO/OTP-OM/OCT-19/10007", date: "21-Oct-2019", requesttitle: "EREWRT", sourceproject: "BHEL Ltd", Status: 4,stageColour: '#87CEFA',sourcelocation:"Thane",receivingproject:"NTPC Ltd.",destination:"Haridwar",Notes:"4",itemsandquantites:"8"},
  { stnref: "STO/OTP-OM/OCT-19/10008", date: "21-Oct-2019", requesttitle: "MATERIAL LOCATION CHECK, STOCK TRANSFER, GRN AND CONSIGNMENTS", sourceproject: "KTPP", Status: 1,stageColour: '#00ff0040',sourcelocation:"Delhi",receivingproject:"Vedanta Ltd.",destination:"Mumbai",Notes:"5",itemsandquantites:"5"},
  { stnref: "STO/OTP-OM/MAR-21/10010", date: "04-Mar-2021", requesttitle: "IMMEDTIATE NEED FOR 100 ITEMS",sourceproject: "Nagarjuna Ltd", Status: 2,stageColour: '#C0C0C0',sourcelocation:"Kanpur",receivingproject:"Grasim Industries Ltd.",destination:"Srinagar",Notes:"6",itemsandquantites:"6"},
  
  
];


statusOptions = [
  {value:1, name: 'Initiated', colorCode: '#00ff0040'},
  {value:2, name: 'Dispatched', colorCode: '#C0C0C0'},
  {value:3, name: 'Received', colorCode: '#87CEFA'},
  {value:4, name: 'Delayed', colorCode: '#FFA50069'},
]

public notes() {
  let dialogRef = this.dialog.open(NotesActiveStockComponent, {
    height: 'auto',
    width: '700px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}
public addstocktransfer(item) {
  let dialogRef = this.dialog.open(CreateStockTransferRequestDialogComponent, {
    data:item,
    height: 'auto',
    width: '800px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}
public createstocktransferrequest(item) {
  let dialogRef = this.dialog.open(CreateStockTransferRequestDialogComponent, {
    data:item,
    height: 'auto',
    width: '700px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}
  }

