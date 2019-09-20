package com.dev.string;

public class ElementSr {

	public static void main(String[] args) {
		int[] arr = { 10, 20 , 30, 40, 50, 60, 70};
		int m = 0;
		int n = arr.length-2;
		int l = arr.length-1;
		int sum = m+l/2;
		System.out.println(arr[sum]+arr[m]+arr[n]);
		System.out.println();
		int k = m+n/2;
		System.out.println(arr[k]);
		int [] arr1 = {10,20,30,40,50,60,70,80};
		int  res = arr1[3]+arr1[4];
		System.out.println(res);

	}

}
