import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ScreamComponent } from './scream/scream.component';
import { MartlocalComponent } from './martlocal/martlocal.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ScreamComponent, MartlocalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
