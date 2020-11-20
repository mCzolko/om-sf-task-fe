import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { DatasetListItem } from '../../models/dataset-list.model'
import * as fromStore from '../../store'
import { DatasetMetadataState } from '../../store/reducers/dataset-metadata.reducer'

@Component({
  selector: 'datasetlist-container',
  templateUrl: './dataset-list.container.html',
})
export class DatasetListContainer implements OnInit {

  datasetList$: Observable<DatasetListItem[]>
  datasetListErrored$: Observable<boolean>

  datasetMetadata$: Observable<DatasetMetadataState>

  datasetData$: Observable<any>

  selectedDatasetId: string

  constructor(private store: Store<fromStore.DatasetsState>) {}

  ngOnInit() {
    this.datasetList$ = this.store.select(fromStore.selectors.getDatasetList)
    this.datasetListErrored$ = this.store.select(fromStore.selectors.getDatasetListErrored)

    this.datasetMetadata$ = this.store.select(fromStore.selectors.getDatasetMetadataState)
    this.datasetData$ = this.store.select(fromStore.selectors.getDataByDataset)

    this.store.dispatch(new fromStore.LoadDatasetList())
  }

  onSelectChange(datasetId) {
    this.store.dispatch(new fromStore.LoadDatasetMetadata(datasetId))
  }

}
