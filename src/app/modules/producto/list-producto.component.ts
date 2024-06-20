import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../shared/producto/producto.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrl: './list-producto.component.css'
})
export class ListProductoComponent {

  productos: Producto[] = [];

  listaVacia: string | undefined;

  constructor(
    private productoService: ProductoService
    ) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(
      data => {
        this.productos = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error?.message;
      }
    );
  }

  borrar(id: number, nombre: string): void {
    Swal.fire({
      title: `¿Estás seguro que deseas eliminar ${nombre} de la lista de productos?`,
      text: 'No hay vuelta atrás',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.productoService.delete(id).subscribe(res => this.cargarProductos());
        Swal.fire(
          'OK',
          'Producto eliminado',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Producto a salvo',
          'error'
        );
      }
    });
  }
}
