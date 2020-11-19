import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatasetListItem } from '../../models/dataset-list.model';

@Component({
  selector: 'dataset-select',
  templateUrl: './dataset-select.component.html',
  styleUrls: ['./dataset-select.component.css']
})
export class DatasetSelectComponent implements OnInit {

  @Input()
  datasets$: Observable<DatasetListItem[]>

  constructor() { }

  ngOnInit(): void {
  }

}
