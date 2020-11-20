import { Component, Input } from '@angular/core'
import { Observable } from 'rxjs'
import { DatasetDataState } from '../../store/reducers/dataset-data.reducer'
import { DatasetMetadataState } from '../../store/reducers/dataset-metadata.reducer'

@Component({
  selector: 'dataset-table',
  templateUrl: './dataset-table.component.html',
  styleUrls: ['./dataset-table.component.css']
})
export class DatasetTableComponent {

  private gridApi
  columnDefs = []

  @Input()
  metadata$: Observable<DatasetMetadataState>

  @Input()
  data$: Observable<DatasetDataState>

  onGridReady(params) {
    this.gridApi = params.api
    
    this.metadata$.subscribe(metadata => {
      if (metadata.loading) {
        this.gridApi.showLoadingOverlay()
      } else {
        this.gridApi.hideOverlay()
        this.columnDefs = metadata.items.map(({ name: headerName, field }) => ({ headerName, field }))
      }
    })

    this.data$.subscribe(newRowData => params.api.setRowData(newRowData))
  }

}
