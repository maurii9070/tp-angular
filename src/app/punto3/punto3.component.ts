import { Component } from '@angular/core'

@Component({
	selector: 'app-punto3',
	imports: [],
	templateUrl: './punto3.component.html',
})
export class Punto3Component {
	protected palabras = [
		{ categoria: 'animal', palabra: 'perro' },
		{ categoria: 'animal', palabra: 'gato' },
		{ categoria: 'animal', palabra: 'elefante' },
		{ categoria: 'animal', palabra: 'jirafa' },
		{ categoria: 'animal', palabra: 'leon' },
		{ categoria: 'jugador argentino', palabra: 'messi' },
		{ categoria: 'jugador argentino', palabra: 'maradona' },
		{ categoria: 'jugador argentino', palabra: 'aguero' },
		{ categoria: 'jugador argentino', palabra: 'alvarez' },
		{ categoria: 'jugador argentino', palabra: 'higuain' },
	]
	protected letras = 'abcdefghijklmnñopqrstuvwxyz'
	protected letrasArray = this.letras.split('')
	protected letrasUsadas: string[] = []
	protected comenzarJuego = false
	protected categorias = ['animal', 'jugador argentino']
	protected intentos = 5
	protected categoriaSeleccionada = ''
	protected palabraActual = ''
	protected ganador = false

	seleccionarCategoria(categoria: string) {
		this.comenzarJuego = true
		this.categoriaSeleccionada = categoria
		this.letrasUsadas = []
		this.palabraActual = this.seleccionarPalabraAleatoria()
	}

	private seleccionarPalabraAleatoria(): string {
		const palabrasFiltradas = this.palabras.filter(p => p.categoria === this.categoriaSeleccionada)
		const randomIndex = Math.floor(Math.random() * palabrasFiltradas.length)
		return palabrasFiltradas[randomIndex].palabra
	}

	seleccionarLetra(letra: string) {
		if (this.letrasUsadas.includes(letra)) {
			return
		}
		this.letrasUsadas.push(letra)
		if (!this.palabraActual.includes(letra)) {
			this.intentos--
		}
		if (this.palabraEnJuego().join('') === this.palabraActual) {
			this.ganador = true
		}
	}

	protected palabraEnJuego() {
		return this.palabraActual.split('').map(letra => {
			if (this.letrasUsadas.includes(letra)) {
				return letra
			} else {
				return '_'
			}
		})
	}

	protected reiniciarJuego() {
		this.letrasUsadas = []
		this.intentos = 5
		this.comenzarJuego = false
		this.categoriaSeleccionada = ''
		this.palabraActual = ''
		this.ganador = false
	}
}
