const entree1 = {
    starter : "Bacon Cheese Fries",
    main: "Beef Burger and Coleslaw",
    dessert: "Deep Fried Ice-Cream"

};

const entree2 = {
    starter : "Smoked Salmon On Rye",
    main: "Vegetarian Couscous Rolls",
    dessert: "Fruit Plate"
};

const entree3 = {
    starter : "Chips and Hummus",
    main: "Grilled Chicken in Hot Sauce",
    dessert: "Chocolate Ganache Cake"

};

// ... add more meal objects

// Add more choices and update the array

const meals = [entree1, entree2, entree3];

const randomMeal = function() {

    // Get a random number between 0 and the length of the array, meals
    
    let mealNumber = Math.floor(Math.random() * meals.length) 
    
    showMeal(mealNumber);

    return(mealNumber)
    
    }

    const showMeal = (mealNumber)=> {

        let str = `Start with ${meals[mealNumber].starter}, 
    
     followed by ${meals[mealNumber].main}, 
    
     and finish off your meal with ${meals[mealNumber].dessert}`;
    
    
    
        let area = document.querySelector(".randomMeal");
    
       area.innerHTML = str;

       return(str)
    
    }

    console.log(randomMeal())
    console.log(showMeal())
