/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. 
You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you've previously visited. 
Return false otherwise.

Example:
    input: "NESSESW"
    output: false
*/

var isCrossing = function(s) {
    var track = { "x": 0, "y":0 };
    for(let currChar of s) {
        switch(currChar) {
            case "N": 
                track["y"] = track["y"] + 1;
                break;
            case "E":
                track["x"] = track["x"] + 1;
                break;
            case "S":
                track["y"] = track["y"] - 1;
                break;
            case "W":
                track["x"] = track["x"] - 1;
                break;
        }
        if(track["x"] === 0 && track["y"] === 0) {
            return true;
        }
    }
    return false;
};
console.log(isCrossing("NESWW"));
