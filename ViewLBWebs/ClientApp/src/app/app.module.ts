import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AccesComponent } from './acces/acces.component';
import { AccesAddComponent } from './acces/acces-add/acces-add.component';
import { AccesUpdateComponent } from './acces/acces-update/acces-update.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkColumnDef } from '@angular/cdk/table';
import { DemoMaterialModule } from './material-module';
import { MailComponent } from './mail/mail.component';
import { MailAddComponent } from './mail/mail-add/mail-add.component';
import { ClientsComponent } from './clients/clients.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AccesComponent,
    AccesAddComponent,
    AccesUpdateComponent,
    MailComponent,
    MailAddComponent,
    ClientsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'acces', component: AccesComponent },
      { path: 'add-acces', component: AccesAddComponent },
      { path: 'update-acces', component: AccesUpdateComponent },
      { path: 'mail', component: MailComponent },
      { path: 'mail-add', component: MailAddComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'login', component: LoginComponent },

    ]),
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [CdkColumnDef],
  bootstrap: [AppComponent]
})  
export class AppModule { }
