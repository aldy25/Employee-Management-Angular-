import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './base-tamplate/navbar/navbar.component';
import { IndexEmployeeComponent } from './employee/index-employee/index-employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { DetailEmployeeComponent } from './employee/detail-employee/detail-employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './auth/not-found/not-found.component';
import { AuthGuard } from '../../auth.guard';
import { IsAuthGuard } from '../../isAuth.Guard';

const routes: Routes = [
    {
        path: '',
        component: NavbarComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'Home',
                component: HomeComponent,
            },
            {
                path: 'Employee',
                component: IndexEmployeeComponent,
            },
            {
                path: 'Employee/Add',
                component: AddEmployeeComponent,
            },
            {
                path: 'Employee/:username',
                component: DetailEmployeeComponent,
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'Home',
            },
        ],
    },
    {
        path: 'Login',
        component: LoginComponent,
        canActivate: [IsAuthGuard],
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
