//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

//Routing
import { AppRoutingModule } from './app-routing.module';

//NGRX
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreModule } from '@ngrx/store';
import { appReducers } from './app.reducer'

//Pipes
import { FirstUppercasePipe } from './pipes/first-uppercase.pipe';
import { NumberToFix } from './pipes/number-to-fix';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { CustomPageComponent } from './views/custom-page/custom-page.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { UserBalanceComponent } from './components/user-balance/user-balance.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WrapperComponent,
    CustomPageComponent,
    UserBalanceComponent,
    FirstUppercasePipe,
    NumberToFix,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
