import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewGatePassPopupInComponent } from './new-gate-pass-popup-in/new-gate-pass-popup-in.component';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})
export class AutoComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
 

  ngOnInit() {
  }
  
  
  items= [
    {Context:"Purchase Orders",gatepassref:"OM/GP/APR-20/10008",issuedto:"Liam",issuedby:"Lucas",dateissued:"10-06-2021",purpose:"Material Transfer",vehiclenumber:"APQX9879",drivername:"Swamy",drivercontact:"9876534567",direction:"IN",Remarks:"Expired"},
    {Context:"Service Challans",gatepassref:"OM/GP/APR-20/10007",issuedto:"Oliver",issuedby:"Elijah",dateissued:"11-06-2021",purpose:"Material Transfer",vehiclenumber:"APEW1324",drivername:"Rohith",drivercontact:"9867452986",direction:"IN",Remarks:"Not Authorized"},
    {Context:"Miscellaneous",gatepassref:"OM/GP/APR-20/10006",issuedto:"William",issuedby:"Jackson",dateissued:"16-07-2021",purpose:"Material Transfer",vehiclenumber:"TSYU8765",drivername:"John",drivercontact:"9823546782",direction:"IN",Remarks:"Not Allowed"},
    {Context:"Purchase Orders",gatepassref:"OM/GP/APR-20/10005",issuedto:"James",issuedby:"Aiden",dateissued:"23-07-2021",purpose:"Raw Material Transfer",vehiclenumber:"TSYU9876",drivername:"Jack",drivercontact:"8945237462",direction:"IN",Remarks:"Need To Reniew"},
    {Context:"Miscellaneous",gatepassref:"OM/GP/APR-20/10004",issuedto:"Benjamin",issuedby:"Samuel",dateissued:"21-05-2021",purpose:"Material Transfer",vehiclenumber:"APYV3421",drivername:"David",drivercontact:"9812542345",direction:"IN",Remarks:"Not Accepted"},
  ];


  public NewGatePassPopupIn(item) {
    let dialogRef = this.dialog.open(NewGatePassPopupInComponent, {
      data:item,
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
  }

   

}