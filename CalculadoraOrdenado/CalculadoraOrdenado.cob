       >>SOURCE FREE
       IDENTIFICATION DIVISION.
       PROGRAM-ID. tarefa2.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       77 VENDAS-MES-IN PIC X(50) VALUE SPACES.
       77 MES-IN PIC X(50) VALUE SPACES.
       77 ANOS-TRABALHO-IN PIC X(50) VALUE SPACES.

       77 ANOS-TRABALHO PIC 9(2).
       77 MES PIC 9(2).
       77 VENDAS-MES PIC 9(5).

       77 SALARIO PIC 9(5)V99  VALUE 0.
       77 COMISSAO PIC 9(5)V99  VALUE 0.
       77 TOTAL PIC 9(6)V99  VALUE 0.
       77 SEGURANCA-SOCIAL PIC 9(5)V99  VALUE 0.
       77 IRS PIC 9(5)V99  VALUE 0.
       77 DESCONTOS PIC 9(5)V99  VALUE 0.
       77 SALARIO-LIQUIDO PIC 9(5)V99  VALUE 0.

       77 SALARIO-FMT PIC Z,ZZZ9.99.
       77 COMISSAO-FMT PIC Z,ZZZ9.99.
       77 TOTAL-FMT PIC Z,ZZZ9.99.
       77 SEGURANCA-SOCIAL-FMT PIC Z,ZZZ9.99.
       77 IRS-FMT PIC Z,ZZZ9.99.
       77 DESCONTOS-FMT PIC Z,ZZZ9.99.
       77 SALARIO-LIQUIDO-FMT PIC Z,ZZZ9.99.
       77 MES-FMT PIC 99.
       77 VENDAS-MES-FMT PIC Z,ZZZ,ZZ9.

       PROCEDURE DIVISION.
           DISPLAY "Digite o numero de anos de trabalho: " AT 0101.
           ACCEPT ANOS-TRABALHO-IN                         AT 0137.                            
           DISPLAY "Digite o mes atual (1-12): "           AT 0201.
           ACCEPT MES-IN                                   AT 0237.                                      
           DISPLAY "Digite o numero de vendas do mes"      AT 0301.
           ACCEPT VENDAS-MES-IN                            AT 0337.                             

           MOVE ANOS-TRABALHO-IN TO ANOS-TRABALHO.
           MOVE MES-IN TO MES.
           MOVE VENDAS-MES-IN TO VENDAS-MES.

           IF (ANOS-TRABALHO < 5) 
               MOVE 800 TO SALARIO
           ELSE
               IF (ANOS-TRABALHO > 5 OR ANOS-TRABALHO <= 10) 
                   MOVE 1000 TO SALARIO
                   
               ELSE 
                   MOVE 12000 TO SALARIO
               END-IF
           END-IF.

           IF (MES = 6 OR MES = 12)
               COMPUTE SALARIO = SALARIO * 2
           END-IF.

           IF (VENDAS-MES < 10000)
               COMPUTE COMISSAO = 0.05 * SALARIO
              ELSE
                IF (VENDAS-MES >= 10000) OR (VENDAS-MES <= 20000)
                     COMPUTE COMISSAO = 0.10 * SALARIO
                ELSE
                     COMPUTE COMISSAO = 0.15 * SALARIO
                END-IF
           END-IF.

           COMPUTE TOTAL = SALARIO + COMISSAO.

           COMPUTE SEGURANCA-SOCIAL = 0.115 * TOTAL.
           COMPUTE IRS = 0.25 * TOTAL.
           COMPUTE DESCONTOS = SEGURANCA-SOCIAL + IRS.
           COMPUTE SALARIO-LIQUIDO = TOTAL - DESCONTOS.

           MOVE SALARIO TO SALARIO-FMT.
           MOVE COMISSAO TO COMISSAO-FMT.
           MOVE TOTAL TO TOTAL-FMT.
           MOVE SEGURANCA-SOCIAL TO SEGURANCA-SOCIAL-FMT.
           MOVE IRS TO IRS-FMT.
           MOVE DESCONTOS TO DESCONTOS-FMT.
           MOVE SALARIO-LIQUIDO TO SALARIO-LIQUIDO-FMT.
           MOVE MES TO MES-FMT.
           MOVE VENDAS-MES TO VENDAS-MES-FMT.

           DISPLAY "Vencimento Base: "                     AT 0801.        
           DISPLAY SALARIO-FMT                             AT 0837.             
           DISPLAY "Mes: "                                 AT 0901. 
           DISPLAY MES-FMT                                 AT 0944.                               
           DISPLAY "Valor da Comissao: "                   AT 1001.
           DISPLAY COMISSAO-FMT                            AT 1037.
           DISPLAY "Total: "                               AT 1101.
           DISPLAY TOTAL-FMT                               AT 1137.
           DISPLAY "Seguranca Social (11,5%): "            AT 1201.
           DISPLAY SEGURANCA-SOCIAL-FMT                    AT 1237.
           DISPLAY "IRS (25%): "                           AT 1301.
           DISPLAY IRS-FMT                                 AT 1337.
           DISPLAY "Descontos Totais (SS + IRS): "         AT 1401.
           DISPLAY DESCONTOS-FMT                           AT 1437.
           DISPLAY "Salario Lquido: "                      AT 1501.
           DISPLAY SALARIO-LIQUIDO-FMT                     AT 1537.

           DISPLAY "Pressione Enter para sair..."          AT 2001.
           ACCEPT OMITTED.
       STOP RUN.
