import { Component, OnDestroy, OnInit } from '@angular/core';
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';
import { TrackModel } from '@core/models/tracks.model';
import { Subscription } from 'rxjs';
import { TrackService } from '@modules/tracks/services/track.service';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [SectionGenericComponent,HttpClientModule],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  listObservers$: Array<Subscription> = []
  constructor(private trackService: TrackService) {}

  ngOnInit(): void {
    this.loadDataAll()
    this.loadDataRandom()
  }
  
  async loadDataAll(): Promise<any> {
    this.tracksTrending = await  this.trackService.getAllTracks$().toPromise()
   }
 
   loadDataRandom(): void {
    this.trackService.getAllRandom$()
    .subscribe((response: TrackModel[]) => {
      this.tracksRandom = response
      console.log('--->',response)
    })


  }


  ngOnDestroy(): void {
  }
}

