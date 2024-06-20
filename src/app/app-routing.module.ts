import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './modules/formulario/formulario.component';
import { HomeComponent } from './modules/home/home.component'
import { ContactoComponent } from './contacto/contacto.component';
import { ErrorComponent } from './modules/error/error.component';
import { ListProductoComponent } from './modules/producto/list-producto.component';
import { NuevoProductoComponent } from './modules/producto/nuevo-producto.component';
import { EditarProductoComponent } from './modules/producto/editar-producto.component';
import { DetalleProductoComponent } from './modules/producto/detalle-producto.component';



const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'contact', component: ContactoComponent },
  {path: '', component: ListProductoComponent},
  {path: 'detalle/:id', component: DetalleProductoComponent},
  {path: 'nuevo', component: NuevoProductoComponent},
  {path: 'editar/:id', component: EditarProductoComponent},
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

