import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivitylogArchivesDialogueComponent } from './activitylog-archives-dialogue/activitylog-archives-dialogue.component';
import { ArchivedGatepassDetailsDialogueComponent } from './archived-gatepass-details-dialogue/archived-gatepass-details-dialogue.component';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent implements OnInit {
  
  constructor(public dialog: MatDialog) { }
 

  ngOnInit() {
  }
  
  
  items= [
    {Context:"Miscellaneous",gatepassref:"OM/GP/APR-20/10006",issuedto:"William",issuedby:"Jackson",dateissued:"16-07-2021",purpose:"Material Transfer",vehiclenumber:"TSYU8765",drivername:"John",drivercontact:"9823546782",direction:"IN",Remarks:"Expired"},
    {Context:"Purchase Orders",gatepassref:"OM/GP/APR-20/10008",issuedto:"Liam",issuedby:"Lucas",dateissued:"10-06-2021",purpose:"Material Transfer",vehiclenumber:"APQX9879",drivername:"Swamy",drivercontact:"9876534567",direction:"OUT",Remarks:"No Permission"},
    {Context:"Service Challans",gatepassref:"OM/GP/APR-20/10007",issuedto:"Oliver",issuedby:"Elijah",dateissued:"11-06-2021",purpose:"Material Transfer",vehiclenumber:"APEW1324",drivername:"Rohith",drivercontact:"9867452986",direction:"OUT",Remarks:"Damaged"},
   
    {Context:"Purchase Orders",gatepassref:"OM/GP/APR-20/10005",issuedto:"James",issuedby:"Aiden",dateissued:"23-07-2021",purpose:"Raw Material Transfer",vehiclenumber:"TSYU9876",drivername:"Jack",drivercontact:"8945237462",direction:"IN",Remarks:"Need to Reniew"},
    {Context:"Miscellaneous",gatepassref:"OM/GP/APR-20/10004",issuedto:"Benjamin",issuedby:"Samuel",dateissued:"21-05-2021",purpose:"Material Transfer",vehiclenumber:"APYV3421",drivername:"David",drivercontact:"9812542345",direction:"OUT",Remarks:"Not Acceptable"},
  ];


  // public NewGatePassPopupIn(item) {
  //   let dialogRef = this.dialog.open(NewGatePassPopupInComponent, {
  //     data:item,
  //     height: 'auto',
  //     width: '700px'
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }
  
  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
  }

   

}