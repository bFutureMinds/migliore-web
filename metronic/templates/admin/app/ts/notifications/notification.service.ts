import {Injectable, EventEmitter} from "@angular/core";
import {Notification} from "./notification.model";
@Injectable()
export class NotificationService{

    public notificationEvent : EventEmitter<Notification>;

    constructor(){
        this.notificationEvent = new EventEmitter();
    }
    
    public handleNotification(notification : Notification ) {
        this.notificationEvent.emit(notification);
    }
}