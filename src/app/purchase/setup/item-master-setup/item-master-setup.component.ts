import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddItemMasterSetupComponent } from './add-item-master-setup/add-item-master-setup.component';
import { VariantsinitemComponent } from './variantsinitem/variantsinitem.component';

@Component({
  selector: 'app-item-master-setup',
  templateUrl: './item-master-setup.component.html',
  styleUrls: ['./item-master-setup.component.scss']
})
export class ItemMasterSetupComponent implements OnInit {
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle:boolean = false;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openActionTypeDialog(value) {
    let dialogRef = this.dialog.open(AddItemMasterSetupComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

  items = [
    {length:"200 CM",width:"57 CM",height:"103 MM",rate:"2000",dimen:"200 x 100 x 50", thick:"100 MM",var:"0",time:'12',remarks:'NA',scategory:'',name:'Gypsum Board', no:'56107', cat:'Plaster & Boards', subcat:'Commercial', uom:'SQMTR', type:'Plain', make:'IGL', model:'FMX480', pmake:'Volvo', equi:'-'},
    {length:"320 CM",width:"54 CM",height:"104 MM",rate:"3000",dimen:"300 x 200 x 100",thick:"400 MM",var:"3",time:'22',remarks:'NA',scategory:'',name:'Plaster', no:'182048', cat:'Steel', subcat:'FLEXIPLY', uom:'NOS', type:'Duraline Board', make:'VANGYP', model:'Armstrong', pmake:'Caterpillar', equi:'-'},
    {length:"320 CM",width:"54 CM",height:"105 MM",rate:"5000",dimen:"300 x 200 x 100",thick:"400 MM",var:"0",time:'32',remarks:'NA',scategory:'',name:'Chain Hook', no:'123428', cat:'Ply/Boards', subcat:'Commercial', uom:'Kg', type:'ACOUSTICAL', make:'GYPROC', model:'CAT B214', pmake:'Caterpillar', equi:'-'},
    {length:"320 CM",width:"54 CM",height:"105 MM",rate:"5000",dimen:"300 x 200 x 100",thick:"400 MM",var:"3",time:'12',remarks:'NA',scategory:'',name:'Gypsum Board', no:'141234', cat:'Plaster & Boards', subcat:'BWP', uom:'SQMTR', type:'Duraline Board', make:'Armstrong', model:'TH 234', pmake:'Kirloskar', equi:'-'},
    {length:"320 CM",width:"44 CM",height:"115 MM",rate:"5000",dimen:"300 x 200 x 100",thick:"400 MM",var:"3",time:'12',remarks:'NA',scategory:'',name:'Plaster', no:'56107', cat:'Steel', subcat:'Veneered', uom:'SQMTR', type:'ACOUSTICAL', make:'VANGYP', model:'FR0032', pmake:'Spykaar', equi:'-'},
    {length:"320 CM",width:"47 CM",height:"215 MM",rate:"3000",dimen:"300 x 200 x 100",thick:"100 MM",var:"3",time:'32',remarks:'NA',scategory:'',name:'Pipes', no:'182048', cat:'Ply/Boards', subcat:'Laminated', uom:'Litres', type:'MR Board', make:'Armstrong', model:'Hubless', pmake:'Vizag Steel', equi:'-'},
    {length:"320 CM",width:"47 CM",height:"230 MM",rate:"6000",dimen:"400 x 200 x 150",thick:"500 MM",var:"0",time:'13',remarks:'NA',scategory:'',name:'Gypsum Board', no:'13254', cat:'Plaster & Boards', subcat:'FLEXIPLY', uom:'Kg', type:'ACOUSTICAL', make:'VANGYP', model:'Ramco-53', pmake:'JSW Ramco', equi:'-'},
    {length:"220 CM",width:"47 CM",height:"230 MM",rate:"6000",dimen:"400 x 200 x 150",thick:"500 MM",var:"4",time:'16',remarks:'NA',scategory:'',name:'Plaster', no:'56135', cat:'Ply/Boards', subcat:'Veneered', uom:'kg/m3', type:'MR Board', make:'Armstrong', model:'Armstrong', pmake:'SREE TMT', equi:'-'},
    {length:"220 CM",width:"57 CM",height:"210 MM",rate:"6000",dimen:"400 x 200 x 150",thick:"500 MM",var:"4",time:'17',remarks:'NA',scategory:'',name:'Gypsum Board', no:'19234', cat:'Plaster & Boards', subcat:'FLEXIPLY', uom:'Litres', type:'Duraline Board', make:'GYPROC', model:'H-23', pmake:'Havels-Bell', equi:'-'},
  ];
  openvariants()
  {
    let dialogRef = this.dialog.open(VariantsinitemComponent, {
      height: 'auto',
      width: '70%',
  });
  }
  
}