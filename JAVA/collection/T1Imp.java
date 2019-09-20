package com.dev.collection;

public class T1Imp implements T1Int {
	T1Imp mp = new T1Imp();

	@Override
	public boolean add() {
		// TODO Auto-generated method stub




		return false;
	}

	@Override
	public void get() {
		// TODO Auto-generated method stub
		System.out.println(mp);

	}

	@Override
	public void put() {
		// TODO Auto-generated method stub
		System.out.println(mp);

	}

	@Override
	public boolean remove() {
		// TODO Auto-generated method stub
		mp.remove();
		return false;
	}

}
