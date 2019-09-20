package com.dev.polymorphism;

public class Dynamic {

	static Dynamic c = new Dynamic();

	public int add(int i, int j) {
		int add = i + j;
		System.out.println("Late binding polymorphism : "+add);
		return add;
	}

	public Dynamic() {
		System.out.println("Early binding");
	}

	public static void main(String[] args) {
		c.add(1,2);

	}

}
