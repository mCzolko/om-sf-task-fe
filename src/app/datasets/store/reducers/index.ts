import { ActionReducerMap } from '@ngrx/store'

import * as fromDatasetList from './dataset-list.reducer'

export interface DatasetsState {
  datasetList: fromDatasetList.DatasetListState
}

export const reducers: ActionReducerMap<DatasetsState> = {
  datasetList: fromDatasetList.reducer
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