import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NgcCookieConsentModule } from 'ngx-cookieconsent'

import { cookieConfig} from './cookie-config'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MenuComponent } from './menu/menu.component'
import { HomeComponent } from './home/home.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { ImpressumComponent } from './impressum/impressum.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    NotFoundComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
