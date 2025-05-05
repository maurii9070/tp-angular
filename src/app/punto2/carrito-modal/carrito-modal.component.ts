import { Component, EventEmitter, Input, Output } from '@angular/core'
import { ItemCarrito, Producto } from '../punto2.component'

@Component({
	selector: 'carrito-modal',
	imports: [],
	templateUrl: './carrito-modal.component.html',
})
export class CarritoModalComponent {
	@Input() carrito: ItemCarrito[] = []

	@Output() aumentarCantidad = new EventEmitter<Producto>()
	@Output() disminuirCantidad = new EventEmitter<ItemCarrito>()
	@Output() eliminarProducto = new EventEmitter<ItemCarrito>()
	@Output() cerrarModal = new EventEmitter<void>()

	onAumentarCantidad(producto: ItemCarrito) {
		this.aumentarCantidad.emit(producto)
	}

	onDiminuirCantidad(producto: ItemCarrito) {
		this.disminuirCantidad.emit(producto)
	}

	onEliminarProducto(producto: ItemCarrito) {
		this.eliminarProducto.emit(producto)
	}

	onCerrarModal() {
		this.cerrarModal.emit()
	}
}
