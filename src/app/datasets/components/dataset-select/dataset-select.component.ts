import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dataset-select',
  templateUrl: './dataset-select.component.html',
  styleUrls: ['./dataset-select.component.css']
})
export class DatasetSelectComponent implements OnInit {

  @Input()
  datasets = []

  constructor() { }

  ngOnInit(): void {
  }

}
