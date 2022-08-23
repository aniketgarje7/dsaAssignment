<script>
function hasArrayTwoCandidates(nums, ans, target)
{
   var map = new Map();

  for(var i = 0; i<nums.length; i++) {
      var num = nums[i];
      if(map.get(num) === undefined) {map.set(target-num, i);}
      else {return [map.get(num), i]}
  }
  return [-1,-1];
}
 

var nums = [ 1, 4, 45, 6, 10, -8 ]
var target = 16;
let ans = [-1,-1];


ans = (hasArrayTwoCandidates(nums, ans, target))
    document.write(ans);

 
</script>
