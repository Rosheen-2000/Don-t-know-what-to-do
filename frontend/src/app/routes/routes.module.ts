import {NgModule} from '@angular/core';
import {RoutesRoutingModule} from './routes-routing.module';
import {LoginComponent} from './passport/login/login.component';
import {RegisterComponent} from './passport/register/register.component';
import { DocumentComponent } from './document/document.component';
import { SpaceComponent } from './space/space.component';


const Components = [
  LoginComponent,
  RegisterComponent,
  DocumentComponent,
  SpaceComponent
];

@NgModule({
  declarations: [...Components],
  imports: [
    RoutesRoutingModule
  ]
})
export class RoutesModule {
}
