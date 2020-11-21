import * as fromDatasetDataAction from './dataset-data.action'

describe('UpdateData action', () => {
  it('should accept payload', () => {
    const mockedPayload = []
    const action = new fromDatasetDataAction.UpdateData(mockedPayload)

    expect(action.payload).toEqual(mockedPayload)
  })

})
