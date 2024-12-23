import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { ROUTE_PRODUCT } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(ROUTE_PRODUCT)]
};
