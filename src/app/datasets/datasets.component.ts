import { Component, OnInit } from '@angular/core'
import { DatasetsWebsocketService } from './datasets.websocket.service'
import { DatasetsRestService } from './datasets.rest.service'

@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.css']
})
export class DatasetsComponent implements OnInit {

  datasetsWebsocketService: DatasetsWebsocketService
  datasetsRestService: DatasetsRestService

  constructor(
    datasetsWebsocketService: DatasetsWebsocketService,
    datasetsRestService: DatasetsRestService
  ) {
    this.datasetsWebsocketService = datasetsWebsocketService
    this.datasetsRestService = datasetsRestService
  }

  datasetUpdate = data => {
    console.log(data)
  }


  ngOnInit(): void {
    this.datasetsRestService.getDatasets().then(response => console.log(response))
    this.datasetsRestService.getMetadata('contracts').then(response => console.log(response))
    // this.datasetsWebsocketService.subscribe('/topic/datasets', this.datasetUpdate)
  }

}
