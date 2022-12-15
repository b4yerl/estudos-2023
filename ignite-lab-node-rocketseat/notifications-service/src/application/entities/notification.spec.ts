import { Content } from "./content";
import { Notification } from "./notification";

describe('Notification', () => {
  
  test('it should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova mensagem'),
      category: 'social',
      recipientId: 'Example',
    })
  
    expect(notification).toBeTruthy();
  })
  
})