import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes  } from '@angular/router';
import { WebComponent } from "src/app/web/web.component";
import { JavaComponent } from "src/app/java/java.component";
import { CustomerComponent } from '../customer/customer.component';
import { ProductComponent } from '../product/product.component';
import { EmployeeComponent } from '../employee/employee.component';
import { AdvjavaComponent } from '../advjava/advjava.component';
import { AngularComponent } from '../angular/angular.component';
import { JavascriptComponent } from '../javascript/javascript.component';
import { CorejavaComponent } from '../corejava/corejava.component';
import { ModelDrivenComponent } from '../model-driven/model-driven.component';
import { FormBuilderComponent } from '../form-builder/form-builder.component';
import { HomeComponent } from '../home/home.component';
import { NetComponent } from '../net/net.component';
import { LoginComponent } from '../login/login.component';

//const routes: Routes = [
//  { path: 'product', component: ProductComponent },
//  { path: 'employee', component: EmployeeComponent }
//]

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
     { path: 'product', component: ProductComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'web', component: WebComponent,

    children: [
      { path: 'javascript', component: JavascriptComponent },
      { path: 'angular', component: AngularComponent },
    ]
  },
  {
    path: 'java', component: JavaComponent,
    children: [
      { path: 'corejava', component: CorejavaComponent },
      { path: 'advjava', component: AdvjavaComponent },
      { path: 'net', component: NetComponent },
    ]
  },
  { path: 'model-driven', component: ModelDrivenComponent },
  { path: 'form-driven', component: FormBuilderComponent },
  { path: 'home', component: HomeComponent }
 

]         
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class TechRoutingModule { }
//export const routingComponents = [ProductComponent, EmployeeComponent,]
export const routingComponents = [ProductComponent, EmployeeComponent,WebComponent, JavaComponent, CorejavaComponent,AdvjavaComponent,AngularComponent,JavascriptComponent]
