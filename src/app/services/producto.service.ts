import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { Producto } from '../models/producto';
import { GLOBAL } from './global';

@Injectable()
export class ProductoService{
	public url: string;

	constructor(
		public _http: Http
		){
		this.url = GLOBAL.url;
	}

	getProductos(){
		return this._http.get(this.url+'productos').pipe(map(res => res.json()));
	}

	addProducto(producto: Producto){
		let json = JSON.stringify(producto);
		let params = 'json'+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'productos',params,{headers: headers}).pipe(map(res => res.json()));

	}

/*addProducto(producto: Producto): Observable<Producto>{
		return this._http.post<Producto>(this.url+'producto', producto, httpOptions)
			.pipe(
				catchError(this.handleError('addProducto', producto))
			);
	}*/

}