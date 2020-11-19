import { Action } from '@ngrx/store'
import { DatasetListItem } from '../../models/dataset-list.model'

// Load dataset list
export const LOAD_DATASET_LIST = '[Datasets] Load Dataset List'
export const LOAD_DATASET_LIST_FAIL = '[Datasets] Load Dataset List Fail'
export const LOAD_DATASET_LIST_SUCCESS = '[Datasets] Load Dataset List Success'


// Action creators
export class LoadDatasetList implements Action {
  readonly type = LOAD_DATASET_LIST
}

export class LoadDatasetListFail implements Action {
  readonly type = LOAD_DATASET_LIST_FAIL
  constructor(public payload: any) {}
}

export class LoadDatasetListSuccess implements Action {
  readonly type = LOAD_DATASET_LIST_SUCCESS
  constructor(public payload: DatasetListItem[]) {}
}

// action types
export type DatasetListAction = LoadDatasetList | LoadDatasetListFail | LoadDatasetListSuccess
