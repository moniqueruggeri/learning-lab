       >>SOURCE FREE
       IDENTIFICATION DIVISION.
       PROGRAM-ID. PizzariaRamalho.

       DATA DIVISION.
       WORKING-STORAGE SECTION.
       77 CLIENTE                                   PIC X(20).
       77 NUMPEDIDO                                 PIC 9(3) VALUE 1.
       77 CONTATO                                   PIC 9(9).

       01 DATA-ATUAL.
           05 ANO                                   PIC 9(4).
           05 MES                                   PIC 9(2).
           05 DIA                                   PIC 9(2).

       01 HORA-ATUAL.
           05 HORAS                                 PIC 9(2).
           05 MINUTOS                               PIC 9(2).
           05 SEGUNDOS                              PIC 9(2).

       01 INGREDIENTES-REPETIDOS.
           05 INGREDIENTE-REPETIDO            OCCURS 10 PIC X VALUE 'N'.
       77 TAMANHO-PIZZA                             PIC 9.
           88 VALIDAR-TAMANHO-PIZZA                 VALUE 1 THRU 3.

       01 TABELAS.
           05 TAB-INGREDIENTES                      PIC X(20) OCCURS 10.
           05 TAB-PRECOS                            PIC 9V99 OCCURS 10.
       
       77 NUMERO-INGREDIENTES                       PIC 9  VALUE 0.
           88 VALIDAR-NUMERO-INGREDIENTES           VALUE 1 THRU 5.

       77 CODIGO-INGREDIENTE-TEXTO                  PIC X(2).
       77 CODIGO-INGREDIENTE                        PIC 99  VALUE 0.
           88 VALIDAR-CODIGO-INGREDIENTE            VALUE 1 THRU 10.
       77 COD-REPETIDO                          PIC X VALUE 'N'.
           88 VALIDAR-COD-REPETIDO                  VALUE 'S'.
       
       77 LINHA                                     PIC 99 VALUE 17.
       77 SAIDA-PRECO                               PIC 9.99.

       77 REPETIR                                  PIC A.
           88 VALIDAR-REPETIR                   VALUE 'S', 's', 'n' 'N'.

       01 VALOR-PIZZA.                               
           05 VALOR-PIZZA-NUM                       PIC 99V99.
           05 VALOR-PIZZA-SAIDA                     PIC ZZ9.99.

       01 VALOR-TOTAL-EXTRAS.                        
           05 VALOR-TOTAL-EXTRAS-NUM                PIC 99V99.
           05 VALOR-TOTAL-EXTRAS-SAIDA              PIC ZZ9.99.   

       01 VALOR-IVA.
           05 VALOR-IVA-NUM                        PIC 99V99 VALUE 0.23.
           05 VALOR-IVA-SAIDA                      PIC ZZ9.99.

       01 VALOR-TOTAL.
           05 VALOR-TOTAL-NUM                      PIC 99V99.
           05 VALOR-TOTAL-SAIDA                    PIC ZZ9.99.

       SCREEN SECTION.
       01 CLS                                       BLANK SCREEN.
       01 TITULO.    
           05 COL 1 VALUE "PIZZARIA RAMALHO, GESTPEDIDOS BETA-1" LINE 1.
           05 COL 1 VALUE "PIZZARIA E DERIVADOS, LDA"            LINE 2.
           05 COL 1 VALUE
           "--------------------------------------------------" 
           LINE 3.
           05 COL 1 VALUE "CLIENTE: "                            LINE 5.
           05 COL 32 VALUE "CONTACTO: "                          LINE 5.
           05 COL 1 VALUE "N. PEDIDO: "                          LINE 6.
           05 COL 18 VALUE "DATA: "                              LINE 6.
           05 COL 36 VALUE "HORA: "                              LINE 6.
           05 COL 1 VALUE 
           "--------------------------------------------------" 
           LINE 8.
           05 COL 1 VALUE 
           "--------------------------------------------------" 
           LINE 9.
           05 COL 1 VALUE "[1] PEQUENA [2] MEDIA [3] GRANDE"    LINE 10.
           05 COL 1 VALUE "TIPO DE PIZZA PRETENDIDO:"           LINE 11.
           05 COL 1 VALUE 
           "--------------------------------------------------" 
           LINE 12.
           05 COL 1 VALUE "NUMERO DE INGREDIENTES [1 -5]:"      LINE 13.

       01 INGREDIENTES.    
           05 COL 55 VALUE
           "-------------INGREDIENTES DISPONIVEIS:------------" LINE 03.
           05 COL 55 VALUE 
           "#      1 - FIAMBRE....................0.5        #" LINE 04.
           05 COL 55 VALUE 
           "#      2 - ATUM.......................0.7        #" LINE 05.
           05 COL 55 VALUE 
           "#      3 - ANCHOVAS...................0.4        #" LINE 06.
           05 COL 55 VALUE 
           "#      4 - CAMARAO....................0.8        #" LINE 07.
           05 COL 55 VALUE 
           "#      5 - BACON......................0.9        #" LINE 08.
           05 COL 55 VALUE 
           "#      6 - BANANA.....................0.3        #" LINE 09.
           05 COL 55 VALUE 
           "#      7 - ANANAS.....................0.4        #" LINE 10.
           05 COL 55 VALUE 
           "#      8 - AZEITONAS..................0.3        #" LINE 11.
           05 COL 55 VALUE 
           "#      9 - COGUMELOS..................0.6        #" LINE 12.
           05 COL 55 VALUE 
           "#      10 - MILHO.....................0.5        #" LINE 13.
           05 COL 55 VALUE 
           "--------------------------------------------------" LINE 14.

           05 COL 1 VALUE 
           "--------------------------------------------------" 
           LINE 14.
           05 COL 1 VALUE 
           "   COD.             INGREDIENTE          PRECO   " 
           LINE 15.
           05 COL 1 VALUE 
           "--------------------------------------------------" 
           LINE 16.

       01 SAIDA-VALOR-TOTAL.
           05 COL 55 VALUE 
           "#   TOTAL ING.       TIPO PIZZA        A PAGAR   #"
           LINE 15.
           05 COL 55 VALUE
           "--------------------------------------------------"
           LINE 16.

       01 SAIDA-IVA.
           05 COL 55 VALUE
           "--------------------------------------------------"
           LINE 18.
           05 COL 55 VALUE 
           "#                                     IVA (23%)  #"  
           LINE 19.
           05 COL 55 VALUE
           "--------------------------------------------------"
           LINE 20.
           05 COL 55 VALUE
           "--------------------------------------------------"
           LINE 22.

       01 SAIDA-TOTAL.
           05 COL 55 VALUE
           "#                                 TOTAL A PAGAR  #"
           LINE 23.
           05 COL 55 VALUE 
           "--------------------------------------------------"
           LINE 24.
           05 COL 55 VALUE
           "--------------------------------------------------"
           LINE 26.

       PROCEDURE DIVISION.
       CARREGA-TABELAS.
           MOVE "FIAMBRE" TO TAB-INGREDIENTES(1).
              MOVE 0.50 TO TAB-PRECOS(1).
           MOVE "ATUM"  TO TAB-INGREDIENTES(2).
              MOVE 0.70 TO TAB-PRECOS(2).
           MOVE "ANCHOVAS" TO TAB-INGREDIENTES(3).
              MOVE 0.40 TO TAB-PRECOS(3).
           MOVE "CAMARAO" TO TAB-INGREDIENTES(4).
              MOVE 0.80 TO TAB-PRECOS(4).
           MOVE "BACON" TO TAB-INGREDIENTES(5).
              MOVE 0.90 TO TAB-PRECOS(5).
           MOVE "BANANA" TO TAB-INGREDIENTES(6).
              MOVE 0.30 TO TAB-PRECOS(6).
           MOVE "ANANAS" TO TAB-INGREDIENTES(7).
              MOVE 0.40 TO TAB-PRECOS(7).
           MOVE "AZEITONAS" TO TAB-INGREDIENTES(8).
              MOVE 0.30 TO TAB-PRECOS(8).
           MOVE "COGUMELOS" TO TAB-INGREDIENTES(9).
              MOVE 0.60 TO TAB-PRECOS(9).
           MOVE "MILHO" TO TAB-INGREDIENTES(10).
              MOVE 0.50 TO TAB-PRECOS(10).

       MAIN-PROCEDURE.
            DISPLAY CLS.
            DISPLAY TITULO.
            ACCEPT CLIENTE                                     AT 0510.
            ACCEPT CONTATO                                     AT 0542.
            DISPLAY NUMPEDIDO                                  AT 0612.
            ACCEPT DATA-ATUAL FROM DATE YYYYMMDD.
            DISPLAY FUNCTION CONCATENATE (DIA, "/", MES, "/", 
            ANO)                                               AT 0624.
            ACCEPT HORA-ATUAL FROM TIME.
            DISPLAY FUNCTION CONCATENATE (HORAS, ":", MINUTOS, ":", 
            SEGUNDOS)                                          AT 0642.
            

       VERIFICAR-TAMANHO-PIZZA.
            PERFORM UNTIL VALIDAR-TAMANHO-PIZZA
              ACCEPT TAMANHO-PIZZA                         AT 1127
              IF NOT VALIDAR-TAMANHO-PIZZA
                 DISPLAY "TAMANHO INVALIDO (1-3)"              AT 1129
              ELSE
                 DISPLAY "                      "              AT 1129
                END-IF
            END-PERFORM.

            DISPLAY INGREDIENTES.

       VERIFICAR-NRO-INGREDIENTES.
            PERFORM UNTIL VALIDAR-NUMERO-INGREDIENTES
            ACCEPT NUMERO-INGREDIENTES                         AT 1332
            IF NOT VALIDAR-NUMERO-INGREDIENTES
               DISPLAY "N. INVALIDO (0-5)"                     AT 1334
            ELSE
               DISPLAY FUNCTION CONCATENATE 
               (NUMERO-INGREDIENTES, "                  ")      
               AT 1332
            END-IF
            END-PERFORM.
                   
            PERFORM NUMERO-INGREDIENTES TIMES 

            MOVE 0 TO CODIGO-INGREDIENTE
            MOVE 'N' TO COD-REPETIDO
               
               PERFORM UNTIL COD-REPETIDO = 'S'
                   DISPLAY '   ' LINE LINHA COL 5
                   ACCEPT CODIGO-INGREDIENTE-TEXTO LINE LINHA COL 5
                   MOVE FUNCTION NUMVAL (CODIGO-INGREDIENTE-TEXTO)
                     TO CODIGO-INGREDIENTE

                     IF NOT VALIDAR-CODIGO-INGREDIENTE
                        DISPLAY "COD. INVALIDO (1-10)" 
                        LINE LINHA COL 25
                     ELSE
                       IF INGREDIENTE-REPETIDO (CODIGO-INGREDIENTE) = 
                       'S' 
                           DISPLAY 'INGREDIENTE-REPETIDO' 
                           LINE LINHA COL 25
                        ELSE
                            MOVE 'S' TO INGREDIENTE-REPETIDO 
                            (CODIGO-INGREDIENTE)
                            MOVE 'S' TO COD-REPETIDO
                            END-IF
                     END-IF
               END-PERFORM

               DISPLAY CODIGO-INGREDIENTE              LINE LINHA COL 5 
               DISPLAY TAB-INGREDIENTES(CODIGO-INGREDIENTE) 
               LINE LINHA COL 25                                                              
               MOVE TAB-PRECOS(CODIGO-INGREDIENTE) TO SAIDA-PRECO
               DISPLAY SAIDA-PRECO                    LINE LINHA COL 42
               ADD TAB-PRECOS(CODIGO-INGREDIENTE) TO 
               VALOR-TOTAL-EXTRAS-NUM
               ADD 1 TO LINHA
           END-PERFORM.

           DISPLAY "--------------------------------------------------" 
               LINE LINHA COL 1.


       CALCULAR-VALOR-PIZZA.
            DISPLAY SAIDA-VALOR-TOTAL.
            EVALUATE TAMANHO-PIZZA
                WHEN 1
                   MOVE 3 TO VALOR-PIZZA-NUM
                WHEN 2
                   MOVE 4 TO VALOR-PIZZA-NUM
                WHEN 3
                   MOVE 5 TO VALOR-PIZZA-NUM
            END-EVALUATE.

       CALCULA-EXTRAS.
            ADD VALOR-TOTAL-EXTRAS-NUM TO VALOR-PIZZA-NUM.
            MOVE VALOR-PIZZA-NUM TO VALOR-PIZZA-SAIDA.
            MOVE VALOR-TOTAL-EXTRAS-NUM TO VALOR-TOTAL-EXTRAS-SAIDA

            DISPLAY VALOR-TOTAL-EXTRAS-SAIDA LINE 17 COL 60.
            DISPLAY TAMANHO-PIZZA LINE 17 COL 80.
            DISPLAY VALOR-PIZZA-SAIDA LINE 17 COL 94. 


       CALCULA-IVA.
            MULTIPLY VALOR-PIZZA-NUM BY VALOR-IVA-NUM
            GIVING VALOR-IVA-NUM.
           
            MOVE VALOR-IVA-NUM TO VALOR-IVA-SAIDA.

            ADD VALOR-IVA-NUM TO VALOR-PIZZA-NUM 
            GIVING VALOR-TOTAL-NUM.

            MOVE VALOR-TOTAL-NUM TO VALOR-TOTAL-SAIDA.

            DISPLAY SAIDA-IVA.
            DISPLAY VALOR-IVA-SAIDA LINE 21 COL 94.
            DISPLAY SAIDA-TOTAL.
            DISPLAY VALOR-TOTAL-SAIDA LINE 25 COL 94.
       DISPLAY SPACE LINE 30 COL 1.

       LER-REPETIR.
           DISPLAY "DESEJA EFETUAR OUTRO PEDIDO? (S/N)" LINE 32 COL 1.
           ACCEPT REPETIR LINE 32 COL 40.
              IF REPETIR = 'S' OR REPETIR = 's'
                  ADD 1 TO NUMPEDIDO
                  MOVE 0 TO NUMERO-INGREDIENTES
                  MOVE 0 TO TAMANHO-PIZZA
                  MOVE 17 TO LINHA
                  MOVE 0 TO VALOR-PIZZA-NUM
                  MOVE 0 TO VALOR-TOTAL-EXTRAS-NUM
                  MOVE 0.23 TO VALOR-IVA-NUM
                  MOVE 0 TO VALOR-TOTAL-NUM
                   MOVE 'N' TO INGREDIENTE-REPETIDO (1)
                  GO TO MAIN-PROCEDURE
              ELSE
                  IF REPETIR = 'N' OR REPETIR = 'n'
                  DISPLAY " OBRIGADO PELA PREFERENCIA. VOLTE SEMPRE!" 
                  LINE 34 COL 1
                  ELSE
                  DISPLAY "OPCAO INVALIDA. ENCERRANDO O PROGRAMA." 
                  LINE 34 COL 1
                  END-IF
              END-IF.

       STOP RUN.
       END PROGRAM PizzariaRamalho.
