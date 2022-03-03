import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-publish-purchaseorder-revise',
  templateUrl: './publish-purchaseorder-revise.component.html',
  styleUrls: ['./publish-purchaseorder-revise.component.scss']
})
export class PublishPurchaseorderReviseComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }


  items = [
    {Service:"Laborers", WorkCode:"LB-01", Qty:"4", Hours:"8", Rate:"35", Amount:"1120"},
    {Service:"site-Supervisor-Supervisor", WorkCode:"SS-0190", Qty:"1", Hours:"8", Rate:"90", Amount:"720"},
    {Service:"Electrician", WorkCode:"EL-010", Qty:"1", Hours:"6", Rate:"85", Amount:"510"},
    
    
  ];

  // <td class="text-center">{{item.Parts}}</td>
  //               <td style="text-align: left!important;">{{item.Qty}}</td>
  //               <td style="text-align: center!important;">{{item.Price}}</td>
  //               <td style="text-align: left!important;">
  //                 <span>{{item.Amount}}</span>
  //               </td>

  items2 = [
    {Parts:"Reinforcement Steel",Qty:"120 Ton",Price:"22",Amount:"2620"},
    {Parts:"Electric wire(14-Gauge)",Qty:"30M",Price:"12",Amount:"360"},
   
   
  ];

  // statusOptions = [
  //   {value:1, name: 'Prepared Quote', colorCode: '#00ff0040'},
  //   {value:2, name: 'PM Quote Review', colorCode: '#C0C0C0'},
  //   {value:3, name: 'Quote Send', colorCode: '#87CEFA'},
  //   {value:4, name: 'Awarded', colorCode: '#FFA50069'},
  //   {value:5, name: 'Rejected', colorCode: '#FFFF00'},
  //   {value:6, name: 'Document Taker Only', colorCode: '#FF00FF'},
  // ]

//   servicelabor(item){
//      this.dialog.open(ServiceLaborDetailsPopupComponent,{
//        data:item,
//        height:'auto',
//        width:'700px'

//      })
//   }

//   Partsandmaterial(item){
//     this.dialog.open(PartsAndMaterialsPopupComponent,{
//       data:item,
//       height:'auto',
//       width:'700px'

//     })
//  }

}
