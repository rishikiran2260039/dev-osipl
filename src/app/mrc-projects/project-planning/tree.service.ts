import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TreeService {
  
  constructor(private http: HttpClient) { 
    
    this.treeData = {
      "data": [
        {
          "label": "Earth Work",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-clipboard cs-blue",
          "collapsedIcon": "fa fa-clipboard cs-blue",
          "selectable": false,
          "expanded": true,
          "children": [{
            "label": "Hydraulic Excavator",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-folder-open dark-blue",
            "collapsedIcon": "fa fa-folder dark-blue",
            "selectable": true,
            "expanded": true,
            // "children":[{
            //   "label": "Brief",
            //   "data": "Documents Folder",
            //   "expandedIcon": "fa fa-briefcase red",
            //   "collapsedIcon": "fa fa-briefcase red",
            //   "selectable": true,
            // }]
          },
          {
            "label": "Filling Available Excavated Earth",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-folder-open dark-blue",
            "collapsedIcon": "fa fa-folder dark-blue",
            "selectable": true,
            "expanded": false,
            // "children":[{
            //   "label": "Brief",
            //   "data": "Documents Folder",
            //   "expandedIcon": "fa fa-briefcase red",
            //   "collapsedIcon": "fa fa-briefcase red",
            //   "selectable": true,
            // }]
          },
          {
            "label": "Supplying and Filling Pinch",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-folder-open dark-blue",
            "collapsedIcon": "fa fa-folder dark-blue",
            "selectable": true,
            "expanded": false,
            // "children":[{
            //   "label": "Brief",
            //   "data": "Documents Folder",
            //   "expandedIcon": "fa fa-briefcase red",
            //   "collapsedIcon": "fa fa-briefcase red",
            //   "selectable": true,
            // }]
          },
          {
            "label": "Supplying Chemical Emulsion",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-folder-open dark-blue",
            "collapsedIcon": "fa fa-folder dark-blue",
            "selectable": true,
            "expanded": false,
            // "children":[{
            //   "label": "Brief",
            //   "data": "Documents Folder",
            //   "expandedIcon": "fa fa-briefcase red",
            //   "collapsedIcon": "fa fa-briefcase red",
            //   "selectable": true,
            // }]
          }
        ]
      },
      {
        "label": "Mechanical",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-clipboard cs-blue",
        "collapsedIcon": "fa fa-clipboard cs-blue",
        "selectable": false,
        "expanded": false,
        "children": [{
          "label": "Hydraulic Excavator",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-folder-open dark-blue",
          "collapsedIcon": "fa fa-folder dark-blue",
          "selectable": true,
          "expanded": false,
          // "children":[{
          //   "label": "Brief",
          //   "data": "Documents Folder",
          //   "expandedIcon": "fa fa-briefcase red",
          //   "collapsedIcon": "fa fa-briefcase red",
          //   "selectable": true,
          // }]
        },
        {
          "label": "Filling Available Excavated Earth",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-folder-open dark-blue",
          "collapsedIcon": "fa fa-folder dark-blue",
          "selectable": true,
          "expanded": false,
          // "children":[{
          //   "label": "Brief",
          //   "data": "Documents Folder",
          //   "expandedIcon": "fa fa-briefcase red",
          //   "collapsedIcon": "fa fa-briefcase red",
          //   "selectable": true,
          // }]
        },
        {
          "label": "Supplying and Filling Pinch",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-folder-open dark-blue",
          "collapsedIcon": "fa fa-folder dark-blue",
          "selectable": true,
          "expanded": false,
          // "children":[{
          //   "label": "Brief",
          //   "data": "Documents Folder",
          //   "expandedIcon": "fa fa-briefcase red",
          //   "collapsedIcon": "fa fa-briefcase red",
          //   "selectable": true,
          // }]
        },
        {
          "label": "Supplying Chemical Emulsion",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-folder-open dark-blue",
          "collapsedIcon": "fa fa-folder dark-blue",
          "selectable": true,
          "expanded": false,
          // "children":[{
          //   "label": "Brief",
          //   "data": "Documents Folder",
          //   "expandedIcon": "fa fa-briefcase red",
          //   "collapsedIcon": "fa fa-briefcase red",
          //   "selectable": true,
          // }]
        }
      ]
    },{
      "label": "Plumbing",
      "data": "Documents Folder",
      "expandedIcon": "fa fa-clipboard cs-blue",
      "collapsedIcon": "fa fa-clipboard cs-blue",
      "selectable": false,
      "expanded": false,
      "children": [{
        "label": "Hydraulic Excavator",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-folder-open dark-blue",
        "collapsedIcon": "fa fa-folder dark-blue",
        "selectable": true,
        "expanded": false,
        // "children":[{
        //   "label": "Brief",
        //   "data": "Documents Folder",
        //   "expandedIcon": "fa fa-briefcase red",
        //   "collapsedIcon": "fa fa-briefcase red",
        //   "selectable": true,
        // }]
      },
      {
        "label": "Filling Available Excavated Earth",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-folder-open dark-blue",
        "collapsedIcon": "fa fa-folder dark-blue",
        "selectable": true,
        "expanded": false,
        // "children":[{
        //   "label": "Brief",
        //   "data": "Documents Folder",
        //   "expandedIcon": "fa fa-briefcase red",
        //   "collapsedIcon": "fa fa-briefcase red",
        //   "selectable": true,
        // }]
      },
      {
        "label": "Supplying and Filling Pinch",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-folder-open dark-blue",
        "collapsedIcon": "fa fa-folder dark-blue",
        "selectable": true,
        "expanded": false,
        // "children":[{
        //   "label": "Brief",
        //   "data": "Documents Folder",
        //   "expandedIcon": "fa fa-briefcase red",
        //   "collapsedIcon": "fa fa-briefcase red",
        //   "selectable": true,
        // }]
      },
      {
        "label": "Supplying Chemical Emulsion",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-folder-open dark-blue",
        "collapsedIcon": "fa fa-folder dark-blue",
        "selectable": true,
        "expanded": false,
        // "children":[{
        //   "label": "Brief",
        //   "data": "Documents Folder",
        //   "expandedIcon": "fa fa-briefcase red",
        //   "collapsedIcon": "fa fa-briefcase red",
        //   "selectable": true,
        // }]
      }
    ]
  },{
    "label": "Electrical",
    "data": "Documents Folder",
    "expandedIcon": "fa fa-clipboard cs-blue",
    "collapsedIcon": "fa fa-clipboard cs-blue",
    "selectable": false,
    "expanded": false,
    "children": [{
      "label": "Hydraulic Excavator",
      "data": "Documents Folder",
      "expandedIcon": "fa fa-folder-open dark-blue",
      "collapsedIcon": "fa fa-folder dark-blue",
      "selectable": true,
      "expanded": false,
      // "children":[{
      //   "label": "Brief",
      //   "data": "Documents Folder",
      //   "expandedIcon": "fa fa-briefcase red",
      //   "collapsedIcon": "fa fa-briefcase red",
      //   "selectable": true,
      // }]
    },
    {
      "label": "Filling Available Excavated Earth",
      "data": "Documents Folder",
      "expandedIcon": "fa fa-folder-open dark-blue",
      "collapsedIcon": "fa fa-folder dark-blue",
      "selectable": true,
      "expanded": false,
      // "children":[{
      //   "label": "Brief",
      //   "data": "Documents Folder",
      //   "expandedIcon": "fa fa-briefcase red",
      //   "collapsedIcon": "fa fa-briefcase red",
      //   "selectable": true,
      // }]
    },
    {
      "label": "Supplying and Filling Pinch",
      "data": "Documents Folder",
      "expandedIcon": "fa fa-folder-open dark-blue",
      "collapsedIcon": "fa fa-folder dark-blue",
      "selectable": true,
      "expanded": false,
      // "children":[{
      //   "label": "Brief",
      //   "data": "Documents Folder",
      //   "expandedIcon": "fa fa-briefcase red",
      //   "collapsedIcon": "fa fa-briefcase red",
      //   "selectable": true,
      // }]
    },
    {
      "label": "Supplying Chemical Emulsion",
      "data": "Documents Folder",
      "expandedIcon": "fa fa-folder-open dark-blue",
      "collapsedIcon": "fa fa-folder dark-blue",
      "selectable": true,
      "expanded": false,
      // "children":[{
      //   "label": "Brief",
      //   "data": "Documents Folder",
      //   "expandedIcon": "fa fa-briefcase red",
      //   "collapsedIcon": "fa fa-briefcase red",
      //   "selectable": true,
      // }]
    }
  ]
},
]
}
}
treeData: any;

public getTreeJSON() {
  return this.treeData;
}
}
