import { Component, OnDestroy, OnInit } from '@angular/core';
import { IndexEmployeeService } from './index-employee.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-index-employee',
    templateUrl: './index-employee.component.html',
    styleUrls: ['./index-employee.component.css'],
})
export class IndexEmployeeComponent implements OnInit, OnDestroy {
    allEmployee: any = [];
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject<any>();
    constructor(
        private indexEmployeeService: IndexEmployeeService,
        private router: Router
    ) {}
    ngOnInit(): void {
        this.iniData();
    }
    iniData() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
        };
        this.allEmployee = [];
        this.dtTrigger = new Subject<any>();
        this.getEmployee();
    }
    ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
    }
    getEmployee(): void {
        this.indexEmployeeService.getAll().subscribe({
            next: (response) => {
                this.allEmployee = response;
                this.dtTrigger.next(null);
            },
            error: (error) => {
                console.log(error);
            },
        });
    }

    editItem(username: string) {
        Swal.fire({
            icon: 'success',
            title: 'succes',
            text: `edit the employee ${username} succesfull`,
            showConfirmButton: false,
            timer: 2000,
        });
    }

    deleteItem(id: any) {
        Swal.fire({
            title: 'Employee',
            text: `are you sure deleting this Employee ${id} ?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#072DD6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then((result) => {
            if (result.value) {
                this.indexEmployeeService.delete(id).subscribe({
                    next: () => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Succes',
                            text: 'the employee succes deleted',
                            showConfirmButton: false,
                            timer: 2000,
                        });
                        this.iniData();
                    },
                    error: () => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Failed',
                            text: 'deleting this employee failed',
                            showConfirmButton: false,
                            timer: 2000,
                        });
                    },
                });
            }
        });
    }

    detailItem(username: string) {
        this.router.navigate(['/Employee', username]);
    }
}
