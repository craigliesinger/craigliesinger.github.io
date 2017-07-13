import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { ProfileHomeComponent } from './profile-home/profile-home.component'
import { MobileAppsComponent }   from './mobile-apps/mobile-apps.component';
import { HacksComponent }      from './hacks/hacks.component';
import { SchoolsComponent }      from './schools/schools.component';
import { WorksComponent }  from './works/works.component';
import { AppLandingPageComponent }  from './app-landing-page/app-landing-page.component';
import { AppLandingPageMathDashComponent }  from './app-landing-page-math-dash/app-landing-page-math-dash.component';
import { HackBLEComponent } from './hack-ble/hack-ble.component';
import { HackBLTempComponent } from './hack-bltemp/hack-bltemp.component';

export const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'babybadge',  component: AppLandingPageComponent },
  { path: 'mathespresso',  component: AppLandingPageMathDashComponent },
  { path: 'BLED',  component: HackBLEComponent },
  { path: 'bleTemp',  component: HackBLTempComponent },
  { path: 'overview', component: ProfileHomeComponent,
    children: [
    { path: '', redirectTo: '/apps', pathMatch: 'full' },
    { path: 'apps', component: MobileAppsComponent },
    { path: 'hacks', component: HacksComponent },
    { path: 'education', component: SchoolsComponent },
    { path: 'work', component: WorksComponent },
    ]
  }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}