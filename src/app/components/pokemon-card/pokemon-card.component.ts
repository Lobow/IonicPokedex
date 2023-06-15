import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  details: any;
  pokemonDetail: any;
  typeColor: any;
  iconUrl: any;

  constructor() { }

  ngOnInit() {
    this.selectTypeColor(this.pokemonDetail.type)
  }

  selectTypeColor(type: string) {
    let selectedColor: any;
    switch (type) {
      case 'bug':
        selectedColor = '#92BC2C';
        break;
      case 'dark':
        selectedColor = '#595761';
        break;
      case 'dragon':
        selectedColor = '#0C69C8';
        break;
      case 'electric':
        selectedColor = '#F2D94E';
        break;
      case 'fire':
        selectedColor = '#FBA54C';
        break;
      case 'fairy':
        selectedColor = '#EE90E6';
        break;
      case 'fighting':
        selectedColor = '#D3425F';
        break;
      case 'flying':
        selectedColor = '#A1BBEC';
        break;
      case 'ghost':
        selectedColor = '#5F6DBC';
        break;
      case 'grass':
        selectedColor = '#5FBD58';
        break;
      case 'ground':
        selectedColor = '#DA7C4D';
        break;
      case 'ice':
        selectedColor = '#75D0C1';
        break;
      case 'normal':
        selectedColor = '#A0A29F';
        break;
      case 'poison':
        selectedColor = '#B763CF';
        break;
      case 'psychic':
        selectedColor = '#FA8581';
        break;
      case 'rock':
        selectedColor = '#C9BB8A';
        break;
      case 'steel':
        selectedColor = '#5695A3';
        break;
      case 'water':
        selectedColor = '#539DDF';
        break;
    }
    this.iconUrl = '../../../assets/svg/' + type + '.svg'
    this.typeColor = selectedColor;
  }

}
