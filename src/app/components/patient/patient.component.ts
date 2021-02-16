import { Component, Input, OnInit } from '@angular/core';
import { IPatient } from 'src/app/core/interfaces/patient.interace';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
  @Input() patient: IPatient;
  constructor() {}

  ngOnInit(): void {}
}
