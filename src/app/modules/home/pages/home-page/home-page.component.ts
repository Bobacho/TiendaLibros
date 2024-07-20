import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MediaPlayeComponent } from '@shared/components/media-playe/media-playe.component';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SideBarComponent, RouterOutlet, MediaPlayeComponent,HttpClientModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
