import {NotificationService} from "../notification.service";
import {Notification} from "../notification.model";
export abstract class NotificationHandler{

    constructor(notificationService : NotificationService){
        notificationService.notificationEvent.subscribe( notification => this.handleNotification(notification))
    }

    abstract handleNotification(notification : Notification) 

}