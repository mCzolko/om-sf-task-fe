import * as fromDatasetMetadata from '../actions/dataset-metadata.action'
import { DatasetMetadata } from '../../models/dataset-metadata.model'

export interface DatasetMetadataState {
  items: DatasetMetadata[],
  selected: string,
  loading: boolean,
  loaded: boolean,
  errored: boolean
}

export const initialState: DatasetMetadataState = {
  items: [],
  selected: null,
  loading: false,
  loaded: false,
  errored: false
}


export function reducer(
  state = initialState,
  action: fromDatasetMetadata.DatasetMetadataAction
): DatasetMetadataState {

  switch (action.type) {
    case fromDatasetMetadata.LOAD_DATASET_METADATA: {
      return {
        ...state,
        items: [],
        selected: action.datasetId,
        loading: true,
        errored: false
      }
    }

    case fromDatasetMetadata.LOAD_DATASET_METADATA_SUCCESS: {
      const items = action.payload
      return {
        ...state,
        loading: false,
        loaded: true,
        errored: false,
        items
      }
    }

    case fromDatasetMetadata.LOAD_DATASET_METADATA_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        errored: true
      }
    }

    default:
      return state
  }
}

export const getDatasetMetadataLoading = (state: DatasetMetadataState) => state.loading
export const getDatasetMetadataLoaded = (state: DatasetMetadataState) => state.loaded
export const getDatasetMetadataErrored = (state: DatasetMetadataState) => state.errored
export const getDatasetMetadataSelected = (state: DatasetMetadataState) => state.selected
export const getDatasetMetadata = (state: DatasetMetadataState) => state.items
