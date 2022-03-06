import { Component, OnInit } from "@angular/core";
import { Product } from "./model/product";
import { ProductsService } from "./products.service";


@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit{
    products!:Product[]
    isLoading:boolean = false;
    error?:{}

    constructor(private productsService:ProductsService){}

    ngOnInit(): void {
        this.productsService.getProducts().subscribe(res => {
            console.log(res)
            this.products = res
            this.isLoading = false
        }, error => {
            this.error=error.message
        })
    }

}