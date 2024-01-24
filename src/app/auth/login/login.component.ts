import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
    formLogin!: FormGroup;
    constructor(private formBuilder: FormBuilder, private router: Router) {
        // this.formEmployee = this.validationForm();
        // console.log(this.formEmployee)
    }
    ngOnInit(): void {
        this.formLogin = this.validationForm();
    }

    validationForm() {
        return this.formBuilder.group({
            Username: ['', Validators.required],
            Password: ['', Validators.required],
        });
    }
    onSubmit() {
        let value = this.formLogin.getRawValue();
        if (value.Username === 'Aldy250401' && value.Password === 'Indocyber') {
            localStorage.setItem('token', 'token');
            Swal.fire({
                icon: 'success',
                title: 'Succes',
                text: 'Login Succesfull',
            }).then((result) => {
                if (result.isConfirmed) {
                    setTimeout(() => {
                        this.router.navigateByUrl('/');
                    }, 300);
                }
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Failed',
                text: 'Password or Email is incorrect',
                showConfirmButton: false,
                timer: 2000,
            });
        }
    }
}
