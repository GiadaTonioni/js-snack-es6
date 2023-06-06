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

//SNACK 3

const bici = [
	{
		nome : 'Atala',
		peso : 10
	},
	{
		nome : 'Bianchi',
		peso : 12
	},
	{
		nome : 'Masi',
		peso : 9
	},
	{
		nome : 'Factor',
		peso : 11
	},
	{
		nome : 'Orbea',
		peso : 14
	}
]

console.log(bici)

let bici_leggera = bici[0]

bici.forEach((elem) => {
	if(elem.peso < bici_leggera.peso){
		bici_leggera = elem
	}
})

console.log(bici_leggera)

let {nome, peso} = bici_leggera
console.log(`la bici più leggera è la ${nome} e pesa ${peso}`)

//SNACK 4

const squadre = [
	{
		nome : 'Sassuolo',
		punti : 0,
		falli : 0
	},
	{
		nome : 'Atalanta',
		punti : 0,
		falli : 0
	},
	{
		nome : 'Bologna',
		punti : 0,
		falli : 0
	},
	{
		nome : 'Cosenza',
		punti : 0,
		falli : 0
	},
	{
		nome : 'Genoa',
		punti : 0,
		falli : 0
	},
]

function generateRandomNumber(min, max){
	return Math.floor(Math.random() * (max - min + 1) - min)
}

squadre.forEach((elem) => {
	elem.punti = generateRandomNumber(1, 40)
	elem.falli = generateRandomNumber(1, 10)
})
console.log(squadre)

const newArray = squadre.map((elem) => {
	const{nome, falli} = elem
	let obj = {
		nome,
		falli
	}
	return obj
})
console.log(newArray)