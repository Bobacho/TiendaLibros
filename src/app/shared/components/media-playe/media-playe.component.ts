import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; 

@Component({
  selector: 'app-media-playe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-playe.component.html',
  styleUrl: './media-playe.component.css'
})
export class MediaPlayeComponent implements OnInit, OnDestroy {

  ngOnInit(): void {

 }
  ngOnDestroy(): void {
    
  }
}



