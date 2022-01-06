import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
// Serviçes
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon'
  private urlname: string = 'https://pokeapi.co/api/v2/pokemon-species'

  public pokemon: any;
  public isLoading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.getpokemon;
  }

  get getpokemon(){
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemos(`${this.urlPokemon}/${id}`)
    const name =  this.pokeApiService.apiGetPokemos(`${this.urlname}/${id}`)

    return forkJoin([pokemon, name]).subscribe(
      res =>{
        this.pokemon = res;
        this.isLoading = true;
      }
    )

  }

}
