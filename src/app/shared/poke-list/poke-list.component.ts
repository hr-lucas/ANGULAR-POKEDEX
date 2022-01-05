import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private setAllPokemos: any;
  public getAllPokemos: any;

  constructor(
    private pokeApiService:PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemos = res.results;
        this.getAllPokemos = this.setAllPokemos;
      }
    );
  }

  public getSearch(value: string){
    const filter = this.setAllPokemos .filter( (res: any) => {
      return  !res.name.indexOf(value.toLowerCase());
    })
    this.getAllPokemos = filter;
  }

}
