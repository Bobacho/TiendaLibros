import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SearchService } from './services/search.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InjectSessionInterceptor } from '@core/interceptors/inject-session.interceptor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [SearchService,  {
    provide: HTTP_INTERCEPTORS,
    useClass: InjectSessionInterceptor,
    multi: true
  }]
})
export class HistoryModule { }
