import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Observable } from 'rxjs'
import { DatasetListItem } from '../../models/dataset-list.model'

@Component({
  selector: 'app-dataset-select',
  templateUrl: './dataset-select.component.html',
  styleUrls: ['./dataset-select.component.css']
})
export class DatasetSelectComponent {

  @Input()
  datasets$: Observable<DatasetListItem[]>

  @Output()
  selectChange = new EventEmitter<string>()

  onOptionsSelected = (event: Event) => {
    // tslint:disable-next-line
    this.selectChange.emit(event.target['value'])
  }

}
