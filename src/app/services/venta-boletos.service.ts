import { Injectable } from '@angular/core'
import { Boleto } from '../punto4/punto4.component'

interface ResumenVentaCategoria {
	categoria: string
	total: number
	cantidad: number
}

@Injectable({
	providedIn: 'root',
})
export class VentaBoletosService {
	public categorias = [
		{ id: 1, nombre: 'Menor', descuento: 0.35 },
		{ id: 2, nombre: 'Adulto', descuento: 0 },
		{ id: 3, nombre: 'Jubilado', descuento: 0.5 },
	]
	public ventas: Boleto[] = []

	public buscarCategoriaPorId(id: number) {
		return this.categorias.find(categoria => categoria.id === id)
	}

	public registrarVenta(boleto: Boleto): void {
		this.ventas.push(boleto)
	}

	public obtenerResumenVentasPorCategoria(): ResumenVentaCategoria[] {
		return this.categorias.map(categoria => {
			const ventasPorCategoria = this.ventas.filter(venta => venta.categoriaTurista === categoria.nombre)

			const total = ventasPorCategoria.reduce((acumulador, venta) => acumulador + venta.precio, 0)

			return {
				categoria: categoria.nombre,
				total,
				cantidad: ventasPorCategoria.length,
			}
		})
	}

	public obtenerTotalVentas(): number {
		return this.obtenerResumenVentasPorCategoria().reduce((acumulador, venta) => acumulador + venta.total, 0)
	}

	public obtenerTotalBoletosVendidos(): number {
		return this.obtenerResumenVentasPorCategoria().reduce((acumulador, venta) => acumulador + venta.cantidad, 0)
	}

	public precioFinal(precio: number, idCategoria: number): number {
		const categoriaSeleccionada = this.buscarCategoriaPorId(idCategoria)
		const descuento = categoriaSeleccionada ? categoriaSeleccionada.descuento : 0

		return precio - precio * descuento
	}

	public eliminarVenta(boleto: Boleto): void {
		const index = this.ventas.findIndex(venta => venta === boleto)
		if (index !== -1) {
			this.ventas.splice(index, 1)
		}
	}
}
