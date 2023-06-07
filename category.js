function resetButtons() {
  var buttons = document.getElementsByClassName("menubtn");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
}

function resetSearch() {

  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
}
     let lists=[
     {name:"팔각도", person: "4", mood: "loudness", price:"30000",food:"korea"}, 
     {name:"단골손님", person: "4", mood: "quiet", price:"20000",food:"korea"},
     {name:"대동집", person: "4", mood: "loudness", price:"20000",food:"korea"},
     {name:"땅코참숯구이", person: "3", mood: "loudness", price:"20000",food:"korea"},
     {name:"쭈꾸미도사", person: "4", mood: "loudness", price:"30000",food:"korea"},
     {name:"깡우동", person: "3", mood: "loudness", price:"20000",food:"korea"},
     
     {name:"싱싱오징어바다", person: "4", mood: "quiet", price:"30000",food:"korea"},
     {name:"곱창하우스", person: "3", mood: "loudness", price:"20000",food:"korea"},
     {name:"오감", person: "3", mood: "quiet", price:"30000",food:"japan"},
     {name:"이돈집", person: "3", mood: "loudness", price:"20000",food:"korea"},
     {name:"여운", person: "3", mood: "quiet", price:"30000",food:"japan"},
     
     {name:"와시리", person: "3", mood: "quiet", price:"30000",food:"japan"},
     {name:"갱생", person: "4", mood: "loudness", price:"20000",food:"etc"},
     {name:"리퀴진", person: "3", mood: "quiet", price:"20000",food:"etc"},
     {name:"육회공작소", person: "3", mood: "quiet", price:"30000",food:"korea"},
     {name:"돼지꿈", person: "4", mood: "loudness", price:"20000",food:"korea"},
    
     {name:"이가갈비", person: "4", mood: "loudness", price:"30000",food:"korea"},
     {name:"장모족발", person: "4", mood: "loudness", price:"20000",food:"korea"},
     {name:"용용선생", person: "3", mood: "loudness", price:"20000",food:"china"},
     {name:"제일곱창", person: "3", mood: "loudness", price:"30000",food:"korea"},
     {name:"종로계림닭도리탕원조", person: "3", mood: "quiet", price:"20000",food:"korea"},
     
     {name:"포차윤", person: "4", mood: "quiet", price:"20000",food:"etc"},
     {name:"한양대육회집", person: "3", mood: "quiet", price:"30000",food:"korea"},
     {name:"한양포차", person: "4", mood: "quiet", price:"20000",food:"korea"},
     {name:"메종드혁이네", person: "4", mood: "quiet", price:"30000",food:"korea"},
     {name:"부엉이산장", person: "3", mood: "quiet", price:"30000",food:"korea"}
     ];

    let personchecked;
    let moodchecked;
    let pricechecked;
    let foodchecked;
    
function catesrc() {

  document.getElementById('hotnew').style.display = "none";
  document.getElementById('alcholdict').style.display = "none";
  document.getElementById('searchsection').style.display = "block";

  
  personchecked = Array.from(document.querySelectorAll('input[name="person"]:checked')).map(input => input.value);
  moodchecked = Array.from(document.querySelectorAll('input[name="mood"]:checked')).map(input => input.value);
  pricechecked = Array.from(document.querySelectorAll('input[name="price"]:checked')).map(input => input.value);
  foodchecked = Array.from(document.querySelectorAll('input[name="food"]:checked')).map(input => input.value);

  console.log(personchecked);
  console.log(moodchecked);
  console.log(pricechecked);
  console.log(foodchecked);

  performSearch();
}

function performSearch() {
  
  let resultList = [];

  for (let j = 0; j < lists.length; j++) {
    if (
      (personchecked.includes(lists[j].person) || personchecked.length === 0) &&
      (moodchecked.includes(lists[j].mood) || moodchecked.length === 0) &&
      (pricechecked.includes(lists[j].price) || pricechecked.length === 0) &&
      (foodchecked.includes(lists[j].food) || foodchecked.length === 0)
    ) {
      resultList.push(lists[j].name);
    }
  }

  
  console.log(resultList);

  var items = document.getElementsByClassName("항목");

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var shouldBeDisplayed = false;

    for (let j = 0; j < resultList.length; j++) {
      if (resultList[j] === item.id) {
        shouldBeDisplayed = true;
        break;
      }
    }

    if (shouldBeDisplayed) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }

  if (resultList.length > 0) {
    document.getElementById('searchresult').innerHTML = "카테고리 검색 결과";
  } else {
    document.getElementById('searchresult').innerHTML = "검색 결과 없음";
  }

  modalOff();
  resetSearch();
  resetButtons();

}