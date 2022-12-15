import { makeNotification } from "@test/factories/notification-factory"
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository"
import { NotificationNotFound } from "./errors/notification-not-found-error"
import { UnreadNotification } from "./unread-notification"

describe('Unread notification', () => {
  test('it should be able to unread notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const unreadNotification = new UnreadNotification(notificationsRepository)

    const notification = makeNotification({readAt: new Date()})

    await notificationsRepository.create(notification);

    await unreadNotification.execute({
      notificationId: notification.id 
    })

    expect(notificationsRepository.notificationsList[0].readAt).toBeNull();
  })

  test('it should not be able to unread a notification if it does not exist', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const unreadNotification = new UnreadNotification(notificationsRepository)

    expect(() => {
      return unreadNotification.execute({
        notificationId: 'fake-id' 
      });
    }).rejects.toThrow(NotificationNotFound)
  })
})

