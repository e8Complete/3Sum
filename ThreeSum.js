/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {

    const sortedNums = nums.slice().sort((a, b) => a - b );
    let triplets = [];

    for(let indexA = 0; indexA < (nums.length-3); indexA++){ //nums.length -3 because the last two elements are positions for b and c

      let a = sortedNums[indexA];

      if(a > 0){ //in this case, all numbers are bigger than 0, so a+b+c = 0 is not possible
        return triplets;
      }

      if(a === sortedNums[indexA-1]){ //if the a-element is the same as the previous a-element, we don't need to check it again, so we skip to the next
        continue;
      }

      let indexB = indexA+1;
      let indexC = nums.length-1;

      while(indexB < indexC){
        let b = sortedNums[indexB];
        let c = sortedNums[indexC];

        if((a + b + c) === 0){
          triplets.push([a, b, c]);
        }

        if((a + b + c) <= 0){
          indexB++;
          if(sortedNums[indexB] === sortedNums[indexB-1]){  //if the b-element is the same as the previous b-element, we don't need to check it again, so we skip to the next
            indexB++;
          }
        }
        else if((a + b + c) >= 0){
          indexC--;
          if(sortedNums[indexC] === sortedNums[indexC+1]){  //if the c-element is the same as the previous c-element, we don't need to check it again, so we skip to the next
            indexC--;
          }
        }
      }
    }
    return triplets;
};

// var arr = Array.from({length: 2000}, () => Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1));
// console.log(threeSum(arr))

// console.log(threeSum([-1,0,1,2,-1,-4]))
