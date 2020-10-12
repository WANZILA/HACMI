import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path:'aboutUs', 
    loadChildren:() =>
    import('./about-us/about-us.module')
       .then(m => m.AboutUsModule)
  },
  {
    path:'', redirectTo:'/home', pathMatch: 'full'
  },
  {
    path:'**',component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: PreloadAllModules
      })
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
