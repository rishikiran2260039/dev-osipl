import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-activitylogdialog-archivescreen',
  templateUrl: './activitylogdialog-archivescreen.component.html',
  styleUrls: ['./activitylogdialog-archivescreen.component.scss']
})
export class ActivitylogdialogArchivescreenComponent implements OnInit {

  constructor(public dialog:MatDialogRef<ActivitylogdialogArchivescreenComponent>){}

  ngOnInit() {
  }
  // <td class="text-center">{{item.date}}</td>
  // <td  class="text-center">{{item.stage}}</td>
  // <td  class="text-center">{{item.Status}}</td>
  
  // <td  class="text-center">{{item.User}}</td>
  // <td  class="text-center">{{item.remarks}}</td>
  items2 = [
    {date:"07-Oct-2019, 05:23 PM",stage:"Stock Transfer Order Approvals",Status:"Approved : 10009",User:"Super Admin",remarks:"sending to technical head",documentdonwload:"-"},
    {date:"12-Oct-2019, 09:04 PM",stage:"Stock Transfer Outgoing",Status:"STO Items Packing List Pr : 10009",User:"Super Admin",remarks:"approved",documentdonwload:"-"},
    {date:"12-Oct-2019, 09:04 PM",stage:"Stock Transfer Outgoing",Status:"Submitted : 1001",User:"Super Admin",remarks:"-",documentdonwload:" approved"},
    {date:"19-Feb-2021, 03:08 AM",stage:"Stock Transfer Incoming",Status:"STO SRN Printed : 1001",User:"Super Admin",remarks:"approved",documentdonwload:"-"},
    {date:"19-Feb-2021, 03:10 AM",stage:"Stock Transfer SRN SI",Status:"STO SRN Submitted : 1001",User:"Super Admin",remarks:"approved",documentdonwload:"Signed"},
  ];
   
  close(){
    this.dialog.close();
  }
}
