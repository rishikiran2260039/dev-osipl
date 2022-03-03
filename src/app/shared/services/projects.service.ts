import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  projectList =  [
    { item_id: 1, item_text: 'Raheja' },
    { item_id: 2, item_text: 'Dr.Reddys' },
    { item_id: 3, item_text: 'Reva Group' },
    { item_id: 4, item_text: 'Usha International' },
    { item_id: 5, item_text: 'Godrej' },
  ];
}
