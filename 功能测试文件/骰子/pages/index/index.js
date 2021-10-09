//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    one_img:'../../image/6-point.png',
    two_img: '../../image/6-point.png',
    three_img: '../../image/6-point.png',
    four_img:'../../image/6-point.png',
    five_img: '../../image/6-point.png',
    six_img: '../../image/6-point.png',
    flag:true,
    timer:null,
    msg:'摇一摇',
    total:0,
    total1:0,
    txt:'恭喜你摇到了：0',
    M:'0',
    num1:0,
    num2:0,
    num3:0,
    num5:0,
    num6:0,
    //图片的素材和效果图会发在最下面
    arr:[
      '../../image/1-point.png',
      '../../image/2-point.png',
      '../../image/3-point.png',
      '../../image/4-point.png',
      '../../image/5-point.png',
      '../../image/6-point.png',
    ],
     isfour: 0
  },
  enter:function(event){
    let obj = this;
    if(obj.data.flag==true){
       obj.data.timer = setInterval(function () {
        let N1 = Math.floor(Math.random() * 6);
        let N2= Math.floor(Math.random() * 6);
        let N3 = Math.floor(Math.random() * 6);
        let N4 = Math.floor(Math.random() * 6);
        let N5 = Math.floor(Math.random() * 6);
        let N6 = Math.floor(Math.random() * 6);
        obj.setData({
          one_img: obj.data.arr[N1],
          two_img: obj.data.arr[N2],
          three_img: obj.data.arr[N3],
          four_img: obj.data.arr[N4],
          five_img: obj.data.arr[N5],
          six_img: obj.data.arr[N6],
          flag:false,
          msg:'停止',
          A:N1 + 1,
          B:N2 + 1,
          C:N3 + 1,
          D:N4 + 1,
          E:N5 + 1,
          F:N6 + 1,
          NumberArr :[N1 + 1, N2 + 1, N3 + 1, N4 + 1, N5 + 1, N6 + 1],
         // total:36,
          txt:'',
        })
      }, 50);
    }else{
      clearInterval(obj.data.timer);
      obj.setData({
        total:0
      })  
      for (var j = 0; j < 6; j++) {
        if(obj.data.NumberArr[j] == 4){
          obj.data.total ++;
        }
        obj.setData({
          isfour : obj.data.total
        })        
      }

      //点数4的个数为0
      if(obj.data.isfour == 0){
        obj.setData({
          num1:0,
          num2:0,
          num3:0,
          num5:0,
          num6:0,
        })          
        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 1){
            obj.data.num1 ++;
          }     
        }
        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 2){
            obj.data.num2 ++;
          }     
        }        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 3){
            obj.data.num3 ++;
          }     
        }        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 5){
            obj.data.num5 ++;
          }     
        }
        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 6){
            obj.data.num6 ++;
          }     
        }
        if(obj.data.A == 1 && obj.data.B == 1 && obj.data.C == 1 && obj.data.D == 1 && obj.data.E == 1 && obj.data.F == 1){
          obj.setData({
            M :'遍地锦'
          })  
        }
        else if(obj.data.A == 2 && obj.data.B == 2 && obj.data.C == 2 && obj.data.D == 2 && obj.data.E == 2 && obj.data.F == 2){
          obj.setData({
            M :'六杯黑'
          })  
        }
        else if(obj.data.A == 3 && obj.data.B == 3 && obj.data.C == 3 && obj.data.D == 3 && obj.data.E == 3 && obj.data.F == 3){
          obj.setData({
            M :'六杯黑'
          })  
        }
        else if(obj.data.A == 5 && obj.data.B == 5 && obj.data.C == 5 && obj.data.D == 5 && obj.data.E == 5 && obj.data.F == 2){
          obj.setData({
            M :'六杯黑'
          })  
        }
        else if(obj.data.A == 6 && obj.data.B == 6 && obj.data.C ==6 && obj.data.D == 6 && obj.data.E == 6 && obj.data.F == 6){
          obj.setData({
            M :'六杯黑'
          })  
        }
        else if( obj.data.num1 == 5 ||  obj.data.num2 == 5 ||  obj.data.num3 == 5 ||  obj.data.num5 == 5 ||  obj.data.num6 == 5){
          obj.setData({
            M :'五子登科'
          })            
        }
        else if( obj.data.num1 == 4 ||  obj.data.num2 == 4 ||  obj.data.num3 == 4 ||  obj.data.num5 == 4 ||  obj.data.num6 == 4){
          obj.setData({
            M :'四进'
          })            
        }
        else{
          obj.setData({
            M :'无奖'
          })  
        }
      }

      //点数为4的个数为1
      if(obj.data.isfour == 1){
        obj.setData({
          num1:0,
          num2:0,
          num3:0,
          num5:0,
          num6:0,
        })  
        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 1){
            obj.data.num1 ++;
          }     
        }
        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 2){
            obj.data.num2 ++;
          }     
        }        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 3){
            obj.data.num3 ++;
          }     
        }        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 5){
            obj.data.num5 ++;
          }     
        }
        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 6){
            obj.data.num6 ++;
          }     
        }    
        if( obj.data.num1 == 5 || obj.data.num2 == 5 ||  obj.data.num3 == 5 ||  obj.data.num5 == 5 ||  obj.data.num6 == 5){
          obj.setData({
            M :'五子登科'
          })            
        }
        else if( obj.data.num1 == 1 &&  obj.data.num2 == 1 &&  obj.data.num3 == 1 &&  obj.data.num5 == 1 &&  obj.data.num6 == 1)  {
          obj.setData({
            M :'对堂'
          })           
        }   
        else if( obj.data.num1 == 4 ||  obj.data.num2 == 4 ||  obj.data.num3 == 4 ||  obj.data.num5 == 4 ||  obj.data.num6 == 4)  {
          obj.setData({
            M :'四进'
          })           
        }
        else{
          obj.setData({
            M :'一秀'
          })  
        }          
      }

      //点数为4的个数为2
      if(obj.data.isfour == 2){
        obj.setData({
          num1:0,
          num2:0,
          num3:0,
          num5:0,
          num6:0,
        })  
        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 1){
            obj.data.num1 ++;
          }     
        }
        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 2){
            obj.data.num2 ++;
          }     
        }        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 3){
            obj.data.num3 ++;
          }     
        }        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 5){
            obj.data.num5 ++;
          }     
        }
        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 6){
            obj.data.num6 ++;
          }     
        }  
        if( obj.data.num1 == 5 ||  obj.data.num2 == 5 ||  obj.data.num3 == 5 ||  obj.data.num5 == 5 ||  obj.data.num6 == 5){
          obj.setData({
            M :'五子登科'
          })            
        }
        else{
          obj.setData({
            M :'二举'
          }) 
        } 
      }

      //点数为4的个数为3
      if(obj.data.isfour == 3){
        obj.setData({
          num1:0,
          num2:0,
          num3:0,
          num5:0,
          num6:0,
        })  
        obj.setData({
          M :'三红'
        }) 
      }

       //点数为4的个数为4
      if(obj.data.isfour == 4){
        obj.setData({
          num1:0,
          num2:0,
          num3:0,
          num5:0,
          num6:0,
        })  
        obj.setData({
          num1:0,
          num2:0,
          num3:0,
          num5:0,
          num6:0,
        })  
        for (var j = 0; j < 6; j++) {
          if(obj.data.NumberArr[j] == 1){
            obj.data.num1 ++;
          }     
        }
        if( obj.data.num1 == 2){
          obj.setData({
            M :'状元插金花'
          }) 
        }
        else{
          obj.setData({
            M :'状元'
          })          
        }
      }

      //点数为4的个数为5
      if(obj.data.isfour == 5){
        obj.setData({
          M :'五王'
        })   
      }

        //点数为4的个数为6
      if(obj.data.isfour == 6){
        obj.setData({
          M :'六杯红'
        })   
      }
        obj.setData({
          //one_img: obj.data.arr[5],
          //two_img: obj.data.arr[5],
          //three_img: obj.data.arr[5],
          msg:'摇一摇',
          flag:true,
          txt:'恭喜你摇到了: '+obj.data.M
      })
    }
  },  
})


