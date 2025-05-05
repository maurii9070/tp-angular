import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { VentaBoletosService } from '../../services/venta-boletos.service'

@Component({
	selector: 'resumen-venta',
	imports: [CommonModule],
	templateUrl: './resumen-venta.component.html',
})
export class ResumenVentaComponent {
	protected ventaBoletosService = inject(VentaBoletosService)
}
