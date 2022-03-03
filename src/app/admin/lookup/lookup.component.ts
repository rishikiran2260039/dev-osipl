import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddLookupDialogComponent } from './add-lookup-dialog/add-lookup-dialog.component';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss']
})
export class LookupComponent implements OnInit {

  
  constructor(public dialog: MatDialog, private alertService: AlertService,private titleService: Title) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  
  deleteUser(elementValues){
    console.log(elementValues);
    }
    name:any;

    public setTitle(newTitle: string) {
      this.titleService.setTitle(newTitle);
    }

  ngOnInit() {
    this.setTitle("Om Sai Intex | Admin | Lookup Options");

  }

  tableList: Object[] = [
    { intLookupId: 2,code: 'Technology', options:'Datascience',status:true}, 
    { intLookupId: 3,code: 'Project Type', options:'Construction',status:true}, 
    { intLookupId: 4,code: 'Project Type', options:'Engineering',status:true}, 
  ];

  public openUserDialog(id) {
    let dialogRef = this.dialog.open(AddLookupDialogComponent, {
        data: id,
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  deleteLookup() {
    this.alertService.createAlert('Successfully deleted.', 1);
  }

  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}

}
