class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const freq1=new Map();
        const freq2=new Map();

        for(let i=0;i<s.length;i++)
        {
            freq1.set(s[i],(freq1.get(s[i])|| 0)+1);
            freq2.set(t[i],(freq2.get(t[i])|| 0)+1);
        }


        for(const ch of s)
        {
            if(freq1.get(ch)!=freq2.get(ch))
            {
                return false
            }
        }

        return true;

       
    }
}
