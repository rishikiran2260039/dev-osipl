import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { MatDialog } from '@angular/material';
//import { AddgrnitemshipqntyComponent } from 'src/app/purchase/inventory-management/grn/add-grn-active/items-active-grn/addgrnitemshipqnty/addgrnitemshipqnty.component';
import { AddconsnitemshipqntyComponent } from './addconsnitemshipqnty/addconsnitemshipqnty.component';

@Component({
  selector: 'app-items-active-consignment',
  templateUrl: './items-active-consignment.component.html',
  styleUrls: ['./items-active-consignment.component.scss']
})
export class ItemsActiveConsignmentComponent implements OnInit {

  constructor(private _location : Location,public dialog: MatDialog) { }


  // allFields = [1];

items = [
{length:"200 CM",width:"57 CM",height:"113 MM",balance:"6",cat:"Plaster & Boards",subcat:"Commercial",brand:"Armstrong",dimen:"200 x 100 x 50 MM",thick:"40 MM",reference:"OM/BHL/OCT/19-20/1077",item_name:"Tambour Cupbards",item_code:"FMX480",order_qty:"46",ship_qty:"40"},
{length:"100 CM",width:"47 CM",height:"63 MM", balance:"0",cat:"Steel",subcat:"FLEXIPY",brand:"VANGYP",dimen:"200 x 100 x 50 MM",thick:"40 MM",reference:"OM/BHL/OCT/19-20/1078",item_name:"Planter Boxes",item_code:"D85ESS 17",order_qty:"60",ship_qty:"60"},
{length:"120 CM",width:"44 CM",height:"99 MM", balance:"25",cat:"Steel",subcat:"FLEXIPY",brand:"VANGYP",dimen:"200 x 100 x 50 MM",thick:"40 MM",reference:"OM/BHL/OCT/19-20/1079",item_name:"Arificial Plants",item_code:"ACTROS 4841K",order_qty:"125",ship_qty:"100"},
{length:"120 CM",width:"44 CM",height:"99 MM", balance:"0",cat:"Steel",subcat:"FLEXIPY",brand:"VANGYP",dimen:"200 x 100 x 50 MM",thick:"40 MM",reference:"OM/BHL/OCT/19-20/1080",item_name:"Filling Cabinet",item_code:"D85ESS 86",order_qty:"83",ship_qty:"83"},
{length:"220 CM",width:"54 CM",height:"193 MM",balance:"9",cat:"Plaster & Boards",subcat:"Commercial",brand:"Armstrong",dimen:"200 x 100 x 50 MM",thick:"40 MM",reference:"OM/BHL/OCT/19-20/1082",item_name:"Metal Lockers",item_code:"MELO98",order_qty:"91",ship_qty:"80"}]

  removeItem(index){
    // this.allFields.splice(index, 1);
  }
  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }
  openActionTypeDialog()
  {
    let dialogRef = this.dialog.open(AddconsnitemshipqntyComponent, {
      height: 'auto',
      width: '500px',
  });
  }
}
