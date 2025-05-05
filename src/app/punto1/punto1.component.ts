import { Component } from '@angular/core';
import { SlideComponent, Noticia } from '../ui/slide/slide.component';

@Component({
  selector: 'app-punto1',
  standalone: true,
  imports: [SlideComponent],
  templateUrl: './punto1.component.html',
})
export class Punto1Component {
  noticias: Noticia[] = [
    {
      id: 1,
      titulo: 'Nueva tecnología revoluciona el mercado',
      descripcion:
        'Una innovadora tecnología ha sido presentada este mes, prometiendo transformar la manera en que interactuamos con los dispositivos móviles.',
      imagen: 'noticia1',
      fecha: '20 de abril de 2025',
    },
    {
      id: 2,
      titulo: 'Avances en inteligencia artificial',
      descripcion:
        'Científicos logran un importante avance en el campo de la inteligencia artificial que podría cambiar cómo se desarrollan las aplicaciones futuras.',
      imagen: 'noticia2',
      fecha: '18 de abril de 2025',
    },
    {
      id: 3,
      titulo: 'Nuevas tendencias en diseño web',
      descripcion:
        'Diseñadores de todo el mundo comparten las últimas tendencias que definirán la estética de las páginas web en los próximos años.',
      imagen: 'noticia3',
      fecha: '15 de abril de 2025',
    },
    {
      id: 4,
      titulo: 'El futuro de la programación',
      descripcion:
        'Expertos analizan hacia dónde se dirige el mundo del desarrollo de software y qué lenguajes dominarán el mercado laboral.',
      imagen: 'noticia4',
      fecha: '10 de abril de 2025',
    },
  ];
}
