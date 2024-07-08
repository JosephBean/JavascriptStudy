package study06;

public class App {
    public static void main(String[] args) {
        String[][] a = new String[][] {
            {"*"},{"*","*"},{"*","*","*"}
        };
        /*
        for(int i = 0; i < a.length; i++) {
            for(int j = 0; j < a[i].length; j++) {
                System.out.print(a[i][j]);
            }
            System.out.println();
        }
        for(int i = a.length -1; i >= 0; i--) {
            for(int j = 0; j < a[i].length; j++) {
                System.out.print(a[i][j]);
            }
            System.out.println();
        }
        */
        int c = 3;
        for(int i = 0; i < a.length; i++) {
            for(int j = c; j >= 0; j--) { 
                // j : 0, 1, 2
                // c : 3 > 1,2
                if(j < a[i].length) { // (0 < 1) 참, (1 < 1) 거짓, (2 < 1) 거짓
                    //System.out.println("1 > " + j + " : " + a[i].length);
                    System.out.print(a[i][j]);
                } else {
                    //System.out.println("2 > " + j + " : " + a[i].length);
                    System.out.print(" ");
                }        
            }
            System.out.println();
        }
        for(int i = a.length - 1; i >= 0; i--) {
            for(int j = c; j >= 0; j--) { 
                // j : 0, 1, 2
                // c : 3 > 1,2
                if(j < a[i].length) { // (0 < 1) 참, (1 < 1) 거짓, (2 < 1) 거짓
                    //System.out.println("1 > " + j + " : " + a[i].length);
                    System.out.print(a[i][j]);
                } else {
                    //System.out.println("2 > " + j + " : " + a[i].length);
                    System.out.print(" ");
                }        
            }
            System.out.println();
        }
    }
}
