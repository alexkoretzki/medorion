import { Gender } from '../enums/gender.enum';

export interface IPatient {
  name: string;
  gender: Gender;
  birthday: number;
}
