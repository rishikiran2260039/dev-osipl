import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-event-log',
  templateUrl: './event-log.component.html',
  styleUrls: ['./event-log.component.scss']
})
export class EventLogComponent implements OnInit {
  constructor(public dialog: MatDialog, private alertService: AlertService,private titleService: Title) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  filterToggle: boolean;
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
    { eventname: "Create",user: 'kiran', date:'20/03/2022, 6.30 A.M',module:"Admin",role:"Admin",evntype:"Create",ip:"192.168.0.115"}, 
    { eventname: "Update",user: 'Rajesh', date:'20/01/2022, 2.30 P.M',module:"Clients",role:"Purchase Manager",evntype:"Update",ip:"192.168.0.115"},
    { eventname: "Delete",user: 'Mahesh', date:'21/02/2022, 5.40 A.M',module:"Projects",role:"Admin",evntype:"Delete",ip:"192.168.0.115"},
    { eventname: "Update",user: 'Ramesh', date:'21/01/2022, 2.40 P.M',module:"Admin",role:"Purchase Manager",evntype:"Special",ip:"192.168.0.115"},
    { eventname: "Create",user: 'komal', date:'21/02/2022, 5.40 A.M',module:"Purchase",role:"Project Manager",evntype:"Create",ip:"192.168.0.115"},
    { eventname: "Update",user: 'kumar', date:'20/01/2022, 2.30 P.M',module:"Clients",role:"Purchase Manager",evntype:"Special",ip:"192.168.0.115"},
    { eventname: "Create",user: 'Raju', date:'26/02/2022, 5.80 A.M',module:"Purchase",role:"Admin",evntype:"Delete",ip:"192.168.0.115"},
    { eventname: "Update",user: 'Praveen', date:'26/01/2022, 2.80 P.M',module:"Clients",role:"Purchase Manager",evntype:"Update",ip:"192.168.0.115"},
    { eventname: "Delete",user: 'kumar', date:'26/02/2022, 5.80 A.M',module:"Dashboard",role:"Project Manager",evntype:"Create",ip:"192.168.0.115"},
    { eventname: "Create",user: 'Suresh', date:'26/01/2022, 2.30 P.M',module:"Clients",role:"Admin",evntype:"Update",ip:"192.168.0.115"},
    { eventname: "Delete",user: 'Kiran', date:'20/02/2022, 5.30 A.M',module:"Projects",role:"Project Manager",evntype:"Delete",ip:"192.168.0.115"},
  ];


  deleteLookup() {
    this.alertService.createAlert('Successfully deleted.', 1);
  }

  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}

}
