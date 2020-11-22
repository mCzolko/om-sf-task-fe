import * as fromSelector from './dataset-data.selector'
import * as fromDatasetMetadata from '../reducers/dataset-metadata.reducer'

describe('Store > Dataset > Data Selector', () => {

  it('should return empty array if metadata dataset is not set', () => {
    const rootState = {
      datasets: {
        datasetList: null,
        metadata: fromDatasetMetadata.initialState,
        data: {}
      }
    }

    expect(fromSelector.getDataByDataset(rootState)).toEqual([])
  })

  it('should return empty array if data for "testtopic" are not present', () => {
    const rootState = {
      datasets: {
        datasetList: null,
        metadata: {
          ...fromDatasetMetadata.initialState,
          selected: 'testtopic'
        },
        data: {}
      }
    }

    expect(fromSelector.getDataByDataset(rootState)).toEqual([])
  })

  it('should return data if data for "testtopic" are present', () => {
    const rootState = {
      datasets: {
        datasetList: null,
        metadata: {
          ...fromDatasetMetadata.initialState,
          selected: 'testtopic'
        },
        data: {
          testtopic: {
            1: { id: 1, foo: 'bar' }
          }
        }
      }
    }

    expect(fromSelector.getDataByDataset(rootState)).toEqual([ { id: 1, foo: 'bar' } ])
  })

})
