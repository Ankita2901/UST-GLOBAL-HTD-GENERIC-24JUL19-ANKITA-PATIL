package com.dev.inherirtance;

public class brand extends car {

	static brand b = new brand();
	String br = "Nissan";

	@Override
	public void printname() {
		System.out.println(super.name+"  "+br);
	}

	public static void main(String[] args) {

		b.printname();
	}


}
