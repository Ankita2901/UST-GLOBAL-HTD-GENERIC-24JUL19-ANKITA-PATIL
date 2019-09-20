package com.dev.USTglobal.searching;

public class binarySearch {
	public static int binarySearch(int[] arr, int key ) {
		int start = 0;
		int end = arr.length-1;
		while(start<=end)
		{
			int mid = (start+end)/2;
			if(key==arr[mid]) {
				return mid;
			}
			else if(key<arr[mid]) {
				end = mid-1 ;
			}
			else
				start = mid + 1;
		}
		return -1;
	}
	public static void main(String[] args) {
		int[] a = {1,5,7,9}; 
		int res = binarySearch(a,9);
		System.out.println(res);

	}



}
