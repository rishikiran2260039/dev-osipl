import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-save-new-template-serv-terms',
  templateUrl: './save-new-template-serv-terms.component.html',
  styleUrls: ['./save-new-template-serv-terms.component.scss']
})
export class SaveNewTemplateServTermsComponent implements OnInit {

  constructor(public dialog : MatDialogRef< SaveNewTemplateServTermsComponent >) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}
