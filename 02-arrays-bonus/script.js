
const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

for (let i=teachers.length -1; i>0; i--){
  console.log (teachers [i]);
}
const reversedTeachers = (teachers [i]);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = null;

// 3. Rimuovi 'Ed' dall'array teachers
const index = teachers.indexOf ('Ed'); //var che indica la posizione della stringa 'Ed'

teachers.splice(index, 1);

console.log (teachers)



// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
if (teachers.indexOf('Fabio') !== -1) {
  console.log('Fabio è presente nell\'array.');
} else {
  console.log('Fabio non è presente nell\'array.');
}
const isFabioPresent = (teachers.indexOf('Fabio') !== -1);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;