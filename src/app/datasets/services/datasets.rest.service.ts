import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs'
import { DatasetListItem } from '../models/dataset-list.model'

export interface MetadataResponse {
  [key: string]: string
}

@Injectable({
  providedIn: 'root',
})
export class DatasetsRestService {

  constructor(private http: HttpClient) {}

  getDatasets(): Observable<DatasetListItem[]> {
    return this.http.get(`${environment.restUrl}/dataset`) as Observable<DatasetListItem[]>
  }

  getMetadata(datasetId): Observable<MetadataResponse> {
    return this.http.get(`${environment.restUrl}/dataset/${datasetId}/metadata`) as Observable<MetadataResponse>
  }

}
