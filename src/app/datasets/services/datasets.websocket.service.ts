import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment'
import { Stomp } from 'stompjs/lib/stomp'
const SockJS = window['SockJS']

@Injectable()
export class DatasetsWebsocketService {

  public isConnected = false
  public stompClient
  private pendingSubscribers = []

  constructor() {
    this.initializeWebSocketConnection()
  }

  private initializeWebSocketConnection() {
    const ws = new SockJS(environment.webSocketUrl)
    this.stompClient = Stomp.over(ws)
    this.stompClient.connect({}, this.onStompConnected)
  }

  onStompConnected = () => {
    this.isConnected = true

    this.pendingSubscribers.forEach(([ topic, callback ]) =>
      this.subscribeInternal(topic, callback)
    )
    this.pendingSubscribers = []
  }

  subscribe(topic, callback) {
    if (this.isConnected) {
      this.subscribeInternal(topic, callback)
    } else {
      this.pendingSubscribers.push([ topic, callback ])
    }
  }

  subscribeInternal(topic, callback) {
    this.stompClient.subscribe(topic, ({ body, ...frame }) => {
      callback(JSON.parse(body), frame)
    })
  }

}