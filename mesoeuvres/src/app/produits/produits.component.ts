import { Component, OnInit } from '@angular/core';

import { ProduitService } from '../services/produit.service';
import { Oeuvre } from '../model/oeuvre.model';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

     produits! : Oeuvre[]; //un tableau de Produit
     
     constructor(private produitService: ProduitService ) {
      
      }
   

      ngOnInit(): void {

        this.chargerProduits();
      }
    
      chargerProduits(){
        this.produitService.listeProduit().subscribe(prods => {
          console.log(prods);
          this.produits = prods;
          });
      }
   

 
  

}
