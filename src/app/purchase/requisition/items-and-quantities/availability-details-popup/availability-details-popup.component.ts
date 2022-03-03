import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-availability-details-popup',
  templateUrl: './availability-details-popup.component.html',
  styleUrls: ['./availability-details-popup.component.scss']
})
export class AvailabilityDetailsPopupComponent implements OnInit {
  dialogRef: any;
  

  constructor(public dialog:MatDialogRef<AvailabilityDetailsPopupComponent>) { } 

  ngOnInit() {
  }

  items = [
    {StoreName:"Backhoe Loader Store" ,  storelocation:"Hyderabad",   /*   ItemName: "Volvo", Part:"B229900003680",    PartMake: "Volve",         PartName: "Komatsu",  ItemCode: "Volvo" , */        NoofStores:"3",     Project:"Legacy Project", status:"Active", qty:"6"},
    {StoreName:"Crane" ,          storelocation:"Bangalore",         /* ItemName: "CaterPilar", Part:"421-60-35170",   PartMake: "Caterpillar",   PartName: "Volvo",  ItemCode: "Volvo" ,  */        NoofStores:"8",     Project:"Singurali Project", status:"Pending", qty:"4"},
    {StoreName:"Jcp" ,                    storelocation:"Gurugram",   /*  ItemName: "Mercedes", Part:"B229900003680",   PartMake: "Kirloskar",    PartName: "Komatsu",  ItemCode: "Caterpillar" , */  NoofStores:"0",     Project:"Lakhan Project", status:"Active", qty:"5"},
    {StoreName:"Dumpe Store - Mercedes Benz" ,  storelocation:"Noida", /*   ItemName: "Tata", Part:"421-60-35170",     PartMake: "Ashok Leyland", PartName: "Komatsu",  ItemCode: "Tata" ,    */     NoofStores:"1",     Project:"Amisty Project", status:"Pending", qty:"6"},
    {StoreName:" Proclainer" ,  storelocation:"Delhi",                 /*  ItemName: "Volvo", Part:"521-60-34512",    PartMake: "Tata",           PartName: "Komatsu",  ItemCode: "Ashok" ,   */      NoofStores:"6",     Project:"Health Project", status:"Active", qty:"9"},
     ];



     close(){
      this.dialog.close();
    }

}

