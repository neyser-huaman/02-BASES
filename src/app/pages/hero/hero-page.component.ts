import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component(
    {
        templateUrl : './hero-page.html',
        imports: [UpperCasePipe]
    }
)
export class HeroPageComponent{

    name = signal('Iroman');
    age = signal(45);

    getHeroDescription(){
        return `${this.name} - ${this.age}`;
    }

    changeHero(){
        this.name.set('Spiderman');
        this.age.set(22);
    }

    resetForm(){
        this.name.set('Iroman');
        this.age.set(45);
    }

    chageAge(){
        this.age.set(60);
    }

    capitalizeName = computed(() => this.name().toUpperCase());
    
    
}