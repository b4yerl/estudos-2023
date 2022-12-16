using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClasseAbstrataTeste.Models
{
  public class Circle : Shape
  {
    public Circle(double radius)
    {
        Radius = radius;
    }

    private double Radius;
    public override double GetArea()
    {
      Area = Math.PI * Math.Pow(Radius, 2);
      return Area;
    }
  }
}