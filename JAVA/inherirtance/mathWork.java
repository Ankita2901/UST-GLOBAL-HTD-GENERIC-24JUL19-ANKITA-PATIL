package com.dev.inherirtance;

public class mathWork {

	static mathWork m = new mathWork();

	public int add(int i, int j) {
		int add = i + j;
		System.out.println("addition min =" +add);
		return add;
	}

	public int add(int i, int j, int k, int n) {
		int add = i + j + k + n;
		System.out.println("addition max  =" +add);
		return add;
	}

	public int add(int i, int j, int k) {
		int add = i + j + k ;
		System.out.println("addition med  =" +add);
		return add;
	}

	public int sub(int i, int j) {
		int sub = i - j;
		System.out.println("subtraction min =" +sub);
		return sub;
	}

	public int sub(int i, int j, int k, int l) {
		int sub = i - j - k - l;
		System.out.println("subtraction max =" +sub);
		return sub;
	}

	public int sub(int i, int j, int k) {
		int sub = i - j - k;
		System.out.println("subtraction mid =" +sub);
		return sub;
	}

	public int div(int i, int j) {
		int div = i / j;
		System.out.println("division min =" +div);
		return div;
	}


	public int div(int i, int j, int k, int l) {
		int div = i / j / k / l;
		System.out.println("division  max =" +div);
		return div;
	}


	public int div(int i, int j, int k) {
		int div = i / j / k ;
		System.out.println("division  mid =" +div);
		return div;
	}



	public int mul(int i, int j) {
		int mul = i * j;
		System.out.println("multiplication min =" +mul);
		return mul;
	}

	public int mul(int i, int j, int k, int l) {
		int mul = i * j * k* l;
		System.out.println("multiplication max =" +mul);
		return mul;
	}

	public int mul(int i, int j, int k) {
		int mul = i * j * k;
		System.out.println("multiplication mid =" +mul);
		return mul;
	}

	public int mod(int i, int j) {
		int mod = i % j;
		System.out.println("modulus min =" +mod);
		return mod;
	}

	public int mod(int i, int j, int l, int k) {
		int mod = i % j % l % k;
		System.out.println("modulus max  =" +mod);
		return mod;
	}

	public int mod(int i, int j, int l) {
		int mod = i % j % l ;
		System.out.println("modulus mid  =" +mod);
		return mod;
	}



	public static void main(String[] args) {
		m.add(1, 2);
		m.add(1, 2, 3);
		m.add(1, 3, 4, 1);
		m.sub(1, 2);
		m.sub(1, 2, 3);
		m.sub(1, 2, 3, 4);
		m.div(1, 2);
		m.div(1, 2, 3);
		m.div(1, 2, 2, 1);
		m.mul(1, 2);
		m.mul(1, 2, 3);
		m.mul(1, 2, 2, 1);
		m.mod(1, 2);
		m.mod(1, 2, 3);		
		m.mod(1, 2, 2, 1);

	}

}
