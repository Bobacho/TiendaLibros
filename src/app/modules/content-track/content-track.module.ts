import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentTrackRoutingModule } from './content-track-routing.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContentTrackRoutingModule,
    SharedModule
  ]
})
export class ContentTrackModule { }
