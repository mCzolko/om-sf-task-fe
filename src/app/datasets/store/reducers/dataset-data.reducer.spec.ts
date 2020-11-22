import * as fromActions from '../actions/dataset-data.action'
import * as fromReducer from './dataset-data.reducer'
import { DatasetDataUpdate } from '../../models/dataset-data-update.model'

describe('Store > Dataset > Data Reducer', () => {

  it('should transform data into state', () => {
    const { initialState } = fromReducer
    const updates: fromReducer.DataRow[] = [
      {
        id: 1,
        name: 'John',
      }, {
        id: 2,
        name: 'Joe'
      }
    ]
    const payload: DatasetDataUpdate = {
      action: 'data_update',
      topic: 'testtopic',
      payload: updates
    }
    const action = new fromActions.UpdateData(payload)
    const state = fromReducer.reducer(initialState, action)

    expect(state).toEqual({
      testtopic: {
        1: { id: 1, name: 'John' },
        2: { id: 2, name: 'Joe'}
      }
    })
  })
})
