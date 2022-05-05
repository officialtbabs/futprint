import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { ItemsListComponent } from './components/items-list/items-list.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ItemsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
