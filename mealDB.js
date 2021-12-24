const createMealInfoDiv = (meal, mealInput) => {
    const mealPhoto = meal.strMealThumb;
    const mealName = meal.strMeal;
    const mealInfo = `
    <a href="#meal-details-section" style="text-decoration: none; color: black;">
        <div class="card border-0" style="width: 18rem; border-radius: 10px">
            <img src="${mealPhoto}" class="card-img-top" style="width: 18rem; border-radius: 10px 10px 0 0" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center">${mealName}</h5>
            </div>
        </div>
    </a>
    `
    const mealInfoSection = document.getElementById('meal-info-section');
    const mealInfoDiv = document.createElement('div');
    mealInfoDiv.className = 'col-4 p-3 d-flex justify-content-center';
    mealInfoDiv.innerHTML = mealInfo;
    mealInfoSection.appendChild(mealInfoDiv);
}

const showMealInfoDiv = (data, mealInput) => {
const meal = data.meals;

    meal.forEach(element => {
    createMealInfoDiv(element, mealInput);
    });

}

const searchMeal = () =>{
const mealInput = document.getElementById('meal-input').value;


if(mealInput){

    const noMealFound = document.getElementById('no-meal-found');
    noMealFound.innerText = ``;


    const mealInfoSection = document.getElementById('meal-info-section');
    mealInfoSection.innerHTML = ``;

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${mealInput}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        showMealInfoDiv(data, mealInput);
    }
    )
}
else{
    const noMealFound = document.getElementById('no-meal-found');
    noMealFound.innerText = `You haven't entered anything`;
}
}

document.getElementById('meal-submit').addEventListener('click',searchMeal);
