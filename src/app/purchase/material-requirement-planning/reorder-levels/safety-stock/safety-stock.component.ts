import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-safety-stock',
  templateUrl: './safety-stock.component.html',
  styleUrls: ['./safety-stock.component.scss']
})
export class SafetyStockComponent implements OnInit {

  constructor(public dialog: MatDialogRef<SafetyStockComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  items = [
    {sku:"TS90567824", maxUsage:20, avgUsage:15,maxLeadTime:10,avgLeadTime:7, safetyS:500},
    {sku:"TS90567825", maxUsage:220, avgUsage:150,maxLeadTime:5,avgLeadTime:4, safetyS:100},
    {sku:"TS90567826", maxUsage:27, avgUsage:20,maxLeadTime:25,avgLeadTime:20, safetyS:200},
    {sku:"TS90567827", maxUsage:500, avgUsage:220,maxLeadTime:12,avgLeadTime:9, safetyS:200},
    {sku:"TS90567828", maxUsage:125, avgUsage:85,maxLeadTime:5,avgLeadTime:3, safetyS:1000},
    {sku:"TS90567829", maxUsage:63, avgUsage:50,maxLeadTime:12,avgLeadTime:8, safetyS:1000},
    {sku:"TS90567830", maxUsage:86, avgUsage:55,maxLeadTime:5,avgLeadTime:4,      safetyS:500},
    {sku:"TS90567831", maxUsage:1200, avgUsage:1150,maxLeadTime:25,avgLeadTime:21, safetyS:500},
    {sku:"TS90567832", maxUsage:6, avgUsage:5,maxLeadTime:5,avgLeadTime:5, safetyS:20},
    
  ]

  close(){
    this.dialog.close();
  }

}
