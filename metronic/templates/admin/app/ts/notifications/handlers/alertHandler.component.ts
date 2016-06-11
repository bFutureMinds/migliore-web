import {Component} from "@angular/core";
import {NotificationService} from "../notification.service";
import {NotificationHandler} from "./notificationHandler";
import {Notification} from "../notification.model";
import {NotificationType} from "../notification.type";
@Component({
    selector : "alert-handler",
    template : ``,
})
export class AlertHandler extends NotificationHandler{

    constructor(private notificationService : NotificationService)
    {
        super(notificationService);
    }

    handleNotification(notification:Notification) {
        if (notification.type == NotificationType.ALERT) {
            toastr.info(notification.description);
        }
    }

}