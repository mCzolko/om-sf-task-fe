import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { provideMockActions } from '@ngrx/effects/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { Observable, of } from 'rxjs'

import { DatasetListEffect } from './dataset-list.effect'
import * as datasetListActions from '../actions/dataset-list.action'

describe('DatasetListEffect', () => {
  let actions$: Observable<any>
  let effects: DatasetListEffect
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DatasetListEffect,
        provideMockStore(),
        provideMockActions(() => actions$)
      ],
      imports: [ HttpClientTestingModule ]
    })

    httpTestingController = TestBed.inject(HttpTestingController)
    effects = TestBed.inject(DatasetListEffect)
  })

  afterEach(() => {
    httpTestingController.verify()
  })

  it('should be created', () => {
    expect(effects).toBeTruthy()
  })

  it(`should dispatch "${datasetListActions.LOAD_DATASET_LIST_SUCCESS}" when OK`, () => {
    const mockData = [ 'dataset-one', 'dataset-two' ]

    actions$ = of({ type: datasetListActions.LOAD_DATASET_LIST })
    effects.loadDatasetList$.subscribe(action => {
      expect(action.type).toEqual(datasetListActions.LOAD_DATASET_LIST_SUCCESS)
      expect(action.payload).toEqual(mockData)
    })

    httpTestingController
      .expectOne('http://localhost:8080/dataset')
      .flush(mockData)
  })

  it(`should dispatch "${datasetListActions.LOAD_DATASET_LIST_FAIL}" when ERROR`, () => {
    actions$ = of({ type: datasetListActions.LOAD_DATASET_LIST })
    effects.loadDatasetList$.subscribe(action => {
      expect(action.type).toEqual(datasetListActions.LOAD_DATASET_LIST_FAIL)
    })

    httpTestingController
      .expectOne('http://localhost:8080/dataset')
      .error(new ErrorEvent('just errored'))
  })

})
