import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Observable, Subscription } from 'rxjs'
import { DatasetDataState } from '../../store/reducers/dataset-data.reducer'
import { DatasetMetadataState } from '../../store/reducers/dataset-metadata.reducer'

@Component({
  selector: 'dataset-table',
  templateUrl: './dataset-table.component.html',
  styleUrls: ['./dataset-table.component.css']
})
export class DatasetTableComponent implements OnInit, OnDestroy {

  columnDefs = []

  private gridApi
  private metadataSubscription: Subscription
  private dataSubscription: Subscription

  @Input()
  metadata$: Observable<DatasetMetadataState>

  @Input()
  data$: Observable<DatasetDataState>

  ngOnInit(): void {
    this.dataSubscription = this.data$.subscribe(data => this.gridApi && this.gridApi.setRowData(data))

    this.metadataSubscription = this.metadata$.subscribe(metadata => {
      if (!this.gridApi) {
        return
      }
      if (metadata.loading) {
        this.gridApi.showLoadingOverlay()
      } else {
        this.gridApi.hideOverlay()
        this.columnDefs = metadata.items.map(({ name: headerName, field }) => ({
          headerName,
          field,
          cellRenderer: 'agAnimateShowChangeCellRenderer'
        }))
      }
    })
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe()
    this.metadataSubscription.unsubscribe()
  }

  onGridReady({ api }): void {
    this.gridApi = api
  }

  getRowNodeId(data): Number {
    return data.id
  }

}
