package com.dev.project;

import java.util.HashMap;

public class GmailData extends GmailImp {



	public static void main(String[] args) {
		HashMap<String, Gmail> hm = new HashMap<String, Gmail>();


		Gmail g = new Gmail();
		g.setUser_Id(10);
		g.setUser_name("Ankita");
		g.setPassword("$56ghy");
		g.setEmail("ankita@gmail.com");
		g.setMessage("Status-average");
		g.setMessage_id("AN5678");
		g.setMail("Current Balance");
		g.setMail("your insurance policy");
		g.setMail("Tax Payable");

		Gmail g1 = new Gmail();
		g1.setUser_Id(10);
		g1.setUser_name("Aishwarya");
		g1.setPassword("#89htu");
		g1.setEmail("aishwarya@gmail.com");
		g1.setMessage("Status-empty");
		g1.setMessage_id("AI1234");

		Gmail h = hm.put("1", g);
		Gmail h1 = hm.put("2", g1);
		System.out.println("Database: " +hm);

		Gmail [] gmail = {g , g1};

		for(int i = 0 ; i <gmail.length ; i++ ) {

			System.out.println("Accounts : User_Id : "+gmail[i].getUser_Id()+" , User_Name : "+gmail[i].getUser_name()+" , Password : "+gmail[i].getPassword()+" , Email : "+gmail[i].getEmail());

			System.out.println("Inbox : Message_Id : "+gmail[i].getMessage_id()+" , User_Id : "+gmail[i].getUser_Id()+" , Message : "+gmail[i].getMessage());
		}

		int Press = 1;
		System.out.println(" Press 1 to Login" );
		System.out.println(" Press 2 to Register");

		if(Press==1)
		{
			System.out.println("Email : " +g.getEmail()+", Password : "+g.getPassword());
			System.out.println(" Press option 'A' to compose");
			System.out.println(" Press option 'B' to show inbox");

			char option = 'A';

			if( option=='A')
			{
				String Email_id = g.getEmail();
				if(Email_id== g.getEmail()) {

					System.out.println(" Email accepted : Email_Id "+g.getEmail()+", Message : "+g.getMessage());
				}
				else
				{
					System.out.println(" Email accepted : Email_Id "+g1.getEmail()+", Message : "+g1.getMessage());
				}
			}


			else if( option== 'B')
			{
				System.out.println(" Mails :  "+g.getMail());

			}
		}

		else if(Press==2) {

			System.out.println(" Create Account : User_name : "+g.getUser_name()+ " , Password :  " +g.getPassword()+ ", Email :  " +g.getEmail());


		}

	}


}


