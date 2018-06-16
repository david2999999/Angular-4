import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onDivClick() {
    console.log("div was clicked");
  }

  onSave($event) {
    // prevents the event from bubbling upward
    $event.stopPropagation();

    console.log('Button was clicked', $event);
  }
}
