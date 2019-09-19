import java.util.Scanner;
public class Day
{
public static void main(String args[])
{
Scanner sc= new Scanner(System.in);

System.out.println( "Enter the day(sunday-saturday):");
int dy=sc.nextInt();
switch(dy)
{
case 1:System.out.println( "first day" );
       break;
case 2:System.out.println( "second day" );
       break;
case 3:System.out.println( "third day" );
       break;
case 4:System.out.println( "fourth day" );
       break;
case 5:System.out.println( "fifth day" );
       break;
case 6:System.out.println( "sixth day" );
       break;
case 7:System.out.println( "seveth day" );
       break;
default:System.out.println( "invalid day");
}
}
}