import { Component, Input } from '@angular/core';
import { LibroCaracteristicaModel } from '@core/models/libro.caracteristica.model';
import { CommonModule } from '@angular/common';
import { OrderListPipe } from '@shared/pipe/order-list.pipe';

@Component({
  selector: 'app-carrito-body',
  standalone: true,
  imports: [CommonModule, OrderListPipe],
  templateUrl: './carrito-body.component.html',
  styleUrl: './carrito-body.component.css'
})
export class CarritoBodyComponent {
  @Input() libroCaracteristica: LibroCaracteristicaModel[] = []
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }
  constructor() { }
  ngOnInit(): void {

  }

  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }
}
