import { Routes } from '@angular/router';

export const ROUTE_PRODUCT: Routes = [
    {
        path: '',
        redirectTo: 'listado',
        pathMatch: 'full'
    },
    {
        path: 'listado',
        loadComponent: ()=> import('./features/listado/listado.component').then((c) => c.ListadoComponent)
    },
    {
        path: 'crud',
        loadComponent: ()=> import('./features/crud/crud.component').then((c) => c.CrudComponent)
    }
];
