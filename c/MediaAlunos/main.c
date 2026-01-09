#include <stdio.h>

// Variável Global
int turma[3];

//-----------------------

void recebeValores() {
    int j;

    for (j=0; j<3; j++) {
        printf("Nota do aluno %d:", j+1);
        scanf("%d", &turma[j]);
    }
}

//----------------------

void mostraValores (){
    int j;
    for (j = 0; j < 3; j++)
    {
        printf("Nota do aluno %d e %d: \n", j+1, turma[j]);
    }
}

//---------------------

void passa_1a5() {
    int j;

    for ( j = 0; j < 3; j++)
    {
        switch (turma[j])
        {
        case 1:
        case 2:
        case 3:
        case 4: 
            printf("A nota do aluno %d passou para 1 \n", j+1);
            break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            printf("A nota do aluno %d passou para 2\n", j+1);
            break;
        case 10:
        case 11:
        case 12:
        case 13:
            printf("A nota do aluno %d passou para 3 \n", j+1);
            break;
        case 14:
        case 15:
        case 16:
        case 17:
            printf("A nota do aluno %d passou para 4 \n", j+1);
            break;
        case 18:
        case 19:
        case 20:
            printf("A nota do aluno %d passou para 5\n", j+1);
            break;
        default:
            printf("A nota do aluno %d é inválida! \n, j+1");
        }
    }
    }
    
//-------------------------

void mostraMedia() {
    int j;

    float soma, media;

    soma=0;
    for ( j = 0; j < 3; j++)
    {
        soma = soma + turma[j];
    }

    media = soma/3;
    printf("A media e %.3f!!\n", media);
}

//-----------------------------

int main(){
    recebeValores();
    printf("\n ----------------------\n");

    mostraValores();
    printf("\n ----------------------\n");

    passa_1a5();
    printf("\n ----------------------\n");

    mostraMedia();

    printf("\n Acabou! \n");

    return 0;

}