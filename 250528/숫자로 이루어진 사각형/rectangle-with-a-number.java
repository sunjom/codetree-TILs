import java.util.Scanner;
public class Main {

    public static void printNum(int n){
        int num = 1;

        for(int i = 0; i < n ; i++){
            for(int e = 0 ; e < n ; e++){
                System.out.print(num++ + " ");
                if(num == 10){
                    num = 1;
                }
            }
            System.out.println();
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int num = 1;

        printNum(n);
    }
}