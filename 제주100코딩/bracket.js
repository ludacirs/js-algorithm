    const str = '())(()()';

    console.log(rightString(str.split('')));

    function rightString(arr){
        let count = 0;


        arr.filter(function (v){
            if(v==='(') count++;
            if(v===')') count--;
        });
        if(count!==0) return false;

        const math =[];
        for(let v of arr){
            if(v==='(') math.push(v);
            if(v===')'){
                if(math.length===0) return false;
                math.pop();
            }
        }
        return true;
    }