import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormModule } from './container/container.module';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { DynamicFormService } from './services/dynamic-form.service';
import * as fromInput from './store/input/input.reducer';

export const reducers: ActionReducerMap<any> = {
  inputs: fromInput.inputReducer,
};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicFormModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [
    DynamicFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
