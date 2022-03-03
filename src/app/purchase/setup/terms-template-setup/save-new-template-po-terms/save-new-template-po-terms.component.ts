import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-save-new-template-po-terms',
  templateUrl: './save-new-template-po-terms.component.html',
  styleUrls: ['./save-new-template-po-terms.component.scss']
})
export class SaveNewTemplatePoTermsComponent implements OnInit {

  constructor(public dialog : MatDialogRef<SaveNewTemplatePoTermsComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}
