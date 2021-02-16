import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PatientsComponent } from './components/patients/patients.component';
import { AuthGuardService } from './core/guards/auth.guard';
import { AuthanticationService } from './core/services/authantication.service';
import { PatientComponent } from './components/patient/patient.component';
import { PatientsService } from './components/patients/service/patients.service';
import { FiltersComponent } from './ui/filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PatientsComponent,
    PatientComponent,
    FiltersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [AuthanticationService, AuthGuardService, PatientsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
