import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTE_PRODUCT } from './app/app.routes';

bootstrapApplication(AppComponent,{
  providers: [
    importProvidersFrom(RouterModule.forRoot(ROUTE_PRODUCT))
  ]
})
  .catch((err) => console.error(err));
