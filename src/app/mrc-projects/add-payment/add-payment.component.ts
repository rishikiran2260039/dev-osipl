import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss']
})
export class AddPaymentComponent implements OnInit {

  constructor(public dialog:MatDialogRef<AddPaymentComponent>) { }

  ngOnInit() {
  }

  close()
  {
    this.dialog.close();
  }
}
