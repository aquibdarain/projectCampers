import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '', component: LandingPageComponent,
    children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home',component: HomeComponent
      },
      {
        path: 'about', component: AboutComponent
      },
      {
        path: 'features', component: FeaturesComponent
      },
      {
        path: 'services', component: ServicesComponent
      },
      {
        path: 'contact', component: ContactComponent
      },
    ]
  }
]


@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    FeaturesComponent,
    ContactComponent,
    AboutComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class LandingPageModule { }
