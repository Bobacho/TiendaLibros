import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardPlayerComponent } from '../card-player/card-player.component';
import { LibroCaracteristicaModel } from '@core/models/libro.caracteristica.model';

@Component({
  selector: 'app-section-generic',
  standalone: true,
  imports: [CommonModule, CardPlayerComponent],
  templateUrl: './section-generic.component.html',
  styleUrl: './section-generic.component.css'
})
export class SectionGenericComponent {
  @Input() title!: string;
  @Input() mode: 'small' | 'big' = 'big'
  @Input() dataLibroCaracteristica: Array<LibroCaracteristicaModel> = []
  constructor() { }
  ngOnInit(): void {
  }

}
