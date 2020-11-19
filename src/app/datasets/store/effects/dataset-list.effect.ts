import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import * as datasetListActions from '../actions/dataset-list.action'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { DatasetsRestService } from '../../services/datasets.rest.service'
import { of } from 'rxjs'

@Injectable()
export class DatasetListEffect {

  constructor(
    private actions$: Actions,
    private restService: DatasetsRestService
  ) {}

  loadDatasetList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(datasetListActions.LOAD_DATASET_LIST),
      mergeMap(() =>
        this.restService.getDatasets()
          .pipe(
            map(items => new datasetListActions.LoadDatasetListSuccess(items)),
            catchError(error => of(new datasetListActions.LoadDatasetListFail(error)))
          )
      )
    )
  )

}
