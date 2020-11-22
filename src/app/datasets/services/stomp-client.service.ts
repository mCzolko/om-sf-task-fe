/* istanbul ignore file */
import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment'
import { Stomp } from 'stompjs/lib/stomp'
const SockJS = window.SockJS // https://github.com/sockjs/sockjs-client/issues/519

@Injectable({
  providedIn: 'root'
})
export class StompClient {

  private client

  constructor() {
    const ws = new SockJS(environment.webSocketUrl)
    this.client = Stomp.over(ws)
  }

  connect(options, onConnect) {
    this.client.connect(options, onConnect)
  }

  subscribe(topic, callback) {
    this.client.subscribe(topic, callback)
  }

}
