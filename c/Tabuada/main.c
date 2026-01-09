#include <stdio.h>

int main()
{
    int num, i, continuar;

    do
    {
        do
        {
            printf("Digite um valor entre 1 e 9: ");
            scanf("%d", &num);

            if (num < 1 || num > 9)
                printf("Numero invalido, digite novamente");

        } while (num < 1 || num > 9);

        printf("Resultado\n\n");
        for (i = 1; i <= 10; i++)
        {
            int resultado;
            resultado = num * i;
            printf("%d * %d = %d \n", num, i, resultado);
        }

            printf("Deseja continuar? (Sim = 0)\n");
            scanf("%d", &continuar);
            continuar = 0;

    } while (continuar == 0);

    return 0;
}