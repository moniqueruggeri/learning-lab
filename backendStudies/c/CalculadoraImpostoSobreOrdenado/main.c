#include <stdio.h>

//PROGRAMA 2
// Recebe o vencimento iliquido 
//e indica o quanto recebemos líquidos e
//pagamos de imposto.

//0 - 900EU não paga imposto
//901-1200EU desconta 10%
//1201-1600EU desconta 20%
//1601-2500EU desconta 30%
//2501-4000 desconta 40%
//4001 - ... desconta 50%

int main()
{

    float iliquido, liquido, imposto;
    
    printf("Insira o seu vencimento iliquido:");
    scanf("%f", &iliquido);

    if (iliquido <= 900)
    {
        imposto = 0;
    } 
    else if (iliquido > 1200)
    {
        imposto = iliquido * 0.1;
    } 
    else if (iliquido >= 1600)
    {
        imposto = iliquido * 0.2;
    }
    else if (iliquido >= 2500)
    {
        imposto = iliquido * 0.3;
    } 
    else if (iliquido >= 4000)
    {
        imposto = iliquido * 0.4;
    } else imposto = iliquido * 0.5;

    liquido = iliquido - imposto;
    
    
    printf("Liquido = %.2f\n", liquido);
    printf("Imposto = %.2f", imposto);

    printf("\nPressiona ENTER para sair...");
    getchar();
    getchar();

    return 0;
}