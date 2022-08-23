<script>
function hasArrayTwoCandidates(A, ans, sum)
{
    var l, r;
    var arr_size = A.length;
    A.sort();
    l = 0;
    r = arr_size - 1;
    while (l < r) {
        if (A[l] + A[r] == sum){
            ans[0]=l;
            ans[1]=r;
          break;}
        else if (A[l] + A[r] < sum){
            l++;}
        else{
            r--;}
    }
    return ans;
}
 

var A = [ 1, 4, 45, 6, 10, -8 ]
var n = 16;
let ans = [-1,-1];


(hasArrayTwoCandidates(A, ans, n))
    document.write(ans);

 
</script>
