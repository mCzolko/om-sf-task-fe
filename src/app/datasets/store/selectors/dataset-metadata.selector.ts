import { createSelector, createFeatureSelector } from '@ngrx/store'
import { DatasetsState } from '../reducers'
import * as fromDatasetMetadata from '../reducers/dataset-metadata.reducer'

export const getDatasetsState = createFeatureSelector<DatasetsState>(
  'datasets'
)

export const getDatasetMetadataState = createSelector(
  getDatasetsState,
  (state: DatasetsState) => state.metadata
)

export const getDatasetMetadata = createSelector(getDatasetMetadataState, fromDatasetMetadata.getDatasetMetadata)
export const getDatasetMetadataLoading = createSelector(getDatasetMetadataState, fromDatasetMetadata.getDatasetMetadataLoading)
export const getDatasetMetadataLoaded = createSelector(getDatasetMetadataState, fromDatasetMetadata.getDatasetMetadataLoaded)
export const getDatasetMetadataErrored = createSelector(getDatasetMetadataState, fromDatasetMetadata.getDatasetMetadataErrored)
