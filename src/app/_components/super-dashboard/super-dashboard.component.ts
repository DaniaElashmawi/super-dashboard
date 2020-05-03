import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-super-dashboard',
  templateUrl: './super-dashboard.component.html',
  styleUrls: ['./super-dashboard.component.css']
})
export class SuperDashboardComponent implements OnInit {



  events: string[] = [];
  opened: boolean;



  constructor() { }

  ngOnInit() {
  }

}
