import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
@Injectable({
    providedIn: 'root',
})
export class IsAuthGuard implements CanActivate {
    constructor(private router: Router) {}
    canActivate(): Observable<boolean> {
        return new Observable((observer) => {
            let token = localStorage.getItem('token');
            if (!token) {
                observer.next(true);
            } else {
                this.router.navigateByUrl('/');
                observer.error(false);
                let timerInterval: any;
                Swal.fire({
                    title: `<h5 style='color:red'>you may not access the login page, because you are already logged in!</h5>`,
                    html: 'I will close in <b></b> milliseconds.',
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        const popup = Swal.getPopup();
                        if (popup !== null) {
                            Swal.showLoading();
                            const timer = popup.querySelector('b');

                            if (timer !== null) {
                                timerInterval = setInterval(() => {
                                    timer.textContent = `${Swal.getTimerLeft()}`;
                                }, 100);
                            } else {
                                console.error('Timer element is null.');
                            }
                        } else {
                            console.error('Popup is null.');
                        }
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    },
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log('I was closed by the timer');
                    }
                });
            }
        });
    }
}
