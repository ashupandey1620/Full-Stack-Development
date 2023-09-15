function partyAnimal(){
    this.x = 0;
    this.party = function()
    {
        this.x = this.x+1;
        console.log("So far"+this.x);
    }
}