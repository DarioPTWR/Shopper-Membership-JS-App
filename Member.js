class Member {
    // Create a constructor for the different objects in the class to refer to
    constructor (memberName, membershipType, datejoined, dateofBirth, pointsEarned) {
        this.memberName = memberName;
        this.membershipType = membershipType;
        this.datejoined = datejoined;
        this.dateofBirth = dateofBirth;
        this.pointsEarned = pointsEarned;
    }
}

//Export the module to main page
module.exports = Member;