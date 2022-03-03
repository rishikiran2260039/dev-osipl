import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AutoComponent } from 'src/app/purchase/inventory-management/gate-passes/auto/auto.component';
import { AddnewrowdialogComponent } from './addnewrowdialog/addnewrowdialog.component';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

  addClaim: boolean = true;

  countItems = [1, 1];

  items = [
    {ref: '2134544', task: '5', claimed: '8965', approved: '7521'}, 
    {ref: '5874565', task: '7', claimed: '7854', approved: '6987'}, 
    {ref: '4587962', task: '6', claimed: '9687', approved: '8652'}, 
    {ref: '3658214', task: '4', claimed: '8521', approved: '7521'}, 
    {ref: '7852145', task: '5', claimed: '9874', approved: '8974'}, 
  ]
  // <td class="text-center"><a style="cursor: pointer; color: blue;" >{{item.Tasks}}</a></td>
  // <td>{{item.ClaimRef}}</td>
  // <td>{{item.ClaimSubject}}</td>
  // <td>{{item.Completion}}</td>
  // <td class="text-center"><mat-icon style="cursor: pointer;" matTooltip="Download Docs">ClaimAmount</mat-icon></td>
  values = [
    {Tasks :"Site Preparation",ClaimRef :"2134544",ClaimSubject:"Monthly Labour",ClaimAmount:"2500",Status: 1},
    {Tasks :"Foundation",ClaimRef :"5874565",ClaimSubject:"Monthly Labour",ClaimAmount:"3000",Status: 2},
    {Tasks :"Slab Work",ClaimRef :"4587962",ClaimSubject:"Monthly Labour",ClaimAmount:"3500",Status: 3},
    {Tasks :"Electric Wiring",ClaimRef :"3658214",ClaimSubject:"Monthly Labour",ClaimAmount:"4000",Status: 4},
    {Tasks :"Plumbing",ClaimRef :"7852145",ClaimSubject:"Monthly Labour",ClaimAmount:"4500",Status: 2},
  ]
  

  constructor( public dialog:MatDialog) { }

  ngOnInit() {
  }

  addClaimChange() {
    this.addClaim = !this.addClaim;
  }

  // addRow() {
  //   this.countItems.push(1);
  // }
 
  addnewrowdialog(){
        let dialogRef = this.dialog.open(AddnewrowdialogComponent, {
        height:'auto',
        width: '600px'
      });
      dialogRef.afterClosed().subscribe(data => {
      });
  }

  changeProgress( value,i) {


    if (!value || value == 0) {
      this.values[i]['focus'] = 25;
    } else if (value == 25) {
      this.values[i]['focus'] = 50;
    } else if (value == 50) {
      this.values[i]['focus'] = 75;
    } else if (value == 75) {
      this.values[i]['focus'] = 100;
    } else {
      this.values[i]['focus'] = 0;
    }
  }

}
