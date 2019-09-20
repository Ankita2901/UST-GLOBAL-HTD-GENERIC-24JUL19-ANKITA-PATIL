package com.dev.Lamdaexp;

public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		FunctInt f = () -> {
			try {
				int i = 10/0;
				System.out.println(i);
			}catch(Exception e) {
				System.out.println("Exception..");
			}

			//for ( int i = 1 ; i <= 10;  i++) {
			// System.out.println("i : "+i);
			//  }
		};


		f.printVal();


	}

}
