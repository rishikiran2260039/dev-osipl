import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AssetLicenseComponent } from './asset-license/asset-license.component';
import { AssetManagerDialogboxComponent } from './asset-manager-dialogbox/asset-manager-dialogbox.component';

@Component({
  selector: 'app-assest-master',
  templateUrl: './assest-master.component.html',
  styleUrls: ['./assest-master.component.scss']
})
export class AssestMasterComponent implements OnInit {
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle:boolean = false;
  items = [
    {name: 'Drilling Machine', code: 'OSIPL/AC/2020/06/0098', class:'Machines',category:'Portable Equipment',oem:'Lakshmi',model:'L200',serial:'ertyuio7654dfd',date_manufature:'1-01-2020',date_purchase:'12-06-2020',description:'Hand held drilling machine ',license:'2',po:'OS/PO/2020/4628',vendor_name:'Sahu Machine Works',crn:' OS/CRN/2020/46719',service_history:'1',condition:'Good', status: true},
    {name: 'Crusher', code: 'OSIPL/AC/2020/04/0068', class:'Machines',category:'Heavy Howler',oem:'Lakshmi',model:'HS100',serial:'ajhah45186',date_manufature:'19-11-2010',date_purchase:'10-11-2012',description:'Stone crushing machine',license:'3',po:'OS/PO/2020/1678',vendor_name:'howlers Machine Works',crn:' OS/CRN/2020/96789',service_history:'2',condition:'Good', status: true},
    {name: 'BOB CAT', code: 'OSIPL/AC/2020/08/0015', class:'Machines',category:'Heavy Howler',oem:'Hitachi',model:'JK816',serial:'acsa7895',date_manufature:'1-01-2017',date_purchase:'1-11-2017',description:'Sand scrapping in small quantity',license:'1',po:'OS/PO/2020/2618',vendor_name:'Jaiswal Machine Works',crn:' OS/CRN/2020/16789',service_history:'3',condition:'Good', status: true},
    {name: 'Mixer', code: 'OSIPL/AC/2020/06/0108', class:'Machines',category:'Heavy Howler',oem:'Hitachi',model:'ND200',serial:'46Acb153',date_manufature:'19-05-2013',date_purchase:'19-05-2014',description:'Mixing sand cement machine',license:'5',po:'OS/PO/2020/4678',vendor_name:'Movers Machine Works',crn:' OS/CRN/2020/46489',service_history:'1',condition:'Good', status: true},
    {name: 'Loaders', code: 'OSIPL/AC/2021/01/0012', class:'Machines',category:'Heavy Howler',oem:'JCB',model:'BN174',serial:'7991AXK12',date_manufature:'13-07-2019',date_purchase:'13-07-2020',description:'Loading sand stone in hwavy quantity',license:'2',po:'OS/PO/2020/1678',vendor_name:'JCB Machine Works',crn:' OS/CRN/2020/46769',service_history:'2',condition:'Good', status: true},
    {name: 'Scrapper', code: 'OSIPL/AC/2008/06/0008', class:'Machines',category:'Earth Movers',oem:'Hitachi',model:'LV300',serial:'ackb1451',date_manufature:'28-12-2017',date_purchase:'28-01-2018',description:'Scrapping sand from ground',license:'1',po:'OS/PO/2020/4668',vendor_name:'Reddy Machine Works',crn:' OS/CRN/2020/46780',service_history:'7',condition:'Good', status: true},
    {name: 'BULLDOSER', code: 'OSIPL/AC/2015/07/1098', class:'Machines',category:'Earth Movers',oem:'JCB',model:'NA700',serial:'123AXK12',date_manufature:'19-04-2020',date_purchase:'19-06-2020',description:'Taking huge amount of earth removing material',license:'2',po:'OS/PO/2020/4670',vendor_name:'Patil Machine Works',crn:' OS/CRN/2020/46389',service_history:'2',condition:'Good', status: true},
    {name: 'Dump Trucks ', code: 'OSIPL/AC/2020/06/0091', class:'Machines',category:'Earth Movers',oem:'JCB',model:'DT2000',serial:'159AXB48',date_manufature:'10-01-2019',date_purchase:'10-05-2019',description:'Dumping huge material',license:'3',po:'OS/PO/2020/4670',vendor_name:'JCB Machine Works',crn:' OS/CRN/2020/66789',service_history:'4',condition:'Good', status: true},
    {name: 'Trenchers ', code: 'OSIPL/AC/2020/06/0094', class:'Machines',category:'Earth Movers',oem:'JCB',model:'TH1090',serial:'AXCB7891',date_manufature:'19-01-2019',date_purchase:'29-04-2019',description:'To trench the ground',license:'1',po:'OS/PO/2020/4670',vendor_name:'JCB Machine Works',crn:' OS/CRN/2020/16789',service_history:'1',condition:'Good',  status: true},
     ]
 
  constructor(public dialog: MatDialog, private alertService: AlertService) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';

  ngOnInit() {
  }

  openActionTypeDialog(id: any){
    let dialogRef = this.dialog.open(AssetManagerDialogboxComponent, {
      data:id,
      width:"70%",
      height:"auto"
    });
    dialogRef.afterClosed().subscribe(data => {
      // this.getAllUsers();
     });
  }
  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}

opendocs() {
  let dialogRef = this.dialog.open(AssetLicenseComponent, {
   
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}

}
