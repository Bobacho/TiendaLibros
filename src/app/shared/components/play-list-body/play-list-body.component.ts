import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { CommonModule } from '@angular/common';
import { OrderListPipe } from '@shared/pipe/order-list.pipe';

@Component({
  selector: 'app-play-list-body',
  standalone: true,
  imports: [CommonModule,OrderListPipe],
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent {
  @Input() tracks: TrackModel[] = []
  optionSort: { property: string | null, order: string} = { property: null, order: 'asc'}
  constructor() { }
  ngOnInit(): void {
    
  }

  changeSort(property: string): void{
    const {order} = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }
}