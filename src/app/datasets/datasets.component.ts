import { Component, OnInit } from '@angular/core'
import { Stomp } from 'stompjs/lib/stomp'
const SockJS = window['SockJS']

@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.css']
})
export class DatasetsComponent implements OnInit {

  public stompClient
  public msg = []

  constructor() {
    this.initializeWebSocketConnection()
  }

  initializeWebSocketConnection() {
    const serverUrl = 'http://localhost:8080/ws'
    // const serverUrl = 'http://om-sf-task-be.herokuapp.com/ws'
    const ws = new SockJS(serverUrl)
    this.stompClient = Stomp.over(ws)
    this.stompClient.connect({}, this.onStompConnected)
  }

  onStompConnected = () => {
    this.stompClient.subscribe('/topic/datasets', (message) => {
      if (message.body) {
        this.msg.push(message.body)
        console.log(JSON.parse(message.body))
      }
    })
  }

  ngOnInit(): void {
  }

}
