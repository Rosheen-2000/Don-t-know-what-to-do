import {NgModule} from '@angular/core';
import {DefaultComponent} from './default/default.component';
import {EditorComponent} from './editor/editor.component';
import {PassportComponent} from './passport/passport.component';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './default/header/header.component';
import { SidebarComponent } from './default/sidebar/sidebar.component';
import {NgZorroModule} from '../shared/ng-zorro.module';

const Components = [
  DefaultComponent,
  EditorComponent,
  PassportComponent
];

const DefaultComponents = [
  HeaderComponent,
  SidebarComponent
];

@NgModule({
  imports: [RouterModule, NgZorroModule],
  declarations: [...Components, ...DefaultComponents]
})
export class LayoutModule {}
