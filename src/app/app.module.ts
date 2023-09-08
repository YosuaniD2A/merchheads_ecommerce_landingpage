import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegatorComponent } from './components/main/navegator/navegator.component';
import { FooterComponent } from './components/footer/footer.component';
import { MarqueeComponent } from './components/marquee/marquee.component';
import { MainComponent } from './components/main/main.component';
import { NewsComponent } from './components/news/news.component';
import { BuildingComponent } from './components/building/building.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegatorComponent,
    FooterComponent,
    MarqueeComponent,
    MainComponent,
    NewsComponent,
    BuildingComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
