package com.dev.encapsulation;

import java.util.HashSet;

public class DogIntImp implements DogInt {

	HashSet<Dog> hs = new HashSet<Dog>();

	@Override
	public boolean addDog(Dog dog) {
		// TODO Auto-generated method stub
		if(dog!=null) {
			hs.add(dog);
			return true;
		}
		return false;
	}

	@Override
	public void getDog() {
		// TODO Auto-generated method stub
		System.out.println(hs);

	}



	@Override
	public boolean removeDog(Dog dog) {
		// TODO Auto-generated method stub

		boolean b =	hs.remove(dog);
		if(b) {
			return true;
		}
		return false;
	}





}
