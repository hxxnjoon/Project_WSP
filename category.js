


    let personchecked;
    const person = document.getElementsByName("person");
    for (let i = 0; i < person.length; i++) {
     
      if (person[i].checked == true) {
      	personchecked=person[i].value;
      }
    }

    let moodchecked;
    const mood = document.getElementsByName("mood");
    for (let i = 0; i < mood.length; i++) {
     
      if (mood[i].checked == true) {
      	moodchecked=mood[i].value;
      }
    }

    let pricechecked;
    const price = document.getElementsByName("price");
    for (let i = 0; i < price.length; i++) {
     
      if (price[i].checked == true) {
      	pricechecked=price[i].value;
      }
    }

    let foodchecked;
    const food = document.getElementsByName("food");
    for (let i = 0; i < food.length; i++) {
     
      if (food[i].checked == true) {
      	foodchecked=food[i].value;
      }
    }

    
    

     let lists=[{name:"팔각도", person: 4, mood: "loudness", price:20000,food:"korea"}, 
     {name:"단골손님", person: 4, mood: "loudness", price:20000,food:"korea"},
     {name:"대동집", person: 4, mood: "loudness", price:20000,food:"korea"},
     {name:"땅코", person: 4, mood: "loudness", price:20000,food:"korea"},
     {name:"쭈꾸미도사", person: 4, mood: "loudness", price:20000,food:"korea"},
     
     {name:"오징어바다", person: 4, mood: "loudness", price:20000,food:"korea"},
     {name:"곱창하우스", person: 4, mood: "loudness", price:20000,food:"korea"},
     {name:"오감", person: 4, mood: "quiet", price:20000,food:"japan"},
     {name:"이돈집", person: 4, mood: "loudness", price:20000,food:"korea"},
     {name:"여운", person: 4, mood: "quiet", price:30000,food:"japan"},
     
     {name:"와시리", person: 4, mood: "quiet", price:30000,food:"japan"},
     {name:"갱생", person: 5, mood: "loudness", price:20000,food:"etc"},
     {name:"리퀴진", person: 4, mood: "loudness", price:20000,food:"etc"},
     {name:"육회공작소", person: 4, mood: "quiet", price:30000,food:"korea"},
     {name:"구이마을", person: 5, mood: "loudness", price:20000,food:"korea"},
    
     {name:"이가갈비", person: 5, mood: "loudness", price:20000,food:"korea"},
     {name:"장모족발", person: 5, mood: "loudness", price:20000,food:"korea"},
     {name:"용용선생", person: 4, mood: "loudness", price:20000,food:"china"},
     {name:"제일곱창", person: 4, mood: "loudness", price:30000,food:"korea"},
     {name:"종로계림", person: 4, mood: "quiet", price:20000,food:"korea"},
     
     {name:"포차윤", person: 4, mood: "quiet", price:20000,food:"etc"},
     {name:"한양대육회집", person: 5, mood: "quiet", price:30000,food:"korea"},
     {name:"한양포차", person: 5, mood: "quiet", price:20000,food:"korea"},
     {name:"메종드", person: 4, mood: "loudness", price:30000,food:"korea"},
     {name:"부엉이산장", person: 4, mood: "loudness", price:30000,food:"korea"},
     
     ];

     const filter1={person: personchecked, mood:moodchecked, price:pricechecked, food:foodchecked};
     //alert(filter1['person'] + filter1['mood']); 된다 !! 일단 값은 잘 담김 //filter 문법만 잘 지키면 될 것 같은디 
     
     const filteredlists = lists.filter(item => {
        return (item.person==filter1.person)&&(item.mood==filter1.mood)&&(item.price==filter1.price)&&(item.food==filter1.food);
        
      });// 다중필터 고민 더 해봐야 함 ㅜㅜ

      //alert(filteredlists.length); 첫번재 조합 다 잘 나왔어 8개 !!
      alert(filteredlists.length);
    

      

      

     



   



