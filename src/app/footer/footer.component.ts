import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(private router: Router) {}

  navigate(route: string) {
    switch (route) {
      case 'home':
        this.router.navigate(['/']);
        break;

      case 'about':
        this.router.navigate(['/about']);
        break;

      case 'contact':
        this.router.navigate(['/contact']);
        break;

      default:
        break;
    }
  }
}
