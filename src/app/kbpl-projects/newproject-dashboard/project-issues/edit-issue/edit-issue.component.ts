import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.scss']
})
export class EditIssueComponent implements OnInit {

  constructor(public matDia:MatDialogRef<EditIssueComponent>) { }

  ngOnInit() {
  }

  close()
  {
    this.matDia.close();
  }

}
