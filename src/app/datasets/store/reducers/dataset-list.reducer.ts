import * as fromDatasetList from '../actions/dataset-list.action'
import { DatasetListItem } from '../../models/dataset-list.model'

export interface DatasetListState {
  items: DatasetListItem[],
  loading: boolean,
  loaded: boolean
}

export const initialState: DatasetListState = {
  items: [ 'test1', 'test2' ],
  loading: false,
  loaded: false
}


export function reducer(
  state = initialState,
  action: fromDatasetList.DatasetListAction
): DatasetListState {

  switch (action.type) {
    case fromDatasetList.LOAD_DATASET_LIST: {
      return {
        ...state,
        loading: true
      }
    }

    case fromDatasetList.LOAD_DATASET_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      }
    }

    case fromDatasetList.LOAD_DATASET_LIST_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      }
    }

    default:
      return state
  }
}

export const getDatasetListLoading = (state: DatasetListState) => state.loading
export const getDatasetListLoaded = (state: DatasetListState) => state.loaded
export const getDatasetList = (state: DatasetListState) => state.items
