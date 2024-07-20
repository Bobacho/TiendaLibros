import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracksRoutingModule } from './tracks-routing.module';
import { SharedModule } from '@shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TrackService } from './services/track.service';
import { InjectSessionInterceptor } from '@core/interceptors/inject-session.interceptor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule, // Asegúrate de que esto esté presente
    TracksRoutingModule,
    SharedModule
  ],
  providers: [TrackService,  {
    provide: HTTP_INTERCEPTORS,
    useClass: InjectSessionInterceptor,
    multi: true
  }]
})
export class TracksModule { }
