import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoicing',
  templateUrl: './invoicing.component.html',
  styleUrls: ['./invoicing.component.scss']
})
export class InvoicingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }items=[
    {partnumber:"B229900003680",invoiced:"16,240",refrence:"OM/BHL/OCT/19-20/1077"},
    {partnumber:"B229900003681",invoiced:"17,440",refrence:"	OM/BHL/OCT/19-20/1078"},
    {partnumber:"B229900003682",refrence:"OM/BHL/OCT/19-20/1079",invoiced:"15,520"},
    {partnumber:"B229900003683",refrence:"OM/BHL/OCT/19-20/1081",invoiced:"18,860"},
    {partnumber:"B229900003684",refrence:"OM/BHL/OCT/19-20/1082",invoiced:"20,550"},

  ]

}
