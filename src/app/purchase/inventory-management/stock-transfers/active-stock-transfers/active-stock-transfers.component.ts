import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateStockTransferRequestDialogComponent } from './create-stock-transfer-request-dialog/create-stock-transfer-request-dialog.component';

@Component({
  selector: 'app-active-stock-transfers',
  templateUrl: './active-stock-transfers.component.html',
  styleUrls: ['./active-stock-transfers.component.scss']
})
export class ActiveStockTransfersComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  ngOnInit() {
  }


  items = [
    { stnref: " 2022/KA/TS/003", date: "07-Oct-2019", requesttitle: " Tiles & Lighting Equipment", sourceproject: "Google",Status: 1,stageColour: '#00ff0040',sourcelocation:"Google CEN Store",receivingproject:"Tata Motors Ltd.",destination:"Hyderabad",Notes:"1",itemsandquantites:"8"},
    {  stnref: " 2022/KA/TS/002", date: "14-Oct-2019", requesttitle: "Pipes & Kitchen Equipment", sourceproject: "Twitter", Status: 2,stageColour: '#C0C0C0',sourcelocation:"Twitter BLR Store",receivingproject:"Rajesh Exports Ltd.",destination:"Kolkata",Notes:"2",itemsandquantites:"7"},
    {  stnref: " 2022/KA/TS/007", date: "15-Oct-2019", requesttitle: "Tiles & Lighting Equipment", sourceproject: "Google", Status: 3,stageColour: '#FFA50069',sourcelocation:"Google HYD Store",receivingproject:"Indian Oil Corporation Ltd.",destination:"Pune",Notes:"3",itemsandquantites:"9"},
    { stnref: " 2022/KA/TS/001", date: "21-Oct-2019", requesttitle: "Tiles & Lighting Equipment", sourceproject: "Flipkart", Status: 4,stageColour: '#87CEFA',sourcelocation:"Tesla BLR Store",receivingproject:"NTPC Ltd.",destination:"Haridwar",Notes:"4",itemsandquantites:"8"},
    { stnref: " 2022/KA/TS/009", date: "21-Oct-2019", requesttitle: "Pipes & Kitchen Equipment", sourceproject: "Google", Status: 1,stageColour: '#00ff0040',sourcelocation:"Google BLR Store",receivingproject:"Vedanta Ltd.",destination:"Mumbai",Notes:"5",itemsandquantites:"5"},
    { stnref: " 2022/KA/TS/004", date: "04-Mar-2021", requesttitle: " Tiles & Lighting Equipment",sourceproject: "Twitter", Status: 2,stageColour: '#C0C0C0',sourcelocation:"Amazon DEL Store",receivingproject:"Grasim Industries Ltd.",destination:"Srinagar",Notes:"6",itemsandquantites:"6"},
    
    
  ];


  statusOptions = [
    {value:1, name: 'Initiated', colorCode: '#00ff0040'},
    {value:2, name: 'Dispatched', colorCode: '#C0C0C0'},
    {value:3, name: 'Received', colorCode: '#87CEFA'},
    {value:4, name: 'Delayed', colorCode: '#FFA50069'},
  ]


  public createstocktransferrequest(item) {
    let dialogRef = this.dialog.open(CreateStockTransferRequestDialogComponent, {
      data:item,
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  // public note() {
  //   let dialogRef = this.dialog.open(NotesActiveStocktransfersComponent, {
  //     height: 'auto',
  //     width: '700px'
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  //}

  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
  }

}