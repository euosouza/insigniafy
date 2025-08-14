import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-certificado',
  imports: [],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css'
})
export class Certificado {
constructor( private routerActivatedRoute: ActivatedRoute) {
  console.log("Código do certificado: ", this.id)
}
  public get id(): string {
    return this.routerActivatedRoute.snapshot.params['id'];
  }

}
