import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from "./contact/contact.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {OverviewComponent} from "./overview/overview.component";
import {ContractsComponent} from "./contracts/contracts.component";

const routes: Routes = [
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'overview',
    component: OverviewComponent,
  },
  {
    path: 'contracts',
    component: ContractsComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
