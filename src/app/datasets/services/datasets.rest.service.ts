import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs'
import { DatasetListItem } from '../models/dataset-list.model'
import { DatasetMetadata } from '../models/dataset-metadata.model'

@Injectable({
  providedIn: 'root',
})
export class DatasetsRestService {

  constructor (private http: HttpClient) {}

  getDatasets(): Observable<DatasetListItem[]> {
    return this.http.get(`${environment.restUrl}/getDatasets`) as Observable<DatasetListItem[]>
  }

  getMetadata(datasetId): Observable<DatasetMetadata[]> {
    return this.http.get(`${environment.restUrl}/getMetadata/${datasetId}`) as Observable<DatasetMetadata[]>
  }

}
