import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm:FormGroup;

    constructor(private fb: FormBuilder) {
        this.registerForm = this.fb.group({
            email: this.fb.control('', [Validators.required, Validators.email]),
            password: this.fb.control('', [Validators.required, Validators.minLength(5)]),
            confirmPassword: this.fb.control('', [Validators.required, Validators.minLength(5)]),
            terms: this.fb.control(false, [Validators.requiredTrue])
        });
    }

  register() {
    console.log(this.registerForm.value);
  }



}
