import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';

const Approutes: Routes = [
  {path: '', component: SobremiComponent},
  {path: 'sobre-mi', component: SobremiComponent},
  {path: 'proyectos', component: ProjectsComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'crear-proyecto', component: CreateComponent},
  {path: 'proyecto/:id', component: DetailComponent},
  {path: 'editar-proyecto/:id', component: EditComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 