package com.dev.inherirtance;

public class son extends Father{
	static son s = new son();
	String name = "Prateek";

	@Override
	public void printName() {

		System.out.println(name+" "+super.name+" "+f.lastName);
		super.printName();

	}


	public static void main(String[] args) {

		s.printName();
	}

}
