import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { InfiniteScrollCustomEvent, ModalController } from '@ionic/angular';
import { PokemonCardComponent } from '../components/pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pokemons: any = [];
  results: any;

  constructor(private pokemonService: PokemonService, private modalCtrl: ModalController) { }


  async ngOnInit() {
    this.pokemons = await this.pokemonService.getPokemons();
    this.generateItems();
    this.results = this.pokemons;
  }


  searchPokemons(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.pokemons.filter((d: any) => d.name.toLowerCase().indexOf(query) > -1);
  }

  async generateItems() {
    for (let pokemon of this.pokemons) {
      this.results.push(pokemon);
    }
  }

  async pokemonDetail(poke: any) {
    const modal = await this.modalCtrl.create({
      component: PokemonCardComponent,
      showBackdrop: true,
      backdropDismiss: true,
      cssClass: "pokemon-detail",
      componentProps: {
        pokemonDetail: poke
      }
    });
    modal.present();
    await modal.onWillDismiss();
  }


}

