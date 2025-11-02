const spices = [
    {name: "Emma", nickname: "Baby"},
    {name: "Geri", nickname: "Ginger"},
    {name: "Mel B", nickname: "Scary"},
    {name: "Mel C", nickname: "Sporty"},
    {name: "Victoria", nickname: "Posh"}
];
const spiceGirls = {
    albums: ["Spice", "Spiceworld", "Forever"],
    motto: "Girl Power",
    members: spices
};

// TODO :
// From the spiceGirls object, how can we retrieve:
// "Girl Power"
// The object representing Ginger Spice
// "Spiceworld"
// "Victoria"

spiceGirls.motto;

spiceGirls.members[1];

spiceGirls.albums[1];

spiceGirls.members[4].name;