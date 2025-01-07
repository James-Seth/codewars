//Describtion:
// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran, Chars in Haskell), check if the array contains three and two of the same values.
// Examples

// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

//Solution:
using System;
using System.Linq;

public class Kata
{
    public static bool CheckThreeAndTwo(string[] array)
    {
        var gData = array.GroupBy(x=>x).Select(x=>x.Count()).ToList();
        return (gData.Any(x=>x==3) && gData.Any(x=>x==2));
    }
}

//Other solutions:
using System.Linq;

public class Kata
{
  public static bool CheckThreeAndTwo(string[] array)
  {
    return array.GroupBy(s => s).All(g => new[] {2, 3}.Contains(g.Count()));
  }
}