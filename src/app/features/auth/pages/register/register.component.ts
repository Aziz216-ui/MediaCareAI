import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: FormGroup;
  errorMessage: string = '';

  roles = [
    { value: 'ADMIN', label: 'Administrator' },
    { value: 'DOCTOR', label: 'Doctor' },
    { value: 'CLINIC', label: 'Clinic' },
    { value: 'PHARMACIST', label: 'Pharmacist' },
    { value: 'LABORATORY', label: 'Laboratory' },
    { value: 'NUTRITIONIST', label: 'Nutritionist' },
    { value: 'VISITOR', label: 'Visitor' },
    { value: 'PATIENT', label: 'Patient' },
    { value: 'HOME_CARE_PROVIDER', label: 'Home Care Provider' }
  ];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      birthDate: ['', Validators.required],
      role: ['PATIENT', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      terms: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { terms, ...payload } = this.registerForm.value;
      console.log('Sending registration payload:', payload);

      this.authService.register(payload).subscribe({
        next: (response) => {
          console.log('Registration successful! Response:', response);
          this.router.navigate(['/auth/login']);
        },
        error: (err) => {
          console.error('Registration failed error detail:', err);
          // Si le backend renvoie du texte/JSON direct, essayons de l'extraire
          let msg = 'Erreur lors de l\'inscription';
          if (err.error) {
            try {
              // Parfois err.error est un objet JSON stringifié quand responseType est text
              const parsed = JSON.parse(err.error);
              msg = parsed.message || msg;
            } catch (e) {
              msg = err.error || msg;
            }
          }
          this.errorMessage = msg;
        }
      });
    } else {
      console.warn('Register form is invalid:', this.registerForm.value);
    }
  }
}
