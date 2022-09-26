import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  interval: any;
  @Output() eventFired = new EventEmitter<number>();
  incrementNumber: number = 0;
  constructor() {}

  ngOnInit(): void {}

  startGame() {
    this.interval = setInterval(() => {
      this.incrementNumber++;
      this.eventFired.emit(this.incrementNumber);
    }, 1000);
  }

  pauseGame() {
    clearInterval(this.interval);
  }
}
