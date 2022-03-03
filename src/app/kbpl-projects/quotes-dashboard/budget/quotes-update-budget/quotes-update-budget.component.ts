import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-quotes-update-budget',
  templateUrl: './quotes-update-budget.component.html',
  styleUrls: ['./quotes-update-budget.component.scss']
})
export class QuotesUpdateBudgetComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<QuotesUpdateBudgetComponent>) { }

  ngOnInit() {
  }

  close()
  {
    this.dialogRef.close();
  }
}
