/* istanbul ignore file */
import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment'
import { Stomp } from 'stompjs/lib/stomp'
// tslint:disable-next-line
const SockJS = window['SockJS'] // https://github.com/sockjs/sockjs-client/issues/519

@Injectable({
  providedIn: 'root'
})
export class StompClient {

  private client

  constructor() {
    const ws = new SockJS(environment.webSocketUrl)
    this.client = Stomp.over(ws)
  }

  connect(options, onConnect): void {
    this.client.connect(options, onConnect)
  }

  subscribe(topic, callback): void {
    this.client.subscribe(topic, callback)
  }

}
