import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-engineer',
  templateUrl: './tech-engineer.component.html',
  styleUrls: ['./tech-engineer.component.scss']
})
export class TechEngineerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items = [
    { "requisition_no": "OM/REQ/SPA-MAR-19/1059", "requisition_date": "06-Mar-2019", "requisition_title": "	NEED 100 ITEM IMMEDIATELY", "requisition_category": "Dump Truck", "sub_category": "Breakdown Repairs (emergency)", "make": "Volvo", "door_no": "FMX480", "view": "2", "required": "22-Mar-2019", "approval": "Pending", potential:1, toolT:"Done", "Status": 1, stageColour: '#00ff0040'},
    { "requisition_no": "OM/REQ/SPA/MAY-19/1010", "requisition_date": "29-May-2019", "requisition_title": "REQUIRE 100 ITEMS FOR PROJECT", "requisition_category": "Backhoe Loader", "sub_category": "Running Maintenance", "make": "Caterpillar", "door_no": "D85ESS 17", "view": "5", "required": "30-Apr-2020", "approval": "Pending", potential:1, toolT:"Done", "Status": 1, stageColour: '#00ff0040'},
    { "requisition_no": "OM/REQ/SPA-FEB-19/1051", "requisition_date": "19-Feb-2019", "requisition_title": "100 PARTS REQUIRED FOR SCANIA TRUCK FOR ...", "requisition_category": "Backhoe Loader", "sub_category": "Breakdown Repairs (emergency)", "make": "Mercedes Benz", "door_no": "All Models", "view": "1", "required": "28-Feb-2019", "approval": "Done", potential:1, toolT:"Done", "Status": 4, stageColour: '#FFA50069'},
    { "requisition_no": "OM/REQ/SPA/FEB-21/1075", "requisition_date": "03-Feb-2021", "requisition_title": "	200 ITEM REQUIRED AT KADHIA PROJECT SITE...", "requisition_category": "Dump Truck", "sub_category": "Accident Repairs", "make": "Tata", "door_no": "ACTROS 4841K", "view": "7", "required": "10-Feb-2021", "approval": "Pending", potential:1, toolT:"Done", "Status": 3, stageColour: '#87CEFA'},
    { "requisition_no": "OM/REQ/SPA/FEB-21/1074", "requisition_date": "03-Feb-2021", "requisition_title": "	IMMEDIATE REQUIREMENT FOR 100 ITEMS...", "requisition_category": "Backhoe Loader", "sub_category": "Accident Repairs", "make": "Volvo", "door_no": "D85ESS 86", "view": "9", "required": "31-Mar-2021", "approval": "Done", potential:1 , toolT:"Done", "Status": 2, stageColour: '#C0C0C0'},
  ];


  statusOptions = [
    { value: 1, name: 'Completed', colorCode: '#00ff0040' },
    { value: 2, name: 'Pending', colorCode: '#C0C0C0' },
    { value: 3, name: 'In Process', colorCode: '#87CEFA' },
    { value: 4, name: 'On Hold', colorCode: '#FFA50069' },
  ];

  updateNewLead(item:any) {
    console.log(item, 'item');
    delete item['meeting_time']
    if (item['potential'] == 0) {
      item['potential'] = 1;
      item["toolT"] = "Done";
    } else if (item['potential'] == 1) {
      item['potential'] = 2;
      item["toolT"] = "Pending";
    } else if (item['potential'] == 2) {
      item['potential'] = 3;
      item["toolT"] = "Partial";
    } else if (item['potential'] == 3) {
      item['potential'] = 4;
      item["toolT"] = "Declined";
    } else if (item['potential'] == 4) {
      item['potential'] = 1;
      item["toolT"] = "Done";
    }
  
  }

}
