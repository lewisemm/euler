// artbrute's in the house

public class Problem2{
	public static void main(String args[]){

		int a = 1, b = 2, fibo = 0;
		int even = 0;

		while( b < 4000000){
			fibo = a + b;
			a = b;
			b = fibo;
			
			if ( (b % 2) == 0){
                                even += b;
                        }

		}

		System.out.println("The sum of even numbers is " + (even + 2) );
	}
}
