#include <stdio.h>

int main()
{
    char opcao;

    printf("###################### ATM ###################\n");
    printf("Notas disponiveis: [ 5 ] [ 10 ] [ 20 ] [ 50 ]");
    printf("\n##############################################\n\n");

    do
    {
        int valor;

        do
        {

            printf("Introduza o valor a ser levantado: ");
            scanf("%d", &valor);

            if (valor < 5 && valor > 200 && valor % 5 != 0)
            {
                printf("NAO E POSSIVEL FAZER A OPERACAO!");
            }

            int notas[] = {50, 20, 10, 5};
            int limite = 3;
            int restante = valor;
            int qntNotas;

            for (int i = 0; i < 4; i++)
            {
                qntNotas = restante / notas[i];

                if (qntNotas > limite)
                {
                    qntNotas = limite;
                }

                restante -= qntNotas * notas[i];

                if (qntNotas > 0)
                {
                    printf("[ %d ] = %d nota(s)\n", notas[i], qntNotas);
                }
            }

            if (restante > 0)
            {
                printf("\nNao ha notas suficientes para realizar o saque!\n");
            }

        } while (valor < 5 && valor > 200 && valor % 5 != 0);

        printf("Continuar (c) ou Sair(s)?");
        scanf(" %c", &opcao);

    } while (opcao == 'c' || opcao == 'C');

    return 0;
}