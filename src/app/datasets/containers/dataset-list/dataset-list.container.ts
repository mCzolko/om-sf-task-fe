import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { DatasetListItem } from '../../models/dataset-list.model'
import * as fromStore from '../../store'

@Component({
  selector: 'datasetlist-container',
  templateUrl: './dataset-list.container.html',
})
export class DatasetListContainer implements OnInit {

  datasetList$: Observable<DatasetListItem[]>

  constructor(private store: Store<fromStore.DatasetsState>) {}

  ngOnInit() {
    this.datasetList$ = this.store.select(fromStore.selectors.getDatasetList)
    this.store.dispatch(new fromStore.LoadDatasetList())
  }

}
