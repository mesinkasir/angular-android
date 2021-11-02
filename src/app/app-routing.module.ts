import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgComponent } from './ng/ng.component';
import { GatsComponent } from './gats/gats.component';
import { JekyllComponent } from './jekyll/jekyll.component';
import { LaravelComponent } from './laravel/laravel.component';
import { ReactComponent } from './react/react.component';
import { SvelComponent } from './svel/svel.component';
import { SapperComponent } from './sapper/sapper.component';
import { VueComponent } from './vue/vue.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ng', component: NgComponent },
  { path: 'gats', component: GatsComponent },
  { path: 'jekyll', component: JekyllComponent },
  { path: 'laravel', component: LaravelComponent },
  { path: 'react', component: ReactComponent },
  { path: 'svel', component: SvelComponent },
  { path: 'vue', component: VueComponent },
  { path: 'sapper', component: SapperComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
