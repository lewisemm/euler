public class Problem9{
	public static void main(String args[]){
		double a = 2, a2 = 0, b = 0, b2 = 0, c = 0, c2 = 0;
		double total = 0;
		boolean proceed = true;

		while ( (a < 1000) && proceed){
			a2 =  a * a;

			b = a;

			while ( b < (1000 - a) && proceed){

				b2 = b * b;

				c2 = a2 + b2;
				c = java.lang.Math.sqrt(c2);

				total = a + b + c;

				if ( (c2 % c) == 0){

					if (total == 1000.0){
						proceed = false;
					}
					System.out.println("Pythogras candidates " + a + ", " + b + ", " + c + "Total is " + total);
				}	

				b += 1;
			}
			a += 1;
		}
	}
}
