import { CommonModule } from '@angular/common'
import { Component, Input, output } from '@angular/core'
import { Boleto } from '../punto4.component'

@Component({
	selector: 'lista-boletos',
	imports: [CommonModule],
	templateUrl: './lista-boletos.component.html',
})
export class ListaBoletosComponent {
	@Input() ventas: Boleto[] = []
	eliminarVenta = output<Boleto>()

	public onEliminarVenta(boleto: Boleto): void {
		this.eliminarVenta.emit(boleto)
	}
}
