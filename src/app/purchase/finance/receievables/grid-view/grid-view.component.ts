import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tableList = [
    { date: '12-08-2019', invoice: '#435164034012', cus: 'John', order: '2478BA', amount: '2500000', dueDate: '14-09-2019', paym: '4', paid: '0', bal: '2500000',Status:1, stageColour: '#00ff0040'  },
    { date: '28-12-2018', invoice: '#638765478234', cus: 'Mark', order: '3478BA', amount: '8570000', dueDate: '30-12-2018', paym: '2', paid: '700000', bal: '7870000',Status:2, stageColour: '#C0C0C0' },
    { date: '30-08-2019', invoice: '#435164039421', cus: 'Roman', order: '4478BA', amount: '3800000', dueDate: '11-09-2019', paym: '7', paid: '0', bal: '3800000',Status:3 ,stageColour: '#87CEFA'   },
    { date: '19-12-2018', invoice: '#638765470123', cus: 'Kenneth', order: '5478BA', amount: '1500000', dueDate: '29-12-2018', paym: '2', paid: '500000', bal: '1000000',Status:2 , stageColour: '#FFA50069' },
  ]
  statusOptions = [
    {value:1, name: 'Submitted', colorCode: '#00ff0040', potential:"1",},
    {value:2, name: 'Partial', colorCode: '#C0C0C0', potential:"2",},
    {value:3, name: 'Paid', colorCode: '#87CEFA', potential:"1",},
    {value:4, name: 'Cancelled', colorCode: '#FFA50069', potential:"3",},
  ]

}
