import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { DatasetDataUpdate } from '../models/dataset-data-update.model'
import { StompClient } from './stomp-client.service'

@Injectable({
  providedIn: 'root'
})
export class DatasetsWebsocketService {

  constructor(private stompClient: StompClient) {}

  connectToUpdateStream(): Observable<DatasetDataUpdate> {
    return new Observable(observer => {
      this.subscribe('/topic/datasets', update => {
        observer.next(update)
      })
    })
  }

  init() {
    return () => new Promise(resolve => this.stompClient.connect({}, resolve))
  }

  subscribe(topic, callback) {
    this.stompClient.subscribe(topic, ({ body, ...frame }) => {
      callback(JSON.parse(body), frame)
    })
  }

}
