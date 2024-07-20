const data = [
  {
    id: "1",
    question: "Who is M.S. Dhoni?",
    answer: "Mahendra Singh Dhoni, commonly known as M.S. Dhoni, is a former Indian cricketer and captain of the Indian national team. He is renowned for his leadership, batting, and wicket-keeping skills.",
  },
  {
    id: "2",
    question: "When was M.S. Dhoni born?",
    answer: "M.S. Dhoni was born on July 7, 1981, in Ranchi, Bihar (now in Jharkhand), India.",
  },
  {
    id: "3",
    question: "What are some of M.S. Dhoni's notable achievements as a captain?",
    answer: "Under M.S. Dhoni's captaincy, India won the ICC T20 World Cup in 2007, the ICC Cricket World Cup in 2011, and the ICC Champions Trophy in 2013.",
  },
  {
    id: "4",
    question: "How many times did M.S. Dhoni captain Chennai Super Kings to IPL victories?",
    answer: "M.S. Dhoni led Chennai Super Kings to IPL victories in 2010, 2011, 2018,2021 and 2023.",
  },
  {
    id: "5",
    question: "What is M.S. Dhoni's role in cricket?",
    answer: "M.S. Dhoni was a wicket-keeper batsman known for his calm demeanor, finishing abilities, and strategic acumen on the field.",
  },
  {
    id: "6",
    question: "When did M.S. Dhoni retire from international cricket?",
    answer: "M.S. Dhoni announced his retirement from international cricket on August 15, 2020.",
  },
  {
    id: "7",
    question: "What is M.S. Dhoni's highest individual score in ODIs?",
    answer: "M.S. Dhoni's highest individual score in One Day Internationals (ODIs) is 183* against Sri Lanka in 2005.",
  },
  {
    id: "8",
    question: "How many international centuries did M.S. Dhoni score?",
    answer: "MS Dhoni scored a total of 16 centuries in international cricket – 10 in ODIs and 6 in Tests.",
  },
  {
    id: "9",
    question: "Which biopic film is based on M.S. Dhoni's life?",
    answer: "The biopic film 'M.S. Dhoni: The Untold Story,' released in 2016, is based on his life and career.",
  },
  {
    id: "10",
    question: "What is one of M.S. Dhoni's famous nicknames?",
    answer: "One of M.S. Dhoni's famous nicknames is 'Captain Cool,' owing to his calm and composed nature on the field.",
  },
];


 
const accordionWrapper = document.querySelector(".accordion")

function createAccordianData(){
    accordionWrapper.innerHTML = data.map((dataItem)=>(
      `
        <div class="accordion_item">
        
        <div class="accordion_title">

                <h3>${dataItem.question}</h3>
                <i class = "fa-solid fa-arrow-down"></i>
        </div>
                <div class = "accordion_content">
                    <p>${dataItem.answer}</p>
                </div>
        </div>
        
        

     `
    )).join(" ");
}

createAccordianData();

const getAccordionTitles = document.querySelectorAll(".accordion_title");

console.log("===============================================================");
console.log(getAccordionTitles);
console.log("===============================================================");

getAccordionTitles.forEach((currentItem)=>{
    currentItem.addEventListener("click", (event)=>{
        if(currentItem.classList.contains("active")){
            currentItem.classList.remove("active");
        }else{
            let getAlreadyAddedActiveClasses = document.querySelectorAll(".active");
            getAlreadyAddedActiveClasses.forEach((currentActiveItem)=>{
                currentActiveItem.classList.remove("active");
            });

            currentItem.classList.add("active")
        }
    });
});