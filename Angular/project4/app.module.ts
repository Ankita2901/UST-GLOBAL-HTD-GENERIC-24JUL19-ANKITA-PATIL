import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { MobileComponent } from './mobile/mobile.component';
import { MobileDetailsComponent } from './mobile-details/mobile-details.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    MobileDetailsComponent,
    HeaderComponent,
    HomeComponent,
    LinkComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      
      { path : 'home', component:HomeComponent},
    { path : 'link', component:LinkComponent }
  ])
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
