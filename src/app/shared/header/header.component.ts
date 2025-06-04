import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isAuthenticated = false;

  constructor(private authService: AuthService) {
    this.authService.authState$.subscribe((state: boolean) => {
      this.isAuthenticated = state;
    });
  }

  logout() {
    this.authService.logout();
  }
} 