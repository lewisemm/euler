public class Problem4{
	public static void main(String args[]){
		boolean searching = true;
		int counter = 1000000;

		while( (counter > 0) && searching){
			if (isPalindrome(counter)){
				if (palindromeDivisor(counter)){
					searching = false;	
				}
			}
			counter -= 1;
		}
		
	}

	public static boolean isPalindrome(int number){
		
		java.lang.StringBuffer sb = new java.lang.StringBuffer(), sbReverse = new java.lang.StringBuffer();

		sb.append(Integer.toString(number));

		int length = sb.toString().length();

		while (length > 0){
			sbReverse.append(sb.charAt(length-1));
			length -= 1;
		}

		boolean palindrome = false;

		if (sb.toString().equals(sbReverse.toString())){
			palindrome = true;
		}
		return palindrome;
	}

	public static boolean palindromeDivisor(int number){
		int div = 1000, fact = 0;
		boolean searching = true, found = false;

		while ( (div > 499) && searching){
			div -= 1;
			if ( (number % div) == 0){
				fact = number /div;
				if ( (Integer.toString(div).length() == 3) && (Integer.toString(fact).length() == 3)){
          				searching = false;
					found = true;
				}
			}
		}
		
		return found;
	}

}
