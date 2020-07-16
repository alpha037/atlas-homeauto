import { Component, OnInit } from '@angular/core';

import { AppUser } from '../models/AppUser';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent implements OnInit {
  appUser: AppUser;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.appUser$.subscribe((appUser) => (this.appUser = appUser));
  }

  logout() {
    this.authService.logout();
  }
}
