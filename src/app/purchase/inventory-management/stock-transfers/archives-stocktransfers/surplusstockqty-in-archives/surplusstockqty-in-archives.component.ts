import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-surplusstockqty-in-archives',
  templateUrl: './surplusstockqty-in-archives.component.html',
  styleUrls: ['./surplusstockqty-in-archives.component.scss']
})
export class SurplusstockqtyInArchivesComponent implements OnInit {

  constructor(public dialog : MatDialogRef<SurplusstockqtyInArchivesComponent>) { }
  filterToggle = false;

  ngOnInit() {
  }
  // <td class="text-center">{{item.InwardDate&Time}}</td>
  // <td class="text-center">{{item.Store}}</td>
  // <td class="text-center">{{item.ItemMake}} | {{VendorCode}}</td>

  // <td class="text-center" >{{item.AvailableQTY}}</td>
  // <td class="text-center" >{{item.SurplusQTY}}</td>
  // <td class="text-center">{{item.AgeinDays}}</td>
  // <td class="text-center">{{item.LastIssuedQTY}} | {{Date}}</td>

                  items = [
                    { InwardDate : "15-Feb-2021 10:20 PM", Store: "Dumper Store - Volvo", ItemMake: "Scania ", VendorCode: "ABHI", AvailableQTY: "6", SurplusQTY: "6", AgeinDays: "157", LastIssuedQTY: "1", Date: " 19-Feb-2021"},
                  
                  ];


  // statusOptions = [
  //   { value: 1, name: 'Completed', colorCode: '#00ff0040' },
  //   { value: 2, name: 'Pending', colorCode: '#C0C0C0' },
  //   { value: 3, name: 'In Process', colorCode: '#87CEFA' },
  //   { value: 4, name: 'On Hold', colorCode: '#FFA50069' },
  // ];

  // updateNewLead(item:any) {
  //   console.log(item, 'item');
  //   delete item['meeting_time']
  //   if (item['potential'] == 0) {
  //     item['potential'] = 1;
  //     item["toolT"] = "Done";
  //   } else if (item['potential'] == 1) {
  //     item['potential'] = 2;
  //     item["toolT"] = "Pending";
  //   } else if (item['potential'] == 2) {
  //     item['potential'] = 3;
  //     item["toolT"] = "Partial";
  //   } else if (item['potential'] == 3) {
  //     item['potential'] = 4;
  //     item["toolT"] = "Declined";
  //   } else if (item['potential'] == 4) {
  //     item['potential'] = 1;
  //     item["toolT"] = "Done";
  //   }
  
  // }

  // public createstocktransferrequest() {
  //   let dialogRef = this.dialog.open(CreateStockTransferRequestDialogComponent, {
  //     height: 'auto',
  //     width: '700px'
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }

  // public opencontactDialog1(item) {
  //   let dialogRef = this.dialog.open(EditStocktransferRequestComponent, {
  //     data: item,
  //     height: 'auto',
  //     width: '700px'
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }

  close(){
    this.dialog.close();
  }

}