import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MaterialItemsComponent } from '../material-items/material-items.component';
import { ProjectNotesComponent } from '../project-notes/project-notes.component';

@Component({
  selector: 'app-material-archives',
  templateUrl: './material-archives.component.html',
  styleUrls: ['./material-archives.component.scss']
})
export class MaterialArchivesComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  ngOnInit() {
  }

  items = [
    {issuerequestref:"OM/MI/OCT-19/10005",issuedate:"15-Oct-2019",issuedto:"Liam",items:"2",notes:"",Status: 1,stageColour: '#00ff0040',},
    {issuerequestref:"OM/MI/OCT-19/10006",issuedate:"18-Nov-2019",issuedto:"Oliver",items:"5",notes:"",Status: 2,stageColour: '#C0C0C0',},
    {issuerequestref:"OM/MI/OCT-19/10007",issuedate:"20-Dec-2020",issuedto:"William",items:"3",notes:"",Status: 3,stageColour: '#FFA50069'},
    {issuerequestref:"OM/MI/OCT-19/10008",issuedate:"19-Sep-2021",issuedto:"James",items:"6",notes:"",Status: 4,stageColour: '#87CEFA'},
    {issuerequestref:"OM/MI/OCT-19/10009",issuedate:"20-Aug-2020",issuedto:"Benjamin",items:"5",notes:"",Status: 1,stageColour: '#00ff0040'},
   ]
 
   
   statusOptions = [
     {value:1, name: 'Initiated', colorCode: '#00ff0040'},
     {value:2, name: 'Dispatched', colorCode: '#C0C0C0'},
     {value:3, name: 'Received', colorCode: '#87CEFA'},
     {value:4, name: 'Delayed', colorCode: '#FFA50069'},
   ]



  

  notes() {
    this.dialog.open( ProjectNotesComponent, {
     height:'auto',
      width:'700px'
    })
  }
  issueitems() {
  //   this.dialog.open(MaterialItemsComponent,{
  //  height:'auto',
  //  width:'800px'

  //   })
  }

}
