import { Component } from "@angular/core";

@Component(
    {
        templateUrl : './counter-page.html',
        styleUrl: './counter-page.css'
    }
)
export class CounterPageComponent{
    counter = 15;

    increaseBy(value: number){
        this.counter += value;
    }

    resetCounter(){
        this.counter = 10
    }
}