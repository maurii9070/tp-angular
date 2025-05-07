import { Component } from '@angular/core'
import { CarritoIconComponent } from '../ui/icons/carrito-icon/carrito-icon.component'
import { CarritoModalComponent } from './carrito-modal/carrito-modal.component'
import { CommonModule } from '@angular/common'

export type Producto = {
	id: number
	nombre: string
	descripcion: string
	image: string
	precio: number
	descuento: number
	estado: 'disponible' | 'vendido' | 'reparacion'
}

export type ItemCarrito = Producto & {
	cantidad: number
}

@Component({
	selector: 'app-punto2',
	imports: [CarritoIconComponent, CarritoModalComponent, CommonModule],
	templateUrl: './punto2.component.html',
})
export class Punto2Component {
	carrito: ItemCarrito[] = []
	mostrarCarrito: boolean = false
	productos: Producto[] = [
		{
			id: 1,
			nombre: 'Mouse Gamer',
			descripcion: 'Mouse gamer con RGB y 7 botones programables.',
			image: 'mouse',
			precio: 25000,
			descuento: 1,
			estado: 'disponible',
		},
		{
			id: 2,
			nombre: 'Notebook Asus',
			descripcion: 'Notebook Asus con procesador i7 y 16GB de RAM.',
			image: 'notebook',
			precio: 860000,
			descuento: 0.15,
			estado: 'disponible',
		},
		{
			id: 3,
			nombre: 'Router TP-Link',
			descripcion: 'Router TP-Link con WiFi 6 y 4 antenas externas.',
			image: 'router',
			precio: 120000,
			descuento: 0,
			estado: 'reparacion',
		},
		{
			id: 4,
			nombre: 'Smartphone Samsung',
			descripcion: 'Smartphone Samsung Galaxy S24 con 128GB de almacenamiento.',
			image: 'smartphone',
			precio: 1200000,
			descuento: 0,
			estado: 'vendido',
		},
		{
			id: 5,
			nombre: 'Auriculares Sony',
			descripcion: 'Auriculares Sony con cancelación de ruido activa.',
			image: 'auriculares',
			precio: 80000,
			descuento: 1,
			estado: 'disponible',
		},
		{
			id: 6,
			nombre: 'Impresora HP',
			descripcion: 'Impresora HP multifuncional con escáner y copiadora.',
			image: 'impresora',
			precio: 150000,
			descuento: 0,
			estado: 'reparacion',
		},
		{
			id: 7,
			nombre: 'Monitor LG',
			descripcion: 'Monitor LG de 27 pulgadas con resolución 4K.',
			image: 'monitor',
			precio: 300000,
			descuento: 0,
			estado: 'vendido',
		},
		{
			id: 8,
			nombre: 'Parlantes Edifier',
			descripcion: 'Parlantes Edifier con sonido envolvente y Bluetooth.',
			image: 'parlantes',
			precio: 120000,
			descuento: 0,
			estado: 'vendido',
		},
		{
			id: 9,
			nombre: 'Teclado Mecánico',
			descripcion: 'Teclado mecánico RGB con switches mecánicos.',
			image: 'teclado',
			precio: 60000,
			descuento: 0.6,
			estado: 'disponible',
		},
		{
			id: 10,
			nombre: 'Webcam Logitech',
			descripcion: 'Webcam Logitech con resolución Full HD y micrófono integrado.',
			image: 'webcam',
			precio: 70000,
			descuento: 0,
			estado: 'disponible',
		},
	]

	agregarAlCarrito(producto: Producto) {
		const productoEnCarrito = this.carrito.find(item => item.id === producto.id)
		if (productoEnCarrito) {
			productoEnCarrito.cantidad++
		} else {
			this.carrito.push({ ...producto, cantidad: 1 })
		}
		console.log(this.carrito)
	}

	eliminarProducto(producto: ItemCarrito) {
		const productoEnCarrito = this.carrito.find(item => item.id === producto.id)
		if (productoEnCarrito) {
			if (productoEnCarrito.cantidad > 1) {
				productoEnCarrito.cantidad--
			} else {
				this.carrito = this.carrito.filter(item => item.id !== producto.id)
			}
		}
	}

	eliminarDelCarrito(producto: ItemCarrito) {
		this.carrito = this.carrito.filter(item => item.id !== producto.id)
	}

	toogerCarrito() {
		this.mostrarCarrito = !this.mostrarCarrito
	}
}
