import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddEmployeeService } from './add-employee.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-add-employee',
    templateUrl: './add-employee.component.html',
    styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent implements OnInit {
    status = [
        {
            id: 1,
            ket: 'Permanent Employee',
        },
        {
            id: 2,
            ket: 'Contract Employee',
        },
    ];
    group = [
        {
            name: 'Front end',
        },
        {
            name: 'Back end',
        },
        {
            name: 'QA Enginer',
        },
        {
            name: 'Busines Analist',
        },
        {
            name: '.Net Developer',
        },
        {
            name: 'Java Developer',
        },
        {
            name: 'Angular Developer',
        },
        {
            name: 'UI/UX Design',
        },
        {
            name: 'Copy Writer',
        },
        {
            name: 'Office Boy',
        },
    ];
    formEmployee!: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private addEmployeeService: AddEmployeeService,
        private activateRout: ActivatedRoute
    ) {
        // this.formEmployee = this.validationForm();
        // console.log(this.formEmployee)
    }

    ngOnInit(): void {
        this.formEmployee = this.validationForm();
        let param = this.activateRout.snapshot.paramMap.get('id');
        console.log(param);
    }

    validationForm() {
        return this.formBuilder.group({
            Username: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(7),
                    Validators.maxLength(20),
                ]),
            ],
            FirstName: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.maxLength(100),
                    Validators.minLength(4),
                ]),
            ],
            LastName: [
                '',
                Validators.compose([
                    Validators.maxLength(100),
                    Validators.minLength(4),
                ]),
            ],
            Email: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.email,
                    Validators.maxLength(30),
                    Validators.minLength(15),
                ]),
            ],
            BirthDate: ['', Validators.required],
            BasicSalary: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.min(500000),
                    Validators.max(1000000000),
                ]),
            ],
            Status: ['', Validators.required],
            Group: ['', Validators.required],
            Description: ['', Validators.minLength(20)],
        });
    }

    onSubmit() {
        let value = this.formEmployee.getRawValue();
        let data = {
            username: value.Username,
            firstName: value.FirstName,
            lastName: value.LastName,
            email: value.Email,
            birthDate: value.BirthDate,
            basicSalary: value.BasicSalary,
            status: value.Status,
            group: value.Group,
            description: value.Description,
        };
        this.addEmployeeService.insert(JSON.stringify(data)).subscribe({
            next: () => {
                Swal.fire({
                    icon: 'success',
                    title: 'Succes',
                    text: 'Added New Employee Succesfull',
                }).then((result) => {
                    if (result.isConfirmed) {
                        location.reload();
                    }
                });
            },
            error: () => {
                Swal.fire({
                    icon: 'error',
                    title: 'Failed',
                    text: 'Added New Employee Failed',
                    showConfirmButton: false,
                    timer: 2000,
                });
            },
        });
    }
}
