window.onload=function (ev) {
    // 音频
    var divs=document.querySelectorAll(".key");

    var hash={
        49:{
            div:0,audio:400+400*(1/8)
        },
        50:{
            div:1,audio:400+400*(2/8)
        },
        51:{
            div:2,audio:400+400*(3/8)
        },
        52:{
            div:3,audio:400+400*(4/8)
        },
        53:{
            div:4,audio:400+400*(5/8)
        },
        54:{
            div:5,audio:400+400*(6/8)
        },
        55:{
            div:6,audio:400+400*(7/8)
        },
        56:{
            div:7,audio:400+400*(8/8)
        }

    }


    var audio=new AudioContext()
    var os
    var flag=true

    document.onkeydown=function (e) {
        if(!flag){
            return;
        }
        flag=false
        os=audio.createOscillator()
        var as=audio.createAnalyser();
        var gain=audio.createGain()

        os.connect(as)
        os.connect(gain)
        gain.connect(audio.destination)

        os.frequency.setValueAtTime(hash[e.keyCode].audio,audio.currentTime);
        os.start(0)

        divs[hash[e.keyCode].div].style.boxShadow="0 0 10px #000";
    }


    document.onkeyup=function (e) {

        flag=true;
        os.stop(audio.currentTime)
        divs[hash[e.keyCode].div].style.boxShadow="none";
    }
}