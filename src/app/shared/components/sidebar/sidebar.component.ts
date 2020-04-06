import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

serviceOpen:boolean = false;

  constructor() { }


  toggleArrow() {
    this.serviceOpen = !this.serviceOpen;
  }


  ngOnInit() { }

}
