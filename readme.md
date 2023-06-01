PROBLEMA SNACK1: Creare dei segnaposto per il tavolo degli invitati avendo il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']  
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell'ospite e posto occupato.
Generiamo e stampiamo in console la lista per i segnaposto.

1 - scrivere l'array dato con i nomi degli invitati nell'ordine dato
2 - usare arrow function con MAP per trasformare i dati dell'array in oggetti con i dati in più e creare un nuovo array
3 - stampare in console il nuovo array

PROBLEMA SNACK2: Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1 - Dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo (Marco della Rovere => MARCO DELLA ROVERE);
2 - Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3 - Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Questo è l'elenco degli studenti:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna 	    48
145 Gaia Borromini          74
196 Luigi Grimaldello 	    68
102 Piero della Francesca   50
120 Francesca da Polenta    84

1 - creare l'array di oggetti con gli elementi dati
2 - utizzando MAP per trasformare l'array in uno nuovo
    2.1 - utilizzare toUpperCase per rendere i nomi maiuscoli
3 - utilizzando FILTER creare un nuovo array con tutti gli studenti che hanno un voto superiore a 70
4 - utilizzando FILTER in modo più restrittivo creare un nuovo array con tutti gli studenti che hanno voto > 70 e id > 120
