/*
There are n soldiers standing in a line. 
Each soldier is assigned a unique rating value.

You have to form a team of 3 soldiers 
under the following rules:

1. Choose 3 soldiers with index (i, j, k) with ratings (rating[i], rating[j], rating[k]).
2. A team is valid if:  (rating[i] < rating[j] < rating[k]) where (0 <= i < j < k < n).

Return the number of teams you can form given the conditions. 
(soldiers can be part of multiple teams).


 Example:
         input: [2,5,3,4,1]
         output: 1
         We can only form one team given the 
         conditions: (2,3,4)
*/

var howManyTeams = function(input) {
   var teams = [];
   for(i=0;i<input.length;i++) {
           for(j=i+1;j<input.length;j++) {
                   for(k=j+1;k<input.length;k++) {
                        currTeam = { first:input[i], second:input[j], third:input[k] };
                        if(currTeam.first < currTeam.second && currTeam.second < currTeam.third) {
                                if(i < j < k) {
                                        teams.push(currTeam);
                                }
                        }
                   }
           }
   }
   return teams.length;
};
console.log(howManyTeams([2,1,3]));