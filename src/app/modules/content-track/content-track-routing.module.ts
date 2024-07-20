import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentTrackPageComponent } from './pages/content-track-page/content-track-page.component';

const routes: Routes = [  {
  path: "",
  component: ContentTrackPageComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentTrackRoutingModule { }
