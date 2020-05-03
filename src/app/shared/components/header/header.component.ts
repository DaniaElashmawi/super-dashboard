import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import {AuthService} from '../../../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() toggleSideBar: EventEmitter<any> = new EventEmitter();

  toggleSidebar() {
this.toggleSideBar.emit();
  }

  constructor(private _authService: AuthService , private _router: Router) { }

  onLogOut() {
    this. _authService.logout();
    this._router.navigate(['']);
  }
  ngOnInit() {
  }

}
