package com.dev.polymorphism;

public class late extends Dynamic {
	static late l = new late();

	@Override
	public int add(int i, int j) {
		int mul = i*j;
		System.out.println(mul+" "+super.add(1,2));
		return mul;
	}

	public static void main(String[] args) {
		l.add(1,2);

	}

}
