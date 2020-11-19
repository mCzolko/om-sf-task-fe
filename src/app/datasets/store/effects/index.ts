import { DatasetListEffect } from './dataset-list.effect'
export * from './dataset-list.effect'

import { DatasetMetadataEffect } from './dataset-metadata.effect'
export * from './dataset-metadata.effect'

import { DatasetDataEffect } from './dataset-data.effect'
export * from './dataset-data.effect'

export const effects: any[] = [
  DatasetListEffect,
  DatasetMetadataEffect,
  DatasetDataEffect
]
