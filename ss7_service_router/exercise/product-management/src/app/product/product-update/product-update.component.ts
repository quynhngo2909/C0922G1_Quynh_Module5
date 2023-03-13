import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productForm: FormGroup;
  product: Product;
  id;
  mess;
  constructor(private  productService: ProductService,
              private fb: FormBuilder,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id');
      this.product = this.productService.findById(this.id);
    });
    this.productForm = this.fb.group({
      id: [this.product.id, Validators.required],
      name: [this.product.name, Validators.compose([Validators.required, Validators.pattern('^[0-9A-Za-z ]*$'), Validators.minLength(5)])],
      price: [this.product.price, Validators.compose( [Validators.required, Validators.pattern('^[0-9]+$')])],
      description: [this.product.description, Validators.required]
    });
  }

  submit() {
    const product = this.productForm.value;
    if (this.productService.findById(product.id) === undefined) {
      this.mess = 'This product is not existed.';
      return;
    }
    this.productService.updateById(product.id, product);
    this.mess = 'The product was updated successfully.';
    this.productForm.reset();
  }

  get name() {
    return this.productForm.get('name');
  }

  get description() {
    return this.productForm.get('description');
  }


}
