import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddImageComponent } from './add-image/add-image.component';

@Component({
  selector: 'app-quotes-photos',
  templateUrl: './quotes-photos.component.html',
  styleUrls: ['./quotes-photos.component.scss']
})
export class QuotesPhotosComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  public addNewImage(id){
    let dialogRef = this.dialog.open(AddImageComponent, {
      data: id,
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

  
}
