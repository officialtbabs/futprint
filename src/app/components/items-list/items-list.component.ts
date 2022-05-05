import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items: string[] = ["One", "Two", "Three"];
  
  constructor() { }

  ngOnInit(): void {
  }

}
