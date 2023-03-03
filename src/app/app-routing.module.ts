import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePokemonPageComponent } from './pages/create-pokemon-page/create-pokemon-page.component';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';

const routes: Routes = [
  {
    path: '',
    component: PokedexPageComponent,
  },
  {
    path: 'create',
    component: CreatePokemonPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
