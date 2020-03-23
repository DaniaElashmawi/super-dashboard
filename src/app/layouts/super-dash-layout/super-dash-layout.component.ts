import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-dash-layout',
  templateUrl: './super-dash-layout.component.html',
  styleUrls: ['./super-dash-layout.component.css']
})
export class SuperDashLayoutComponent implements OnInit {

  sidebarOpen = false;

  constructor() { }

  togglingSideBar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  ngOnInit() {
  }

}
