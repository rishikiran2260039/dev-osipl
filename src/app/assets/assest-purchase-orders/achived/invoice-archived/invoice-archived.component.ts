import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-invoice-archived',
  templateUrl: './invoice-archived.component.html',
  styleUrls: ['./invoice-archived.component.scss']
})
export class InvoiceArchivedComponent implements OnInit {
  constructor(public dialog:MatDialogRef< InvoiceArchivedComponent >) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

 


  items = [
{Invoice:"OM2032/0014",Date:"15-Jan-2022",GRN:"2022/GOOGLE/HYD/02",Billed:"1,25,600",Approved:"Yes",paid:"0",},
{Invoice:"OQ2032/0023",Date:"15-Feb-2022",GRN:"2022/TWT/HYD/02",Billed:"5,600",Approved:"Yes",paid:"0",},
{Invoice:"OE2021/3414",Date:"15-Jan-2022",GRN:"2022/GOOGLE/HYD/02",Billed:"2,25,600",Approved:"No",paid:"1,23,455",},
{Invoice:"OR2023/2314",Date:"15-Mar-2022",GRN:"2022/TCS/HYD/02",Billed:"1,05,600",Approved:"Yes",paid:"0",},
{Invoice:"WM2023/2114",Date:"15-Jan-2022",GRN:"2022/INFY/HYD/02",Billed:"1,25,600",Approved:"No",paid:"45,700",},
  ]
}
