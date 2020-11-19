import { createSelector, createFeatureSelector } from '@ngrx/store'
import { DatasetsState } from '../reducers'
import * as fromDatasetList from '../reducers/dataset-list.reducer'

export const getDatasetsState = createFeatureSelector<DatasetsState>(
  'datasets'
)

export const getDatasetListState = createSelector(
  getDatasetsState,
  (state: DatasetsState) => state.datasetList
)

export const getDatasetList = createSelector(getDatasetListState, fromDatasetList.getDatasetList)
export const getDatasetListLoading = createSelector(getDatasetListState, fromDatasetList.getDatasetListLoading)
export const getDatasetListLoaded = createSelector(getDatasetListState, fromDatasetList.getDatasetListLoaded)
