import { Action } from '@ngrx/store'
import { DatasetMetadata } from '../../models/dataset-metadata.model'

// Load dataset metadata
export const LOAD_DATASET_METADATA = '[Datasets] Load Dataset Metadata'
export const LOAD_DATASET_METADATA_FAIL = '[Datasets] Load Dataset Metadata Fail'
export const LOAD_DATASET_METADATA_SUCCESS = '[Datasets] Load Dataset Metadata Success'


// Action creators
export class LoadDatasetMetadata implements Action {
  readonly type = LOAD_DATASET_METADATA
  constructor(public datasetId: string) {}
}

export class LoadDatasetMetadataFail implements Action {
  readonly type = LOAD_DATASET_METADATA_FAIL
  constructor(public payload: any) {}
}

export class LoadDatasetMetadataSuccess implements Action {
  readonly type = LOAD_DATASET_METADATA_SUCCESS
  constructor(public payload: DatasetMetadata[]) {}
}

// action types
export type DatasetMetadataAction = LoadDatasetMetadata | LoadDatasetMetadataFail | LoadDatasetMetadataSuccess
