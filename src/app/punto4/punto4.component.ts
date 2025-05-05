import { Component, inject } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { VentaBoletosService } from '../services/venta-boletos.service'
import { CommonModule } from '@angular/common'
import { ResumenVentaComponent } from './resumen-venta/resumen-venta.component'
import { ListaBoletosComponent } from './lista-boletos/lista-boletos.component'

export interface Boleto {
	dni: string
	precio: number
	categoriaTurista: string
	fechaCompra: ''
	email: string
}

@Component({
	selector: 'app-punto4',
	standalone: true,
	imports: [FormsModule, CommonModule, ResumenVentaComponent, ListaBoletosComponent],
	templateUrl: './punto4.component.html',
})
export class Punto4Component {
	protected ventaBoletosService = inject(VentaBoletosService)

	protected boleto: Boleto = {
		dni: '',
		precio: 0,
		categoriaTurista: '',
		fechaCompra: '',
		email: '',
	}

	protected onSubmit(): void {
		const categoria = this.ventaBoletosService.buscarCategoriaPorId(+this.boleto.categoriaTurista)?.nombre
		const precioFinal = this.ventaBoletosService.precioFinal(this.boleto.precio, +this.boleto.categoriaTurista)

		const nuevoBoleto: Boleto = {
			...this.boleto,
			precio: precioFinal,
			categoriaTurista: categoria!,
		}

		this.ventaBoletosService.registrarVenta(nuevoBoleto)
		this.resetForm()
	}

	private resetForm(): void {
		this.boleto = {
			dni: '',
			precio: 0,
			categoriaTurista: '',
			fechaCompra: '',
			email: '',
		}
	}
}
