import { Injectable } from '@angular/core'
import { environment } from './../../environments/environment'

@Injectable()
export class DatasetsRestService {

  getDatasets() {
    return fetch(`${environment.restUrl}/getDatasets`)
      .then(response => response.json())
  }

  getMetadata(datasetId) {
    return fetch(`${environment.restUrl}/getMetadata/${datasetId}`)
      .then(response => response.json())
  }

}