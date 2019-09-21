import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { RegisterComponent } from './register/register.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path : ' ', component:HomeComponent },
      {path : 'register', component:RegisterComponent },
      {path : 'content ', component : ContentComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
