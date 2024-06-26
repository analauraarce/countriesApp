import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { ByCountryComponent } from "./country/pages/by-country/by-country.component";
import { ByRegionComponent } from './country/pages/by-region/by-region.component';
import { ByCapitalComponent } from './country/pages/by-capital/by-capital.component';
import { ShowCountryComponent } from './country/pages/show-country/show-country.component';

const routes:Routes=[
  {
    //first component displayed
    path:'',
    component:ByCountryComponent,
    pathMatch:'full'
  },
  {
    path:'region',
    component:ByRegionComponent
  },
  {
    path:'capital',
    component:ByCapitalComponent
  },
  {
    path:'country/:id',
    component:ShowCountryComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
   
    imports: [
     RouterModule.forRoot(routes)
    ],
    exports:[
      RouterModule
    ]
    
  })

export class AppRoutingModule{}