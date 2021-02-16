import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPatient } from 'src/app/core/interfaces/patient.interace';
import { IFilter } from 'src/app/ui/filters/interface/filter.interface';
import { PatientsService } from './service/patients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit {
  patients: Observable<IPatient[]>;
  constructor(private patientsService: PatientsService) {}

  ngOnInit(): void {
    this.patients = this.patientsService.getAll();
  }
  search(criteria: IFilter): void {
    this.patients = this.patientsService.filterPatients(criteria);
  }
}
