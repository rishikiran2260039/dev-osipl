import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddStoreNoOfStoresComponent } from './add-store-no-of-stores/add-store-no-of-stores.component';
import { AvailableitemsStorenameStoremasterpopupComponent } from './availableitems-storename-storemasterpopup/availableitems-storename-storemasterpopup.component';

@Component({
  selector: 'app-no-of-stores-storemaster-setup',
  templateUrl: './no-of-stores-storemaster-setup.component.html',
  styleUrls: ['./no-of-stores-storemaster-setup.component.scss']
})
export class NoOfStoresStoremasterSetupComponent implements OnInit {

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
    {storename:"Backhoe Loader Store",availableitems:"48",},
    {storename:"Bulldozer",availableitems:"33",},
    {storename:"Crane",availableitems:"32",},
    {storename:"Dumper Store",availableitems:"24",},
    {storename:"Dumper Store - Mercedes Benz",availableitems:"38",},
    {storename:"Dumper Store - Scania Volvo",availableitems:"42",},
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

  public addstore(item){
    this.dialog.open(AddStoreNoOfStoresComponent,{
      data:item,
      width:"700px",
      height:"auto"
    })
  }

  public avialbleitemspopup(){
    this.dialog.open(AvailableitemsStorenameStoremasterpopupComponent,{
      width:"800px",
      height:"auto"
    })
  }
 

    
}


