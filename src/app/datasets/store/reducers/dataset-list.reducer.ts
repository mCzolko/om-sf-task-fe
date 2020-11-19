import * as fromDatasetList from '../actions/dataset-list.action'
import { DatasetListItem } from '../../models/dataset-list.model'

export interface DatasetListState {
  items: DatasetListItem[],
  loading: boolean,
  loaded: boolean,
  errored: boolean
}

export const initialState: DatasetListState = {
  items: [],
  loading: false,
  loaded: false,
  errored: false
}


export function reducer(
  state = initialState,
  action: fromDatasetList.DatasetListAction
): DatasetListState {

  switch (action.type) {
    case fromDatasetList.LOAD_DATASET_LIST: {
      return {
        ...state,
        loading: true,
        errored: false
      }
    }

    case fromDatasetList.LOAD_DATASET_LIST_SUCCESS: {
      const items = action.payload
      return {
        ...state,
        loading: false,
        loaded: true,
        errored: false,
        items
      }
    }

    case fromDatasetList.LOAD_DATASET_LIST_FAIL: {
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

export const getDatasetListLoading = (state: DatasetListState) => state.loading
export const getDatasetListLoaded = (state: DatasetListState) => state.loaded
export const getDatasetListErrored = (state: DatasetListState) => state.errored
export const getDatasetList = (state: DatasetListState) => state.items
