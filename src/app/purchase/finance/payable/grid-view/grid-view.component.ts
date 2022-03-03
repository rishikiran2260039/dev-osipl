import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UploadDocComponent } from 'src/app/shared/upload-doc/upload-doc.component';
import { AddVendorsComponent } from './add-vendors/add-vendors.component';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  constructor(    public dialog: MatDialog,) { }
  filterToggle=false;
  ngOnInit() {
  }

  tableList = [
    { Inv:"Add",trans:"12,000",others:"4,000",datedirector:"12-Jan-2022",dateaccounts:"5-Jan-2022",name: 'Raheja', projectCode:'P001',projectName:'Raheja Group', type: 'PO',orderRef:'#OD4327-2854-9646', sub: '10-04-2021', due:'15-07-2021', bill:'1500000', inv:'2001321', ref: '#OD4327-2854-9646', paym: 'Add', paid: '0', bal: '1500000',rem:'Amount Not Paid' ,status:'Submitted',value:'true'},
    { Inv:"View",trans:"22,000",others:"2,100",datedirector:"22-Dec-2021",dateaccounts:"10-Jan-2022",name: 'Manjeera',projectCode:'P002',projectName:'Manjeera Group', type: 'WO', orderRef:'#OD4327-2854-9546',sub: '07-04-2021', due:'23-07-2021', bill:'4500000', inv:'2031421', ref: '#OD4327-2854-9546', paym: '2', paid: '1250000', bal: '3500000',rem:'Amount Debited',status:'Fully Paid ' ,value:'true'},
    { Inv:"Add",trans:"11,000",others:"6,040",datedirector:"5-Jan-2022",dateaccounts:"12-Jan-2022",name: 'Reva group',projectCode:'P005',projectName:'Reva Group', type: 'PO', orderRef:'#OD4327-2854-3985',sub: '10-05-2021', due:'12-09-2021', bill:'500000', inv:'2057821', ref: '#OD4327-2854-3985', paym: '7', paid: '1500000', bal: '3500000',rem:'Account transfer may take maximum  2 days',status:'Not Yet Due' ,value:'true'},
    { Inv:"View",trans:"9,000",others:"4,000",datedirector:"10-Jan-2022",dateaccounts:"5-Jan-2022",name: 'Asian',projectCode:'P008',projectName:'Asian Group', type: 'PO',orderRef:'#OD4327-2854-0589', sub: '06-03-2021', due:'15-10-2021', bill:'1000000', inv:'20012467', ref: '#OD4327-2854-0589', paym: '15', paid: '400000', bal: '600000',rem:'Amount Debited',status:'Submitted' ,value:'true'},
    { Inv:"View",trans:"22,000",others:"2,100",datedirector:"22-Dec-2021",dateaccounts:"10-Jan-2022",name: 'Manjeera',projectCode:'P002',projectName:'Manjeera Group', type: 'WO', orderRef:'#OD4327-2854-9546',sub: '07-04-2021', due:'23-07-2021', bill:'4500000', inv:'2031421', ref: '#OD4327-2854-9546', paym: '2', paid: '1250000', bal: '3500000',rem:'Amount Debited',status:'Fully Paid ' ,value:'true'},
    { Inv:"Add",trans:"11,000",others:"6,040",datedirector:"5-Jan-2022",dateaccounts:"12-Jan-2022",name: 'Reva group',projectCode:'P005',projectName:'Reva Group', type: 'PO', orderRef:'#OD4327-2854-3985',sub: '10-05-2021', due:'12-09-2021', bill:'500000', inv:'2057821', ref: '#OD4327-2854-3985', paym: '7', paid: '1500000', bal: '3500000',rem:'Account transfer may take maximum  2 days',status:'Not Yet Due' ,value:'true'},
    
  ]
public addpayables(user){
  let dialogRef = this.dialog.open(AddVendorsComponent, {
    data:user,
    height: 'auto',
    width: '1200px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}
  
uploaddoc()
{
  let dialogRef = this.dialog.open(UploadDocComponent, {
    data: null,
    height:'auto',
    width:'600px'
  });
  dialogRef.afterClosed().subscribe(data => {
   // this.getAllUsers();
  });
}
}
