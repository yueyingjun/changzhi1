function view(selector,attr) {
    if(typeof selector=="string") {
        var obj = document.querySelector(selector);
    }else{
        var obj=selector;

    }
    var start=attr.start;
    var end=attr.end;
    var begin=attr.begin
    var finish=attr.finish
    var shuxing=attr.attr
    var top=attr.top;
    var background=attr.background;
    var flag=attr.flag===false?false:true;

    var speed =(finish-begin)/(end-start)*(top-start);

    if(top<=start){
        if(!flag){
            return;
        }
        var index = shuxing.indexOf(":")
        if(index>-1){
            var shu = shuxing.slice(0, index);
            var val = shuxing.slice(index + 1)
            var originshu = obj.style.transform;
            var originArr = [];
            var beginArr=begin.slice(1,-1).split(",");
            var beginstr=""
            for(var i=0;i<beginArr.length;i++){
                if(val=="scale") {
                    beginstr += beginArr[i]+","
                }else if(val=="rotate"){
                    beginstr += beginArr[i]+"deg,"
                }else if(val=="translate"){
                    beginstr += beginArr[i]+"px,"
                }else {
                    beginstr += beginArr[i]+"deg,"
                }
            }
            if (originshu) {
                originshu = originshu.replace(/,\s*/g, ",")
                originArr = originshu.split(" ");
            }
            for (var i = 0; i < originArr.length; i++) {
                if (originArr[i].indexOf(val) > -1) {
                    originArr[i] = val +"("+beginstr.slice(0,-1)+")";
                    break
                }
            }

            val = originArr.join(" ");
            obj.style[shu] = val;


        }else{
            if (shuxing == "opacity") {
                obj.style[shuxing] = begin ;
            } else{

                obj.style[shuxing] = begin + "px"
            }
        }


    }

    if(top>end){
        if(!flag){
            return;
        }

        var index = shuxing.indexOf(":");
        if(index>-1){
            var shu = shuxing.slice(0, index);
            var val = shuxing.slice(index + 1)
            var originshu = obj.style.transform;
            var originArr = [];
            var beginArr=finish.slice(1,-1).split(",");
            var beginstr=""
            for(var i=0;i<beginArr.length;i++){
                if(val=="scale") {
                    beginstr += beginArr[i]+","
                }else if(val=="rotate"){
                    beginstr += beginArr[i]+"deg,"

                }else if(val=="translate"){
                    beginstr += beginArr[i]+"px,"
                }else {
                    beginstr += beginArr[i]+"deg,"
                }
            }
            if (originshu) {
                originshu = originshu.replace(/,\s*/g, ",")
                originArr = originshu.split(" ");
            }
            for (var i = 0; i < originArr.length; i++) {
                if (originArr[i].indexOf(val) > -1) {
                        originArr[i] = val +"("+beginstr.slice(0,-1)+")";
                    break;
                }
            }



            val = originArr.join(" ");

            obj.style[shu] = val;


        }else{
            if (shuxing == "opacity") {
                obj.style[shuxing] = finish ;
            } else{

                obj.style[shuxing] = finish + "px"
            }
        }



    }



    if (top > start && top < end) {

        if(background){
            obj.style.backgroundAttachment="fixed"
        }

        if(!flag){
            return
        }
        var index = shuxing.indexOf(":")

        if (index > -1) {
            var shu = shuxing.slice(0, index);
            var val = shuxing.slice(index + 1)
            var originshu = obj.style.transform;
            var originArr = [];
            if (originshu) {
                originshu = originshu.replace(/,\s*/g, ",")
                originArr = originshu.split(" ");
            }



            var beginArr = begin.slice(1, -1).split(",");
            var finishArr = finish.slice(1, -1).split(",");
            var vals = "";
            for (var i = 0; i < beginArr.length; i++) {
                if (val == "rotate") {
                    vals += beginArr[i] * 1 + (finishArr[i] - beginArr[i]) / (end - start) * (top - start) + "deg,"
                } else if (val == "translate") {
                    vals += beginArr[i] * 1 + (finishArr[i] - beginArr[i]) / (end - start) * (top - start) + "px,"

                } else if (val == "scale") {
                    vals += beginArr[i] * 1 + (finishArr[i] - beginArr[i]) / (end - start) * (top - start) + ","
                } else {
                    vals += beginArr[i] * 1 + (finishArr[i] - beginArr[i]) / (end - start) * (top - start) + "deg,"
                }
            }
            var flag = true;

            for (var i = 0; i < originArr.length; i++) {
                if (originArr[i].indexOf(val) > -1) {
                    originArr[i] = val + "(" + vals.slice(0, -1) + ")"
                    flag = false;
                    break
                }
            }
            if (flag) {
                originArr.push(val + "(" + vals.slice(0, -1) + ")");
            }


            val = originArr.join(" ");
            obj.style[shu] = val;


        } else {
            if (shuxing == "opacity") {
                obj.style[shuxing] = begin + speed;
            } else{

                obj.style[shuxing] = begin + speed + "px"
            }
        }
    }else{
        obj.style.backgroundAttachment="scroll"
    }

}

function scroll(callback) {
    window.onscroll=function (ev) {
        var top = document.documentElement.scrollTop || document.body.scrollTop;

        callback(top)
    }
}