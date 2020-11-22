import { TestBed } from '@angular/core/testing'
import { provideMockActions } from '@ngrx/effects/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { Observable, of } from 'rxjs'

import { DatasetDataEffect } from './dataset-data.effect'
import { DatasetsWebsocketService } from '../../services/datasets.websocket.service'
import * as datasetListActions from '../actions/dataset-list.action'
import * as datasetDataActions from '../actions/dataset-data.action'

describe('DatasetDataEffect', () => {
  let actions$: Observable<any>
  let effects: DatasetDataEffect
  let datasetsWebsocketServiceSpy

  beforeEach(() => {
    datasetsWebsocketServiceSpy = jasmine.createSpyObj('DatasetsWebsocketService', ['connectToUpdateStream'])

    TestBed.configureTestingModule({
      providers: [
        DatasetDataEffect,
        provideMockStore(),
        provideMockActions(() => actions$),
        { provide: DatasetsWebsocketService, useValue: datasetsWebsocketServiceSpy }
      ]
    })

    effects = TestBed.inject(DatasetDataEffect)
  })


  it(`should dispatch "${datasetDataActions.UPDATE_DATA}" when recieving data from WebSocket`, () => {
    const mockData = [ 'update' ]
    datasetsWebsocketServiceSpy.connectToUpdateStream.and.returnValue(of(mockData))

    actions$ = of({ type: datasetListActions.LOAD_DATASET_LIST })
    effects.liveData$.subscribe(action => {
      expect(action.type).toEqual(datasetDataActions.UPDATE_DATA)
    })
  })

})
