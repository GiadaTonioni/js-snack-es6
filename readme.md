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

PROBLEMA SNACK3: Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal

1 - creare l'array di oggetti con nome e peso delle bici
2 - creare una variabile di riferimento di una delle bici dell'array
3 - creare un ciclo (for, Each) dove ci sia la condizione che individua la bici col peso minore delle altre presenti nell'array
4 - destrucuring con le caratteristiche che ci interessano 
5 - stampa in console con template literal

PROBLEMA SNACK4: Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatt, falli subiti.
Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle propriet: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

1 - creare array di oggetti con nome, punti, falli delle squadre di calcio
    1.1 - compilare nome e lasciare a 0 il resto
2 - utilizzare Math.floor Math.random per fare una funzione min max con cui generare numeri random da inserire nei punti e nei falli
3 - creare un ciclo (for, Each) dove richiamare la funzione per generare i punti e per generare i falli
4 - utilizzare destructuring e map per creare un nuovo array dove ci siano solo i nomi delle squadre e i falli subiti
