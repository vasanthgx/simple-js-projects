function calculateAge(){
    const birthday = birthdayEl.value;
    if(!birthday){
        alert('Please enter a valid date');
        return;
    }
    
    const birthdate = new Date(birthday);
    const today = new Date();
    let  age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference =  today.getMonth() - birthdate.getMonth()
    const dayDifference = today.getDate() - birthdate.getDate()
    if(monthDifference < 0  || monthDifference === 0 && dayDifference < 0){
        age--;
    }
    return resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`
}

const birthdayEl = document.getElementById('birthday')
const buttonEl = document.getElementById('btn')
const resultEl = document.getElementById('result')

buttonEl.addEventListener("click", calculateAge)
