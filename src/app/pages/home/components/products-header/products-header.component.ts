import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-header',
templateUrl: 'products-header.component.html',

})
export class ProductsHeaderComponent implements OnInit {
  sort = 'desc';
  itemsShowCount = 12;

  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdate(newSort: string): void {
    this.sort = newSort;
  }
  onItemUpdate(count: number): void{
    this.itemsShowCount = count;
  }

}
