import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { provideMockActions } from '@ngrx/effects/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { Observable, of } from 'rxjs'

import { DatasetMetadataEffect } from './dataset-metadata.effect'
import * as datasetMetadataActions from '../actions/dataset-metadata.action'

describe('DatasetListEffect', () => {
  const datasetId = 'contract'
  let actions$: Observable<any>
  let effects: DatasetMetadataEffect
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DatasetMetadataEffect,
        provideMockStore(),
        provideMockActions(() => actions$)
      ],
      imports: [ HttpClientTestingModule ]
    })

    httpTestingController = TestBed.inject(HttpTestingController)
    effects = TestBed.inject(DatasetMetadataEffect)
  })

  afterEach(() => {
    httpTestingController.verify()
  })

  it('should be created', () => {
    expect(effects).toBeTruthy()
  })

  it(`should dispatch "${datasetMetadataActions.LOAD_DATASET_METADATA_SUCCESS}" when OK`, () => {
    const responseData = {
      id: 'ID',
      name: 'Fistname',
      surname: 'Lastname'
    }
    const expectData = [
      { field: 'id', name: 'ID' },
      { field: 'name', name: 'Fistname' },
      { field: 'surname', name: 'Lastname'}
    ]

    actions$ = of(new datasetMetadataActions.LoadDatasetMetadata(datasetId))
    effects.loadDatasetMetadata$.subscribe(action => {
      expect(action.type).toEqual(datasetMetadataActions.LOAD_DATASET_METADATA_SUCCESS)
      expect(action.payload).toEqual(expectData)
    })

    httpTestingController
      .expectOne(`http://localhost:8080/dataset/${datasetId}/metadata`)
      .flush(responseData)
  })

  it(`should dispatch "${datasetMetadataActions.LOAD_DATASET_METADATA_FAIL}" when ERROR`, () => {
    actions$ = of(new datasetMetadataActions.LoadDatasetMetadata(datasetId))
    effects.loadDatasetMetadata$.subscribe(action => {
      expect(action.type).toEqual(datasetMetadataActions.LOAD_DATASET_METADATA_FAIL)
    })

    httpTestingController
      .expectOne(`http://localhost:8080/dataset/${datasetId}/metadata`)
      .error(new ErrorEvent('just errored'))
  })

})
