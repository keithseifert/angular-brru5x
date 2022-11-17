// this component was generated at the command line with ng generate component product-alerts
// it also added this new component to the app.module.ts file that describes all the components in an app

import { Component, Input } from '@angular/core'; // so we can pass a product in as input
import { Output, EventEmitter } from '@angular/core'; // so we can emit an event to the parent component
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  // this is how we say our input will consist of a product
  @Input() product!: Product;
  // emit an event
  @Output() notify = new EventEmitter();
}
