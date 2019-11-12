import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { CalculationComponent } from './calculation/calculation.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
    {path: '', redirectTo: '/Home', pathMatch: 'full'},
    {path:'Calculation', component: CalculationComponent},
    {path:'Employee', component: EmployeeComponent},
    {path: 'Forms', component: FormsComponent},
    {path: 'Home', component: HomeComponent},
    {path: 'Student', component: StudentComponent},
    {path: 'Testing', component: TestComponent},
    {path: '**', component: HomeComponent}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}