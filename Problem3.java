// artbrute attempting to find prime numbers
// theory: any number not divisible by 2, 3, 5, 7 is prime
public class Problem3{
	public static void main(String args[]){

		double number = 600851475143.00;
		double root = number/2, divisor = 2.00, factor = 0.00, factorRoot = 0.00;
		boolean searching = true;

		while ( (divisor <= root) && searching){
			factor = number / divisor;
			factorRoot = java.lang.Math.sqrt(factor);

			if (factor == java.lang.Math.round(factor)){
				if (possiblyPrime(factor)){
					if ( (factor % factorRoot) != 0){
						if (!divisibleByPrime(factor)){
							searching = false;
							System.out.println("Divisor is " + divisor);
							System.out.println("Greatest prime is " + factor);
						}
					}
				}
			}
			
			
			
			divisor += 1;
		}

	}

	public static boolean divisibleByPrime(double factor){
	// testing whether number os divisible by other prime numbers
	// these types of numbers usually pass possiblyPrime() tests
		double root = java.lang.Math.sqrt(factor);
		boolean primeStatus = true, divisible = false;
		double i = 2.00;

		while ( (i < root) && primeStatus){
			if (possiblyPrime(factor)){
				if ( (factor % i) == 0){
					System.out.println(factor + " is divisible by " + i);
					primeStatus = false;
					divisible = true;		
				}
			}
		
			i += 1;

		}
		return divisible;
						
	}
	
	public static boolean possiblyPrime(double factor){
		boolean possibly = false;

		if ( (factor % 2) != 0){
                                if ( (factor % 3) != 0){
                                        if ( (factor % 5) != 0){
                                                if ( (factor % 7) != 0){
							possibly = true;
						}
					}
				}
		}
		return possibly;
	}
}
