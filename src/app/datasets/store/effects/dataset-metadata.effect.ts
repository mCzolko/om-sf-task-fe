import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import * as datasetMetadataActions from '../actions/dataset-metadata.action'
import { catchError, map, switchMap } from 'rxjs/operators'
import { DatasetsRestService, MetadataResponse } from '../../services/datasets.rest.service'
import { of } from 'rxjs'
import { DatasetMetadata } from '../../models/dataset-metadata.model'

@Injectable()
export class DatasetMetadataEffect {

  constructor(
    private actions$: Actions,
    private restService: DatasetsRestService
  ) {}

  private convertMetadataFromResponse(data: MetadataResponse): DatasetMetadata[] {
    return Object.keys(data).map(field => ({
      field,
      name: data[field]
    }))
  }

  loadDatasetMetadata$ = createEffect(() =>
    this.actions$.pipe(
      ofType(datasetMetadataActions.LOAD_DATASET_METADATA),
      switchMap(({ datasetId }) =>
        this.restService.getMetadata(datasetId)
          .pipe(
            map((metadata: MetadataResponse) =>
              new datasetMetadataActions.LoadDatasetMetadataSuccess(
                this.convertMetadataFromResponse(metadata)
              )
            ),
            catchError(error => of(new datasetMetadataActions.LoadDatasetMetadataFail(error)))
          )
        )
    )
  )

}
