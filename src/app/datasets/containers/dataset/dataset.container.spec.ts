import { ComponentFixture, TestBed } from '@angular/core/testing'
import { provideMockStore, MockStore } from '@ngrx/store/testing'
import { MemoizedSelector } from '@ngrx/store'
import { MockComponent } from 'ng-mocks'
import * as fromStore from '../../store'
import { DatasetContainerComponent } from './dataset.container'
import { DatasetMetadataState } from '../../store/reducers/dataset-metadata.reducer'
import { DatasetDataState } from '../../store/reducers/dataset-data.reducer'
import { DatasetTableComponent } from '../../components/dataset-table/dataset-table.component'
import { DatasetSelectComponent } from '../../components/dataset-select/dataset-select.component'
import { DatasetListItem } from '../../models/dataset-list.model'
import { DatasetListState } from '../../store/reducers/dataset-list.reducer'

describe('DatasetContainerComponent', () => {
  let component: DatasetContainerComponent
  let fixture: ComponentFixture<DatasetContainerComponent>
  let appElement
  let mockStore: MockStore
  let mockDatasetListSelector: MemoizedSelector<DatasetListState, DatasetListItem[]>
  let mockDatasetListErroredSelector: MemoizedSelector<DatasetListState, boolean>
  let mockDatasetMetadataSelector: MemoizedSelector<DatasetMetadataState, DatasetMetadataState>
  let mockDatasetMetadataSelected: MemoizedSelector<DatasetMetadataState, string>
  let mockDatasetDataSelector: MemoizedSelector<DatasetDataState, DatasetDataState>

  beforeEach(async done => {
    TestBed.configureTestingModule({
      declarations: [
        DatasetContainerComponent,
        MockComponent(DatasetTableComponent),
        MockComponent(DatasetSelectComponent)
      ],
      providers: [
        provideMockStore({}),
      ],
    })
    .compileComponents()

    fixture = TestBed.createComponent(DatasetContainerComponent)
    component = fixture.componentInstance

    mockStore = TestBed.inject(MockStore)
    mockDatasetListSelector = mockStore.overrideSelector(
      fromStore.selectors.getDatasetList,
      []
    )
    mockDatasetListErroredSelector = mockStore.overrideSelector(
      fromStore.selectors.getDatasetListErrored,
      false
    )
    mockDatasetMetadataSelector = mockStore.overrideSelector(
      fromStore.selectors.getDatasetMetadataState,
      {
        items: [],
        selected: 'test',
        loading: true,
        loaded: false,
        errored: false
      }
    )
    mockDatasetMetadataSelected = mockStore.overrideSelector(
      fromStore.selectors.getDatasetMetadataSelected,
      ''
    )
    mockDatasetDataSelector = mockStore.overrideSelector(
      fromStore.selectors.getDatasetDataState,
      {}
    )
    mockStore.refreshState()

    appElement = fixture.nativeElement

    fixture.detectChanges()
    await fixture.whenStable()

    done()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should display error when dataset list fetch failed', async () => {
    mockDatasetListErroredSelector.setResult(true)
    mockStore.refreshState()
    fixture.detectChanges()
    await fixture.whenStable()

    const cellElements = appElement.querySelectorAll('.list-error')
    expect(cellElements.length).toEqual(1)
  })
})
