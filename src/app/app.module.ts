import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StorageModule } from './store/storage.module';

@NgModule({
  imports: [BrowserModule, FormsModule, StorageModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
