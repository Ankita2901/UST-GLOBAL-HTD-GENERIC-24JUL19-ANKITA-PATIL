package com.dev.project;

import java.util.HashMap;

public class GmailImp implements GmailInterface {
	HashMap<String, Gmail> hm = new HashMap<String, Gmail>();
	@Override
	public void put(Gmail a) {
		System.out.println(hm);	

	}



	@Override
	public void get() {
		// TODO Auto-generated method stub

	}

	@Override
	public boolean remove(Gmail a) {
		Gmail b = hm.remove(a);
		return true;

	}



}
