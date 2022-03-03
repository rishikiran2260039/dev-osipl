import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddNewFloorLocationSetupComponent } from './add-new-floor-location-setup/add-new-floor-location-setup.component';

@Component({
  selector: 'app-floor-location-setup',
  templateUrl: './floor-location-setup.component.html',
  styleUrls: ['./floor-location-setup.component.scss']
})
export class FloorLocationSetupComponent implements OnInit {

  gridCmp: any;

  constructor(public dialog: MatDialog, private alertService: AlertService) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';

  ngOnInit() {
  }
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle:boolean = false;

  values = [
   {floorname:'Floor 1',floorlocation:'1st Floor'},
   {floorname:'Floor 2',floorlocation:'2st Floor'},
   {floorname:'Floor 3',floorlocation:'3st Floor'},
   {floorname:'Floor 4',floorlocation:'4st Floor'},

  ]
  statusOptions = [
    {value:1, name: 'Prepared Quote', colorCode: '#00ff0040'},
    {value:2, name: 'PM Quote Review', colorCode: '#C0C0C0'},
    {value:3, name: 'Quote Send', colorCode: '#87CEFA'},
    {value:4, name: 'Awarded', colorCode: '#FFA50069'},
    {value:5, name: 'Rejected', colorCode: '#FFFF00'},
    {value:6, name: 'Document Taker Only', colorCode: '#FF00FF'},
  ]
  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}

  // public openGridColumnsDialog(){
  //   this.dialog.open(QuotesGridColDialogComponent,{
  //     width:"600px",
  //     height:"auto"
  //   })
  // }
  public openleadDialog(id) {
    let dialogRef = this.dialog.open(AddNewFloorLocationSetupComponent, {
        data: id,
        height: 'auto',
        width: '600px',
        disableClose: true
    });

    dialogRef.afterClosed().subscribe(lead => {
      
        if (lead=='yes') {
          this.gridCmp.getQuotes();
        }
    });
}
// public openQuotes(stat) {
//   let dialogRef = this.dialog.open(UpdateQuoteComponent, {
//     data: stat,
//     height: 'auto',
//     width: '750px',
//     autoFocus: false,
//   });
// }
scrollGrid(side) {
  var ele = document.getElementById('grid-table-container');
  if (side == 'right')
      ele.scrollLeft += 210;
  else
      ele.scrollLeft -= 210;
}
}
