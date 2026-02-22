import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../services/auth.service';

@Component({
    selector: 'app-laboratory-sidebar',
    templateUrl: './laboratory-sidebar.component.html',
    styleUrls: ['./laboratory-sidebar.component.scss']
})
export class LaboratorySidebarComponent {

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    logout() {
        this.authService.logout();
        this.router.navigate(['/front']);
    }

}
