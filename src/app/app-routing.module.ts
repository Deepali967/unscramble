import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnscrambleComponent } from './unscramble/unscramble.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/main',
  },

  {
    path: 'main',
    component: UnscrambleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
