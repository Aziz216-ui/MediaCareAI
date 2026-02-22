import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../services/auth.service';

@Component({
  selector: 'app-doctor-sidebar',
  templateUrl: './doctor-sidebar.component.html',
  styleUrls: ['./doctor-sidebar.component.scss']
})
export class DoctorSidebarComponent {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/front']);
  }

}
