// artbrute attempting to find prime numbers
// theory: any number not divisible by 2, 3, 5, 7 is prime
// finding the 10001's prime number
public class Problem7{
	public static void main(String args[]){
	
		boolean searching = true;
		// prime count counts instances of prime numbers. Initialized to 1 because we're starting at 3 (already counted 2)
		double primeCount = 1.00, root, prime = 1.00;

		while(searching){

			if (prime == 3 || prime == 5 || prime == 7){
				primeCount += 1;
			}
			else{
				// if it looks like a prime ...
				if (possiblyPrime(prime)){

					// test divisibility by square root
					root = java.lang.Math.sqrt(prime);

					if ( (prime % root) != 0){

						// test whether other prime numbers can divide it
						if (!divisibleByPrime(prime)){
							primeCount += 1;
						}
					}
				}
			}

			if (primeCount == 10001){
				searching = false;
				System.out.println("10001'st prime is " + prime);
			}
			prime += 2;
			
		}

	}

	public static boolean divisibleByPrime(double prime){
	// testing whether number os divisible by other prime numbers
	// these types of numbers usually pass possiblyPrime() tests
		double root = java.lang.Math.sqrt(prime);
		boolean primeStatus = true, divisible = false;
		double i = 2;

		while ( (i < root) && primeStatus){

			if (possiblyPrime(prime)){

				if ( (prime % i) == 0){
					primeStatus = false;
					divisible = true;		
				}
			}
		
			i += 1;

		}
		return divisible;
						
	}
	
	public static boolean possiblyPrime(double prime){
		boolean possibly = false;

		if ( (prime % 2) != 0){
                                if ( (prime % 3) != 0){
                                        if ( (prime % 5) != 0){
                                                if ( (prime % 7) != 0){
							possibly = true;
						}
					}
				}
		}
		return possibly;
	}
}
