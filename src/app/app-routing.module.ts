import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryListComponent } from './components/country-list/country-list.component'
import { CountryDetailComponent } from './components/country-detail/country-detail.component';


const routes: Routes = [
  {path: '', component: CountryListComponent},
  {path: 'country/:id', component: CountryDetailComponent},
  {path: 'country', component: CountryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
