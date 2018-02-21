/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let ans = 0;
  for (i=0;i<preferences.length;i++){
    if (preferences[i]===0 ){ 
      continue;
    }
    if (preferences[i]===i+1 ){
      continue;
    }
    if (preferences[preferences[preferences[i]-1]-1] === i+1){ 
      ans++;
      //preferences[preferences[preferences[i]-1]-1] = 0;
      //preferences[preferences[i]-1] = 0;
      preferences[i] = 0;
    }
  }
  return ans;
};
