import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import * as datasetListActions from '../actions/dataset-list.action'
import * as datasetDataActions from '../actions/dataset-data.action'
import { map, mergeMap } from 'rxjs/operators'
import { DatasetsWebsocketService } from '../../services/datasets.websocket.service'

@Injectable()
export class DatasetDataEffect {

  constructor(
    private actions$: Actions,
    private webSocketService: DatasetsWebsocketService
  ) {}

  liveData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(datasetListActions.LOAD_DATASET_LIST),
      mergeMap(() =>
        this.webSocketService.connectToUpdateStream().pipe(
          map(data => new datasetDataActions.UpdateData(data))
        )
      )
    )
  )

}
