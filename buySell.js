<script>

    function maxProfit(prices , size) {
       let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; 

      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
    }
  
    
        var price = [ 100, 180, 260, 310, 40, 535, 695 ];
        var n = price.length;
        document.write(maxProfit(price, n));
  

</script>
