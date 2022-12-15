import { Content } from "./content"

describe('Notification content', () => {
  
  test('it should be able to create a notification content', () => {
    const content = new Content('Você recebeu um pedido de amizade')
  
    expect(content).toBeTruthy();
  })
  
  test('it should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('Oi')).toThrow();
  })
  
  test('it should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('Oi'.repeat(241))).toThrow();
  })
})