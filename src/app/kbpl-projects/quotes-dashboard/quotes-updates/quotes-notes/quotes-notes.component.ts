import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddNotesDialogueComponent } from './add-notes-dialogue/add-notes-dialogue.component';

@Component({
  selector: 'app-quotes-notes',
  templateUrl: './quotes-notes.component.html',
  styleUrls: ['./quotes-notes.component.scss']
})
export class QuotesNotesComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }

  public filterToggle: boolean;

  items = [
    { date: '12-09-2020', site: 'Sector 56',contract:' Landscapin', task:'Admin', subject: "Backfilling",subBy:"Navin",des:"The process of refilling trenches or holes created during excavation, especially around foundations." },
    { date: '11-09-2020', site: 'Lansdowne',contract:' Club House', task:'Research', subject: "BIM",subBy:"Kenneth",des:"Building information modeling includes all details of that structure, from its basic layout to the smallest measurements." },
    { date: '21-12-2019', site: 'Newton',contract:'Restaurant', task:'Planning', subject: "Caulking",subBy:"John",des:"A flexible, rubbery type of material that is used to seal gaps in a joint." },
    { date: '30-11-2021', site: 'Newton',contract:'Parking Lot', task:'Quality Control', subject: "Ducts",subBy:"Mark",des:"Piping has issues in pumping air throughout a structure." },
    { date: '28-05-2021', site: 'Lansdowne',contract:'Club House', task:'Management', subject: "I-beam",subBy:"Don",des:"A beam that has a cross-section that looks like the capital letter I. Girders often have an I-beam cross-section." },
    
  ]

  ngOnInit() {
  }


 addQuotesNotes(){
  let dialogRef = this.dialog.open(AddNotesDialogueComponent, {
    height: 'auto',
    width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}
files = [
  {
    "label": "Sector 56 (36)",
    "children": [
      {
        "label": "- Landscaping (20)"
      },
      {
        "label": "- Club House (16)"
      }
    ]
  }, 
  {
    "label": "Lansdowne (34)",
    "children": [
      {
        "label": "- Restaurant (12)"
      },
      {
        "label": "- Parking Lot (22)"
      }
    ]
  },
  {
    "label": "Newton (40)",
    "children": [
      {
        "label": "- Tower A (10)"
      },
      {
        "label": "- Tower B (10)"
      },
      {
        "label": "- Tower C (10)"
      },
      {
        "label": "- Common Facilities (10)"
      }
    ]
  }
];


  // openGridColumnsDialog() {

  //   let dialogRef = this.dialog.open(ProjectContractGridcolumnComponent, {

  //     height: 'auto',
  //     width: '600px',
  //     autoFocus: false,
  //   });


  //   dialogRef.afterClosed().subscribe(prospects => {
  //     if (prospects == 'save') {

  //     }
  //   });
  // }

  
  // AddContract() {
  //   const dialogRef = this.dialog.open(AddContractsComponent, {

  //     autoFocus: false,
  //     height: 'auto',
  //     width: '1100px',

  //   });
  // }

}
