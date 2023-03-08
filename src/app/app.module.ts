import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {NavigationComponent} from "./navigation/navigation.component";
import {ContactComponent} from "./contact/contact.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ContactsComponent} from "./contacts/contacts.component";
import {OverviewComponent} from "./overview/overview.component";
import {ContractsComponent} from "./contracts/contracts.component";
import {UploaderComponent} from "./uploader/uploader.component";
import {AstronautComponent} from "./astronaut/astronaut.component";
import {MissioncontrolComponent} from "./missioncontrol/missioncontrol.component";

@NgModule({
  declarations: [
    NavigationComponent,
    ContactComponent,
    ContactComponent,
    ContactsComponent,
    OverviewComponent,
    ContractsComponent,
    UploaderComponent,
    MissioncontrolComponent,
    AstronautComponent
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
