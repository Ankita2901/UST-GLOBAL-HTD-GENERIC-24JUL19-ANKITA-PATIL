package com.dev.string;

public class ReverseString {

	public static void main(String[] args) {
		String str1 = "Hello";
		String str2 = " ";
		int l = str1.length();
		for(int i = l-1 ; i >= 0 ; i--) {
			str2 = str2+str1.charAt(i);
			
		}
			System.out.println("Reverse string is: " +str2);	

	}

}
