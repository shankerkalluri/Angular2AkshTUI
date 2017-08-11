import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import {HeaderComponent} from './header/header.component';
import {SliderComponent} from './slider/slider.component';
import {NavigationComponent} from './navigation/navigation.component';
import {FooterComponent} from './footer/footer.component';
import {SearchComponent} from './search/search.component';
import { AppComponent }  from './app.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, HeaderComponent, SliderComponent, NavigationComponent,SearchComponent,FooterComponent],
    bootstrap:  [ AppComponent ]
})
export class AppModule { }