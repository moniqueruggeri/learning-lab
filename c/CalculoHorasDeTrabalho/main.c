#include <stdio.h>
// Programa 1 - Recebe o numero de trabalho
// numa semana e mostra quanto ganha nessa semana.´

// Valor hora do vencimento: primeiras 20h ganha 8 euros,
// no intervalo de 21 a 30 ganha 11 euros, no intervalo de
// 31 a 45 ganha 15 euros/h, tudo o que seja acima de 45h
// é valorizado a 20 euros/h.

int main()
{
    int hrs;
    int h1 = 0, h2 = 0, h3 = 0, h4 = 0;
    float v1 = 0, v2 = 0, v3 = 0, v4 = 0;
    float receber = 0;

    printf("Insira o numero de horas trabalhadas: ");
    scanf("%d", &hrs);

    printf("Voce trabalhou um total de %d horas nessa semana.\n", hrs);

    if (hrs >= 60)
    {
        printf("Nao e permitido trabalhar mais do que 60h/semana");
    }
    else
    {
        if (hrs <= 20)
        {
            h1 = hrs;
        } else
        {
            h1 = 20;
        }

        v1 = h1 * 8;
        
        if (hrs > 20)
        {
            if (h2 <= 30)
            {
                h2 = hrs -20;
            } else h2 = 10;
        
            v2 = h2 * 11;
        } 
        if (hrs)
        {
            /* code */
        }
        
        
    }

    receber = v1 + v2 + v3 + v4;
    printf("Nas primeiras %d, ganhou %.2fEU", h1, v1);
    printf("Tens um total de %d euros nessa semana. \n", receber);

    printf("\nPressiona ENTER para sair...");
    getchar(); // consome o \n que sobrou do scanf
    getchar(); // espera um ENTER novo

    return 0;
}