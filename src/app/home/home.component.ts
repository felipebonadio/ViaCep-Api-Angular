import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cep } from 'src/app/cep.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cep: Cep | undefined;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  getCep(cep:string) {
    this.router.navigate(['cep/', cep]);    
  }

}