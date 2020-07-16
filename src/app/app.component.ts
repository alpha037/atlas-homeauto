import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Atlas Homeauto';

  constructor(
    private router: Router,
    private userService: UserService,
    private auth: AuthService
  ) {
    window.onload = function () {
      window.scrollTo(0, 0);
    };

    this.auth.user$.subscribe((user) => {
      if (user) {
        this.userService.saveUser(user);
        this.router.navigate(['/master']);
      }
    });
  }
}
