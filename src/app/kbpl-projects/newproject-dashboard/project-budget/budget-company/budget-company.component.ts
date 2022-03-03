import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-company',
  templateUrl: './budget-company.component.html',
  styleUrls: ['./budget-company.component.scss']
})
export class BudgetCompanyComponent implements OnInit {

  items = [
    {contractName: 'SRR Ltd', budget: '$ 100,000', task: 'Field', action: 'Field Design', planHours: '10', actualHours: '8', expenses: '$ 2,000', billed: '$ 50,000', paid: '$ 40,000'},
    {contractName: 'Raheja', budget: '$ 150,000', task: 'Quote', action: 'Project Setup', planHours: '15', actualHours: '12', expenses: '$ 3,000', billed: '$ 80,000', paid: '$ 70,000'},
    {contractName: "Dr. Reddy's", budget: '$ 200,000', task: 'Administration', action: 'Design Drafting', planHours: '20', actualHours: '16', expenses: '$ 4,000', billed: '$ 120,000', paid: '$ 100,000'},
    {contractName: 'Reva', budget: '$ 250,000', task: 'Management', action: 'Project Setup', planHours: '25', actualHours: '22', expenses: '$ 5,000', billed: '$ 150,000', paid: '$ 120,000'},
    {contractName: 'SFT Ltd', budget: '$ 300,000', task: 'Quality Control	', action: 'Field Design', planHours: '30', actualHours: '26', expenses: '$ 6,000', billed: '$ 200,000', paid: '$ 140,000'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
