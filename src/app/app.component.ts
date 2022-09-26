import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  oddNumber: number[] = [];
  evenNumber: number[] = [];
  onEventFired(firedNumber: number) {
    if (firedNumber % 2 != 0) {
      this.oddNumber.push(firedNumber);
    } else {
      this.evenNumber.push(firedNumber);
    }
  }
}
