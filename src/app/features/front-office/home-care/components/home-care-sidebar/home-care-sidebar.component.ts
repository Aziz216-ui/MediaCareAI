import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../services/auth.service';

@Component({
    selector: 'app-home-care-sidebar',
    templateUrl: './home-care-sidebar.component.html',
    styleUrls: ['./home-care-sidebar.component.scss']
})
export class HomeCareSidebarComponent {

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    logout(): void {
        this.authService.logout();
        this.router.navigate(['/front']);
    }

}
