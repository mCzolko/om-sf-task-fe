import { Action } from '@ngrx/store'

// Load dataset list
export const UPDATE_DATA = '[Datasets] Update Data'


// Action creators
export class UpdateData implements Action {
  readonly type = UPDATE_DATA
  constructor(public payload: any) {}
}


// action types
export type DatasetDataAction = UpdateData
