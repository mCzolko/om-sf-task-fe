import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment'
import { Stomp } from 'stompjs/lib/stomp'
import { Observable } from 'rxjs'
import { DatasetDataUpdate } from '../models/dataset-data-update.model'
const { SockJS } = window // https://github.com/sockjs/sockjs-client/issues/519

@Injectable({
  providedIn: 'root'
})
export class DatasetsWebsocketService {

  public stompClient

  constructor() {
    const ws = new SockJS(environment.webSocketUrl)
    this.stompClient = Stomp.over(ws)
  }

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
