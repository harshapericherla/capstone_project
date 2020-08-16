import java.util.*;
class eleven
{
    public static void main(String args[])
  {
      HashMap m = new HashMap();
      m.put("1001","sunil");
      m.put("1002","harish");
      Set s = m.keySet();
     for(Object o:s)
    {
       String str = (String)o;
       System.out.println(str);
     String value = (String)m.get(o);
     System.out.println(value);
   }
}
}