import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./component/list/list.component').then(m => m.ListComponent)
    },
    {
        path: 'detail/:id',
        loadComponent: () => import('./component/detail/detail.component').then(m => m.DetailComponent)
    }
];
