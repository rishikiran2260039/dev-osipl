import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddNewRackSetupComponent } from './add-new-rack-setup/add-new-rack-setup.component';
import { AddNewRowSetupComponent } from './add-new-row-setup/add-new-row-setup.component';

@Component({
  selector: 'app-rack-setup',
  templateUrl: './rack-setup.component.html',
  styleUrls: ['./rack-setup.component.scss']
})
export class RackSetupComponent implements OnInit {

  gridCmp: any;
  constructor(public dialog: MatDialog, private alertService: AlertService) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';

  ngOnInit() {
  }

  public openleadDialog(id) {
    let dialogRef = this.dialog.open(AddNewRackSetupComponent, {
        data: id,
        height: 'auto',
        width: '600px',
        disableClose: true
    });

    dialogRef.afterClosed().subscribe(lead => {
      
        if (lead=='yes') {
          this.gridCmp.getQuotes();
        }
    });
}

public openleadDialogg(id) {
  let dialogRef = this.dialog.open(AddNewRowSetupComponent, {
      data: id,
      height: 'auto',
      width: '600px',
      disableClose: true
  });

  dialogRef.afterClosed().subscribe(lead => {
    
      if (lead=='yes') {
        this.gridCmp.getQuotes();
      }
  });
}

}
