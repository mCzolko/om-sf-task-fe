import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { DatasetListItem } from '../../models/dataset-list.model';

@Component({
  selector: 'dataset-select',
  templateUrl: './dataset-select.component.html',
  styleUrls: ['./dataset-select.component.css']
})
export class DatasetSelectComponent {

  @Input()
  datasets$: Observable<DatasetListItem[]>

  @Output()
  onSelectChange = new EventEmitter<string>()

  onOptionsSelected = (event: Event) => {
    this.onSelectChange.emit(event.target['value'])
  }

}
