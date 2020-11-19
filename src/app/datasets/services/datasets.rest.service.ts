import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs'
import { DatasetListItem } from '../models/dataset-list.model'

@Injectable({
  providedIn: 'root',
})
export class DatasetsRestService {

  constructor (private http: HttpClient) {}

  getDatasets(): Observable<DatasetListItem[]> {
    return this.http.get(`${environment.restUrl}/getDatasets`) as Observable<DatasetListItem[]>
  }

  getMetadata(datasetId) {
    return fetch(`${environment.restUrl}/getMetadata/${datasetId}`)
      .then(response => response.json())
  }

}
