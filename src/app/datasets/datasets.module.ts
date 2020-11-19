import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

// containers
import { containers } from './containers'
// components
import { components } from './components'
// store
import { reducers, effects } from './store'

@NgModule({
  declarations: [
    ...containers,
    ...components
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('datasets', reducers),
    EffectsModule.forFeature(effects)
  ],
  exports: [
    ...containers,
    ...components
  ]
})
export class DatasetsModule { }
