import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlomundoComponent } from './alomundo/alomundo.component';
import { AlohoraComponent } from './alohora/alohora.component';

@NgModule({
  declarations: [
    AppComponent,
    AlomundoComponent,
    AlohoraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
