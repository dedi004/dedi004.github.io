import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {NavigationComponent} from "./navigation/navigation.component";
import {ContactComponent} from "./contact/contact.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    NavigationComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [NavigationComponent]
})
export class AppModule {
}
