import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LibroCaracteristicaModel } from '@core/models/libro.caracteristica.model';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [CommonModule, ImgBrokenDirective],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'small';
  @Input() libroCaracteristica: LibroCaracteristicaModel = { idLibroCaracteristica: 0, categoria: '', titulo: '', autor: '', precio: 0.0, descuento: 0.0, imagenUrl: '' };

  constructor(private router: Router) { }

  ngOnInit(): void { }

  showMoreInfo(libroCaracteristica: LibroCaracteristicaModel): void {
    this.router.navigate(['/libroCaracteristicaContent'], {
      queryParams: { titulo: libroCaracteristica.titulo, autor: libroCaracteristica.autor, precio: libroCaracteristica.precio, imageUrl: libroCaracteristica.imagenUrl }
    });
  }
}

