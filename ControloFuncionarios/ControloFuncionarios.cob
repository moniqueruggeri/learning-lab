       >>SOURCE FREE
       IDENTIFICATION DIVISION.
       PROGRAM-ID. tarefa1.
       ENVIRONMENT DIVISION.
       INPUT-OUTPUT SECTION.
       FILE-CONTROL.
           SELECT OPTIONAL FIC ASSIGN TO 
           "D:/Monique/Documents/Projetos/iefp/Carlos/cobol808/FUNCIONARIOS.TXT"
           ORGANIZATION IS LINE SEQUENTIAL.
       DATA DIVISION.
       FILE SECTION.
       FD FIC.
       01 REGISTO.
              05 F-NUMERO                                      PIC 9(2).
              05 F-NOME                                       PIC X(30).
              05 F-EMAIL                                      PIC X(50).
       WORKING-STORAGE SECTION.
       01 TABELAS.
           05 V-NUMERO                                PIC 9(2) OCCURS 5.
           05 V-NOME                                 PIC X(30) OCCURS 5.
           05 V-EMAIL                                PIC X(50) OCCURS 5.
       
       77 INDICE                                                  PIC 9.
       77 LINHA                                        PIC 9(2) VALUE 5.
       77 OPCAO                                                   PIC 9.
           88 VALIDAR-OPCAO VALUE 1 THRU 6.
       77 NUMERO                                               PIC 9(2).
       77 ENCONTROU                                               PIC 9.
       SCREEN SECTION.
       01 CLS BLANK SCREEN.
       01 LAYOUT-MENU.
           05 COL 1 VALUE "REGISTO FUNCIONARIOS" FOREGROUND-COLOR 2
           HIGHLIGHT LINE 1.
           05 COL 1 VALUE "1-RECOLHER DADOS" FOREGROUND-COLOR 3
           HIGHLIGHT LINE 3.
           05 COL 1 VALUE "2-LISTAR FUNCIONARIOS" FOREGROUND-COLOR 3
           HIGHLIGHT LINE 5.
           05 COL 1 VALUE "3-PESQUISAR FUNCIONARIO" FOREGROUND-COLOR 3
           HIGHLIGHT LINE 7.
           05 COL 1 VALUE "4-ALTERAR REGISTO" FOREGROUND-COLOR 3
           HIGHLIGHT LINE 9.
           05 COL 1 VALUE "5-EXPORTAR PARA TXT" FOREGROUND-COLOR 3
           HIGHLIGHT LINE 11.
           05 COL 1 VALUE "6-SAIR" FOREGROUND-COLOR 3 HIGHLIGHT LINE 13.
           05 COL 1 VALUE "DIGITE A SUA OPCAO [ ]" FOREGROUND-COLOR 3
           HIGHLIGHT LINE 15.

       01 LAYOUT-FUNCIONARIOS.
           05 COL 1 VALUE "NUMERO   NOME                      EMAIL"
           FOREGROUND-COLOR 3 HIGHLIGHT LINE 1.
           05 COL 1 VALUE "--------------------------------------------"
           LINE 2.

       PROCEDURE DIVISION.
       LER-FICHEIRO.
           OPEN INPUT FIC.
           MOVE 1 TO INDICE.
           PERFORM UNTIL REGISTO=HIGH-VALUES
               READ FIC 
               AT END MOVE HIGH-VALUES TO REGISTO
               END-READ
               IF (NOT REGISTO=HIGH-VALUES) THEN
                   MOVE F-NUMERO TO V-NUMERO(INDICE)
                   MOVE F-NOME TO V-NOME(INDICE)
                   MOVE F-EMAIL TO V-EMAIL(INDICE)
                   ADD 1 TO INDICE
               END-IF
           END-PERFORM.
           CLOSE FIC.
       PARAGRAFO-INICIAL.
           PERFORM PARAGRAFO-INICIO THRU PARAGRAFO-FIM UNTIL OPCAO = 6.
           FIM.
           stop run.
           PARAGRAFO-INICIO.
               DISPLAY CLS.
               DISPLAY LAYOUT-MENU.
               PERFORM WITH TEST AFTER UNTIL VALIDAR-OPCAO
                   ACCEPT OPCAO AT 1521
                   IF (NOT VALIDAR-OPCAO) THEN
                       DISPLAY "OPCAO INVALIDA!" FOREGROUND-COLOR 4
                       HIGHLIGHT AT 1523
                    ELSE
                       DISPLAY " " ERASE EOL AT 1523
               END-PERFORM.
               EVALUATE OPCAO
                     WHEN 1
                          PERFORM RECOLHA-FUNCIONARIOS
                     WHEN 2
                          PERFORM LISTAR-FUNCIONARIOS
                     WHEN 3
                           PERFORM PESQUISAR-FUNCIONARIO
                     WHEN 5
                           PERFORM EXPORTAR-DADOS

               END-EVALUATE.
           PARAGRAFO-FIM.
               EXIT.
           RECOLHA-FUNCIONARIOS.
               DISPLAY CLS.
               DISPLAY LAYOUT-FUNCIONARIOS.
               MOVE 3 TO LINHA.
               PERFORM VARYING INDICE FROM 1 BY 1 UNTIL INDICE > 5
                   ACCEPT V-NUMERO(INDICE) LINE LINHA COL 1
                   ACCEPT V-NOME(INDICE) LINE LINHA COL 10
                   ACCEPT V-EMAIL(INDICE) LINE LINHA COL 36
                   ADD 1 TO LINHA
               END-PERFORM.
               DISPLAY "RECOLHA EFETUADA. ENTER PARA CONTINUAR." LINE
               LINHA COL 1.
               ACCEPT OMITTED LINE LINHA COL 40.
           LISTAR-FUNCIONARIOS.
                DISPLAY CLS.
                DISPLAY LAYOUT-FUNCIONARIOS.
                MOVE 3 TO LINHA.
                PERFORM VARYING INDICE FROM 1 BY 1 UNTIL INDICE > 5
                     DISPLAY V-NUMERO(INDICE) LINE LINHA COL 1
                     DISPLAY V-NOME(INDICE) LINE LINHA COL 10
                     DISPLAY V-EMAIL(INDICE) LINE LINHA COL 36
                     ADD 1 TO LINHA
                END-PERFORM.
                DISPLAY "FIM DA LISTAGEM. ENTER PARA CONTINUAR." LINE
                LINHA COL 1.
                ACCEPT OMITTED LINE LINHA COL 40.

           PESQUISAR-FUNCIONARIO.
               DISPLAY CLS.
               DISPLAY "PESQUISAR FUNCIONARIO" FOREGROUND-COLOR 2 
               HIGHLIGHT AT 0101.
               DISPLAY "DIGITE O NUMERO DO FUNCIONARIO: " AT 0301.
               ACCEPT NUMERO AT 0331.
               MOVE 0 TO ENCONTROU.
               PERFORM VARYING INDICE FROM 1 BY 1 UNTIL INDICE > 5 
                   IF (NUMERO = V-NUMERO(INDICE)) THEN
                       DISPLAY FUNCTION CONCATENATE ("NOME: ",
                       V-NOME(INDICE)) AT 0501
                       DISPLAY FUNCTION CONCATENATE ("EMAIL: ",
                       V-EMAIL(INDICE)) AT 0701
                   END-IF
               END-PERFORM.
               IF (ENCONTROU = 0) THEN
                   DISPLAY "FUNCIONARIO NAO ENCONTRADO!" AT 0901
               END-IF.
               DISPLAY "FIM DA PESQUIDA. ENTER PARA CONTINUAR." AT 1101.
               ACCEPT OMITTED AT 1140.

           EXPORTAR-DADOS.
               DISPLAY CLS.
               DISPLAY "EXPORTAR DADOS PARA TXT" FOREGROUND-COLOR 2
               HIGHLIGHT AT 0101.
               OPEN OUTPUT FIC. *> ABRE EM MODO DE OVERWRITE
               PERFORM VARYING INDICE FROM 1 BY 1 UNTIL INDICE > 5
                   MOVE V-NUMERO(INDICE) TO F-NUMERO   
                   MOVE V-NOME(INDICE) TO F-NOME
                   MOVE V-EMAIL(INDICE) TO F-EMAIL
                   WRITE REGISTO
               END-PERFORM.
               CLOSE FIC.
               DISPLAY "EXPORTACAO EFETUADA. ENTER PARA CONTINUAR."
               AT 0301.
               ACCEPT OMITTED AT 0340.
       END PROGRAM tarefa1.
