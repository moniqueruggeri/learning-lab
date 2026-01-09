#include <stdio.h>

int main ()
{
    int a, i;

    do {
        printf("Introduza um valor entre 1 e 9: ");
        scanf ("%d", &a);
        if ((a<1) || (a<9)) printf ("Vai contra um comboio!! \n\n");
    } while ((a<1) || (a<9));
    printf("\n\n");
    for (i=0; i < a; i++)
    {
        printf("%d", a);
    }

    printf("\n\n ADEUS até a próxima !!!! \n\n");
    for ( i = 0; i < 10; i++) printf ("A");
    
    return 0;
    
}
