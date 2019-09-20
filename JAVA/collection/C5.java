package com.dev.collection;

import java.util.ArrayList;
//import java.util.TreeSet;

import com.dev.encapsulation.Employee;

public class C5 {

	public static void main(String[] args) {
		ArrayList<Employee> te = new ArrayList<Employee>();

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

		te.add(e);
		te.add(e1);
		te.add(e2);

		System.out.println(te);

		te.trimToSize();
		System.out.println("size of array list aftr trimeToSize() : "+te.size());
	}

}
