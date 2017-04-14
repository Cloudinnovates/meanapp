import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule, AppRoutingGuards } from './app-routing.module';

//3rd party
import { FlashMessagesModule } from 'angular2-flash-messages';
//Services
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FlashMessagesModule
  ],
  providers: [ ValidateService, AuthService, AppRoutingGuards ],
  bootstrap: [AppComponent]
})
export class AppModule { }
