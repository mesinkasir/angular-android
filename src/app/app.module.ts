import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
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

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HomeComponent,
    NgComponent,
    JekyllComponent,
    ReactComponent,
    LaravelComponent,
    GatsComponent,
    SvelComponent,
    SapperComponent,
    VueComponent,
    AboutComponent,
    ContactComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
