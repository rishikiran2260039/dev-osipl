import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { AddImageComponent } from './add-image/add-image.component';

@Component({
  selector: 'app-project-photos',
  templateUrl: './project-photos.component.html',
  styleUrls: ['./project-photos.component.scss']
})
export class ProjectPhotosComponent implements OnInit {

  constructor(public dialog: MatDialog,private titleService: Title) { }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  ngOnInit() {
    this.setTitle("CPM | Updates | Photos");

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
