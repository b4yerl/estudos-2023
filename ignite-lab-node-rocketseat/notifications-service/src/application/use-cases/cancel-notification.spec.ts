import { makeNotification } from "@test/factories/notification-factory"
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository"
import { CancelNotification } from "./cancel-notification"
import { NotificationNotFound } from "./errors/notification-not-found-error"

describe('Cancel notification', () => {
  test('it should be able to cancel notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const cancelNotification = new CancelNotification(notificationsRepository)

    const notification = makeNotification()

    await notificationsRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id 
    })

    expect(notificationsRepository.notificationsList[0].canceledAt).toEqual(expect.any(Date))
  })

  test('it should not be able to cancel a notification if it does not exist', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const cancelNotification = new CancelNotification(notificationsRepository)

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-id' 
      });
    }).rejects.toThrow(NotificationNotFound)
  })
})

