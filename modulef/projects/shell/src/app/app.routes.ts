import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'cliente',
        loadComponent: () => loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4000/remoteEntry.js',
            exposedModule: './Component'
        }).then(m => m.AppComponent)
    },
    {
        path: 'productos',
        loadChildren: () => loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4400/remoteEntry.js',
            exposedModule: './Routes'
        }).then(m => m.ROUTE_PRODUCT)
    }
];
