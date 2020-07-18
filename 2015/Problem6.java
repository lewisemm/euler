public class Problem6{
	public static void main(String args[]){
		int sumSquares = 0, sum = 0;

		for (int i = 1; i < 101; i++){
			sumSquares += (i * i);
			sum += i;
		}

		int squareSum = (sum * sum);

		System.out.println("The difference is " + (squareSum - sumSquares));
	}
}
