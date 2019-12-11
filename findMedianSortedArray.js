var findMedianSortedArrays = function(nums1, nums2) {
    var arr = [];
    let median = 0;
    let tleng = nums1.length+nums2.length;
       while(nums1.length>0 && nums2.length>0){
           if(nums1[0]<nums2[0]){
              let x = nums1.shift();
               arr.push(x);
               
           }else{
               let y = nums2.shift();
               arr.push(y);
           }
       } 
    if(nums1.length == 0){
        arr = arr.concat(nums2)
    }
    if(nums2.length == 0){
        arr = arr.concat(nums1);
    }
    
    let len1 = Math.ceil(arr.length/2)-1;
    let len2 = Math.ceil(arr.length/2);

    if(tleng%2==0){
        median = (arr[len1]+arr[len2])/2;
    }else{
        median = (arr[len1]);
    }
    return median;
    }
console.log(findMedianSortedArrays([1,3],[2,4]));//2.5
