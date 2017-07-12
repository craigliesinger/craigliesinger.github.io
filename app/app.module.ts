import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { MobileAppsComponent } from './mobile-apps/mobile-apps.component';
import { HacksComponent } from './hacks/hacks.component';
import { SchoolsComponent } from './schools/schools.component';
import { WorksComponent } from './works/works.component';
import { AppLandingPageComponent } from './app-landing-page/app-landing-page.component';
import { AppLandingPageMathDashComponent } from './app-landing-page-math-dash/app-landing-page-math-dash.component';
import { HackBLEComponent } from './hack-ble/hack-ble.component';
import { HackBLTempComponent } from './hack-bltemp/hack-bltemp.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    ProfileHomeComponent,
    MobileAppsComponent,
    HacksComponent,
    SchoolsComponent,
    WorksComponent,
    AppLandingPageComponent,
    AppLandingPageMathDashComponent,
    HackBLEComponent,
    HackBLTempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
