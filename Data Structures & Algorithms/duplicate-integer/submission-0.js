class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const st=new Set();

        for(const val of nums)
        {
            if(st.has(val))
            return true;

            st.add(val);
        }
        return false;
    }
}


// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {boolean}
//      */
//     hasDuplicate(nums) {
//         const freq = new Map();

//         for (const val of nums) {
//             if(freq.get(val) > 0) {

//                 console.log("Inside\n")
//                 return true;
//             }

//             freq.set(val,1)
//         }

       

//         return false;
//     }
// }
