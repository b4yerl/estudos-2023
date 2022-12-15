import { makeNotification } from "@test/factories/notification-factory"
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository"
import { ReadNotification } from "./read-notification"
import { NotificationNotFound } from "./errors/notification-not-found-error"

describe('Read notification', () => {
  test('it should be able to read notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const readNotification = new ReadNotification(notificationsRepository)

    const notification = makeNotification()

    await notificationsRepository.create(notification);

    await readNotification.execute({
      notificationId: notification.id 
    })

    expect(notificationsRepository.notificationsList[0].readAt).toEqual(expect.any(Date))
  })

  test('it should not be able to read a notification if it does not exist', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const readNotification = new ReadNotification(notificationsRepository)

    expect(() => {
      return readNotification.execute({
        notificationId: 'fake-id' 
      });
    }).rejects.toThrow(NotificationNotFound)
  })
})

