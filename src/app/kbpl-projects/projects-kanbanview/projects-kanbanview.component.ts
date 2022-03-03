import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-kanbanview',
  templateUrl: './projects-kanbanview.component.html',
  styleUrls: ['./projects-kanbanview.component.scss']
})
export class ProjectsKanbanviewComponent implements OnInit {

  draggedItem: any;
  
  localData: any[] = [
    { id:"kanban_table_1",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'Awarded', header: 'Awarded (2)', data : [{ id: 'kanban_item_1161', name: '5-35151', info: 'Updates: 5', colorCode: 'Green', percentage: 'Completion: 70%',campaign: '',projectcode:"Hydro One", actions: 'Schedule: 4 / 12',budget: 'Budget: 10 Lakhs',tasks:'Schedule: 2 / 5',duedate:'ETA: 17-08-19',updateddate:'Last Updated : 1 day ago', hex: '#FFFFFF',clientName:"Dhawal", material_consumption:"  Material Cost: 5 Lakhs",activity_cost:"Activity cost: 3 Lakhs",cost:"Cost: 12 Lakhs",colorcode1:"rgb(122 ,173, 22)",colorcode2:"rgb(165, 42, 42)",rep:"123",hand:"13/23",due:"6-Feb-2022",loc:"Bangalore"}, 
    { id:'kanban_item_1163', collapsed:false,name: 'Reference Plan',  info: 'Updates: 2', colorCode: 'Green', campaign: 'Delpark Homes | Dave',projectcode:"Mearns Aviations ", actions: 'Schedule: 8/10',budget: 'Budget: 8 Lakhs',tasks:'Schedule: 57/100',duedate:'ETA: 26-05-19',percentage: 'Completion: 94%', hex: '#FFFFFF',clientName:"Siva", material_consumption:"  Material Cost: 3 Lakhs",activity_cost:"Activity cost: 4 Lakhs",cost:"Cost: 7 Lakhs",updateddate:'Last Updated: 3 days ago',colorcode2:"rgb(122 ,173, 22)",colorcode1:"rgb(165, 42, 42)",rep:"123",hand:"13/23",due:"7-Feb-2022",loc:"Delhi"}]},
    { id:"kanban_table_2",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'Blueprint', header: 'Blueprint (1)', data : [{ id: 'kanban_item_1162', name: 'Topographic',  info: 'Updates: 7', colorCode: 'Red',percentage: 'Completion: 85%', campaign: 'Hydro One | Dave',projectcode:"DRL", actions: 'Schedule: 6/10',budget: 'Budget: 13 Lakhs',tasks:'Schedule: 59/100',duedate:'ETA: 19-03-20', hex: '#FFFFFF',clientName:"Navin" , material_consumption:"  Material Cost: 6 Lakhs",activity_cost:"Activity cost: 5.5 Lakhs",cost:"Cost: 13.8 Lakhs",updateddate:'Last Updated : 10 days ago',colorcode1:"rgb(122 ,173, 22)",colorcode2:"rgb(165, 42, 42)",rep:"113",hand:"11/23",due:"12-Feb-2022",loc:"Bangalore"}]},
    { id:"kanban_table_3", collapsed:false,style:{'background-color':'rgb(189, 215, 238)'}, stage:'Initiated', header: 'Initiated (1)', data : [{ id: 'kanban_item_1166', name: 'TRPR', info: 'Updates: 6', colorCode: 'Green',percentage: 'Completion: 75%', campaign: 'Sandbank | Dwayne',projectcode:"Sai Constructions", actions: 'Schedule: 9/10',budget: 'Budget: 11 Lakhs',tasks:'Schedule: 78/100',duedate:'ETA: 20-04-21', hex: '#FFFFFF',clientName:"Tharun", material_consumption:"  Material Cost: 5 Lakhs",activity_cost:"Activity cost: 4.8 Lakhs",cost:"Cost: 10 Lakhs",updateddate:'Last Updated : 1 day ago',colorcode2:"rgb(122 ,173, 22)",colorcode1:"rgb(165, 42, 42)",rep:"23",hand:"6/23",due:"1-Feb-2022",loc:"Hyderabad"}]},
    { id:"kanban_table_4", collapsed:false,style:{'background-color':'rgb(189, 215, 238)'}, stage:'Progress', header: 'Progress (1)', data : [{ id: 'kanban_item_1164', name: 'Survey',  info: 'Updates: 2', colorCode: 'Green',percentage: 'Completion: 88%', campaign: 'Valleymede | Dave',projectcode:"Siva Infra" , actions: 'Schedule: 7/10',budget: 'Budget: 16 Lakhs',tasks:'Schedule: 85/100',duedate:'ETA: 18-11-21', hex: '#FFFFFF',clientName:"Kalyan", material_consumption:" Material Cost: 8 Lakhs",activity_cost:"Activity cost: 7 Lakhs",cost:"Cost: 17 Lakhs",updateddate:'Last Updated : 1 month ago',colorcode1:"rgb(122 ,173, 22)",colorcode2:"rgb(165, 42, 42)",rep:"200",hand:"13/23",due:"2-Feb-2022",loc:"Bangalore"}]},
    { id:"kanban_table_5",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'Near Completion', header: 'Near Completion (1)', data : [{ id: 'kanban_item_1166', name: 'SRPR', info: 'Updates: 3', colorCode: 'Green',percentage: 'Completion: 80%', campaign: 'AECOM | Dwayne',projectcode:"Navin Estates", actions: 'Schedule: 9/10',budget: 'Budget: 8 Lakhs',tasks:'Schedule: 66/100',duedate:'ETA: 27-09-19', hex: '#FFFFFF',clientName:"Dheeraj", material_consumption:"  Material Cost: 4 Lakhs",activity_cost:"Activity cost: 3 Lakhs",cost:"Cost: 6 Lakhs",updateddate:'Last Updated : 2 month ago',colorcode2:"rgb(122 ,173, 22)",colorcode1:"rgb(165, 42, 42)",rep:"123",hand:"12/23",due:"6-Feb-2022",loc:"Hyderabad"}]},
    { id:"kanban_table_6", collapsed:false,style:{'background-color':'rgb(189, 215, 238)'}, stage:'Completed', header: 'Completed (0)', data : []},
    { id:"kanban_table_7",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'Cancelled', header: 'Cancelled (0)', data : []},
    { id:"kanban_table_8",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'On Hold', header: 'On Hold (0)', data : []},
    ];
  constructor() { }

  ngOnInit() {

  }

dragStart(event, item, sourceKanbanId) {
  this.draggedItem = item;
  this.draggedItem.kanbanId = sourceKanbanId;
}

drag(item) {
  document.getElementById(item.id).style.display = "none";
}

drop(event) {
  if (this.draggedItem && this.draggedItem.kanbanId && event.event.path[3]['id']) {
      this.moveItem(this.draggedItem, event.event.path[3]['id']);
      this.draggedItem = null;
  }
}

dragEnd(event, item) {
  document.getElementById(item.id).style.display = "table-row";
  this.draggedItem = null;
}

  moveItem(draggedItem, kanbanId) {
  for (let i = 0; i < this.localData.length; i++) {
    if (kanbanId === this.localData[i].id) {
      if (i % 2 === 0) {
        draggedItem.hex = "#FFFFFF";
      } else {
        draggedItem.hex = "#E0E0E0";
      }
      this.localData[i].data.push(draggedItem);
      this.localData[i].header = "";
      this.localData[i].header =
        this.localData[i].stage + " (" + this.localData[i].data.length + ")";
    }
    if (draggedItem.kanbanId === this.localData[i].id) {
      var temp = this.localData[i].data;
      for (let j = 0; j < temp.length; j++) {
        if (temp[j].id === draggedItem.id) {
          this.localData[i].data.splice(j, 1);
          this.localData[i].header = "";
          this.localData[i].header =
            this.localData[i].stage + " (" + this.localData[i].data.length + ")";
        }
      }
    }
  }
   }

changestatus(index){
  this.localData[index].collapsed=!this.localData[index].collapsed;
}
  scrollKanban(side) {
    var ele = document.getElementById('kanban-table-container');
    if (side == 'left')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
   }
}