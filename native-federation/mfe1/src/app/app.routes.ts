import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'crud',
        loadComponent: () => import('./crud/crud.component').then(c => c.CrudComponent),
        children: [
            {
                path: 'create',
                loadComponent: () => import('./crud/create/create.component')
                                        .then((c) => c.CreateComponent)
            },
            {
                path: 'read',
                loadComponent: () => import('./crud/read/read.component')
                                        .then((c) => c.ReadComponent)
            },
            {
                path: 'update',
                loadComponent: () => import('./crud/update/update.component')
                                        .then((c) => c.UpdateComponent)
            },
            {
                path: 'delete',
                loadComponent: () => import('./crud/delete/delete.component')
                                        .then((c) => c.DeleteComponent)
            },
            {
                path: '',
                redirectTo: 'read',
                pathMatch: 'full'
            }
        ],
    },
    {
        path: '',
        redirectTo: 'crud',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'crud'
    }
];
