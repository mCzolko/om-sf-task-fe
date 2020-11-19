import { ActionReducerMap } from '@ngrx/store'

import * as fromDatasetList from './dataset-list.reducer'
import * as fromDatasetMetadata from './dataset-metadata.reducer'

export interface DatasetsState {
  datasetList: fromDatasetList.DatasetListState,
  metadata: fromDatasetMetadata.DatasetMetadataState
}

export const reducers: ActionReducerMap<DatasetsState> = {
  datasetList: fromDatasetList.reducer,
  metadata: fromDatasetMetadata.reducer
}

/*
import { createReducer, on } from '@ngrx/store'
// import { updateData, selectDataset } from './datasets.actions'
 
type DatasetListItem = string 

type DatasetMetadataItem = {
  name: string
  field: string
}

type DatasetMetadata = Record<DatasetListItem, DatasetMetadataItem[]>

type DatasetItemValue = number | string 
type DatasetItem = Record<string, DatasetItemValue>
type DatasetData = Record<DatasetListItem, DatasetItem[]>

interface DatasetsState {
  topics: DatasetListItem[],
  metadata: DatasetMetadata,
  data: DatasetData
}

export const initialState: DatasetsState = {
  topics: [],
  metadata: {},
  data: {}
}

export const datasetsReducer = createReducer(
  initialState
)
*/