import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-availableitems-storename-storemasterpopup',
  templateUrl: './availableitems-storename-storemasterpopup.component.html',
  styleUrls: ['./availableitems-storename-storemasterpopup.component.scss']
})
export class AvailableitemsStorenameStoremasterpopupComponent implements OnInit {

  taskData: any;
  alertService: any;
  dialogRef: any;

  constructor( public dialog:MatDialog ,@Inject(MAT_DIALOG_DATA) public data:any ,public dialog1:MatDialogRef<AvailableitemsStorenameStoremasterpopupComponent >) { }

  ngOnInit() {
  }



  items = [
    {Vendor:"Abhi Constructions", Branch:"Ayyappa Society", FOCCredit:"NA",add:1 },
   
    
  ];


  itemstr: HTMLElement[] = [];
  agestr: HTMLElement[] = [];
  responsestr: HTMLElement[] = [];
  str: HTMLElement = <HTMLElement>document.getElementById("new_text");
  add=true;
  sometext =true;
  allFields = [1];
  removeItem(index){
    this.allFields.splice(index, 1);
  }
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

  close(){
    this.dialog1.close();
  }
}