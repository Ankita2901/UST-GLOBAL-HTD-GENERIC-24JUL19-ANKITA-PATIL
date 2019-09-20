package com.dev.collection;

import java.util.HashSet;

import com.dev.encapsulation.Employee;

public class C2 {

	public static void main(String[] args) {
		HashSet<Employee> hs = new HashSet<Employee>();

		Employee e = new Employee();
		e.setName("ankita");
		e.setId(20);
		e.setEmail("ankita@gmail.com");
		e.setPassword("ant45!");

		Employee e1 = new Employee();
		e1.setName("shilpa");
		e1.setId(30);
		e1.setEmail("shilpa@gmail.com");
		e1.setPassword("dhip45*");

		Employee e2 = new Employee();
		e2.setName("aishwarya");
		e2.setId(40);
		e2.setEmail("aishwarya@gmail.com");
		e2.setPassword("vru893#");

		boolean b = hs.add(e);
		boolean b1 = hs.add(e1);
		boolean b2 = hs.add(e2);

		System.out.println(hs);

		e.setEmail("ank43@gmail.com");
		e1.setEmail("shr54@gmail.com");
		e2.setEmail("aish@ymail.com");


		System.out.println("Output of add(): "+b+" "+b1+" "+b2);
		System.out.println(hs);




	}

}
