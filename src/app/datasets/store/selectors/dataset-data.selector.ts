import { createSelector, createFeatureSelector } from '@ngrx/store'
import { DatasetsState } from '../reducers'
import * as fromDatasetMetadata from './dataset-metadata.selector'

const getDatasetsState = createFeatureSelector<DatasetsState>(
  'datasets'
)

export const getDatasetDataState = createSelector(
  getDatasetsState,
  (state: DatasetsState) => state.data
)

export const getDataByDataset = rootState => {
  // Get selected dataset and verify that it is selected otherwise return empty array
  const selectedDataset = fromDatasetMetadata.getDatasetMetadataSelected(rootState)

  if (!selectedDataset) {
    return []
  }

  // if we do have data for current dataset we will return them
  const datasetData = getDatasetDataState(rootState)

  if (datasetData[selectedDataset]) {
    return Object.values(datasetData[selectedDataset])
  }

  return []
}
