import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import * as fromStore from '../../store'

@Component({
  selector: 'datasetlist-container',
  templateUrl: './datasetList.container.html',
})
export class DatasetListContainer implements OnInit {

  datasetList = []

  constructor(private store: Store<fromStore.DatasetsState>) {}

  ngOnInit() {
    this.store.select<any>(fromStore.selectors.getDatasetList).subscribe(items => {
      this.datasetList = items
    })
  }
}
