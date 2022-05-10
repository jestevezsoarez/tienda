import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { LanzamientosComponent } from './pages/lanzamientos/lanzamientos.component';
import { ItemComponent } from './pages/item/item.component';


const app_routes: Routes = [
    { path: '', component: LanzamientosComponent },
    { path: 'home', component: LanzamientosComponent },
    { path: 'about', component: AboutComponent},
    { path: 'item', component: ItemComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
    imports: [
        RouterModule.forRoot(app_routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}