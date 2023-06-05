//사용자가 검색 조건 체크하면 해당되는 술집 결과 페이지 뜨게 하는 js 코드 
          
          let personlist;
              personlist=document.getElementsByName('person');
              let a;
              personlist.forEach((node) => {
            if(node.checked)  {
              a = node.value;
            }
          }) 
          let moodlist;
              moodlist=document.getElementsByName('mood');
              let b;
              moodlist.forEach((node) => {
            if(node.checked)  {
              b = node.value;
            }
          })           
          let pricelist;
              pricelist=document.getElementsByName('price');
              let c;
              pricelist.forEach((node) => {
            if(node.checked)  {
              c = node.value;
            }
          }) 
          let foodlist;
              foodlist=document.getElementsByName('food');
              let d;
              foodlist.forEach((node) => {
            if(node.checked)  {
              d= node.value;
            }
          }) 
          
        
          let button = document.getElementById('ctgbtn'); 
                
          button.onclick = function (event) {

                if((a==4) && (b=="loudness") && (c==20000) && (d=="korea") )
                        {location.href = 'result.html';}   //팔각도 , 단골손님, 대동집, 땅코 , 쭈꾸미도사, 오징어바다, 곱창하우스
                if((a==4) && (b=="quiet") && (c==20000) && (d=="japan") )
                        {location.href = 'categoryresult.html';} // 오감 
                if((a==4) && (b=="loudness") && (c==20000)  && (d=="korea") )
                        {location.href = 'categoryresult.html';}   //이돈집 
                if((a==4) && (b=="quiet") && (c==30000)&& (d=="japan") )
                        {location.href = 'categoryresult.html';}   //여운, 와시리 
                if((a==4) && (b=="loudness") && (c==20000) && (d=="korea") )
                        {location.href = 'categoryresult.html';}  
                
                if(((a==5) || (a=="4")) && (b=="loudness") && (c==20000) && (d=="etc") )
                        {location.href = 'categoryresult.html';}  //갱생
                if((a==4) && (b=="loudness") && (c==20000) && (d=="etc") )
                        {location.href = 'categoryresult.html';}//리퀴진
                if((a==4) && (b=="quiet") && (c==30000) && (d=="korea") )
                        {location.href = 'categoryresult.html';}//육회공작소
                if(((a==5) || (a=="4")) && (b=="loudness") && (c==20000) && (d=="korea") )
                        {location.href = 'categoryresult.html';}  //구이마을, 이가갈비, 장모족발 
                if((a==4) && (b=="loudness") && (c==20000) && (d=="china") )
                        {location.href = 'categoryresult.html';}   //용용선생 
                if((a==4) && (b=="loudness") && (c==30000) && (d=="korea") )
                        {location.href = 'categoryresult.html';}   //제일곱창 
                if((a==4) && (b=="quiet") && (c==20000) && (d=="korea") )
                        {location.href = 'categoryresult.html';} // 종로계림
                if((a==4) && (b=="quiet") && (c==20000) && (d=="etc") )
                        {location.href = 'categoryresult.html';} // 포차윤 
                if(((a==5) || (a=="4")) && (b=="quiet") && (c==30000) && (d=="korea") )
                        {location.href = 'categoryresult.html';}  //한양대육회집
                if(((a==5) || (a=="4")) && (b=="quiet") && (c==20000) && (d=="korea") )
                        {location.href = 'categoryresult.html';}  //한양포차 
                if((a==4) && (b=="loudness") && (c==30000)  && (d=="korea") )
                        {location.href = 'categoryresult.html';}  //메종드
                if((a==4) && (b=="loudness") && (c==30000)  && (d=="korea") )
                        {location.href = 'categoryresult.html';}  //부엉이산장
        }; 