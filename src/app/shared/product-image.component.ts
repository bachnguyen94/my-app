import {
    Component,
    Input,
    HostBinding
} from '@angular/core';

import { Product } from './../models/product.model';

@Component({
    selector: 'app-product-image',
    template: `
        <p>day là image </p>
        <div>{{ product.name }}</div>
    `
})
export class ProductImageComponent {
    @Input() product: Product;
    @HostBinding('attr.class') cssClass = 'ui small image';
}
