// Book 2: #6 Candy Factory

// 1. Define a function names buyChocolate w/ no parameters
const buyChocolate = {
    type: "Milk Chocolate"
 };
//  console.log(buyChocolate);


//  2. Define a function named addFlavoring w/ one parameter to accept an obj as input
const addFlavoring = (obj) => {
    // only uses 1 = because it sets the variable obj.flavor to the value of "Mint"
    obj.flavor = "Mint";
    // return the entire obj
    return obj;
};
// create the function candyFlavor, where the func buyChocolate passes the function addFlavoring
const candyFlavor = addFlavoring(buyChocolate);
// console.log(candyFlavor);


// 3. Define a function named makeBarkMixture w/ one parameter for an 
// incoming obj to be store for use

// define a func w/ one parameter
const makeBarkMixture = (obj) => {
    // create a conditional statment 
    // if mint is the flavor, then it receives the property:mixed as true
    // === bc it's strict comparison that will return false if not exactly true
    if (obj.flavor === "Mint"){
        obj.mixed = true
    }
        // otherwise the property: mixed is false
        // we only need to know if the mixture isn't mixed it'll read false
    else{
        obj.mixed = false
    }
    //return the entire obj 
    return obj;
    
};
    // create function barMixture that passes function candyFlavor to function makeBarMixture
const barMixture = makeBarkMixture(candyFlavor);
// print the new function barMixture with the new additions
console.log(barMixture);

// 4. Bake Mixture: 


const bakeCandy = (obj) => {
    // use ==== inside an if statement bc it's an absolute Q.
    if (obj.mixed === true){
        obj.baked = true
    }
     // we only need to know if it's not baked it's false
    else {
        // otherwise the baked obj will be false
        obj.baked = false
        
    }
    // return the entire object after these conditions have been met
    return obj;
};

// pass barMixture into the function bake candy to create new array, bakeMixture.
const bakeMixture = bakeCandy(barMixture);
// print the new bakeMiixture function with additions
console.log(bakeMixture);

// 5. Break the Bark
// define a func w/ one parameter
const breakBark = (obj) => {
    // if the obj baked property is true, it should make a new array w/ 6 strings
    if (obj.baked === true){
        // make a new array& return it. but you don't have to create a name for the array bc no one will use it again
        return ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece"];
    }
    // otherwise if the property is false, should return nothing. in else statment don't have to set anything
    else{
        return obj
    }
}
// create a function and pass the previous function of bakeMixture to the function breakBark
const brokenPieces = breakBark(bakeMixture);
// print the new func broken pieces with the additions made
console.log(brokenPieces);
 