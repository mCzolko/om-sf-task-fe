import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DatasetSelectComponent } from './dataset-select.component'
import { Subject } from 'rxjs'
import { By } from '@angular/platform-browser'

describe('DatasetSelectComponent', () => {
  let component: DatasetSelectComponent
  let fixture: ComponentFixture<DatasetSelectComponent>
  let datasets$

  beforeEach(async done => {
    await TestBed.configureTestingModule({
      declarations: [ DatasetSelectComponent ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(DatasetSelectComponent)
    component = fixture.componentInstance

    datasets$ = new Subject()
    component.datasets$ = datasets$

    fixture.detectChanges()
    await fixture.whenStable()

    done()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should display select with datasets', () => {
    datasets$.next(['one', 'two'])

    fixture.detectChanges()

    const options = fixture.debugElement.queryAll(By.css('.datasets-select option'))

    expect(options.length).toEqual(3)
  })

  it('should emit after selection in select', () => {
    datasets$.next(['one', 'two'])

    spyOn(component.selectChange, 'emit')

    fixture.detectChanges()

    const select = fixture.debugElement.query(By.css('.datasets-select')).nativeNode as HTMLSelectElement
    select.value = select.options[1].value
    select.dispatchEvent(new Event('change'))

    fixture.detectChanges()

    expect(component.selectChange.emit).toHaveBeenCalled()
    expect(component.selectChange.emit).toHaveBeenCalledWith('one')
  })
})
