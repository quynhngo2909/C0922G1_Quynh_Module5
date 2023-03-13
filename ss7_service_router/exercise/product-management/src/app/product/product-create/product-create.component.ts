import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;

  constructor(private productService: ProductService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9A-Za-z ]*$'), Validators.minLength(5)])],
      price: ['', Validators.compose( [Validators.required, Validators.pattern('^[0-9]+$')])],
      description: ['', Validators.required]
    });
  }

  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product);
    this.productForm.reset();
  }

  get name() {
    return this.productForm.get('name');
  }

  get description() {
    return this.productForm.get('description');
  }

}
