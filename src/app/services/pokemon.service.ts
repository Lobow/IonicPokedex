import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../interfaces/pokemon.interface';


@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) { }

async getPokemons(){
    let itens:any = [];
    let searchs:any = await this.http.get('https://pokeapi.co/api/v2/pokemon').toPromise();
    searchs.results.forEach(async (element:any) => {
      let data:any = await this.http.get(element.url).toPromise();

      let pokemon:Pokemon = {} as Pokemon;
      pokemon.name = data.name;
      pokemon.image = data.sprites.front_default;
      pokemon.type = data.types[0].type.name;
      pokemon.order = data.order;
      pokemon.height = (parseInt(data.height)*10).toString();
      pokemon.weight = data.weight;
      itens.push(pokemon)
    });
    return itens;
  }
}
