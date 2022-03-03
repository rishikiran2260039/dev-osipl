import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ComposeEmailDialogComponent } from './compose-email-dialog/compose-email-dialog.component';

@Component({
  selector: 'app-rfq-email-quotations',
  templateUrl: './rfq-email-quotations.component.html',
  styleUrls: ['./rfq-email-quotations.component.scss']
})
export class RfqEmailQuotationsComponent implements OnInit {
  taskData: any;
  alertService: any;
  dialogRef: any;

  constructor( public dialog:MatDialog) { }

  ngOnInit() {
  }



  items = [
    {Vendor:"Abhi Constructions", Branch:"Ayyappa Society", FOCCredit:"NA",add:1 },
   
    
  ];
  
 
  public opendialog(){
    let dialogRef = this.dialog.open(ComposeEmailDialogComponent, {
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  itemstr: HTMLElement[] = [];
  agestr: HTMLElement[] = [];
  responsestr: HTMLElement[] = [];
  str: HTMLElement = <HTMLElement>document.getElementById("new_text");
  add=true;
  copy(type) {
    // if(type=='lookup')
    //   this.itemstr.push(this.str);
    // else if(type=='age')
    //   this.agestr.push(this.str);
    // else
    //   this.responsestr.push(this.str);
    
    this.items.push( {Vendor:"Abhi Constructions", Branch:"Ayyappa Society", FOCCredit:"NA",add:2 })
  }

  remove(e) {
    document.getElementById("repeat-" + e).remove();
  }

  saveLookup() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }
}