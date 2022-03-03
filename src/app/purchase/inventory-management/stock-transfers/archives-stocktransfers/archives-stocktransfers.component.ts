import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivitylogdialogArchivescreenComponent } from './activitylogdialog-archivescreen/activitylogdialog-archivescreen.component';
import { DocumentsforsrndialogComponent } from './documentsforsrndialog/documentsforsrndialog.component';
import { NotesArchivesStocktransfersComponent } from './notes-archives-stocktransfers/notes-archives-stocktransfers.component';



@Component({
  selector: 'app-archives-stocktransfers',
  templateUrl: './archives-stocktransfers.component.html',
  styleUrls: ['./archives-stocktransfers.component.scss']
})
export class ArchivesStocktransfersComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }


  
  items = [
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


  public note() {
    let dialogRef = this.dialog.open(NotesArchivesStocktransfersComponent, {
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
  }

}