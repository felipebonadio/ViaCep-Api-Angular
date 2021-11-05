import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CepService } from '../cep.service';
import { Cep } from './../cep.model';

@Component({
  selector: 'app-cep-details',
  templateUrl: './cep-details.component.html',
  styleUrls: ['./cep-details.component.css']
})
export class CepDetailsComponent implements OnInit {

  cep : Cep;

  constructor(private router : Router, private cepService : CepService, private route : ActivatedRoute) { 
    this.cep = {};
  }

  ngOnInit(): void {

    const numeroCep = String(this.route.snapshot.paramMap.get("cep"));

    this.cepService.getCep(numeroCep).subscribe(cep =>  this.cep = cep )

  }
}
