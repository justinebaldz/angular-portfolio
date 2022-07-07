import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { AboutMeHobbiesSkillsComponent } from './components/about-me-hobbies-skills/about-me-hobbies-skills.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    AboutMeHobbiesSkillsComponent,
    ContactComponent,
    ProjectsComponent,
    HomeComponent,
    AboutComponent,
    HeroBannerComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
