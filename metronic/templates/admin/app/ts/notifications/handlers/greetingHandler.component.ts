import {Component} from "@angular/core";
import {NotificationService} from "../notification.service";
import {NotificationHandler} from "./notificationHandler";
import {Notification} from "../notification.model";
import {NotificationType} from "../notification.type";
@Component({
    selector : "greeting-handler",
    template : ``,
})
export class GreetingHandler extends NotificationHandler{

    constructor(private notificationService : NotificationService)
    {
        super(notificationService);
    }

    handleNotification(notification:Notification) {
        if(notification.type == NotificationType.GREETING)
        {
            toastr.info(notification.description,"Greetings!!");
        }
    }

}