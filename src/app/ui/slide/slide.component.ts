import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideSiguienteComponent } from '../icons/slide-siguiente/slide-siguiente.component';
import { SlideAnteriorComponent } from '../icons/slide-anterior/slide-anterior.component';

export interface Noticia {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  fecha: string;
}

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [CommonModule, SlideSiguienteComponent, SlideAnteriorComponent],
  templateUrl: './slide.component.html',
})
export class SlideComponent implements OnInit {
  @Input() noticias: Noticia[] = [];

  currentIndex = 0;
  intervalo: any;

  ngOnInit(): void {
    if (this.noticias && this.noticias.length > 0) {
      this.iniciarSlide();
    }
  }

  iniciarSlide(): void {
    this.intervalo = setInterval(() => {
      this.siguienteSlide();
    }, 5000); // Cambiar cada 5 segundos
  }

  detenerSlide(): void {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }

  siguienteSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.noticias.length;
  }

  anteriorSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.noticias.length) % this.noticias.length;
  }

  seleccionarSlide(index: number): void {
    this.currentIndex = index;
  }
}
