import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Gender } from 'src/app/core/enums/gender.enum';
import { IFilter } from './interface/filter.interface';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Output() onSearchApplied: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('searchField') search: ElementRef;
  @ViewChild('gender') dropdown: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.onSearchApplied.emit({
      searchCriteria: '',
      dropdownCriteria: Gender.Male,
    });
  }
  onKeyUp(e): void {
    const criteria: IFilter = {
      searchCriteria: e.target.value,
      dropdownCriteria: this.dropdown.nativeElement.value,
    };
    this.onSearchApplied.emit(criteria);
  }
  changeGender(e): void {
    const criteria: IFilter = {
      searchCriteria: this.search.nativeElement.value,
      dropdownCriteria: e.target.value,
    };
    this.onSearchApplied.emit(criteria);
  }
}
