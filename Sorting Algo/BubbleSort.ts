function bubbleSort(arr:number[]):number[]{
    for(let i = arr.length;i>0;i--){
        for(let j=0;j<i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    return arr;
}
console.log(bubbleSort([3,4,5,742,43,63,6,34,2,1,0,9,8,7,6,5,4,3,2,1,0]));