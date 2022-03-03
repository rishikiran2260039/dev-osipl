import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddProdSetupComponent } from './add-prod-setup/add-prod-setup.component';
import { ListItemtypesComponent } from './list-itemtypes/list-itemtypes.component';
import { ListSubcategoriesComponent } from './list-subcategories/list-subcategories.component';

@Component({
  selector: 'app-product-categories-setup',
  templateUrl: './product-categories-setup.component.html',
  styleUrls: ['./product-categories-setup.component.scss']
})
export class ProductCategoriesSetupComponent implements OnInit {
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle:boolean = false;
  items = [
    {gst:"5%",sub:'0',name: 'Plaster & Boards', code: 'BHL', branch: '18',status: true},
    {gst:"12%",sub:'3',name: 'Steel', code: 'DZR', branch: '8',status: true},
    {gst:"18%",sub:'1',name: 'Ply/Boards', code: 'BUS', branch: '0',status: true},
    {gst:"12%",sub:'0',name: 'Plaster & Boards', code: 'CAR', branch: '0',status: true},
    {gst:"28%",sub:'2',name: 'Steel', code: 'DPT', branch: '7',status: true},
    {gst:"18%",sub:'5',name: 'Ply/Boards', code: 'EXV', branch: '4',status: true},
    {gst:"12%",sub:'0	',name: 'Steel', code: 'MIL', branch: '0', status: true},
    {gst:"28%",sub:'3',name: 'Ply/Boards ', code: 'CRN', branch: '0',status: true},
    {gst:"12%",sub:'7',name: 'Plaster & Boards', code: 'GDR', branch: '4',status: true},
    {gst:"18%",sub:'0',name: 'Steel', code: 'EXV', branch: '0',status: true}
  ]

  constructor(public dialog: MatDialog, private alertService: AlertService) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';

  ngOnInit() {
  }

  openActionTypeDialog(value) {
    let dialogRef = this.dialog.open(AddProdSetupComponent , {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

  openBranchDialog(value) {
    let dialogRef = this.dialog.open(ListSubcategoriesComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }
  openitemtypes(value)
  {
    let dialogRef = this.dialog.open(ListItemtypesComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }
  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}

}
