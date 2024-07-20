import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTrackPageComponent } from './content-track-page.component';

describe('ContentTrackPageComponent', () => {
  let component: ContentTrackPageComponent;
  let fixture: ComponentFixture<ContentTrackPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentTrackPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentTrackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
