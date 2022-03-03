import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { OrdergridComponent } from './ordergrid/ordergrid.component';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent implements OnInit {

  filterToggle:boolean = false;
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  items=[
    {refrence:"1",months:"April-2021",poraised:"11,70,68,745",m1:"1,67,25,115.84",m2:"45,40,154.86",m3:"74,51,753.11",m4:"3,08,98,563.45",m5:"1,23,33,064.84",m6:"1,88,72,282.90",m7:"64,41,884.43",m8:"82,04,034.97",m9:"47,49,929.66",m10:"5,43,652.84",billprocessed:"11,07,60,436.91"},
    {refrence:"2",months:"May-2021",poraised:"4,22,45,953",m2:"1,40,102.45",m3:"31,84,931.68",m4:"80,08,369.06",m5:"1,62,36,957.24",m6:"34,13,949.20",m7:"62,34,495.49",m8:"2,75,813.20",m9:"3,88,973.62",m10:"11,84,323.49",billprocessed:"3,66,99,268.45"},
    {refrence:"3",months:"June-2021",poraised:"3,60,61,914",m3:"50,64,398.85",m4:"1,44,47,873.59",m5:"56,46,919.40",m6:"14,77,138.23",m7:"36,06,325.58",m8:"3,79,422.76",m9:"32,412.42",m10:"69,236.50",billprocessed:"3,06,58,902.49"},
    {refrence:"4",months:"July-2021",poraised:"11,70,68,745",m4:"3,08,98,563.45",m5:"1,23,33,064.84",m6:"1,88,72,282.90",m7:"64,41,884.43",m8:"82,04,034.97",m9:"47,49,929.66",m10:"5,43,652.84",billprocessed:"11,07,60,436.91"},
    {refrence:"5",months:"August-2021",poraised:"11,70,68,745",m5:"1,23,33,064.84",m6:"1,88,72,282.90",m7:"64,41,884.43",m8:"82,04,034.97",m9:"47,49,929.66",m10:"5,43,652.84",billprocessed:"11,07,60,436.91"},
    {refrence:"6",months:"September-2021",poraised:"11,70,68,745",m6:"1,88,72,282.90",m7:"64,41,884.43",m8:"82,04,034.97",m9:"47,49,929.66",m10:"5,43,652.84",billprocessed:"11,07,60,436.91"},
    {refrence:"7",months:"October-2021",poraised:"11,70,68,745",m7:"64,41,884.43",m8:"82,04,034.97",m9:"47,49,929.66",m10:"5,43,652.84",billprocessed:"11,07,60,436.91"},
    {refrence:"8",months:"November-2021",poraised:"11,70,68,745",m8:"82,04,034.97",m9:"47,49,929.66",m10:"5,43,652.84",billprocessed:"11,07,60,436.91"},
    {refrence:"9",months:"December-2021",poraised:"11,70,68,745",m9:"47,49,929.66",m10:"5,43,652.84",billprocessed:"11,07,60,436.91"},
    {refrence:"10",months:"January-2022",poraised:"11,70,68,745",m10:"5,43,652.84",billprocessed:"11,07,60,436.91"},
    {refrence:"11",months:"February-2022",poraised:"",m10:"",billprocessed:""},
    {refrence:"",months:"Total",poraised:"2,23,71,01,453.74",m1:"1,67,25,115.84",m2:"45,40,154.86",m3:"74,51,753.11",m4:"3,08,98,563.45",m5:"1,23,33,064.84",m6:"1,88,72,282.90",m7:"64,41,884.43",m8:"82,04,034.97",m9:"47,49,929.66",m10:"25,14,57,668.88",billprocessed:"1,12,95,53,046.01"},

  ]

  openGridColumnsDialog(){
    this.dialog.open(OrdergridComponent,{
      width:"600px",
      height:"auto"
    })
  }

}
