//SNACK 1
const invitati = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'] 

const new_invitati = invitati.map((item, index) => {
	let segnaposto = {
	    name: item,
		posto: index,
		tavolo: 'tavolo vip'
	}
return segnaposto

})
console.log(new_invitati)

