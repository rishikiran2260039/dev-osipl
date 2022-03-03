import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consignment-details',
  templateUrl: './consignment-details.component.html',
  styleUrls: ['./consignment-details.component.scss']
})
export class ConsignmentDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
  items = [
    {slNo:1, PORef:"BGR/OM/BHL/JAN/18-19/1018/REV5", Invoice:"INB-000000", GRNNo:"OM/GRN/APR-20/1001", Waybill:"-", Status:"GRN Pending", GRNForm :"-" , GRN : "Manage"},
   
  ];
//   <td class="text-center">{{item.date}}</td>
//   <td style="text-align: left!important;">{{item.stage}}</td>
//   <td style="text-align: center!important;">{{item.}}</td>
//   <td style="text-align: left!important;">
//     <span>{{item.}}</span>
//   </td>
//   <td style="text-align: left!important;">{{item.User}}</td>
//   <td style="text-align: left!important;">{{item.Remarks}}</td>
//   <td style="text-align: center!important;"><mat-icon>download</mat-icon></td>
// </tr>
  items2 = [
    {date:"03/11/19 7:32:47 PM",stage:"Consignment",ReferenceNo:"Consignment: 1001",Activity:"Submitted",User:"Super Admin",Remarks:"Test Store"},
    
  ];

  statusOptions = [
    {value:1, name: 'Prepared Quote', colorCode: '#00ff0040'},
    {value:2, name: 'PM Quote Review', colorCode: '#C0C0C0'},
    {value:3, name: 'Quote Send', colorCode: '#87CEFA'},
    {value:4, name: 'Awarded', colorCode: '#FFA50069'},
    {value:5, name: 'Rejected', colorCode: '#FFFF00'},
    {value:6, name: 'Document Taker Only', colorCode: '#FF00FF'},
  ]

}