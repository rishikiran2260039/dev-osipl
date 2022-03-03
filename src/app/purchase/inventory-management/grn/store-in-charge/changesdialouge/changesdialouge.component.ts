import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-changesdialouge',
  templateUrl: './changesdialouge.component.html',
  styleUrls: ['./changesdialouge.component.scss']
})
export class ChangesdialougeComponent implements OnInit {

 
  constructor(public dialog:MatDialogRef<ChangesdialougeComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }
  // <td class="text-center">{{item.PurchaseOrderNumber }}</td>
  //                 <td class="text-center" matTooltip="Download Doc"><i class="fa fa-download" aria-hidden="true"></i></td>
  //                 <td class="text-center" matTooltip="Download Doc"><i class="fa fa-download" aria-hidden="true"></i></td>
  //                 <td class="text-center">{{item.ModifiedBy}}</td>
  //                 <td class="text-center">{{item.ModifiedDate}}</td>

  items = [
    {PurchaseOrderNumber:"BGR/OM/BHL/JAN/18-19/1018",ModifiedBy:"Super Admin",ModifiedDate:"19-Jan-2019, 02:07 PM"},
    {PurchaseOrderNumber:"BGR/OM/BHL/JAN/18-19/1018/REV1",ModifiedBy:"Super Admin",ModifiedDate:"19-Jan-2019, 02:09 PM"},
    {PurchaseOrderNumber:"BGR/OM/BHL/JAN/18-19/1018/REV1",ModifiedBy:"Super Admin",ModifiedDate:"19-Jan-2019, 03:02 PM"},
    {PurchaseOrderNumber:"BGR/OM/BHL/JAN/18-19/1018/REV1",ModifiedBy:"Super Admin",ModifiedDate:"19-Jan-2019, 05:07 PM"},
    {PurchaseOrderNumber:"BGR/OM/BHL/JAN/18-19/1018/REV1",ModifiedBy:"Super Admin",ModifiedDate:"19-Jan-2019, 06:23 PM"},
    {PurchaseOrderNumber:"BGR/OM/BHL/JAN/18-19/1018/REV1",ModifiedBy:"Super Admin",ModifiedDate:"119-Jan-2019, 06:49 PM"},
    // {PurchaseOrderNumber:"BGR/OM/BHL/JAN/18-19/1018/REV2",ModifiedBy:"Super Admin",ModifiedDate:"30-Mar-2019, 01:12 PM"},
    // {PurchaseOrderNumber:"BGR/OM/BHL/JAN/18-19/1018/REV3",ModifiedBy:"Super Admin",ModifiedDate:"30-Mar-2019, 01:28 PM"},
    // {PurchaseOrderNumber:"BGR/OM/BHL/JAN/18-19/1018/REV4",ModifiedBy:"Super Admin",ModifiedDate:"05-Apr-2019, 02:52 PM"},
    // {PurchaseOrderNumber:"BGR/OM/BHL/JAN/18-19/1018/REV5",ModifiedBy:"Super Admin",ModifiedDate:"05-Apr-2019, 04:09 PM"},

  ]

}
