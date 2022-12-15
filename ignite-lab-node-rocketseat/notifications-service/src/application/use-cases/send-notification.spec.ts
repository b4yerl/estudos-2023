import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository"
import { SendNotification } from "./send-notification"

describe('Send notification', () => {
  test('it should be able to send notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const sendNotification = new SendNotification(notificationsRepository)

    const {notification} = await sendNotification.execute({
      recipientId: '1234',
      content: 'Welcome!',
      category: 'social'
    })

    expect(notificationsRepository.notificationsList[0]).toEqual(notification);
  })
})

