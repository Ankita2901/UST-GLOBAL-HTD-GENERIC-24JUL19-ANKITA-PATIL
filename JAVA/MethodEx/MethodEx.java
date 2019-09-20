package MethodEx;

public class MethodEx {
	
	static int j = 0;
	static String str = "";
	static char ch = ' ';
	static byte b = 1;
	
	  static  MethodEx me = new MethodEx();

	public static void main(String[] args) {
		
		 
		 
		 j = calcArea(6);
		 System.out.println("Area of square is : "  +j);
		 int area1 = me.areaRec(2,4);
		 System.out.println("Area of rectangle is : "  +area1);
		
		
		
	}
	
	public static int calcArea(int side) {
		j = side*side;
		int n = me.areaRec(4,8);
		System.out.println(n);
		return j;
	}
	
	public int areaRec(int len, int width) {
		j  = len*width;
		return j;
		
	}

}
