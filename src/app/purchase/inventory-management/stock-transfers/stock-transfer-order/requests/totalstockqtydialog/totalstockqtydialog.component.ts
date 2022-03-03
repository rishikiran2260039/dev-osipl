import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-totalstockqtydialog',
  templateUrl: './totalstockqtydialog.component.html',
  styleUrls: ['./totalstockqtydialog.component.scss']
})
export class TotalstockqtydialogComponent implements OnInit {

  constructor(public dialog : MatDialogRef<TotalstockqtydialogComponent>) { }
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
                    { InwardDate : "12-Oct-2019 12:21 PM", Store: "Stock Transfer Store", ItemMake: "Cat", VendorCode: " -", AvailableQTY: "25", SurplusQTY: "25", AgeinDays: "647", LastIssuedQTY: "5 ", Date: " 12-Oct-2019"},
                  
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
