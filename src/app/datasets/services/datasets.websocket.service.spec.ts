import { TestBed } from '@angular/core/testing'
import { DatasetDataUpdate } from '../models/dataset-data-update.model'
import { DatasetsWebsocketService } from './datasets.websocket.service'
import { StompClient } from './stomp-client.service'

describe('DatasetsWebsocketService', () => {
  let service: DatasetsWebsocketService
  let stompClientSpy

  beforeEach(() => {
    stompClientSpy = jasmine.createSpyObj('StompClient', [ 'connect', 'subscribe' ])

    TestBed.configureTestingModule({
      providers: [
        DatasetsWebsocketService,
        { provide: StompClient, useValue: stompClientSpy }
      ],
      imports: []
    })

    service = TestBed.inject(DatasetsWebsocketService)
  })

  it('should connect to update stream', () => {
    const testData: DatasetDataUpdate = {
      action: 'DATA_UPDATE',
      topic: 'testTopic',
      payload: []
    }
    stompClientSpy.subscribe.and.callFake((topic, data) => {
      const fakeResponse = { body: JSON.stringify(testData) }
      data(fakeResponse)
    })
    service.connectToUpdateStream().subscribe(data => {
      expect(data).toEqual(testData)
    })
  })

})
