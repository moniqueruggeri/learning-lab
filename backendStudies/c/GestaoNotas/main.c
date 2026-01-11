#include <stdio.h>

// Gestão de uma turma com 3 alunos

// Array que guarda as notas de matemática
// Array que guarda as notas de inglês
// Array que guarda as notas de português
// Array que guarda as notas de história

// Carrega as notas das 4 disciplinas que devem ser validadas de 1 a 20.
// Depois permite as seguintes opções (Tipo menu):

// 1 - Mostrar a media de todas as disciplinas.
// 2 - Indica qual a disciplina que tem mais positivas.
// 3 - Mostra os alunos que reprovaram e mostra as notas deles. - Para reprovar é necessario ter uma nota inferior a 8, ou ter média negativa.
// 4 - Indica qual o melhor aluno ( ou melhores ) da turma ( melhor = meior media )

// 0 - sair

// int turma[3];
int notasMat[3], notasIng[3], notasPort[3], notasHist[3];

void recebeNotas()
{
    int i;

    for (i = 0; i < 3; i++)
    {
        do
        {
            printf("Nota de Matematica do aluno %d: ", i + 1);
            scanf("%d", &notasMat[i]);
            if (notasMat[i] < 1 || notasMat[i] > 20)
            {
                printf("\nA nota deve ser entre 1 e 20!\n");
            }

        } while (notasMat[i] < 1 || notasMat[i] > 20);
    }

    for (i = 0; i < 3; i++)
    {
        do
        {
            printf("Nota de Ingles do aluno %d: ", i + 1);
            scanf("%d", &notasIng[i]);
            if (notasIng[i] < 1 || notasIng[i] > 20)
            {
                printf("\nA nota deve ser entre 1 e 20!\n");
            }
        } while (notasIng[i] < 1 || notasIng[i] > 20);
    }

    for (i = 0; i < 3; i++)
    {
        do
        {
            printf("Nota de Portugues do aluno %d: ", i + 1);
            scanf("%d", &notasPort[i]);
            if (notasPort[i] < 1 || notasPort[i] > 20)
            {
                printf("\nA nota deve ser entre 1 e 20!\n");
            }
        } while (notasPort[i] < 1 || notasPort[i] > 20);
    }

    for (i = 0; i < 3; i++)
    {
        do
        {
            printf("Nota de Historia do aluno %d: ", i + 1);
            scanf("%d", &notasHist[i]);
            if (notasHist[i] < 1 || notasHist[i] > 20)
            {
                printf("\nA nota deve ser entre 1 e 20!\n");
            }
        } while (notasHist[i] < 1 || notasHist[i] > 20);
    }
}

void mostrarMedias()
{
    int i;
    float mediaMat = 0, mediaIng = 0, mediaPort = 0, mediaHist = 0;

    for (i = 0; i < 3; i++)
    {
        mediaMat += notasMat[i];
        mediaIng += notasIng[i];
        mediaPort += notasPort[i];
        mediaHist += notasHist[i];
    }

    mediaMat /= 3;
    mediaIng /= 3;
    mediaPort /= 3;
    mediaHist /= 3;

    printf("\nA media de Matematica e: %.2f", mediaMat);
    printf("\nA media de Ingles e: %.2f", mediaIng);
    printf("\nA media de Portugues e: %.2f", mediaPort);
    printf("\nA media de Historia e: %.2f", mediaHist);
}

void maisPositivas()
{

int contMat = 0, contIng = 0, contPort = 0, contHist = 0;
int i;

for ( i = 0; i < 3; i++)
{
    if (notasMat[i] >= 10) contMat++;
    if (notasIng[i] >= 10) contIng++;
    if (notasPort[i] >= 10) contPort++;
    if (notasHist[i] >= 10) contHist++;
}

int contadores[4] = {contMat, contIng, contPort, contHist};
char *disciplinas[4] = {"Matematica", "Ingles", "Portugues", "Historia"};

int maior = contadores[0];
int indice = 0;

for ( i = 0; i < 4; i++)
{
    if (contadores[i] > maior)
    {
        maior = contadores[i];
        indice = i;
    }
}
    printf("\nA disciplina com mais notas positivas é %s (%d positivas)\n", disciplinas[indice], maior);
}

void reprovados()
{
    int i;

    printf("\n----- Alunos reprovados ---------\n");

    for (i = 0; i < 3; i++)
    {
        float mediaAluno = (notasHist[i] + notasIng[i] + notasPort[i] + notasHist[i]) / 4.0;

        if (notasHist[i] < 8 || notasIng[i] < 8 || notasMat[i] < 8 || notasPort[i] || mediaAluno < 10)
        {
            printf("\n\nO aluno %d foi reprovado.", i+1);
            printf("Notas: Mat %.1d, Ing %.1d, Port %.1d, Hist %.1d\n", notasMat[i], notasIng[i], notasPort[i], notasHist[i]);
        }
    }
}

void melhorAluno() {
    int i;
    float media[3];

    for ( i = 0; i < 3; i++)
    {
        media[i] = (notasMat[i] + notasHist[i] + notasIng[i] + notasPort[i]) / 4.0;
    }

    float maior = media[0];

    for ( i = 1; i < 3; i++)
    {
        if(media[i] > maior)
        maior = media[i];
    }

    printf("\n--- Melhor(es) aluno(s) ---\n");

    for ( i = 0; i < 3; i++)
    {
        if (media[i] == maior) {
            printf ("Aluno %d com media %.2f\n", i + 1, media[i]);
        }
    }
}
    
    void menu()
    {
        printf("\n\n---- Menu -----\n");
        printf("1 - Mostrar medias das disciplinas\n");
        printf("2 - Disciplina com mais positivas\n");
        printf("3 - Alunos reprovados\n");
        printf("4 - Melhor aluno\n");
        printf("0 - Sair\n");
    }
    

int main()
{
    int opcao;

    recebeNotas();

    do
    {
        menu();
        printf("\nEscolha uma opção: ");
        scanf("%d", &opcao);

        switch (opcao)
        {
        case 1:
            mostrarMedias();
            break;
        case 2:
            maisPositivas();
            break;
        case 3:
            reprovados();
            break;
        case 4:
            melhorAluno();
            break;
        case 0:
            printf("\nEncerrando programa...\n");
            break;
        default:
            printf("\nOpcao invalida!\n");
        }
    } while (opcao !=0);
    
    return 0;
}
