package StringMtd;

public class StringMtd {

	public static void main(String[] args) {
		String str="Scooby";
		String str1="Fifi";
		
		int p = str1.indexOf('c');
		System.out.println(p);
		
		String s = str.toUpperCase();
		System.out.println(s);
		
		String h = s.toLowerCase();
		System.out.println(h);
		
		String a = str.substring(3);
		System.out.println("Output for substring(): " +a);
		
		String  q = str.substring(3,6);
		System.out.println("Output for substring(int,int):" +q);
		

	}

}
