import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productForm: FormGroup;
  product: Product;
  id;
  mess;

  constructor(private  productService: ProductService,
              private fb: FormBuilder,
              private activateRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id');
      this.product = this.productService.findById(this.id);
    });
    this.productForm = this.fb.group({
      id: [this.product.id, Validators.required],
      name: [this.product.name, Validators.compose([Validators.required, Validators.pattern('^[0-9A-Za-z ]*$'), Validators.minLength(5)])],
      price: [this.product.price, Validators.compose([Validators.required, Validators.pattern('^[0-9]+$')])],
      description: [this.product.description, Validators.required]
    });
  }

  submit() {
    const product = this.productForm.value;
    if (this.productService.findById(product.id) === undefined) {
      this.mess = 'This product is not existed.';
      return;
    }
    this.productService.deleteById(product.id);
    this.mess = 'The product was deleted successfully.';
    this.productForm.reset();
    this.router.navigateByUrl('');
  }

  get name() {
    return this.productForm.get('name');
  }

  get description() {
    return this.productForm.get('description');
  }
}
