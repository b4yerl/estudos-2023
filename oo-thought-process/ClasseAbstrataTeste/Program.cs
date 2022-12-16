using ClasseAbstrataTeste.Models;

Stack<Shape> pilha = new Stack<Shape>();

pilha.Push(new Rectangle(5, 3));
pilha.Push(new Circle(4));

while(pilha.Count > 0)
{
  Console.WriteLine(pilha.Pop().GetArea().ToString("0.##"));
}