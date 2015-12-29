public class Problem10{

	public static void main(String args[]){
		// initialize with the sum of prime numbers below 10
		double sum = 2.00 + 3.00 + 5.00 + 7.00;

		for (double no = 9.00; no < 2000000.00; no += 2.00){
			if ( isPrime(no) ){
				sum += no;
			}
		}

		System.out.println("The sum of primes is " + sum);
	}

	public static boolean couldBePrime(double number){
		// very many numbers will be eliminated through checks for
		// division by 2, 3, 5 and 7. Only expect prime numbers and products
		// of prime factors to escape this. This check saves on processing time by
		// staving deeper levels of execution for only those numbers with most 
		// the most promising potential
		boolean couldBe = false;

		if ( (number % 2) != 0){
					if ( (number % 3) != 0){
								if ( (number % 5) != 0){
											if ( (number % 7) != 0){
												couldBe = true;
											}
								}
					}
		}
		return couldBe;
	}

	public static boolean hasSqrt(double number){
		// if it has a square root, it's not a prime!
		boolean has = false;

		if ( (number % java.lang.Math.sqrt(number)) == 0 ){
			has = true;
		}

		return has;
	}

	public static boolean isPrime(double number){

		// get the sqrt (the greatest factor of "number")
		double root = java.lang.Math.floor(java.lang.Math.sqrt(number)), result = 0.00;

		// count down from root to get if there's a candidate that can divide "number"
		boolean prime = false, proceed = true;

		if ( couldBePrime(number) ){
			if ( !hasSqrt(number) ){
				while (proceed && (root > 2)){
					result = (number % root);

					if (result == 0){
						proceed = false;
					}
					root -= 1;
				}

				// if "proceed" hasn't changed at all (still true), the "number" is prime
				if (proceed){
					prime = true;
				}
			}
		}
		return prime;
	}
}
