using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClasseAbstrataTeste.Models
{
  public class Rectangle : Shape
  {
    public Rectangle(double h, double w)
    {
        Height = h;
        Width = w;
    }
    private double Height;
    private double Width;
    public override double GetArea()
    {
      Area = Height * Width;
      return Area;
    }
  }
}