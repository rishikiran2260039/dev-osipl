import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SurplusstockdialogComponent } from '../surplusstockdialog/surplusstockdialog.component';
import { TotalstockqtydialogComponent } from '../totalstockqtydialog/totalstockqtydialog.component';
import { EditspopupApproveitemsComponent } from './editspopup-approveitems/editspopup-approveitems.component';

@Component({
  selector: 'app-stock-transfer-order-spareparts-approveitems',
  templateUrl: './stock-transfer-order-spareparts-approveitems.component.html',
  styleUrls: ['./stock-transfer-order-spareparts-approveitems.component.scss']
})
export class StockTransferOrderSparepartsApproveitemsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  filterToggle = false;
  ngOnInit() {
  }
  
  items = [
    { slno: "1", itemno: "EAS10005", itemname: "ALTARNATOR", totalstockqty: "25", surplusstockqty: "25", requiredqty: "10",Remarks:"-"},
    { slno: "2", itemno: "EAS10002", itemname: "A/C FITER", totalstockqty: "60", surplusstockqty: "60", requiredqty: "10",Remarks:"-"},
  ];
  // <td class="text-center">{{item.date}}</td>
  // <td style="text-align: left!important;">{{item.stage}}</td>
  // <td style="text-align: center!important;">{{item.Reference}}</td>
  // <td style="text-align: left!important;">
  //   <span>{{item.Action}}</span>
  // </td>
  // <td style="text-align: center!important;">{{item.User}}</td>
  // <td style="text-align: left!important;">{{item.remarks}}</td>

  items2 = [
    {date:"07-Oct-2019, 05:23 PM",stage:"Stock Transfer Order",Reference:"	STO/OTP-OM/OCT-19/10001",Action:"STO Added : 10001",User:"Super Admin",remarks:"-"},
    {date:"12-Oct-2019, 09:04 PM",stage:"Stock Transfer Order Requests",Reference:"STO/OTP-OM/OCT-19/10001",Action:"STO Added : 10001",User:"Super Admin",remarks:"-"},
    {date:"12-Oct-2019, 09:04 PM",stage:"Stock Transfer Order Requests",Reference:"STO/OTP-OM/OCT-19/10001",Action:"STO Added : 10001",User:"Super Admin",remarks:"-"},
    {date:"19-Feb-2021, 03:08 AM",stage:"Stock Transfer Order Requests",Reference:"STO/OTP-OM/OCT-19/10001",Action:"STO Submitted : 10001",User:"Super Admin",remarks:"NA"},
    {date:"19-Feb-2021, 03:10 AM",stage:"Stock Transfer Order Approvals",Reference:"STO/OTP-OM/OCT-19/10001",Action:"Approved : 10001",User:"Super Admin",remarks:"NA"},
  ];

  statusOptions = [
    {value:1, name: 'Prepared Quote', colorCode: '#00ff0040'},
    {value:2, name: 'PM Quote Review', colorCode: '#C0C0C0'},
    {value:3, name: 'Quote Send', colorCode: '#87CEFA'},
    {value:4, name: 'Awarded', colorCode: '#FFA50069'},
    {value:5, name: 'Rejected', colorCode: '#FFFF00'},
    {value:6, name: 'Document Taker Only', colorCode: '#FF00FF'},
  ]

  public totalstockqty() {
    let dialogRef = this.dialog.open(TotalstockqtydialogComponent, {
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public surplusstockqty() {
    let dialogRef = this.dialog.open(SurplusstockdialogComponent, {
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public editspopapproveitem(){
    let dialogRef = this.dialog.open(EditspopupApproveitemsComponent, {
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}
