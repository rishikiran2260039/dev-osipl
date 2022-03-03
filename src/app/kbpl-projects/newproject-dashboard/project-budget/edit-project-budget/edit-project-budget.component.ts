import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-project-budget',
  templateUrl: './edit-project-budget.component.html',
  styleUrls: ['./edit-project-budget.component.scss']
})
export class EditProjectBudgetComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditProjectBudgetComponent>) { }

  ngOnInit() {
  }

  close()
  {
    this.dialogRef.close();
  }
}
