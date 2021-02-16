import { IFilter } from './../../../ui/filters/interface/filter.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Gender } from 'src/app/core/enums/gender.enum';
import { IPatient } from 'src/app/core/interfaces/patient.interace';
import { map } from 'rxjs/operators';

Injectable({
  providedIn: 'root',
});

export class PatientsService {
  private data: IPatient[] = [
    {
      name: 'paul butler',
      gender: Gender.Male,
      birthday: 475500109000,
    },
    {
      name: 'test test',
      gender: Gender.Female,
      birthday: 475500109000,
    },
    {
      name: 'test 2',
      gender: Gender.Male,
      birthday: 475500109000,
    },
  ];
  private subject: BehaviorSubject<IPatient[]> = new BehaviorSubject<
    IPatient[]
  >(this.data);

  getAll(): Observable<IPatient[]> {
    return this.subject.asObservable();
  }
  filterPatients(search: IFilter): Observable<IPatient[]> {
    return this.subject.asObservable().pipe(
      map((movies: IPatient[]) => {
        return this.data.filter(
          (patient) =>
            patient.name.startsWith(search.searchCriteria) &&
            patient.gender === search.dropdownCriteria
        );
      })
    );
  }
}
