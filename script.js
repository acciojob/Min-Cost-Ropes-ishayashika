function mincost(arr)
{ 
//write your code here
// return the min cost
let total_cost=0;
while(arr.length>1){
	arr.sort((a,b)=>a-b);
	sum=arr[0]+arr[1];
	total_cost+=sum;
	arr=[sum,...slice(2)];
}
	 return total_cost; 
}

module.exports=mincost;
