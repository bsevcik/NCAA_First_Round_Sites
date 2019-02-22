/*eslint-env browser*/
var data, arrData;
var Columbus = 0;
var Colombia = 0;
var DSM = 0;
var Hartford = 0;
var Jacksonville = 0;
var SLC = 0;
var SJ = 0;
var Tulsa = 0;
var siteNames = [
    "Colombia, SC",
    "Columbus, OH",
    "Des Moines, IA",
    "Hartford, CT",
    "Jacksonville, FL",
    "Salt Lake City, UT",
    "San Jose, CA",
    "Tulsa, OK"
];
var distance, arrDistance;
//This function will delete part of an array by value. Example code below
//removeA(siteNames, "Colombia, SC")
function removeA(arr) {
    "use strict";
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax = arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

$.getJSON('data.json',
    function (data) {
        "use strict";
        window.data = data;
        window.console.log(data);
        window.arrData = Object.keys(data).map((key) => [key, data[key]]);
    //    console.log(arrData);    
    //    return data;
});

//setTimeout so that the json data loads before calling the function
var closestDistances = setTimeout(function() {
    for (var i = 0; i < arrData.length; i++) {

        var team = Object.values(arrData)[i][1]["Team"];
//distances is an array of the distances to sites, it gets looped through for each team
        window.arrDistance = [
                ["Colombia, SC", Object.values(arrData)[i][1]["Colombia, SC"]], 
                ["Columbus, OH", Object.values(arrData)[i][1]["Columbus, OH"]], 
                ["Des Moines, IA", Object.values(arrData)[i][1]["Des Moines, IA"]],
                ["Hartford, CT", Object.values(arrData)[i][1]["Hartford, CT"]],  
                ["Jacksonville, FL", Object.values(arrData)[i][1]["Jacksonville, FL"]],
                ["Salt Lake City, UT", Object.values(arrData)[i][1]["Salt Lake City, UT"]],
                ["San Jose, CA", Object.values(arrData)[i][1]["San Jose, CA"]],
                ["Tulsa, OK", Object.values(arrData)[i][1]["Tulsa, OK"]]
        ];
        
/*        var distances = [
                Object.values(arrData)[i][1]["Colombia, SC"], 
                Object.values(arrData)[i][1]["Columbus, OH"], 
                Object.values(arrData)[i][1]["Des Moines, IA"],
                Object.values(arrData)[i][1]["Hartford, CT"],  
                Object.values(arrData)[i][1]["Jacksonville, FL"],
                Object.values(arrData)[i][1]["Salt Lake City, UT"],
                Object.values(arrData)[i][1]["San Jose, CA"],
                Object.values(arrData)[i][1]["Tulsa, OK"]
        ];*/
    
        if (Colombia >= 2) {
            for (var j2 = 0; j2 < arrDistance.length; j2++) {
                if (arrDistance[j2][0] == "Colombia, SC") {
                    arrDistance.splice(j2, 1);
                }
            }
        };
        if (Columbus >= 2) {
            for (var j3 = 0; j3 < arrDistance.length; j3++) {
                if (arrDistance[j3][0] == "Columbus, OH") {
                    arrDistance.splice(j3, 1);
                }
            }
        };
        if (DSM >= 2) {
            for (var j4 = 0; j4 < arrDistance.length; j4++) {
                if (arrDistance[j4][0] == "Des Moines, IA") {
                    arrDistance.splice(j4, 1);
                }
            }
        };
        if (Hartford >= 2) {
            for (var j5 = 0; j5 < arrDistance.length; j5++) {
                if (arrDistance[j5][0] == "Hartford, CT") {
                    arrDistance.splice(j5, 1);
                }
            }
        };
        if (Jacksonville >= 2) {
            for (var j6 = 0; j6 < arrDistance.length; j6++) {
                if (arrDistance[j6][0] == "Jacksonville, FL") {
                    arrDistance.splice(j6, 1);
                }
            }
        };
        if (SLC >= 2) {
            for (var j7 = 0; j7 < arrDistance.length; j7++) {
                if (arrDistance[j7][0] == "Salt Lake City, UT") {
                    arrDistance.splice(j7, 1);
                }
            }
        };
        if (SJ >= 2) {
            for (var j8 = 0; j8 < arrDistance.length; j8++) {
                if (arrDistance[j8][0] == "San Jose, CA") {
                    arrDistance.splice(j8, 1);
                }
            }
        };
        if (Tulsa >= 2) {
            for (var j9 = 0; j9 < arrDistance.length; j9++) {
                if (arrDistance[j9][0] == "Tulsa, OK") {
                    arrDistance.splice(j9, 1);
                }
            }
        };
        

// This starts a function that tells you the closest regional site
        if (arrDistance.length === 0) {
            document.write(i + 1 + ". " + team + ": " + "<br>");
        } else {
            var minIndex = 0;
            var min = arrDistance[0][1];
            for (var j = 0; j < arrDistance.length; j++) {
                if (arrDistance[j][1] < min) {
                    minIndex = j;
                    min = arrDistance[j][1];
                }
            }
            document.write(i + 1 + ". " + team + ": " + arrDistance[minIndex] + "<br>");
    // add to each region when a team fills it
            if (arrDistance[minIndex][0] == "Colombia, SC") {
                Colombia += 1;
            } else if (arrDistance[minIndex][0] == "Columbus, OH") {
                Columbus += 1;
            } else if (arrDistance[minIndex][0] == "Des Moines, IA") {
                DSM += 1;
            } else if (arrDistance[minIndex][0] == "Hartford, CT") {
                Hartford += 1;
            } else if (arrDistance[minIndex][0] == "Jacksonville, FL") {
                Jacksonville += 1;
            } else if (arrDistance[minIndex][0] == "Salt Lake City, UT") {
                SLC += 1;
            } else if (arrDistance[minIndex][0] == "San Jose, CA") {
                SJ += 1;
            } else if (arrDistance[minIndex][0] == "Tulsa, OK") {
                Tulsa += 1;
            } 
        }
    }
}, 800);
closestDistances;


//Object.keys(user) = ["name", "age"]
//Object.values(user) = ["John", 30]
//Object.entries(user) = [ ["name","John"], ["age",30] ]

/*//Removing from siteNames makes 3rd+ teams region undefined
            removeA(siteNames, "Colombia, SC");
// delete will remove from the global object
            delete Object.values(arrData)[i][1]["Colombia, SC"];

//Distances are numbers, gotta delete from the index
            removeA(distances, "Colombia, SC");*/
