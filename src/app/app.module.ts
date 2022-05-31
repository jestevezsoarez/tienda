import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LanzamientosComponent } from './pages/lanzamientos/lanzamientos.component';
import { BranchComponent } from './pages/branch/branch.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { MapComponent } from './components/map/map.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { CategoryComponent } from './pages/category/category.component';

// Rutas
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LanzamientosComponent,
    BranchComponent,
    ItemComponent,
    SearchComponent,
    MapComponent,
    LoadingComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
