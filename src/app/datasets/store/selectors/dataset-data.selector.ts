import { createSelector, createFeatureSelector } from '@ngrx/store'
import { DatasetsState } from '../reducers'
import * as fromDatasetData from '../reducers/dataset-data.reducer'
import * as fromDatasetMetadata from './dataset-metadata.selector'

const getDatasetsState = createFeatureSelector<DatasetsState>(
  'datasets'
)

export const getDatasetDataState = createSelector(
  getDatasetsState,
  (state: DatasetsState) => state.data
)

export const getDatasetData = createSelector(getDatasetDataState, fromDatasetData.getDatasetData)
export const getDataByDataset = (rootState: DatasetsState) => {
  // Get selected dataset and verify that it is selected otherwise return empty array
  const selectedDataset = fromDatasetMetadata.getDatasetMetadataSelected(rootState)

  if (!selectedDataset) {
    return []
  }

  // if we do have data for current dataset we will return them
  const datasetData = getDatasetData(rootState)

  if (datasetData[selectedDataset]) {
    return Object.values(datasetData[selectedDataset])
  }

  return []
}
