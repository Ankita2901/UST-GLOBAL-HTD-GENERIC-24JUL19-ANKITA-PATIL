package com.dev.USTglobal.searching;

public class LinearSearch {
	static int[] a = {1,2,4,5};

	public static boolean contains(int[] arr, int value) {

		for( int i = 0; i<arr.length ; i++) {
			if(a[i]==value) 
			{
				return true;
			}
		}
		return false;
	}
	public static void main(String[] args) {

		System.out.println(contains(a,50));
	}

}
