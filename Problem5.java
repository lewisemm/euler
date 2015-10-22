public class Problem5{
	public static void main(String args[]){
		int counter = 400, range;
		boolean searching = true, proceed = true;

		while(searching){

			counter += 10;

			proceed = true;
			range = 21;

			while(proceed && (range > 1) ){
				range -= 1;
				if ( (counter % range) != 0){
					proceed = false;
				}
				
			}
			if (proceed){
				searching = false;
			}
		}

		System.out.println("The smallest multiple is " + counter);	
			
	}
}
