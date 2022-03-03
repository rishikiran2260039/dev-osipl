import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/app.settings.model';

@Component({
  selector: 'app-inventory-analysis',
  templateUrl: './inventory-analysis.component.html',
  styleUrls: ['./inventory-analysis.component.scss']
})
export class InventoryAnalysisComponent implements OnInit {

  items: any;
  heading:any;
  filterToggle:boolean = false;
 

  A = [
    {length:"200 CM",width:"57 CM",height:"113 MM",partnumber:"B221000000122",partname:"Volvo",eqptmake:"Volvo", eqptmodel:"D-350", avgunitcost:300, availqty:30, totalvalue:9000, monthlyusage:40,class:"A"},
    {length:"100 CM",width:"47 CM",height:"63 MM", partnumber:"B229900003680",partname:"Caterpillar",eqptmake:"Caterpillar", eqptmodel:"CAT-DX", avgunitcost:250, availqty:50, totalvalue:12500, monthlyusage:35,class:"A"},
    {length:"120 CM",width:"44 CM",height:"99 MM", partnumber:"421-60-35170",partname:"Mercedes",eqptmake:"Tata Hitachi", eqptmodel:"T-4H", avgunitcost:350, availqty:45, totalvalue:15750, monthlyusage:40,class:"A"},
  ]

  B = [
    {length:"200 CM",width:"57 CM",height:"113 MM",partnumber:"B221000000123",partname:"Volvo",eqptmake:"Volvo", eqptmodel:"D-350", avgunitcost:400, availqty:35, totalvalue:14000, monthlyusage:40,class:"B"},
    {length:"100 CM",width:"47 CM",height:"63 MM", partnumber:"421-60-35171",partname:"Mercedes",eqptmake:"Tata Hitachi", eqptmodel:"T-4H", avgunitcost:450, availqty:40, totalvalue:18000, monthlyusage:50,class:"B"},
  ]

  C = [
    {length:"200 CM",width:"57 CM",height:"113 MM",brand:"Volvo",dimensions:"22*25*13",thickness:"30mm",partnumber:"PLY23001",partname:"Plywood Sheet",eqptmake:"Wood", eqptmodel:"Plywood", avgunitcost:"ft", availqty:502, totalvalue:156, monthlyusage:7832,class:"16",mtd:"25"},
    {length:"100 CM",width:"47 CM",height:"63 MM", brand:"Caterpiller",dimensions:"22*25*13",thickness:"30mm",partnumber:"PLY23003",partname:"Plumbing Pipes",eqptmake:"Pipes", eqptmodel:"Plastic Pipes", avgunitcost:"cubic/m", availqty:505, totalvalue:176, monthlyusage:7983,class:"15",mtd:"27"},
    {length:"120 CM",width:"44 CM",height:"99 MM", brand:"Kirlosker",dimensions:"22*25*13",thickness:"30mm",partnumber:"PLY23005",partname:"Coil wire",eqptmake:"Wire", eqptmodel:"Copper Wire", avgunitcost:"gauze", availqty:630, totalvalue:158, monthlyusage:7435,class:"12",mtd:"22"},
    
  ]

  X = [
    {length:"200 CM",width:"57 CM",height:"113 MM",partnumber:"B221000000122",partname:"Volvo",eqptmake:"Volvo", eqptmodel:"D-350", avgunitcost:300, availqty:30, totalvalue:9000, monthlyusage:40,class:"X"},
    {length:"100 CM",width:"47 CM",height:"63 MM", partnumber:"B229900003680",partname:"Caterpillar",eqptmake:"Caterpillar", eqptmodel:"CAT-DX", avgunitcost:250, availqty:50, totalvalue:12500, monthlyusage:35,class:"X"},
    {length:"120 CM",width:"44 CM",height:"99 MM", partnumber:"421-60-35170",partname:"Mercedes",eqptmake:"Tata Hitachi", eqptmodel:"T-4H", avgunitcost:350, availqty:45, totalvalue:15750, monthlyusage:40,class:"X"},
  ]

  Y = [
    {length:"200 CM",width:"57 CM",height:"113 MM",partnumber:"B221000000123",partname:"Volvo",eqptmake:"Volvo", eqptmodel:"D-350", avgunitcost:400, availqty:35, totalvalue:14000, monthlyusage:40,class:"Y"},
    {length:"100 CM",width:"47 CM",height:"63 MM", partnumber:"421-60-35171",partname:"Mercedes",eqptmake:"Tata Hitachi", eqptmodel:"T-4H", avgunitcost:450, availqty:40, totalvalue:18000, monthlyusage:50,class:"Y"},
  ]

  Z = [
    {length:"200 CM",width:"57 CM",height:"113 MM",partnumber:"421-60-35172",partname:"Tata",eqptmake:"Ashok Leyland", eqptmodel:"LA-D", avgunitcost:450, availqty:50, totalvalue:22500, monthlyusage:55,class:"Z"},
    {length:"100 CM",width:"47 CM",height:"63 MM", partnumber:"421-60-35170",partname:"Volvo",eqptmake:"Volvo", eqptmodel:"D-350", avgunitcost:300, availqty:30, totalvalue:9000, monthlyusage:25,class:"Z"},
    {length:"120 CM",width:"44 CM",height:"99 MM", partnumber:"B229900003680",partname:"Caterpillar",eqptmake:"Caterpillar", eqptmodel:"CAT-DX", avgunitcost:500, availqty:55, totalvalue:27500, monthlyusage:60,class:"Z"},
  ]

  //////previous code is below//////////
  
  // A = [
  //   {partNo:"B221000000122", model:"Excavator", store:"Hyundai Store", averagelUsage:30, unitCost:1100, annualUsage:33000, percentage:34.98, cummulativePercentage:34.98,class:"A"},
  //   {partNo:"B229900003680", model:"Bull Dozer", store:"Dumper Store", averagelUsage:10, unitCost:2800, annualUsage:28000, percentage:29.67, cummulativePercentage:64.65,class:"A"},
  //   {partNo:"421-60-35170", model:"Crain Eicher", store:"Benz Store", averagelUsage:45, unitCost:380, annualUsage:17100, percentage:18.13, cummulativePercentage:82.78,class:"A"},
  // ]

  // B = [
  //   {partNo:"VO 22075799", model:"Motor Grader", store:"Volvo Dumper Store", averagelUsage:12, unitCost:700, annualUsage:8400, percentage:8.98, cummulativePercentage:91.98,class:"B"},
  //   {partNo:"B229900003680", model:"Dump Trucks", store:"Construction Mat Store", averagelUsage:100, unitCost:28, annualUsage:2800, percentage:2.96, cummulativePercentage:91.65,class:"B"},
  // ]

  // C = [
  //   {partNo:"421-60-35170", model:"Excavator", store:"Hyundai Store", averagelUsage:30, unitCost:1100, annualUsage:33000, percentage:34.98, cummulativePercentage:34.98,class:"C"},
  //   {partNo:"B221000000122", model:"Bull Dozer", store:"Dumper Store", averagelUsage:10, unitCost:2800, annualUsage:28000, percentage:29.67, cummulativePercentage:64.65,class:"C"},
  //   {partNo:"B229900003680", model:"Crain Eicher", store:"Benz Store", averagelUsage:45, unitCost:380, annualUsage:17100, percentage:18.13, cummulativePercentage:82.78,class:"C"},
  // ]

  // X = [
  //   {partNo:"B221000000122", model:"Excavator", store:"GMMCO", averagelUsage:2, unitCost:23, annualUsage:1840, percentage:1.95,class:"X"},
  //   {partNo:"421-60-35170", model:"Crain Thyssen", store:"Benz Store", averagelUsage:80, unitCost:820, annualUsage:1640, percentage:1.74,class:"X"},
  //   {partNo:"VO 22075799", model:"Motor Grader", store:"Dumper Store", averagelUsage:13, unitCost:120, annualUsage:1560, percentage:1.67,class:"X"},
  // ]

  // Y = [
  //   {partNo:"VO 22075799", model:"Motor Grader", store:"Volvo Dumper Store", averagelUsage:12, unitCost:700, annualUsage:8400, percentage:8.98,class:"Y"},
  //   {partNo:"B229900003680", model:"Dump Trucks", store:"Construction Mat Store", averagelUsage:100, unitCost:28, annualUsage:2800, percentage:2.96,class:"Y"},
  // ]

  // Z = [
  //   {partNo:"B221000000122", model:"Excavator", store:"Hyundai Store", averagelUsage:30, unitCost:1100, annualUsage:33000, percentage:34.98, cummulativePercentage:34.98,class:"Z"},
  //   {partNo:"B229900003680", model:"Bull Dozer", store:"Dumper Store", averagelUsage:10, unitCost:2800, annualUsage:28000, percentage:29.67, cummulativePercentage:64.65,class:"Z"},
  //   {partNo:"421-60-35170", model:"Crain Eicher", store:"Benz Store", averagelUsage:45, unitCost:380, annualUsage:17100, percentage:18.13, cummulativePercentage:82.78,class:"Z"},
  // ]

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
 public settings: Settings;
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
    this.items = this.C;
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

