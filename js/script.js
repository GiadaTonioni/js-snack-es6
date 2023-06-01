//SNACK 1

const invitati = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

const new_invitati = invitati.map((item, index) => {
	let segnaposto = {
	    name: item,
		posto: index,
		tavolo: 'tavolo vip'
	};
return segnaposto;

});
console.log(new_invitati);

//SNACK 2

let studentsName = ['Marco Della Rovere', 'Paola Cortellessa', 'Andrea Mantegna', 'Gaia Borromini', 'Luigi Grimaldello', 'Piero della Francesca', 'Francesca da Polenta'];
//Stampare array coi nomi in maiuscolo
const uppercaseStudents = studentsName.map((item)=> {
	
	let new_name = item.toUpperCase();

	return new_name;
});
console.log(uppercaseStudents);


//creare array con solo studenti che hanno voto > 70
const students = [
	{
		'id': 213,
		'name':'Marco Della Rovere',
		'grades': 78
	},
    {
		'id': 110,
		'name':'Paola Cortellessa',
		'grades': 96
	},
    {
		'id': 250,
		'name':'Andrea Mantegna',
		'grades': 48
	},
    {
		'id': 145,
		'name':'Gaia Borromini',
		'grades': 74
	},
    {
		'id': 196,
		'name':'Luigi Grimaldello',
		'grades': 68
	},
    {
		'id': 102,
		'name':'Piero della Francesca',
		'grades': 50
	},
    {
		'id': 120,
		'name':'Francesca da Polenta',
		'grades': 84
	},
    
];

const almeno70 = students.filter((item) => {if(item.grades > 70) return true });

console.log(almeno70);

//creare array con solo studenti che hanno voto > 70 e id > 120

const tra70e120 = students.filter((item) => {if(item.grades > 70 && item.id > 120) return true });

console.log(tra70e120);


