import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PerfomanceaddformComponent } from '../perfomanceaddform/perfomanceaddform.component';

@Component({
  selector: 'app-perfomance',
  templateUrl: './perfomance.component.html',
  styleUrls: ['./perfomance.component.scss']
})
export class PerfomanceComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  items=[
    {desc:"Clarity of service schedule ",refrence:"1",partnumber:"Project Leader"},
    {desc:"Adherence to preventive maintenance schedule  ",refrence:"2",partnumber:"Project Leader"},
    {desc:"Service Reporting System	",refrence:"3",partnumber:"Project Leader"},
    {desc:"Documentation & Records Management	 ",refrence:"4",partnumber:"Project Leader"},
    {desc:"Competence of personnel	",refrence:"5",partnumber:"Project Leader"},
    {desc:"Quality of material	",refrence:"6",partnumber:"Project Leader"},
    {desc:"Response to crisis situation	",refrence:"7",partnumber:"Project Leader"},
    {desc:"Attitude of Personnel	",refrence:"8",partnumber:"Project Leader"},
    {desc:"Turnaround time for attending complaints	",refrence:"9",partnumber:"Project Leader"},
    {desc:"Effectiveness in supervision	 ",refrence:"10",partnumber:"Project Leader"},
    {desc:"Wastage of Materials	",refrence:"11",partnumber:"Project Leader"},
    {desc:"Workplace cleanliness	 ",refrence:"12",partnumber:"Project Leader"},
    {desc:"Compliance of PPEs	",refrence:"13",partnumber:"Safety Leader"},
    {desc:"House Keeping	",refrence:"14",partnumber:"Safety Leader"},
    {desc:"Workmen discipline & EHS compliance	",refrence:"15",partnumber:"Safety Leader"},
    {desc:"Participation in EHS Programmes	",refrence:"16",partnumber:"Safety Leader"},
    {desc:"Non-repetition of EHS Non-conformity		",refrence:"17",partnumber:"Safety Leader"},
    {desc:"Closure of corrective action on time	",refrence:"18",partnumber:"Safety Leader"},
    {desc:"EHS knowledge and follow up	",refrence:"19",partnumber:"Safety Leader"},
    {desc:"Innovation		",refrence:"20",partnumber:"Safety Leader"},
    {desc:"Reporting	",refrence:"21",partnumber:"Safety Leader"},
  ]

  public addnewitem() {
    let dialogRef = this.dialog.open(PerfomanceaddformComponent, {
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
}
