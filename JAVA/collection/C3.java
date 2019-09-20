package com.dev.collection;

import java.util.HashMap;

import com.dev.encapsulation.Dog;

public class C3 {

	public static void main(String[] args) {
		HashMap<String, Dog> hm = new HashMap<String, Dog>();
		Dog d = new Dog();
		d.setAge(1);
		d.setBreed("DM");
		d.setName("scooby");
		d.setColor("brown");

		Dog d1 = new Dog();
		d1.setAge(5);
		d1.setBreed("Dalmation");
		d1.setName("Ronnie");
		d1.setColor("white");


		Dog d2 = new Dog();
		d2.setAge(8);
		d2.setBreed("Pug");
		d2.setName("shero");
		d2.setColor("grey");

		Dog d3 = new Dog();
		d3.setAge(3);
		d3.setBreed("streetdog");
		d3.setName("Rocky");
		d3.setColor("golden");

		hm.put("1", d);
		hm.put("2", d1);
		Dog b =	hm.put("3", d3);
		System.out.println(b);
		System.out.println(hm);


		Dog f =  hm.remove("2");
		System.out.println(f);
		System.out.println(hm);

		System.out.println("Output of containsKey(): " +hm.containsKey("1"));

		System.out.println("Output of containsValue(): " + hm.containsValue(d)); 

		System.out.println(hm.get("1")); 
		System.out.println(hm.size());



	}

}
