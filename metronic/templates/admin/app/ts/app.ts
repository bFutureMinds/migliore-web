/// <reference path="./toastr.d.ts" />

import {Component} from '@angular/core';
import {$WebSocket} from './ng2-websocket';
import {NotificationService} from "./notifications/notification.service";
import {OfferHandler} from "./notifications/handlers/offerHandler.component";
import {AlertHandler} from "./notifications/handlers/alertHandler.component";
import {GreetingHandler} from "./notifications/handlers/greetingHandler.component";

@Component({
  selector: 'my-app',
  templateUrl: './views/dashboard.html',
  providers : [NotificationService],
  directives : <any[]>[OfferHandler,AlertHandler,GreetingHandler]
})
export class App {

    ws:$WebSocket;
    wsEndpoint = "ws://localhost:8080/notifications";

    constructor(private notificationService : NotificationService) {
        this.ws = this.subscribe();
        toastr.options = { positionClass: 'toast-top-right', closeButton:true}
    }

    sayOk() {
        alert('clickedd');
    }

    displayToastr(message) {
        toastr.info(message);
    }

    subscribe() {
        console.log("trying to subscribe to ws");
        this.ws = new $WebSocket(this.wsEndpoint);
        this.ws.send("connected at "+Date.now());
        this.ws.getDataStream().subscribe(
            res => {
                console.log("receiving");
                var notification = JSON.parse(res.data).value;
                console.log(notification);
                this.notificationService.handleNotification(notification);
            },
            function (e) {
                console.log('Error: ' + e.message);
            },
            function () {
                console.log('Completed');
            }
        );
    }
}
