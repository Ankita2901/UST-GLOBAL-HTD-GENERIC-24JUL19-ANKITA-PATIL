package com.dev.string;


public class ReverseArray {
	
	public static void main(String[] args) {
		int [] arr = { 80, 90, 100, 120};
		
		int i = arr.length;
		for(int j = i-1 ; j>=0 ; j--) {
			System.out.println(arr[j]);
		}

	}

}
