import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchComponent } from './pages/branch/branch.component';
import { LanzamientosComponent } from './pages/lanzamientos/lanzamientos.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { CategoryComponent } from './pages/category/category.component';
import { InformationComponent } from './pages/information/information.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';


const app_routes: Routes = [
    { path: '', component: LanzamientosComponent },
    { path: 'home', component: LanzamientosComponent },
    { path: 'branch', component: BranchComponent},
    { path: 'about', component: AboutComponent},
    { path: 'item/:id', component: ItemComponent },
    { path: 'search/:termino', component: SearchComponent },
    { path: 'category/:categoria', component: CategoryComponent },
    { path: 'information', component: InformationComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
    imports: [
        RouterModule.forRoot(app_routes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}