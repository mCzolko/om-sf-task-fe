import * as fromDatasetData from '../actions/dataset-data.action'
import { DatasetDataUpdate } from '../../models/dataset-data-update.model'

type DataRow = {
  id: number,
  [key: string]: string|number
}

export interface DatasetDataState {
  [key: string]: {
    [key: number]: DataRow
  }
}

export const initialState: DatasetDataState = {}


export function reducer(
  state = initialState,
  action: fromDatasetData.DatasetDataAction
): DatasetDataState {

  switch (action.type) {
    case fromDatasetData.UPDATE_DATA: {
      const update: DatasetDataUpdate = action.payload
      const data = update.payload.reduce((acc, item: DataRow) => ({
        ...acc,
        [item.id]: {
          ...item,
          id: item.id,
        }
      }), state[update.topic.toLowerCase()])

      return {
        ...state,
        [update.topic.toLowerCase()]: data
      } as DatasetDataState
    }

    default:
      return state
  }
}

export const getDatasetData = (state: DatasetDataState) => state
