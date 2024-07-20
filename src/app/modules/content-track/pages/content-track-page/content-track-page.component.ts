import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-content-track-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-track-page.component.html',
  styleUrl: './content-track-page.component.css'
})
export class ContentTrackPageComponent implements OnInit {
  trackName: string | null = '';
  trackAlbum: string | null = '';
  trackCover: string | null = '';
  trackUrl: string | null = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.trackName = params['name'];
      this.trackAlbum = params['album'];
      this.trackCover = params['cover'];
      this.trackUrl = params['url'];
    });
  }

  openPaymentPage(): void {
    this.router.navigate(['/payment'], { queryParams: { name: this.trackName, album: this.trackAlbum, cover: this.trackCover, url: this.trackUrl } });
  }
}