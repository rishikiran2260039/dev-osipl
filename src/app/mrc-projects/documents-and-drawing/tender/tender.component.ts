import { Component, OnInit } from '@angular/core';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import {MatDialog} from '@angular/material';
import { AddDocumentDialogComponent } from './add-document-dialog/add-document-dialog.component';


@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.scss']
})
export class TenderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  filterToggle:boolean;

  ngOnInit() {
  }

  items=[
    {"project_code":"2478BA","project_name":"MRC ","client":"Robert ","consultant":"FastTrack ","la":" 244","la_date":"12-02-2020 ",          "agreement":"343",    "agreement_date":"13/03/2020","start_date":"14/04/2020","target_date":"16/06/2020 ","total_cost":"$700","billed":"$700","paid":"$350 ","margin":"$300 ","completion":"Completed " },                                                           
    {"project_code":"3478BA","project_name":"MPK ","client":"John ","consultant":"Design ","la":" 245","la_date":" 3-02-2020",                "agreement":" 323",   "agreement_date":"14/03/2020","start_date":"15/04/2020","target_date":"17/06/2020 ","total_cost":"$710","billed":"$709","paid":"$350 ","margin":"$310 ","completion":" Completed" },  
    {"project_code":"4478BA","project_name":"Becon","client":"Singh ","consultant":" Stone Factory","la":"246 ","la_date":"13-02-2020 ",      "agreement":"265",    "agreement_date":"15/03/2020","start_date":"16/04/2020","target_date":"18/06/2020 ","total_cost":"$720","billed":"$708","paid":"$350 ","margin":"$320 ","completion":"Completed " },  
    {"project_code":"5478BA","project_name":" IBW","client":" Anna","consultant":"Instant ","la":"247 ","la_date":" 14-02-2020",              "agreement":"376 ",   "agreement_date":"16/03/2020","start_date":"17/04/2020","target_date":"19/06/2020 ","total_cost":"$730","billed":"$710","paid":"$350 ","margin":"$330 ","completion":"Process " },  
    {"project_code":"6478BA","project_name":"Sales Global ","client":"Mike ","consultant":"IBW ","la":"248 ","la_date":"15-02-2020 ",         "agreement":"312 ",   "agreement_date":"17/03/2020","start_date":"18/04/2020","target_date":"11/06/2020 ","total_cost":"$740","billed":"$720","paid":"$350 ","margin":"$340 ","completion":"Process " },  
    {"project_code":"7478BA","project_name":"Instant ","client":"Jonny ","consultant":"Sales Global ","la":"249 ","la_date":"16-02-2020 ",    "agreement":"367 ",   "agreement_date":"18/03/2020","start_date":"19/04/2020","target_date":"6/06/2020 ","total_cost":"$750","billed":"$730","paid":"$350 ","margin":"$350 ","completion":"Pending " },  
    {"project_code":"8478BA","project_name":"Stone factory ","client":" Randy","consultant":"becon","la":"250 ","la_date":"17-02-2020 ",      "agreement":"276",    "agreement_date":"19/03/2020","start_date":"4/04/2020","target_date":"7/06/2020 ","total_cost":"$760","billed":"$740","paid":"$350 ","margin":"$360 ","completion":"Process " },  
    {"project_code":"9478BA","project_name":"Design ","client":" Rock","consultant":" MPK","la":"261 ","la_date":" 18-02-2020",               "agreement":"288",   "agreement_date":"1/03/2020","start_date":"3/04/2020","target_date":"8/06/2020 ","total_cost":"$770","billed":"$750","paid":"$350 ","margin":"$370 ","completion":"Completed " },  
    {"project_code":"1478BA","project_name":" FastTrack","client":"Jack ","consultant":"MRC","la":"233 ","la_date":"19-02-2020 ",             "agreement":"289",    "agreement_date":"2/03/2020","start_date":"5/04/2020","target_date":"10/06/2020 ","total_cost":"$780","billed":"$760","paid":"$350 ","margin":"$380 ","completion":"Completed " },  
  ]

  openAddDocument(assets){
    let dialogRef = this.dialog.open(AddDocumentDialogComponent, {
      data: assets,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    
    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }
  

  openDeleteDialog(assets) {
    let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      data: assets,
      height: 'auto',
      width: 'auto',
      autoFocus: false
    });
    
    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }

}
