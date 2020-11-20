import { createSelector, createFeatureSelector } from '@ngrx/store'
import { DatasetsState } from '../reducers'
import * as fromDatasetData from '../reducers/dataset-data.reducer'

const getDatasetsState = createFeatureSelector<DatasetsState>(
  'datasets'
)

export const getDatasetDataState = createSelector(
  getDatasetsState,
  (state: DatasetsState) => state.data
)

export const getDatasetData = createSelector(getDatasetDataState, fromDatasetData.getDatasetData)
export const getDataByDatasetId = createSelector(
  getDatasetDataState,
  fromDatasetData.getDatasetData,
  (datasetData) => {
    if (datasetData['Dataset1']) {
      return Object.values(datasetData['Dataset1'])
    }
    return []
  }
)
