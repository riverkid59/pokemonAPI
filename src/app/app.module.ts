import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { PokemonsModule } from './pokemons/pokemon.module';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../app/in-memory-data.service';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found-component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),  
    PokemonsModule,
    LoginRoutingModule,
    AppRoutingModule,  
     
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
