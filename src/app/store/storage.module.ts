import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects/src';
import { StoreDevtoolsModule } from '@ngrx/store-devtools/src';
import { StoreModule } from '@ngrx/store/src';

@NgModule({
  imports: [
    //StoreModule.forRoot(reducers),
    //EffectsModule.forRoot([CustomerEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      // logOnly: environment.production,
    }),
  ],
  exports: [StoreModule],
})
export class StorageModule {}
