import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'tracks',
  loadChildren: () => import( '@modules/tracks/tracks.module').then(m => m.TracksModule)
   },
   {
  path: 'favorites',
  loadChildren: () => import( '@modules/favorites/favorites.module').then(m => m.FavoritesModule)
   },
   {
  path: 'history',
  loadChildren: () => import( '@modules/history/history.module').then(m => m.HistoryModule)
   },
  {
    path: 'trackContent',
    loadChildren: () => import( '@modules/content-track/content-track.module').then(m => m.ContentTrackModule)
     },
   {
    path: '**', //TODO cuando no exista la ruta y de 404
    redirectTo: '/tracks'
  
   }
  
  ];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }