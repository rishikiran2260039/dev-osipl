import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cross-reference-setup',
  templateUrl: './cross-reference-setup.component.html',
  styleUrls: ['./cross-reference-setup.component.scss']
})
export class CrossReferenceSetupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  folders = [
    'Backhole Loader(10)', 'BullDozer(6)', 'Bus(8)', 'Car(4)', 'Dump Truck(9)', 'Excavator(10)', 'Miller(8)', 'Mobile Crane(9)', 'Motor Grader(10)',
    'Primary Track Unit(6)', 'Secondary Track Unit(5)', 'Soil Compactor(5)', 'Surface Miner(6)', 'Tanker(0)', 'Tanker/Service Man(0)',
    'Tippers(0)','Track Screens(0)', 'Vans(0)', 'Wheel Dozer(9)', 'wheel Loader(9)'
  ];

  Cats = [
    'Accident Repairs',
    'Breakdown repairs',
    'CLS Systems',
    'Ground Engaging Tools',
    'Overhauling',
    'Preventitve Maintainence',
    'Refurbished',
    'Running Maintainence',
    'Scheduled Maintainence',
    'Under Carriage'
  ];

}
