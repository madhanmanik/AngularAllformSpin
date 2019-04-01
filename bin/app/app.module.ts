import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InterSpringBootComponent } from './inter-spring-boot/inter-spring-boot.component';
import { InteSpriService } from './inte-spri.service';
import { InteServiceService } from './inte-service.service';
import { IntSpringCoComponent } from './int-spring-co/int-spring-co.component';

import { RouterModule }   from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import {AtomSpinnerModule} from 'angular-epic-spinners';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    InterSpringBootComponent,
    IntSpringCoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AtomSpinnerModule,
    NgxSpinnerModule,
    RouterModule.forRoot([
		  {
			path: 'home',
			component: InterSpringBootComponent
		  },
		  {
			path: 'dashboard',
			component: IntSpringCoComponent
      },	  
		  {
		    path: '',
		    redirectTo: '/home',
		    pathMatch: 'full'
		  }
		])
  ],
  providers: [InteSpriService,InteServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }