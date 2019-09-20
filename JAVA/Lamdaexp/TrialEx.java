package com.dev.Lamdaexp;

public class TrialEx {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		TrialL t = () -> {
			int i = 2;
			while(i<=10) {
				i ++;
				System.out.println(i);
			}
			
		};
			TrialL f = () ->{
				try {
					int add = 10+0/0;
					System.out.println(add);
				}catch(Exception e){
					System.out.println("caught!!");
				}
				
			};
			
			
	
			
		
t.display();
		f.display();
	}

}
