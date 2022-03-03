import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-inventoryanalysis',
  templateUrl: './project-inventoryanalysis.component.html',
  styleUrls: ['./project-inventoryanalysis.component.scss']
})
export class ProjectInventoryanalysisComponent implements OnInit {

 
  items: any;
  heading:any;

 

  A = [
    {partnumber:"B221000000122",partname:"Volvo",eqptmake:"Volvo", eqptmodel:"D-350", avgunitcost:300, availqty:30, totalvalue:9000, monthlyusage:40,class:"A"},
    {partnumber:"B229900003680",partname:"Caterpillar",eqptmake:"Caterpillar", eqptmodel:"CAT-DX", avgunitcost:250, availqty:50, totalvalue:12500, monthlyusage:35,class:"A"},
    {partnumber:"421-60-35170",partname:"Mercedes",eqptmake:"Tata Hitachi", eqptmodel:"T-4H", avgunitcost:350, availqty:45, totalvalue:15750, monthlyusage:40,class:"A"},
  ]

  B = [
    {partnumber:"B221000000123",partname:"Volvo",eqptmake:"Volvo", eqptmodel:"D-350", avgunitcost:400, availqty:35, totalvalue:14000, monthlyusage:40,class:"B"},
    {partnumber:"421-60-35171",partname:"Mercedes",eqptmake:"Tata Hitachi", eqptmodel:"T-4H", avgunitcost:450, availqty:40, totalvalue:18000, monthlyusage:50,class:"B"},
  ]

  C = [
    {partnumber:"421-60-35172",partname:"Tata",eqptmake:"Ashok Leyland", eqptmodel:"LA-D", avgunitcost:450, availqty:50, totalvalue:22500, monthlyusage:55,class:"C"},
    {partnumber:"421-60-35170",partname:"Volvo",eqptmake:"Volvo", eqptmodel:"D-350", avgunitcost:300, availqty:30, totalvalue:9000, monthlyusage:25,class:"C"},
    {partnumber:"B229900003680",partname:"Caterpillar",eqptmake:"Caterpillar", eqptmodel:"CAT-DX", avgunitcost:500, availqty:55, totalvalue:27500, monthlyusage:60,class:"C"},
    
  ]

  X = [
    {partnumber:"B221000000122",partname:"Volvo",eqptmake:"Volvo", eqptmodel:"D-350", avgunitcost:300, availqty:30, totalvalue:9000, monthlyusage:40,class:"X"},
    {partnumber:"B229900003680",partname:"Caterpillar",eqptmake:"Caterpillar", eqptmodel:"CAT-DX", avgunitcost:250, availqty:50, totalvalue:12500, monthlyusage:35,class:"X"},
    {partnumber:"421-60-35170",partname:"Mercedes",eqptmake:"Tata Hitachi", eqptmodel:"T-4H", avgunitcost:350, availqty:45, totalvalue:15750, monthlyusage:40,class:"X"},
  ]

  Y = [
    {partnumber:"B221000000123",partname:"Volvo",eqptmake:"Volvo", eqptmodel:"D-350", avgunitcost:400, availqty:35, totalvalue:14000, monthlyusage:40,class:"Y"},
    {partnumber:"421-60-35171",partname:"Mercedes",eqptmake:"Tata Hitachi", eqptmodel:"T-4H", avgunitcost:450, availqty:40, totalvalue:18000, monthlyusage:50,class:"Y"},
  ]

  Z = [
    {partnumber:"421-60-35172",partname:"Tata",eqptmake:"Ashok Leyland", eqptmodel:"LA-D", avgunitcost:450, availqty:50, totalvalue:22500, monthlyusage:55,class:"Z"},
    {partnumber:"421-60-35170",partname:"Volvo",eqptmake:"Volvo", eqptmodel:"D-350", avgunitcost:300, availqty:30, totalvalue:9000, monthlyusage:25,class:"Z"},
    {partnumber:"B229900003680",partname:"Caterpillar",eqptmake:"Caterpillar", eqptmodel:"CAT-DX", avgunitcost:500, availqty:55, totalvalue:27500, monthlyusage:60,class:"Z"},
  ]


 public two: any[];
 public three: any[];
 public showLegend = true;
 public showLegends = false;
 public colorScheme = {
   domain: ['#2F3E9E', '#D22E2E', '#378D3B',]
 }; 

 public colorScheme2 = {
   domain: [ '#0096A6', '#F47B00', '#606060']
 }
 
 public showLabels = true;
 public explodeSlices = false;
 public doughnut = false;
 public gradient=true;

 constructor() {    
  const two = [
  {
    name: 'High Value Items',
    value: 65
  },
  {
    name: 'Medium Value Items',
    value: 25
  },
  {
    name: 'Low Value Items',
    value: 10
  },
 
];
const three = [
  {
    name: 'Fast Moving Items',
    value: 55
  },
  {
    name: 'Slow Moving Items',
    value: 35
  },
  {
    name: 'Moving Items',
    value: 10
  },
 
];
Object.assign(this, {two,three});  }

ngOnInit() {
  this.onSelect({name:"Fast Moving Items",value:0})
}

public onSelect(i) {
  if(i.name == "Fast Moving Items"){
    this.items = this.Z;
    this.heading = "Fast Moving Items";
  }
  else if(i.name == "Slow Moving Items"){
    this.items = this.Y;
    this.heading = "Slow Moving Items";
  }
  else if(i.name == "Moving Items"){
    this.items = this.X;
    this.heading = "Moving Items";
  }
  else if(i.name == "Low Value Items"){
    this.items = this.A;
    this.heading = "Low Value Items";
  }
  else if(i.name == "Medium Value Items"){
    this.items = this.B;
    this.heading = "Medium Value Items";
  }
  else{
    this.items = this.C;
    this.heading = "High Value Items";
  }
  console.log(i);
}

  //////previous code is below//////////

  // constructor() {    
  //   const two = [
  //   {
  //     name: 'List of High Value Items',
  //     value: 65
  //   },
  //   {
  //     name: 'List of Medium Value Items',
  //     value: 25
  //   },
  //   {
  //     name: 'List of Low Value Items',
  //     value: 10
  //   },
   
  // ];
  // const three = [
  //   {
  //     name: 'List of Fast Moving Items',
  //     value: 55
  //   },
  //   {
  //     name: 'List of Slow Moving Items',
  //     value: 35
  //   },
  //   {
  //     name: 'List of No Moving Items',
  //     value: 10
  //   },
   
  // ];
  // Object.assign(this, {two,three});  }

  // ngOnInit() {
  //   this.onSelect({name:"List of Fast Moving Items",value:0})
  // }

  // public onSelect(i) {
  //   if(i.name == "List of Fast Moving Items"){
  //     this.items = this.Z;
  //     this.heading = "List of Fast Moving Items";
  //   }
  //   else if(i.name == "List of Slow Moving Items"){
  //     this.items = this.Y;
  //     this.heading = "List of Slow Moving Items";
  //   }
  //   else if(i.name == "List of No Moving Items"){
  //     this.items = this.X;
  //     this.heading = "List of No Moving Items";
  //   }
  //   else if(i.name == "List of Low Value Items"){
  //     this.items = this.A;
  //     this.heading = "List of Low Value Items";
  //   }
  //   else if(i.name == "List of Medium Value Items"){
  //     this.items = this.B;
  //     this.heading = "List of Medium Value Items";
  //   }
  //   else{
  //     this.items = this.C;
  //     this.heading = "List of High Value Items";
  //   }
  //   console.log(i);
  // }

}
