import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'formulario',
        children: [
            {
                path: 'distancia',
                loadComponent: () =>
                    import('./formulario/distancia/distancia').then(
                        (c) => c.Distancia
                    ),
            },
            {
                path: 'zodiaco',
                loadComponent: () =>
                    import('./formulario/zodiaco/zodiaco').then(
                        (c) => c.Zodiaco
                    ),
            },
            
        ]
    },
    {
        path: 'escuela',
        children: [
            {
                path: 'listaescuela',
                loadComponent: () =>
                    import('./escuela/listaescuela/listaescuela').then(
                        (c) => c.Listaescuela
                    ),
            },
            {
                path: 'cinepolis',
                loadComponent: () =>
                    import('./escuela/cinepolis/cinepolis').then(
                        (c) => c.Cinepolis
                    ),
            },
            {
                path: 'ventas',
                loadComponent: () =>
                    import('./escuela/ventas/ventas').then(
                        (c) => c.Ventas
                    ),
            },
            
        ]
    },

    { path: '', redirectTo: 'formulario/zodiaco', pathMatch: 'full' },
    { path: '**', redirectTo: 'formulario/zodiaco' },
];
 