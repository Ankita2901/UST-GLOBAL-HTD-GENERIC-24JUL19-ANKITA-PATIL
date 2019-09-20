package com.dev.USTglobal.searching;

public class BSearchRecursive {
	static int [] a = {1,4,5,30};

	public static int binarySearch(int[] arr, int low, int high, int data ) {

		int mid = (low+high)/2;
		if(low<=high) {
			if(arr[mid]==data) {
				return mid;
			}else if(arr[mid]<data) {
				return binarySearch(arr,mid+1,high,data);
			}else {
				return binarySearch(arr,low,mid-1,data);
			}
		}
		return -1;
	}
	public static void main(String[] args) {

		System.out.println(binarySearch(a,0, 4, 5));

	}

}
