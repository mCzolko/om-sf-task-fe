import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'

// containers
import { containers } from './containers'
// components
import { components } from './components'
// store
import { reducers } from './store'

@NgModule({
  declarations: [
    ...containers,
    ...components
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('datasets', reducers)
  ],
  exports: [
    ...containers,
    ...components
  ]
})
export class DatasetsModule { }
