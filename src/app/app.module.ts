import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioComponent } from './modules/formulario/formulario.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './modules/home/home.component';
import { NavBarComponent } from './modules/nav-bar/nav-bar.component';
import { UsuarioService } from './shared/usuario/usuario.service';
import { ErrorComponent } from './modules/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ListProductoComponent } from './modules/producto/list-producto.component';
import { NuevoProductoComponent } from './modules/producto/nuevo-producto.component';
import { EditarProductoComponent } from './modules/producto/editar-producto.component';
import { DetalleProductoComponent } from './modules/producto/detalle-producto.component';



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ContactoComponent,
    HomeComponent,
    NavBarComponent,
    ErrorComponent,
    ListProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    DetalleProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    CalendarModule,
    InputMaskModule,
    ToastrModule.forRoot(),
    ButtonModule,
    MessageModule,
    MessagesModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration(),
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
