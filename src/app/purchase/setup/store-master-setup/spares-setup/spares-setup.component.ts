import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-spares-setup',
  templateUrl: './spares-setup.component.html',
  styleUrls: ['./spares-setup.component.scss']
})
export class SparesSetupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SparesSetupComponent>,@Inject(MAT_DIALOG_DATA) public user: number,
  private alertService: AlertService) { 
  }

  Contacts = [
    {siNo:'1', con: '6154023987'},
    {siNo:'2', con: '6012398745'}
  ]
 
 ngOnInit() {
   
 }

 close(): void {
   this.dialogRef.close();
 }

 itemstr: HTMLElement[] = [];
 agestr: HTMLElement[] = [];
 responsestr: HTMLElement[] = [];
 str: HTMLElement = <HTMLElement>document.getElementById("new_text");
 copy(type) {
   if(type=='lookup')
     this.itemstr.push(this.str);
   else if(type=='age')
     this.agestr.push(this.str);
   else
     this.responsestr.push(this.str);
 }

 remove(e) {
   document.getElementById("repeat-" + e).remove();
 }

 saveLookup() {
   this.alertService.createAlert('Successfully Saved.', 1);
   this.dialogRef.close();
 }

}
