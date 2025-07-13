import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character{
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page.component',
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {


  name = signal('Gohan');
  power = signal(100);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 9000 },
    { id: 3, name: 'Picoro', power: 3001 },
    { id: 4, name: 'Yamcha', power: 500 },
    { id: 5, name: 'Picoro', power: 2500 }
  ]);

  addCharacter() {

    if(!this.name() || !this.power() || this.power() <= 0){
      return;
    }

    const newCharacter: Character ={
      id: this.characters.length+1,
      name: this.name(),
      power: this.power()
    };

    // this.characters().push(newCharacter);
    this.characters.update(
      (list) => [...list, newCharacter]
    );

    this.resetFields()

    console.log(this.name(), this.power());
  }

  resetFields(){
    this.name.set('');
    this.power.set(0)
  }

  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': true,
  //   }
  // })

}
