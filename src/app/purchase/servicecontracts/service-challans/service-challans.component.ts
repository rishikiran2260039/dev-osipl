import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddServiceChallanComponent } from './add-service-challan/add-service-challan.component';
import { ChallanPopupComponent } from './challan-popup/challan-popup.component';
import { EquipmentServiceChallansPopUpComponent } from './equipment-service-challans-pop-up/equipment-service-challans-pop-up.component';
import { NotesPopupComponent } from './notes-popup/notes-popup.component';
import { PartsServiceChallansPopUpComponent } from './parts-service-challans-pop-up/parts-service-challans-pop-up.component';
// import { ServicesPopupComponent } from './services-popup/services-popup.component';



@Component({
  selector: 'app-service-challans',
  templateUrl: './service-challans.component.html',
  styleUrls: ['./service-challans.component.scss']
})
export class ServiceChallansComponent implements OnInit {


  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  constructor(public dialog: MatDialog,  private alertService: AlertService) { }
  filterToggle = false;
  ngOnInit() {
  }

  items = [
    {pcode:"E005KA10012",Equipment: "10", Parts: "12", Description: " Goods Being Supplied on Approval", "challan": "SC/OM/JUL-21-22/001", "vendor": "WO-019", "ReleaseDate": "16-05-2021",
     "wOrder": "01-09-2022", vcStatus:true,
     "VendorName": "TATA HITACHI", "remarks": "Need to Release the invoice immediately", "cat": 2},
   
     {pcode:"E005KA10012",Equipment: "12",Parts: "14",Description: "  Goods Being Transported for Job Work", "challan": "SC/OM/JUL-21-22/002", "vendor": "WO-051", "ReleaseDate": "26-08-2021",
     "wOrder": "03-12-2022", vcStatus:true,
     "VendorName": "CaterPillar", "remarks": "Need to Procure the invoice immediately", "cat": 1},
    
     {pcode:"E005KA10012",Equipment: "13",Parts: "14",Description: " Transportation of goods from one Warehouse to another Warehouse of the supplier ", "challan": "SC/OM/JUL-21-22/002", "vendor": "WO-079", "ReleaseDate": "29-09-2021",
     "wOrder": "13-11-2022", vcStatus:true,
     "VendorName": "CaterPillar", "remarks": "Need to Acquire the invoice immediately", "cat": 3},
    
     {pcode:"E005KA10012",Equipment: "15",Parts: "16",Description: " Goods Supply. Supply of Cement and Iron, Where the quantity of supply from place of supplier is not known at the time of Supply  ", "challan": "SC/OM/JUL-21-22/002", "vendor": "WO-786", "ReleaseDate": "06-11-2021",
     "wOrder": "27-08-2022", vcStatus:true,
     "VendorName": "CaterPillar", "remarks": "Need to Release the invoice immediately", "cat": 4},
  ];
  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}
  ServicesPop(){
    this.dialog.open(ChallanPopupComponent,{
      height:'auto',
      width:'1100px'
    })
  
  }
  ItemServicePopUp(){
    this.dialog.open(PartsServiceChallansPopUpComponent,{
      height:'auto',
      width:'1100px'
    })

  }
  ItemEquipmentPopUp(){
    this.dialog.open(EquipmentServiceChallansPopUpComponent,{
      height:'auto',
      width:'1100px'
    })

  }
  NotesPop(){
    this.dialog.open(NotesPopupComponent,{
      height:'auto',
      width:'1100px'
    })

  }


  addService(item){
    this.dialog.open(AddServiceChallanComponent, {
      data:item,
      width: "700px",
      height: "auto"
    });
  }

}
