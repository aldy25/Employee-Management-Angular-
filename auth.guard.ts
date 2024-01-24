import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}
    canActivate(): Observable<boolean> {
        return new Observable((observer) => {
            let token = localStorage.getItem('token');
            if (token) {
                observer.next(true);
            } else {
                this.router.navigateByUrl('/Login');
                observer.error(false);
            }
        });
    }
}
