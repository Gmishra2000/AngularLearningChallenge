import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  firststep: boolean;
  count: number = 0;
  buttonLog = [];

  toggleParagraph() {
    if (this.firststep) {
      this.firststep = false;
    } else {
      this.firststep = true;
    }
    this.count = this.count + 1;
    this.buttonLog.push(this.count);
  }
}
