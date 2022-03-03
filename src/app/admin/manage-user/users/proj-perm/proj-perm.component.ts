import { Component, Inject, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-proj-perm',
  templateUrl: './proj-perm.component.html',
  styleUrls: ['./proj-perm.component.scss']
})
export class ProjPermComponent implements OnInit {
  public screens = [
  {"name":"Tata Motors Ltd.","value1":true,"value2":true,"value3":true,"value4":true},
  {"name":"Rajesh Exports Ltd","value1":true,"value2":true,"value3":true,"value4":true},
  {"name":"Indian Oil Corporation Ltd","value1":true,"value2":true,"value3":true,"value4":true},
  {"name":"NTPC Ltd","value1":true,"value2":true,"value3":true,"value4":true},
  {"name":"Vedanta Ltd","value1":true,"value2":true,"value3":true,"value4":true},
 
 
  {"name":"Grasim Industries Ltd.","value1":true,"value2":true,"value3":true,"value4":true}];
  constructor(private location:Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
  savePermissions()
  {
    
  }
}
