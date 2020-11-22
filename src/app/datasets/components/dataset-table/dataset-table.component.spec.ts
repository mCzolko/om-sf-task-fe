import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DatasetTableComponent } from './dataset-table.component'
import { AgGridModule } from 'ag-grid-angular'
import { Subject } from 'rxjs'

describe('DatasetTableComponent', () => {
  let component: DatasetTableComponent
  let fixture: ComponentFixture<DatasetTableComponent>
  let metadata$
  let data$
  let appElement

  beforeEach(async done => {
    TestBed.configureTestingModule({
      imports: [
        AgGridModule.withComponents([])
      ],
      declarations: [ DatasetTableComponent ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(DatasetTableComponent)

    component = fixture.componentInstance

    metadata$ = new Subject()
    data$ = new Subject()
    component.metadata$ = metadata$
    component.data$ = data$

    appElement = fixture.nativeElement

    fixture.detectChanges()
    await fixture.whenStable()

    done()
  })

  it('grid API is available', () => {
    expect(component.gridApi).toBeTruthy()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render table with data', async () => {
    metadata$.next({
      items: [
        {
          name: 'Column 1',
          field: 'column1'
        },
        {
          name: 'Column 2',
          field: 'column2'
        }
      ],
      selected: 'topic1',
      loading: false,
      loaded: true,
      errored: false
    })
    data$.next([
      {
        id: 1,
        column1: 'row1 value1',
        column2: 'row1 value2'
      },
      {
        id: 2,
        column1: 'row2 value1',
        column2: 'row2 value2'
      }
    ])
    fixture.detectChanges()

    await fixture.whenStable()

    const cellElements = appElement.querySelectorAll('.ag-cell-value')

    expect(cellElements.length).toEqual(4)
    expect(cellElements[0].textContent).toEqual('row1 value1')
    expect(cellElements[1].textContent).toEqual('row1 value2')
    expect(cellElements[2].textContent).toEqual('row2 value1')
    expect(cellElements[3].textContent).toEqual('row2 value2')
  })

  it('should render table with loading state when no metadata', () => {
    data$.next([])
    metadata$.next({
      items: [],
      selected: 'topic1',
      loading: true,
      loaded: false,
      errored: false
    })
    fixture.detectChanges()

    const cellElements = appElement.querySelectorAll('.ag-overlay-loading-center')

    expect(cellElements.length).toEqual(1)
  })
})
