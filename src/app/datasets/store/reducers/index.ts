import { ActionReducerMap } from '@ngrx/store'

import * as fromDatasetList from './dataset-list.reducer'
import * as fromDatasetMetadata from './dataset-metadata.reducer'
import * as fromDatasetData from './dataset-data.reducer'

export interface DatasetsState {
  datasetList: fromDatasetList.DatasetListState,
  metadata: fromDatasetMetadata.DatasetMetadataState,
  data: fromDatasetData.DatasetDataState
}

export const reducers: ActionReducerMap<DatasetsState> = {
  datasetList: fromDatasetList.reducer,
  metadata: fromDatasetMetadata.reducer,
  data: fromDatasetData.reducer
}
