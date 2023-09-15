function partyAnimal(){
    this.x = 0;
    this.party = function()
    {
        this.x = this.x+1;
        console.log("So far"+this.x);
    }
}
an= new partyAnimal()
for(let i=0;i<100;i++)
an.party();

//objects are created used and discarded

//We can store each distinct object in its own variable.

//We call this having multiple instances of the same class 

//Each instances has its own copy of the class
