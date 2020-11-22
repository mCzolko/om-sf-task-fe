import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Observable, Subscription, combineLatest } from 'rxjs'
import { DataRow } from '../../store/reducers/dataset-data.reducer'
import { DatasetMetadataState } from '../../store/reducers/dataset-metadata.reducer'

@Component({
  selector: 'app-dataset-table',
  templateUrl: './dataset-table.component.html',
  styleUrls: ['./dataset-table.component.css']
})
export class DatasetTableComponent implements OnInit, OnDestroy {

  columnDefs = []

  gridApi
  private tableDataSubscription: Subscription

  @Input()
  metadata$: Observable<DatasetMetadataState>

  @Input()
  data$: Observable<DataRow[]>

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.tableDataSubscription.unsubscribe()
  }

  onGridReady({ api }): void {
    this.gridApi = api

    this.tableDataSubscription = combineLatest([this.metadata$, this.data$]).subscribe(([ metadata, data ]) => {
      if (data) {
        this.gridApi.setRowData(data)
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

  getRowNodeId(data): number {
    return data.id
  }

}
