import { Component, OnInit } from '@angular/core';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';



@Component({
  selector: 'my-app',
  template: `
      <h1>{{title}}</h1>
      <nav>
  <a [routerLink]="['Heroes']">Heroes</a>
  <a [routerLink]="['Dashboard']">Dashboard</a>
  <router-outlet></router-outlet>
  </nav>
  `,
  styleUrls: ['app/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [
  		ROUTER_PROVIDERS,
		HeroService
	]
})

@RouteConfig([
	{
  	path: '/detail/:id',
  	name: 'HeroDetail',
  	component: HeroDetailComponent
	},
	{
  	path: '/dashboard',
  	name: 'Dashboard',
  	component: DashboardComponent,
  	useAsDefault: true
	},
	{
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  	}
])


export class AppComponent {
  title = 'Tour of Heroes';
}
