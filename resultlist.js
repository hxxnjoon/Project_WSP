

function personcheck(event){

     var array= document.getElementsByClassName('술집');
const fiveperson=['갱생', '돼지꿈','장모족발','이가갈비','한양대육회집','한양포차','깡우동'];
const fourperson=['팔각도','오감','이돈집','여운','단골손님','리퀴진','육회공작소','대동집','용용선생','제일곱창','땅코참숯구이','와시리','종로계림닭도리탕원조','포차윤','쭈꾸미도사','메종드혁이네','싱싱오징어바다','곱창하우스','부엉이산장']; 
if (event.target.value == 4){

     for (var i=0;i<array.length;i++){
          if ( fiveperson.includes(array[i].id)){
               array[i].style.display='none';
          }  
     }
     
}

else if (event.target.value == 5){

     for (var i=0;i<array.length;i++){
          if ( fourperson.includes(array[i].id)){
               array[i].style.display='none';
          }  
     }
     
}

}



function moodcheck(event){

     var array= document.getElementsByClassName('술집');
     const loudmood=['팔각도','이돈집','단골손님','갱생','리퀴진','대동집','돼지꿈','용용선생','제일곱창','땅코참숯구이','장모족발','이가갈비','쭈꾸미도사','메종드혁이네','깡우동','싱싱오징어바다','곱창하우스','부엉이산장'];
     const quietmood=['오감','여운','육회공작소','와시리','종로계림닭도리탕원조','포차윤','한양대육회집','한양포차'];

     if (event.target.value == "loudness"){

          for (var i=0;i<array.length;i++){
               if ( quietmood.includes(array[i].id)){
                    array[i].style.display='none';
               }  
          }
          
     }
     
     else if (event.target.value == "quiet"){
     
          for (var i=0;i<array.length;i++){
               if ( loudmood.includes(array[i].id)){
                    array[i].style.display='none';
               }  
          }
          
     }

}







function pricecheck(event){
     var array= document.getElementsByClassName('술집');
     const million2=['팔각도', '오감', '이돈집', '단골손님', '갱생','리퀴진','대동집','돼지꿈','용용선생','땅코참숯구이','장모족발','이가갈비','종로계림닭도리탕원조','포차윤','쭈꾸미도사','한양포차','싱싱오징어바다','곱창하우스','깡우동'];
     const million3=['여운', '육회공작소','제일곱창','와시리','한양대육회집','메종드혁이네','부엉이산장'];

     if (event.target.value == 20000){

          for (var i=0;i<array.length;i++){
               if ( million3.includes(array[i].id)){
                    array[i].style.display='none';
               }  
          }
          
     }
     
     else if (event.target.value == 30000){
     
          for (var i=0;i<array.length;i++){
               if ( million2.includes(array[i].id)){
                    array[i].style.display='none';
               }  
          }
          
     }
     








}

function foodcheck(event){
     var array= document.getElementsByClassName('술집');
     const korean =['팔각도','이돈집','단골손님','육회공작소','대동집','돼지꿈','제일곱창','땅코참숯구이','장모족발','이가갈비','종로계림닭도리탕원조','한양대육회집','쭈구미도사','한양포차','메종드혁이네','싱싱오징어바다','곱창하우스','부엉이산장','깡우동'];
     const japanese=['오감','여운','와시리'];
     const chinese=[];
     const etcc=['갱생','리퀴진','포차윤'];

     if (event.target.value == "korea"){

          for (var i=0;i<array.length;i++){
               if ( japanese.includes(array[i].id)){
                    array[i].style.display='none';
               }  
          }

          for (var i=0;i<array.length;i++){
               if ( chinese.includes(array[i].id)){
                    array[i].style.display='none';
               }  
          }

          for (var i=0;i<array.length;i++){
               if ( etcc.includes(array[i].id)){
                    array[i].style.display='none';
               }  
          }
          
     }
     
     else if (event.target.value == "japan"){
     
          for (var i=0;i<array.length;i++){
               if ( korean.includes(array[i].id)){
                    array[i].style.display='none';
               }  
          }
          for (var i=0;i<array.length;i++){
               if ( chinese.includes(array[i].id)){
                    array[i].style.display='none';
               }  
          }
          for (var i=0;i<array.length;i++){
               if ( etcc.includes(array[i].id)){
                    array[i].style.display='none';
               }  
          }
          
     }

     else if (event.target.value == "china"){
     
          
          for (var i=0;i<array.length;i++){
               if ( korean.includes(array[i].id)){
                    array[i].style.display='none';
               }  
          }
          for (var i=0;i<array.length;i++){
               if ( japanese.includes(array[i].id)){
                    array[i].style.display='none';
               }  
          }
          for (var i=0;i<array.length;i++){
               if ( etcc.includes(array[i].id)){
                    array[i].style.display='none';
               }  
          }
          
     }

     else if (event.target.value == "etc"){
     
          for (var i=0;i<array.length;i++){
               if ( korean.includes(array[i].id)){
                    array[i].style.display='none';
               }  
          }

          for (var i=0;i<array.length;i++){
               if ( japanese.includes(array[i].id)){
                    array[i].style.display='none';
               }  
          }

          for (var i=0;i<array.length;i++){
               if ( chinese.includes(array[i].id)){
                    array[i].style.display='none';
               }  
          }
          
     }

}

