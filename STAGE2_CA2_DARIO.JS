// Name : Dario Prawara Teh Wei Rong
// Class : DAAA/FT/1A/04 
// Adm : 2201858

// CA2 JS PROGRAM STAGE 2 //

// Step 1 : Importing Member class : Creating Object and Class for Members 
var Member = require("./Member");

// Step 2 : Create a new Member OBJECT with information of 5 Members
var member1 = new Member('Leonardo', 'Gold', '1 Dec 2019', '1 Jan 1980', 1400);
var member2 = new Member('Catherine', 'Ruby', '14 Jan 2020', '28 Oct 1985', 250);
var member3 = new Member('Luther', 'Gold', '29 Apr 2020', '16 Mar 1992', 3350);
var member4 = new Member('Bruce', 'Diamond', '3 Jun 2020', '18 Mar 1994', 40200);
var member5 = new Member ('Amy', 'Ruby', '5 Jun 2020', '31 May 2000', 500);

// Step 3 : Importing MemberGroup class : Create a MemberGroup class to initialize an array for all members
var MemberGroup = require("./MemberGroup");
// Storing all 5 members into an array
var memberList = new MemberGroup ([member1, member2, member3, member4, member5]);

// Installing Readline-Sync Library for User Input
var input = require ('readline-sync');

// Compiling all Functions used in Main Program =====================================================================================

// Declare a function to print menuOptionsList
var menuOptionsList = {
    option1: "1. Display all members' information",
    option2: "2. Display member information",
    option3: "3. Add new member",
    option4: "4. Update points earned",
    option5: "5. Statistics",
    option6: "6. Membership Referral Program",
    option7: "7. Online Shopper's Paradise",
    option8: "8. Exit",
    menu: function () {
        return this.option1 + "\n\t" + this.option2 + "\n\t" + this.option3 + "\n\t"+ this.option4 + "\n\t" + this.option5 + "\n\t" + this.option6 + "\n\t" + this.option7 + "\n\t" + this.option8 + "\n\t";
    }
};

// Declare a function for Option 5 : Sub-Menu Display
var subMenu = {
    option1: "1. Display names of (all) a certain type of members only.",
    option2: "2. Display the name of the youngest and oldest member in the system.",
    option3: "3. Display the name of members with the highest and lowest points earned.",
    option4: "4. Display total number of members in each membership type.",
    option5: "5. Display the total points in each membership type.",
    option6: "6. Display the names of members with the shortest and longest membership periods respectively.",
    option7: "7. Return to main-menu",
    subMenuOptions: function () {
        return this.option1 + "\n\t\t" + this.option2 + "\n\t\t" + this.option3 + "\n\t\t"+ this.option4 + "\n\t\t" + this.option5 + "\n\t\t" + this.option6 + "\n\t\t" + this.option7 + "\n\t\t";
    }
}

// Declare a function for Referral Menu Display
var referralMenu = {
    option1: "1. Membership referral for new members",
    option2: "2. Display the newest member's information under the referral program.",
    option3: "3. Return to main-menu",
    referralMenuOptions : function () {
        return this.option1 + "\n\t\t" + this.option2 + "\n\t\t" + this.option3 + "\n\t\t";
    }
}

// Declare a function for Shop Menu Display
var shopMenu = {
    option1: "1. Merchandise Items",
    option2: "2. Membership Seasonal Discounts",
    option3: "3. Return to main-menu",
    shopMenuOptions: function (){
        return this.option1 + "\n" + this.option2 + "\n" + this.option3 + "\n";
    }
}

// Declare a function for Merchandise Items (Shop)
var merchandiseItems = {
    item1: "1. XYZ's Trademark T-Shirt ~ $10.00",
    item2: "2. Recyclable Tote Bags ~ $5.00",
    item3: "3. Disney-Themed Coffee Mug ~ $51.00",
    item4: "4. Handmade Embroided Sweatshirt ~ $25.00",
    item5: "5. Silk-Made Socks ~ $10.00",
    item6: "6. Tailor-Made Formal Dress Suit ~ $ 101.00",
    item7: "7. Animal-Themed Jacket ~ $57.00",
    merchandiseItemsOptions: function (){
        return this.item1 + "\n" + this.item2 + "\n" + this.item3 + "\n" + this.item4 + "\n" + this.item5 + "\n" + this.item6 + "\n" + this.item7 + "\n";
    }
    
}

// Input Validation Functions ===============================================================

// Function to capitalize only the first letter of a name input
function capitalizefirstletter (str) {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    return capitalized;
}

// Function to Check Invalid Amount Spent - If inputs contain letters/negative numbers
function checkInvalidAmount(char) {
    return (/^\d+(\.\d+)?$/).test(char);
  }

// Function to Validate Name (only contains letters)
function onlyLetters(char) {
    return /^[A-Za-z\s]*$/.test(char);
  }

// Function to Validate Birth Dates FORMAT (DD MMM YYYY)
function validBirthday (date) {
    return /[0-9]{2}[\s+](Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[\s+][0-9]{4}$/.test(date);
    // \s+ represents whitespaces
}

// Function to Validate Email Addresses (e.g. john.doe@gmail.com)
function validEmail(email) {
    return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email);
}

//======================================================================================================

// Function to update the points earned by the member
function pointsUpdate () {
                    
    for (i = 0; i < memberList.memberInfo.length; i++){
        
        if ((memberList.memberInfo[i].pointsEarned >= 0 && memberList.memberInfo[i].pointsEarned <= 500) && (capitalizedmemberShopName == memberList.memberInfo[i].memberName)){
            memberList.memberInfo[i].membershipType = 'Ruby';
        
        } else if ((memberList.memberInfo[i].pointsEarned > 500 && memberList.memberInfo[i].pointsEarned < 5000) && (capitalizedmemberShopName == memberList.memberInfo[i].memberName)) {
            memberList.memberInfo[i].membershipType = 'Gold';

        } else if ((memberList.memberInfo[i].pointsEarned >= 5000 && memberList.memberInfo[i].pointsEarned < 20000) && (capitalizedmemberShopName == memberList.memberInfo[i].memberName)) {
            memberList.memberInfo[i].membershipType = 'Platinum';

        } else if (memberList.memberInfo[i].pointsEarned >= 20000 && (capitalizedmemberShopName == memberList.memberInfo[i].memberName)) {
            memberList.memberInfo[i].membershipType = 'Diamond';
        }

    }
}

//Function to check which member belongs to which membership type
function membershipTypeComparison(){

    do {
        var checkmembershipType = false;
        var platinumMembershipCheck = false;
        var errorMembership = false;

        var memberOutput = '';
        const inputMembershipType = input.question("\t\tEnter membership type: ");
        var membershipTypeCapitalized = capitalizefirstletter (inputMembershipType);
   
        for (i = 0; i < memberList.memberInfo.length; i++) {
            
            if (membershipTypeCapitalized == 'Ruby' && membershipTypeCapitalized == memberList.memberInfo[i].membershipType){
                memberOutput += memberList.memberInfo[i].memberName + ', ';
                checkmembershipType = true;
            }  
            else if (membershipTypeCapitalized == 'Gold' && membershipTypeCapitalized == memberList.memberInfo[i].membershipType){
                memberOutput += memberList.memberInfo[i].memberName + ', ';
                checkmembershipType = true;
            }  
            else if (membershipTypeCapitalized == 'Platinum' && membershipTypeCapitalized == memberList.memberInfo[i].membershipType){
                memberOutput += memberList.memberInfo[i].memberName + ', ';
                checkmembershipType = true;
            }
            else if (membershipTypeCapitalized == 'Diamond' && membershipTypeCapitalized == memberList.memberInfo[i].membershipType){
                memberOutput += memberList.memberInfo[i].memberName + ', ';
                checkmembershipType = true;
            }  
        }

        // Regex Expression to remove the comma at the end if there are multiple names 
        memberOutput = memberOutput.replace(/,\s*$/, "");

        if (checkmembershipType == true && platinumMembershipCheck == false){
            console.log("\t\tNumber(s) of membership type " + membershipTypeCapitalized.toLowerCase() + ": " + memberOutput + ".\n");
        }
       
        // Check if a member has the membership type 'Platinum'
        for (k = 0; k < memberList.memberInfo.length; k++){
            if (checkmembershipType == true && memberList.memberInfo[k].membershipType != 'Platinum'){ 
                platinumMembershipCheck = true;
            }
        }

        // Print if membership type inputted does not exist
        if (!checkmembershipType && membershipTypeCapitalized != 'Platinum'){ 
            console.log("\t\tPlease enter a valid membership type.\n");
            errorMembership = true;
        }   

        // Print if NO members hold the platinum membership
        if (platinumMembershipCheck == false && errorMembership == false){
            console.log("\t\tThere are currently no members holding this membership type.\n");
        }

    } while (!checkmembershipType && membershipTypeCapitalized != 'Platinum');
    
}

// Function to add the total points in each membership type respectively
function pointsAddition (){
    for (k = 0; k < memberList.memberInfo.length; k++) {
                    
        if (memberList.memberInfo[k].pointsEarned == pointsEarned[k] && memberList.memberInfo[k].membershipType == 'Ruby'){
            totalRubyPoints += pointsEarned[k];
        }
        else if (memberList.memberInfo[k].pointsEarned == pointsEarned[k] && memberList.memberInfo[k].membershipType == 'Gold'){
            totalGoldPoints += pointsEarned[k];
        }
        else if (memberList.memberInfo[k].pointsEarned == pointsEarned[k] && memberList.memberInfo[k].membershipType == 'Platinum'){
            totalPlatinumPoints += pointsEarned[k];
        }
        else if (memberList.memberInfo[k].pointsEarned == pointsEarned[k] && memberList.memberInfo[k].membershipType == 'Diamond'){
            totalDiamondPoints += pointsEarned[k];
        }
    }
}

// Function to count the number of memberships held by existing members respectively
function countMembershipTypes (){

    // The forEach() method calls a function for each element in an array. The forEach() method is not executed for empty elements.

    membershipTypeCount.forEach(memberships => {

        if (memberships === 'Ruby'){
            numberOfRuby += 1;
        }
        else if (memberships === 'Gold'){
            numberOfGold += 1;
        }
        else if (memberships === 'Platinum'){
            numberOfPlatinum += 1;
        }
        else if (memberships === 'Diamond'){
            numberOfDiamond += 1;
        }
    });
}

// Function to display the oldest and youngest member in the system
function ageComparison (){

    var birthdateArray = [];

        for (i = 0; i < memberList.memberInfo.length; i++){
            birthDate = new Date(memberList.memberInfo[i].dateofBirth).getTime();
            birthdateArray.push(birthDate);
        }

        // Arranging the dates from earliest to latest
        var sortedBirthDates = birthdateArray.sort ((a, b) => a - b);

        var oldestDate = Math.min(...sortedBirthDates); // Getting the smallest date value in the sortedBirthdates array
        var mostRecentDate = Math.max(...sortedBirthDates); // Getting the largest date value in the sortedBirthdates array

        // Compare Dates between youngest and oldest member
                                
        for (i = 0; i < memberList.memberInfo.length; i++){
                    
            var birthdayDates = new Date(memberList.memberInfo[i].dateofBirth);
            var birthdayCompared = birthdayDates.getTime();

            // if statement to declare and initialize youngestMember
            if (oldestDate == birthdayCompared){
                    var oldestMember = memberList.memberInfo[i].memberName; 
            }
            // if statement to declare and initialize oldestMember
            if (mostRecentDate == birthdayCompared){
                    var youngestMember = memberList.memberInfo[i].memberName;
            }
        }
            
        console.log("\t\tYoungest member: " + youngestMember + "\n\t\tOldest member  : " + oldestMember + "\n");
}

// Function to display the member(s) with the most and least number of points
function pointsComparison (){

    var highestPoints = ''; 
    var lowestPoints = '';
    var pointsEarned = []; // Declare a pointsEarned array 

    // Storing the pointsEarned into an array 
    for (i = 0; i < memberList.memberInfo.length; i++){
        pointsEarned.push(memberList.memberInfo[i].pointsEarned); 
    }
                
    for (k = 0; k < memberList.memberInfo.length; k++){
    // '...' spread operator provides all of the values of the array as individual parameters

    // Checks for Most Number of Points
        if (memberList.memberInfo[k].pointsEarned == Math.max(...pointsEarned)) {
                highestPoints += memberList.memberInfo[k].memberName + ', ';     
        }
                    
    // Checks for Least Number of Points
        if (memberList.memberInfo[k].pointsEarned == Math.min(...pointsEarned)) {
                lowestPoints += memberList.memberInfo[k].memberName + ', ';
            }
    }

    // Regex Expression to remove the comma at the end if there are multiple names 
    lowestPoints = lowestPoints.replace(/,\s*$/, "");
    highestPoints = highestPoints.replace(/,\s*$/, "");

    // Prints name of member with the most and least number of points
    console.log("\t\tHighest member : " + highestPoints + "\n\t\tLowest member  : " + lowestPoints + "\n");
}

// Function to display the members with the shortest & longest membership periods
function loyaltyMembership (){

    var dateJoinedArray = [];
    for (i = 0; i < memberList.memberInfo.length; i++){
            dateJoined = new Date(memberList.memberInfo[i].datejoined).getTime(); // getTime() method returns the numeric value corresponding to the time for the date according to universal time, value returned by the getTime method is the number of ms since 1 January 1970 
            dateJoinedArray.push(dateJoined);
    }

    // Arranging the dates from earliest to latest
    var sortedDateJoined = dateJoinedArray.sort ( //.sort arranges dates in the array by order from earliest to most recent
    (dateA, dateB) => new Date(dateA) - new Date(dateB));

    // Printing the Member with the shortest and longest membership
    var shortestMembership = Math.max(...sortedDateJoined);
    var longestMembership = Math.min(...sortedDateJoined); 
                
    for (i = 0; i < sortedDateJoined.length; i++){
                    
        // if statement to declare and initialize the member with the shortest membership
        if (shortestMembership == sortedDateJoined[i]){
            var shortestMembershipMember = memberList.memberInfo[i].memberName;
        }
        // if statement to declare and initialize the member with the longest membership
        if (longestMembership == sortedDateJoined[i]){
            var longestMembershipMember = memberList.memberInfo[i].memberName;
        }
    }
    console.log("\t\tMember with the shortest membership : " + shortestMembershipMember + "\n\t\tMember with the longest membership  : " + longestMembershipMember + "\n\n\t\t" + "Thank you for your unwavering support towards our membership program, " + longestMembershipMember + "!" +"\n");
}

// Function for Switch Cases for Merchandise Items (Online Shopper's Paradise)

function addTenPoints () {
    for (i = 0; i < memberList.memberInfo.length; i++){
        if (capitalizedmemberShopName == memberList.memberInfo[i].memberName){
            memberList.memberInfo[i].pointsEarned += 10;
                console.log("Thank you for your purchase! 10 points have been credited to your account.\n");
        }
    }
}

function addFiftyPoints(){
    for (i = 0; i < memberList.memberInfo.length; i++){
        if (capitalizedmemberShopName == memberList.memberInfo[i].memberName){
            memberList.memberInfo[i].pointsEarned += 50;
                console.log("Thank you for your purchase! 50 points have been credited to your account.\n");
        }   
    }
}

function addHundredPoints(){
    for (i = 0; i < memberList.memberInfo.length; i++){
        if (capitalizedmemberShopName == memberList.memberInfo[i].memberName){
            memberList.memberInfo[i].pointsEarned += 100;
                console.log("Thank you for your purchase! 100 points have been credited to your account.\n");
        }
    }
}

// Function to Display Discount Menu Based on Membership Type

// Ruby Membership
function rubyMembership (){
    do {
        console.log("\nSeasonal Discounts for Ruby Memberships - Earn 10 points per purchase!\nChoose a discounted item below: \n");
        var validInput = false;
        var discountRuby = input.question("1. 20% off 2 XYZ's Trademark T-shirt ~ $16.00\n2. 20% off Silk-Made Socks ~ $8.00\n3. 20% off 2 recyclable tote bags ~ $8.00\n>> ");
    
        for (i = 0; i < memberList.memberInfo.length; i++){
            if (discountRuby == '1' || discountRuby == '2' || discountRuby == '3'){
                validInput = true; 
                memberList.memberInfo[i].pointsEarned += 10; 
            }
        }

        if (!validInput){
            console.log("Please enter a valid input!");
        } else {
            console.log("Thank you for your purchase! 10 points have been credited to your account.");
        }   

    } while (!validInput);
}

// Gold Membership
function goldMembership (){
    do {
        console.log("\nSeasonal Discounts for Gold Memberships - Earn 20 points per purchase!\nChoose a discounted item below: \n");
        var discountGold = input.question("1. 40% off 2 XYZ's Trademark T-shirt ~ $12.00\n2. 40% off Silk-Made Socks ~ $6.00\n3. 40% off 2 recyclable tote bags ~ $6.00\n>> ");
        var validInput = false;
        
        for (i = 0; i < memberList.memberInfo.length; i++){
            if (discountGold == '1' || discountGold == '2' || discountGold == '3'){
                validInput = true;
                memberList.memberInfo[i].pointsEarned += 20;              
            }
        }

        if (!validInput){
            console.log("Please enter a valid input!");
        } else {
            console.log("Thank you for your purchase! 20 points have been credited to your account.");
        }   
             
    } while (!validInput);
}

// Platinum Membership
function platinumMembership (){
    do {
        console.log("\nSeasonal Discounts for Platinum Memberships - Earn 30 points per purchase!\nChoose a discounted item below: \n");
        var discountPlatinum = input.question("1. 60% off 2 XYZ's Trademark T-shirt ~ $8.00\n2. 60% off Silk-Made Socks ~ $4.00\n3. 60% off 2 recyclable tote bags ~ $4.00\n>> ");
        var validInput = false;
        
        for (i = 0; i < memberList.memberInfo.length; i++){
            if (discountPlatinum == '1' || discountPlatinum == '2' || discountPlatinum == '3'){
                validInput = true;
                memberList.memberInfo[i].pointsEarned += 30;      
            }
        }

        if (!validInput){
            console.log("Please enter a valid input!");
        } else {
            console.log("Thank you for your purchase! 30 points have been credited to your account.");
        }     

    } while (!validInput);
}

// Diamond Membership
function diamondMembership (){
    do {
        console.log("\nSeasonal Discounts for Diamond Memberships - Earn 40 points per purchase!\nChoose a discounted item below: \n");
        var discountDiamond = input.question("1. 80% off 2 XYZ's Trademark T-shirt ~ $4.00\n2. 80% off Silk-Made Socks ~ $2.00\n3. 80% off 2 recyclable tote bags ~ $2.00\n>> ");
        var validInput = false;
        
        for (i = 0; i < memberList.memberInfo.length; i++){
            if (discountDiamond == '1' || discountDiamond == '2' || discountDiamond == '3'){
                validInput = true;
                memberList.memberInfo[i].pointsEarned += 40;                 
            }
        }

        if (!validInput){
            console.log("Please enter a valid input!");
        } else {
            console.log("Thank you for your purchase! 40 points have been credited to your account.");
        }  

    } while (!validInput);
}

// Function for adding points to existing member and new referred member

function referralPoints (){
    // Add 50 points to the new member under the referral
    for (i = 0; i < memberList.memberInfo.length; i++){
        if (capitalizedReferredMemberName == memberList.memberInfo[i].memberName){
            memberList.memberInfo[i].pointsEarned += 50;
            console.log("\t\tWelcome, " + memberList.memberInfo[i].memberName + "!\n\t\tDue to a referral from an existing member, 50 points have been credited to your account!\n");
        }
    }
}

function referredPoints (){
    // Add 100 points to the existing member that made a referral
    for (i = 0; i < memberList.memberInfo.length; i++){
        if (capitalizedMemberReferral == memberList.memberInfo[i].memberName){
            memberList.memberInfo[i].pointsEarned += 100;
        }
    }
}

// Function to Extract the Information of the NEWEST member added to the referral program

function newestMemberReferral () {

    // Display the information of NEWEST member ONLY added to the referral program
    var memberValid = false;

    for (i = 0; i < memberList.memberInfo.length; i++){
        if (capitalizedReferredMemberName == memberList.memberInfo[i].memberName && referredMemberBirth == memberList.memberInfo[i].dateofBirth){
            console.log("\n\t\tNewest member added to the referral program:\n\n\t\tName: " + memberList.memberInfo[i].memberName + "\n\t\tMembership Type: "+ memberList.memberInfo[i].membershipType + "\n\t\tDate joined: " + memberList.memberInfo[i].datejoined + "\n\t\tDate of Birth: " + memberList.memberInfo[i].dateofBirth + "\n\t\tPoints Earned: " + memberList.memberInfo[i].pointsEarned + "\n\t\tEmail Address: " + referredMemberEmail + "\n");
            memberValid = true;
        }
    }

    if (!memberValid){
        console.log("\t\tPlease ensure the name of the member you wish to refer is successfully saved before choosing this option. Thank you!\n")
    }
}

// =========================================================================================================================================================================

// Gets the Local Date 

// Update the Date Joined for new members (Shows current local date)
const todayDate = new Date();
        
// Create a new array to store all 12 months
monthList = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
 
let day = todayDate.getDate();
let month = monthList[todayDate.getMonth()];
let year = todayDate.getFullYear();
 
// Date format : Day Month Year
let DateJoined = `${day} ${month} ${year}`;


// Main Code Program =======================================================================================

// Step 4 : Requesting for User's Name 
do {
    var name = input.question("\nWelcome to XYZ Membership Loyalty Programme!\nPlease enter your name: ");
    
      if ((!(onlyLetters(name))) || name == ''){ //Callback to function onlyLetters
        console.log("\nSorry! Please enter only alphabetical characters.");
    }
} while ((!(onlyLetters(name))) || name == '');

// Step 5 : Display Member Options
do {
    var menuOptions = input.question("\nHi "+ capitalizefirstletter(name) +", please select your choice:\n\t" + menuOptionsList.menu() + ">> "); 

    // Step 6 : Create a switch statement to store all possible options
    // Use string values for the CASES to allow only one value to be inputted
    
    switch (menuOptions) {

    // Display all 5 members' information - Use For Loop 
    case '1' :
        for (i = 0; i < memberList.memberInfo.length; i++) { // Looping through the elements in the memberList array for all the members
            console.log("\n\nName: " + memberList.memberInfo[i].memberName + "\nMembership Type: "+ memberList.memberInfo[i].membershipType + "\nDate joined: " + memberList.memberInfo[i].datejoined + "\nDate of Birth: " + memberList.memberInfo[i].dateofBirth + "\nPoints Earned: " + memberList.memberInfo[i].pointsEarned);
        }

    break; 

    // Display the member's membership information
    case '2' :      
        const promptmemberName = input.question("Please enter member's name: ");
        const inputName = capitalizefirstletter (promptmemberName);
        var checkMember = false; // Assumes that member does not exist

        for (i = 0; i < memberList.memberInfo.length; i++) {
            if (inputName == memberList.memberInfo[i].memberName) {
                console.log("\nName: " + memberList.memberInfo[i].memberName + "\nMembership Type: "+ memberList.memberInfo[i].membershipType + "\nDate joined: " + memberList.memberInfo[i].datejoined + "\nDate of Birth: " + memberList.memberInfo[i].dateofBirth + "\nPoints Earned: " + memberList.memberInfo[i].pointsEarned);
                checkMember = true; // checkMember is re-initialized to TRUE value, so the code exits the loop
        }
    }
        if (!checkMember) { // Executed if checkMember is still false
            console.log("Member does not exist.");
        }

        // Extra Feature - if birthdate is the same as current date, happy birthday message is printed
        for (k = 0; k < memberList.memberInfo.length; k++){
            if (memberList.memberInfo[k].dateofBirth == DateJoined){
                console.log("\nDear " + inputName + ",\nWishing you a happy and blessed birthday!")
            }
        }    

    break;

    // Prompt User to input new member information (Name & D.O.B)
    case '3' : 
        // Name Prompt
        do {
            var checkMember = false;

            // do-while loop to repeatedly prompt for a new name if name contains special characters/numbers
            do {
                const validateMemberName = input.question("Please enter member's name: ");
                var checkMemberName = capitalizefirstletter (validateMemberName); // Reference to above function to make only the first letter of the name capitalized
                
                if ((!(onlyLetters(checkMemberName))) || checkMemberName == ''){ // Callback to onlyLetters function above
                    console.log("\nSorry! Please enter only alphabetical characters.");
                }

            } while ((!(onlyLetters(checkMemberName))) || checkMemberName == '');

            for (i = 0; i < memberList.memberInfo.length; i++) {
                if (checkMemberName == memberList.memberInfo[i].memberName){ // Check if name inputted is already in memberList database
                    console.log("\nMember's name exists in database. Please enter a new name.");
                    checkMember = true;
                }
            }

        } while (checkMember == true); // Loop again unless a new member's name is entered

        // Date of Birth Prompt 
        do {
            var birthDate = input.question("Please enter member's date of birth: "); 
            if (!(validBirthday(birthDate))) { // Callback to birthday validation function
                console.log("\nPlease enter a valid date of birth in the format (e.g. 01 Jan 2000). ");
            }
        
        } while (!(validBirthday(birthDate)));

        // Adding new members' information to the program under memberList Array 
        memberList.memberInfo.push( new Member (checkMemberName , 'Ruby' , DateJoined , birthDate , 0));

        // Birthday Rewards System - for new members ONLY (additional function)
        for (i = 0; i < memberList.memberInfo.length; i++){
            
            // String split and check month and day
            var birthDay = memberList.memberInfo[i].dateofBirth.split(' ');
            var birthMonthCheck = birthDay[1];
            var birthDayCheck = birthDay[0];

            // Date of Birth must have the same month and day as Date Joined
            if (birthMonthCheck == monthList[todayDate.getMonth()] && birthDayCheck == todayDate.getDate() && checkMemberName == memberList.memberInfo[i].memberName){
                console.log("\nXYZ Membership wishes you a blessed birthday!\nSince you joined on your special day, we are rewarding you with 20 bonus points!");
                memberList.memberInfo[i].pointsEarned += 20;
            } 
        }   
        
    break;

    // Update user points based on their amount spent
    case '4' :
            //Validate the name input - Accept only if member already exists
            var updateName = input.question("Please enter member's name: ");
            const updateCapitalizedName = capitalizefirstletter (updateName);
            var verification = false;

            for (i = 0; i < memberList.memberInfo.length; i++) {
                if (updateCapitalizedName == memberList.memberInfo[i].memberName){ // Check if name inputted is already in memberList database
                    verification = true;
                }
            }

            if (!verification) { // Execute this line if name input is not in the memberList database
                console.log ("Member does not exist.");
            }

        if (verification == true){
            do {
                var amountSpent = input.question("Please enter amount spent: ");
        
                if ((!checkInvalidAmount(amountSpent)) || amountSpent == 0) {
                    console.log("\nSorry, your input for the amount spent is invalid.");
                }
        
                // Rounds the number to an appropriate value with 2 decimal places ONLY
                var amountSpentRounded = parseFloat(amountSpent).toFixed(2);
        
                for (i = 0; i < memberList.memberInfo.length; i++) {
                
                    // if-else statement to add points accordingly 
                    if ((amountSpent > 0 && amountSpentRounded <= 50) && updateCapitalizedName == memberList.memberInfo[i].memberName && checkInvalidAmount(amountSpent)) {
                        memberList.memberInfo[i].pointsEarned += 10;
                
                    } else if ((amountSpentRounded >= 50.01 && amountSpentRounded <= 100) && (updateCapitalizedName == memberList.memberInfo[i].memberName && checkInvalidAmount(amountSpent))) {
                        memberList.memberInfo[i].pointsEarned += 50;
                
                    } else if ((amountSpentRounded >= 100.01 && amountSpentRounded <= 200) && (updateCapitalizedName == memberList.memberInfo[i].memberName && checkInvalidAmount(amountSpent))) {
                        memberList.memberInfo[i].pointsEarned += 100;
        
                    } else if ((amountSpentRounded >= 200.01 && amountSpentRounded <= 500) && (updateCapitalizedName == memberList.memberInfo[i].memberName && checkInvalidAmount(amountSpent))) {
                        memberList.memberInfo[i].pointsEarned += 200;
        
                    } else if ((amountSpentRounded >= 500.01 && amountSpentRounded <= 1000) && (updateCapitalizedName == memberList.memberInfo[i].memberName && checkInvalidAmount(amountSpent))) {
                        memberList.memberInfo[i].pointsEarned += 500;
        
                    } else if ((amountSpentRounded >= 1000.01 && amountSpentRounded <= 2500) && (updateCapitalizedName == memberList.memberInfo[i].memberName && checkInvalidAmount(amountSpent))) {
                        memberList.memberInfo[i].pointsEarned += 1000;
        
                    } else if (amountSpentRounded >= 2500.01 && updateCapitalizedName == memberList.memberInfo[i].memberName && checkInvalidAmount(amountSpent)) {
                        memberList.memberInfo[i].pointsEarned += 2000;
                    }
        
                    // if-else statement to update membershipType based on pointsEarned 
                    if (memberList.memberInfo[i].pointsEarned >= 0 && memberList.memberInfo[i].pointsEarned <= 500) {
                        memberList.memberInfo[i].membershipType = 'Ruby';
                
                    } else if (memberList.memberInfo[i].pointsEarned > 500 && memberList.memberInfo[i].pointsEarned < 5000) {
                        memberList.memberInfo[i].membershipType = 'Gold';
                
                    } else if (memberList.memberInfo[i].pointsEarned >= 5000 && memberList.memberInfo[i].pointsEarned < 20000) {
                        memberList.memberInfo[i].membershipType = 'Platinum';
                
                    } else if (memberList.memberInfo[i].pointsEarned >= 20000) {
                        memberList.memberInfo[i].membershipType = 'Diamond';
                    } 
                }
            
            } while ((!checkInvalidAmount(amountSpent)) || amountSpent == 0);
    }
    
    break;

    // ======= Display Sub-Menu using Switch Statement =============================================================================
    case '5' :
    do {
        var subMenuOptions = input.question("\t\tPlease select an option from the sub-menu:\n\t\t" + subMenu.subMenuOptions() + ">> ");

        // Create another switch statement - for subMenu Options
        
        switch (subMenuOptions) { 
            case '1' :
                membershipTypeComparison();
          
            break;

            case '2' :
                ageComparison();

            break;

            case '3' :
                pointsComparison();

            break;

            case '4' :
                // Storing membershipType into an array 
                var membershipTypeCount = [];
                for (i = 0; i < memberList.memberInfo.length; i++){
                    membershipTypeCount.push(memberList.memberInfo[i].membershipType); // storing the membershipType in an array
                }
                
                // Print number of members that have the membershipType
                var numberOfRuby = 0;
                var numberOfGold = 0;
                var numberOfPlatinum = 0;
                var numberOfDiamond = 0;
                
                countMembershipTypes();
                
                // Printing the number of members with the specific Membership Types
                console.log("\t\t" + "ruby: " + numberOfRuby + "\n\t\t" + "gold: " + numberOfGold + "\n\t\t" + "platinum: " + numberOfPlatinum + "\n\t\t" + "diamond: " + numberOfDiamond + "\n");

            break;

            case '5' :
                // Storing the pointsEarned into an array 
                var pointsEarned = []; 
                for (i = 0; i < memberList.memberInfo.length; i++){
                    pointsEarned.push(memberList.memberInfo[i].pointsEarned); // storing the points in an array pointsEarned       
                }

                var totalRubyPoints = 0;
                var totalGoldPoints = 0;
                var totalPlatinumPoints = 0;
                var totalDiamondPoints = 0;
                
                // Adding the points for each membership type
                pointsAddition();
                
                // Printing the sum of points in each membership type
                console.log("\t\t" + "ruby: " + totalRubyPoints + "\n\t\t" + "gold: " + totalGoldPoints + "\n\t\t" + "platinum: " + totalPlatinumPoints + "\n\t\t" + "diamond: " + totalDiamondPoints + "\n");

            break;

            // Displaying membership loyalty - shortest and longest period (in terms of date joined)
            case '6' :
                loyaltyMembership();

            break;

            case '7' : 
            // No code needed - Automatically returns to main menuOptionsList
            break;

            // For invalid inputs (not within range of 1-7 or contain decimal values)
            default :
                console.log("\t\tPlease enter a valid input.\n")
        }

    } while (subMenuOptions != '7');

    break;

    // Membership Referral Program (Referral Menu)
    case '6' :
        do {
            var referralMenuOptions = input.question("\t\tPlease select an option from the Membership Referral Menu:\n\t\t" + referralMenu.referralMenuOptions() + ">> ")
        
        // Create another switch statement to display referral menu options

        switch (referralMenuOptions){

            case '1' :
                // Start of Referral Page

                var validMember = false;
                console.log("\n\t\tWelcome to XYZ Membership's Referral Program!\n\n\t\tUpon each successful referral, you will earn an additional 100 points.\n\t\tCheck your points balance after a successful referral.");
                
                // Generate a referral code for future referrals
                var referralcode = 'REFERRALSUCCESS100';
                console.log("\n\t\tThe referral code to activate the referral program is: " + referralcode);
                var referralCodeValidate = input.question("\t\tPlease enter the referral code to proceed: ");
                
                // Input the name of an existing member
                if (referralCodeValidate == referralcode) {
                    var memberReferral = input.question("\n\t\tPlease enter an existing member's name: ");
                    var capitalizedMemberReferral = capitalizefirstletter(memberReferral);
            
                // Add new member (Prompt for Name, date of birth and add 50 points to new member's info)
                do {
                    for (i = 0; i < memberList.memberInfo.length; i++) {
                        if (capitalizedMemberReferral == memberList.memberInfo[i].memberName){ // Check if name inputted is already in memberList database
                            var referredMemberName = input.question("\t\t____________________________________________________________\n" + "\n\t\t[ New Member Information ]\n\n\t\tPlease enter the new member's name: ");
                            var capitalizedReferredMemberName = capitalizefirstletter(referredMemberName);
                            validMember = true;
                    }
                }
                
                    if ((!(onlyLetters(capitalizedReferredMemberName))) || capitalizedReferredMemberName == ''){ // Callback to onlyLetters function above
                        console.log("\t\tSorry! Please enter only alphabetical characters.");
                    }

                } while ((!(onlyLetters(capitalizedReferredMemberName))) || capitalizedReferredMemberName == '');
            
                // If member does not exist, return user back to referral menu options 
                if (!validMember){
                    console.log("\t\tMember does not exist.\n");
                }
            
                var memberExist = false;
                
                // If member already exists, return user back to referral menu options
                
                for (i = 0; i < memberList.memberInfo.length; i++) {
                    if (capitalizedReferredMemberName == memberList.memberInfo[i].memberName && validMember == true){ // Check if name inputted is already in memberList database
                        console.log("\t\tMember's name exists in database.\n");
                        memberExist = true;
                    }
                }

                // Executes the code if memberReferral is an existing member's name & referredMemberName is not an existing member
                if (validMember == true && memberExist == false){
                    
                    // Prompt for new Member's Date of Birth
                    do {
                        var referredMemberBirth = input.question("\t\tPlease enter the new member's date of birth: "); 
                        if (!(validBirthday(referredMemberBirth))) { // Callback to birthday validation function
                            console.log("\n\t\tPlease enter a valid date of birth in the format (Example : 01 Jan 1990). ");
                    }
                
                    } while (!(validBirthday(referredMemberBirth)));

                    // Prompt for new Member's Email Address
                    do {
                        var referredMemberEmail = input.question("\t\tPlease enter the new member's email address: ");
                        
                        if (!(validEmail(referredMemberEmail))){
                            console.log("\n\t\tInvalid email address detected. Please enter a valid email address.");
                        } 

                    } while (!(validEmail(referredMemberEmail)));
                
                    console.log("\t\t____________________________________________________________\n" + "\n\t\t[ Personal Details of New Member ]\n\t\t" + "\n\t\tName: " + capitalizedReferredMemberName + "\n\t\tDate of Birth: " + referredMemberBirth + "\n\t\tEmail Address: " + referredMemberEmail + "\n\t\t");
                
                // Adding the information of REFERRED MEMBERS to the program under memberList Array 
                memberList.memberInfo.push( new Member (capitalizedReferredMemberName , 'Ruby' , DateJoined , referredMemberBirth , 0));

                // Add 50 points to new member under referral
                referralPoints();

                // Add 100 points to member who did a referral
                referredPoints();

                
            }
                } else {
                    console.log("\n\t\tInvalid referral code detected! Please re-enter the code.\n\t\tDirecting you back to the membership referral menu...\n");
                }

                // ** Update membership type when referral points reach the required amount =================================================================================================================================================================================
                pointsUpdate();

                // End of Referral Page =====================================================================================================================================================================================================================================
            
            break;
    
            case '2' :
                newestMemberReferral();

            break;
            
            case '3' :
            // No code needed - Automatically returns to main menuOptionsList
            break;

            // For invalid inputs (not within range of 1-3 or contain decimal values)
            default :
                console.log("\t\tPlease enter a valid input.\n");    

}

} while (referralMenuOptions != '3');

    break;

    // Online Shopper's Paradise
    case '7' :
        console.log("Welcome to XYZ's Online Shopper's Paradise!\nPoints are earned for every purchase. Please note that only ONE item can be purchased each time.\n");

        // Prompt for an existing member's name
        var memberShopName = input.question("Please enter an existing member's name: ");
        var capitalizedmemberShopName = capitalizefirstletter(memberShopName);

        var shopNameValidation = false;

        // For loop to check if the member already exists in the system
        for (i = 0; i < memberList.memberInfo.length; i++) {
            if (capitalizedmemberShopName == memberList.memberInfo[i].memberName) {
                console.log("\nMember Identified: " + capitalizedmemberShopName + "\nMembership Type: " + memberList.memberInfo[i].membershipType);
                shopNameValidation = true;
            }
        }

        if (!shopNameValidation){
            console.log("Member does not exist."); // Returns User to main-menu if member does not exist
        }

        // Print Shop System (Price varies according to membership type)
        // Split into 2 categories : Merchandise and Discounts (discounts based on membership type)
        if (shopNameValidation == true){  

            do {

                var shopMenuOptions = input.question("\nPlease select one of the options from the menu below: \n" + shopMenu.shopMenuOptions() + ">> ");

                switch (shopMenuOptions) {

                    case '1' :
                
                        var chooseMerchandise = input.question("\nPlease select from one of the following merchandise items:\n" + merchandiseItems.merchandiseItemsOptions() + ">> ");
                        
                        switch (chooseMerchandise) {

                            case '1' :
                                addTenPoints();
                            break;

                            case '2' :
                                addTenPoints();
                            break;

                            case '3' :
                                addFiftyPoints();
                            break;
                        
                            case '4' :
                                addTenPoints();
                            break;

                            case '5' :
                                addTenPoints();
                            break;

                            case '6' :
                                addHundredPoints();
                            break;

                            case '7' :
                                addFiftyPoints();
                            break;

                            default :
                                console.log("Please only input values from 1 to 7.");

                        }
                        
                    // ** Update membership type when shop points reach the required amount =================================================================================================================================================================================
                    pointsUpdate();

                // ==========================================================================================================================================================================================================================================================
                    
                break;

                case '2' :
                    for (i = 0; i < memberList.memberInfo.length; i++){
                        if (capitalizedmemberShopName == memberList.memberInfo[i].memberName) {
                            var membershipCheck = memberList.memberInfo[i].membershipType;
                        }
                    }
                    
                    // Show different discount prices based on membership types (higher the membership, greater the discount and higher point allocation)

                    if (membershipCheck == 'Ruby'){ // 20% Discount
                        rubyMembership();
                    }

                    else if (membershipCheck == 'Gold'){ // 40% Discount & Higher Point Allocation
                        goldMembership();
                    }

                    else if (membershipCheck == 'Platinum'){ // 60% Discount & Higher Point Allocation
                        platinumMembership();
                    }

                    else if (membershipCheck == 'Diamond'){ // 80% Discount & Higher Point Allocation
                        diamondMembership();
                    }

                    // ** Update membership type when discounted points reach the required amount =================================================================================================================================================================================
                    pointsUpdate();

                // =========================================================================================================================================================================================================================================================

                break;

                case '3' :
                    console.log("Thank you for visiting XYZ's Online Shopping Paradise!");
                break;

                default : // For invalid inputs (not 1/2/3)
                    console.log("Please enter a valid input.");
                
                }

            } while (shopMenuOptions != '3');
        }

    break;

    // Exit Option - Terminates the Program 
    case '8' : 
        console.log("Thank you & goodbye!\n");
    
    break;
    
    // For invalid inputs (not within range of 1-6 or contain decimal values)
    default : 
        console.log("Please enter a valid input.");    
}

// Executes the code as long as Exit option '6' is not inputted by the user
} while (menuOptions != '8');

// =================================================== END OF CA2 FOP PART 2 ===================================================== //
