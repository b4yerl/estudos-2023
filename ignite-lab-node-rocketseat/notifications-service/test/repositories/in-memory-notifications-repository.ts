import { Notification } from "@application/entities/notification"
import { NotificationsRepository } from "@application/repositories/notification-repository"
import { isTemplateMiddle } from "typescript";


export class InMemoryNotificationsRepository implements NotificationsRepository {
  public notificationsList: Notification[] = []

  
  async create(notification: Notification) {
    this.notificationsList.push(notification)
  }
  
  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notificationsList.find(
      (item) => item.id == notificationId);
      
      if(!notification) {
        return null
      }
      
      return notification
    }
    
    async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
      return this.notificationsList.filter(
        (notification) => notification.recipientId == recipientId
      );
    }
    
    async countManyByRecipientId(recipientId: string): Promise<number> {
      return this.notificationsList.filter(
        (notification) => notification.recipientId == recipientId
      ).length;
    }
  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notificationsList.findIndex(
      (item) => item.id == notification.id
    )

    if(notificationIndex >= 0 ) {
      this.notificationsList[notificationIndex] = notification;
    }
  }
}