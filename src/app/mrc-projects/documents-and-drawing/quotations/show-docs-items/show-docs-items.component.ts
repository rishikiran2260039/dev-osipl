import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-show-docs-items',
  templateUrl: './show-docs-items.component.html',
  styleUrls: ['./show-docs-items.component.scss']
})
export class ShowDocsItemsComponent implements OnInit {


  items=[
    {"serial":"3.1","category":"Electrical","description":"Air Conditionar Blowner","unit":"Pcs","qty":"170","rate":"60000","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94","amount":"$10,200"},
    {"serial":"4.1","category":"Mechanical","description":"Benches for guests","unit":"Pcs","qty":"100","rate":"7000","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94","amount":"$7000"},
    {"serial":"5.1","category":"Civil","description":"Slab Work","unit":"Cum","qty":"130","rate":"40000","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94","amount":"$5200"},
    {"serial":"6.1","category":"Plumbing","description":"Water Pipe","unit":"Pcs","qty":"170","rate":"80000","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94","amount":"$13,600"},
    {"serial":"3.2","category":"Electrical","description":"Cooler","unit":"Pcs","qty":"70","rate":"10000","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94","amount":"$4200"},

  ]

   
  constructor(public dialogRef: MatDialogRef<ShowDocsItemsComponent>) { 
    
  }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}