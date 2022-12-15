import { Notification } from "../../src/application/entities/notification"
import { NotificationsRepository } from "../../src/application/repositories/notification-repository"


export class InMemoryNotificationsRepository implements NotificationsRepository {
  public notificationsList: Notification[] = []
  
  async create(notification: Notification) {
    this.notificationsList.push(notification)
  }
}