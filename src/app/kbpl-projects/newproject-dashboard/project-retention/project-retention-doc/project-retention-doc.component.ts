import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-project-retention-doc',
  templateUrl: './project-retention-doc.component.html',
  styleUrls: ['./project-retention-doc.component.scss']
})
export class ProjectRetentionDocComponent implements OnInit {

  items = [
    { "name": "Document 1" },
    { "name": "Document 2" },
    { "name": "Document 3" }

  ]

  constructor(public dialogRef: MatDialogRef<ProjectRetentionDocComponent>) {

  }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
