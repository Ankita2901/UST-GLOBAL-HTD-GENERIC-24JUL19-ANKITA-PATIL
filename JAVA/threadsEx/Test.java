package com.dev.threadsEx;

public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(" T2 thread started..");

		for ( int j = 1 ; j <= 10000 ; j++) {
			System.out.println("j: " +j);
		}

		for( int i = 2 ; i <= 10 ; i++) {


			System.out.println(i);
		}


		System.out.println(" T2 thread terminated..");
	}

}


