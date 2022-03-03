import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material';

@Component({
  selector: 'app-complition',
  templateUrl: './complition.component.html',
  styleUrls: ['./complition.component.scss']
})
export class ComplitionComponent implements OnInit {

  constructor() { }

  color: ThemePalette = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;

  ngOnInit() {
  }

 

}
