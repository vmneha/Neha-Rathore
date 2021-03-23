import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WebComponent } from './web/web.component';
import { JavaComponent } from './java/java.component';
import { routingComponents, TechRoutingModule } from './tech-routing/tech-routing.module';
import { ProductComponent } from './product/product.component';
import { SortPipe } from './sort.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { EmployeeComponent } from './employee/employee.component';
import { CorejavaComponent } from './corejava/corejava.component';
import { AdvjavaComponent } from './advjava/advjava.component';
import { TempDrivenFormComponent } from './temp-driven-form/temp-driven-form.component';
import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NetComponent } from './net/net.component';
import { LoginComponent } from './login/login.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    WebComponent,
    JavaComponent,
    ProductComponent,
    SortPipe,
    FilterPipe,
    EmployeeComponent,
    CorejavaComponent,
    AdvjavaComponent,
    TempDrivenFormComponent,
    AngularComponent,
    JavascriptComponent,
    ModelDrivenComponent,
    FormBuilderComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NetComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, TechRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
