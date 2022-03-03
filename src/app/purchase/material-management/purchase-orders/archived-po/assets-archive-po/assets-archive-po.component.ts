import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddAssetsToArchiveComponent } from './add-assets-to-archive/add-assets-to-archive.component';

@Component({
  selector: 'app-assets-archive-po',
  templateUrl: './assets-archive-po.component.html',
  styleUrls: ['./assets-archive-po.component.scss']
})
export class AssetsArchivePoComponent implements OnInit {

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
    let dialogRef = this.dialog.open(AddAssetsToArchiveComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

  items = [
    {length:"01-01-2020",width:"12-06-2020",height:"Hand held drilling machine",rate:"Good",dimen:"200 x 100 x 50", thick:"	OS/PO/2020/4628",var:"1",time:'12',remarks:'NA',scategory:'',name:'Drilling Machine', no:'OSIPL/AC/2020/06/0098', cat:'Lakshmi', subcat:'L200', uom:'SQMTR', type:'Plain', make:'IGL', model:'FMX480', pmake:'Volvo', equi:'-'},
    {length:"19-11-2010",width:"10-11-2012",height:"Stone crushing machine",rate:"Good",dimen:"300 x 200 x 100",thick:"OS/PO/2020/1678",var:"3",time:'22',remarks:'NA',scategory:'',name:'Crusher', no:'OSIPL/AC/2020/06/0099', cat:'Lakshmi', subcat:'HS100', uom:'NOS', type:'Duraline Board', make:'VANGYP', model:'Armstrong', pmake:'Caterpillar', equi:'-'},
    {length:"01-01-2017",width:"01-11-2017",height:"Sand scrapping in small quantity",rate:"Good",dimen:"300 x 200 x 100",thick:"OS/PO/2020/2618",var:"1",time:'32',remarks:'NA',scategory:'',name:'BOB CAT', no:'OSIPL/AC/2020/06/0100', cat:'Hitachi', subcat:'JK816', uom:'Kg', type:'ACOUSTICAL', make:'GYPROC', model:'CAT B214', pmake:'Caterpillar', equi:'-'},
    {length:"19-05-2013",width:"19-05-2014",height:"Mixing sand cement machine",rate:"Good",dimen:"300 x 200 x 100",thick:"OS/PO/2020/4678",var:"3",time:'12',remarks:'NA',scategory:'',name:'Mixer', no:'OSIPL/AC/2020/06/0101', cat:'Hitachi', subcat:'ND200', uom:'SQMTR', type:'Duraline Board', make:'Armstrong', model:'TH 234', pmake:'Kirloskar', equi:'-'},
    {length:"13-07-2019",width:"13-07-2020",height:"Loading sand stone in hwavy quantity",rate:"Good",dimen:"300 x 200 x 100",thick:"OS/PO/2020/1678",var:"3",time:'12',remarks:'NA',scategory:'',name:'Loaders', no:'OSIPL/AC/2020/06/0102', cat:'JCB', subcat:'BN174', uom:'SQMTR', type:'ACOUSTICAL', make:'VANGYP', model:'FR0032', pmake:'Spykaar', equi:'-'},
    {length:"28-12-2017",width:"28-01-2018",height:"Scrapping sand from ground",rate:"Good",dimen:"300 x 200 x 100",thick:"OS/PO/2020/4668",var:"3",time:'32',remarks:'NA',scategory:'',name:'Scrapper', no:'OSIPL/AC/2020/06/0103', cat:'Hitachi', subcat:'LV300', uom:'Litres', type:'MR Board', make:'Armstrong', model:'Hubless', pmake:'Vizag Steel', equi:'-'},
    {length:"19-04-2020",width:"19-06-2020",height:"Taking huge amount of earth removing material",rate:"Good",dimen:"400 x 200 x 150",thick:"OS/PO/2020/4670",var:"1",time:'13',remarks:'NA',scategory:'',name:'Bulldoser', no:'OSIPL/AC/2020/06/0104', cat:'JCB', subcat:'NA700', uom:'Kg', type:'ACOUSTICAL', make:'VANGYP', model:'Ramco-53', pmake:'JSW Ramco', equi:'-'},
    {length:"10-01-2019",width:"10-05-2019",height:"Dumping huge materiaL",rate:"Good",dimen:"400 x 200 x 150",thick:"OS/PO/2020/4670",var:"4",time:'16',remarks:'NA',scategory:'',name:'Dump Trucks', no:'OSIPL/AC/2020/06/0105', cat:'JCB', subcat:'DT2000', uom:'kg/m3', type:'MR Board', make:'Armstrong', model:'Armstrong', pmake:'SREE TMT', equi:'-'},
    {length:"19-01-2019",width:"29-04-2019",height:"To trench the ground",rate:"Good",dimen:"400 x 200 x 150",thick:"OS/PO/2020/4670",var:"4",time:'17',remarks:'NA',scategory:'',name:'Trenchers', no:'OSIPL/AC/2020/06/0106', cat:'JCB', subcat:'TH1090', uom:'Litres', type:'Duraline Board', make:'GYPROC', model:'H-23', pmake:'Havels-Bell', equi:'-'},
  ];
  openvariants()
  {
    let dialogRef = this.dialog.open(AddAssetsToArchiveComponent, {
      height: 'auto',
      width: '70%',
  });
  }

  // public quantitypopup(){
  //   let dialogRef = this.dialog.open(QuantityPopUpComponent, {
  //     height: 'auto',
  //     width: 'auto'
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }
}
