package com.dev.Lamdaexp;

public class FunIct {



	public static void main(String[] args) {
		// TODO Auto-generated method stub

		FunInt2  f = (int i) -> {
			for(int j = 1; j<=i; j++) {
				System.out.println(j);
			}
		};



		f.printVal(3);

	}


}

