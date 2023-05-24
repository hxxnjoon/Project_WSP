
document.addEventListener('DOMContentLoaded', function() {
        let button = document.getElementById('ctgbtn');
        button.addEventListener('click', function(event) {
                let personlist = document.getElementsByName('person');
                let a;
                personlist.forEach((node) => {
                if (node.checked) {
                a = node.value;
                }
                });
        
                let moodlist = document.getElementsByName('mood');
                let b;
                moodlist.forEach((node) => {
                        if (node.checked) {
                        b = node.value;
                        }
                        });
        
                let pricelist = document.getElementsByName('price');
                let c;
                pricelist.forEach((node) => {
                if (node.checked) {
                c = node.value;
                }
                });
        
                let foodlist = document.getElementsByName('food');
                let d;
                foodlist.forEach((node) => {
                if (node.checked) {
                d = node.value;
                }
                });
                if (a=="4" && b =="loudness" && c == "20000" && d == "korea") {location.href='result.html';}
                else if (a == "4" && b == "quiet" && c == "20000" && d == "japan") {
                        location.href='result1.html';
                } else if (a == "4" && b == "loudness" && c == "20000" && d == "korea") {
                location.href='result2.html';
                } else if (a == "4" && b == "quiet" && c == "30000" && d == "japan") {
                location.href='result3.html';
                } else if (a == "4" && b == "loudness" && c == "20000" && d == "korea") {
                location.href='result4.html';
                } else if (((a == "5") || (a == "4")) && b == "loudness" && c == "20000" && d == "etc") {
                location.href='result5.html';
                } else if (a == "4" && b == "loudness" && c == "20000" && d == "etc") {
                location.href='result6.html';
                } else if (a == "4" && b == "quiet" && c == "30000" && d == "korea") {
                location.href='result7.html';
                } else if (((a == "5") || (a == "4")) && b == "loudness" && c == "20000" && d == "korea") {
                location.href='result8.html';
                } else if (a == "4" && b == "loudness" && c == "20000" && d == "china") {
                location.href='result9.html';
                } else if (a == "4" && b == "loudness" && c == "30000" && d == "korea") {
                location.href='result10.html';
                } else if (a == "4" && b == "quiet" && c == "20000" && d == "korea") {
                location.href='result11.html';
                } else if (a == "4" && b == "quiet" && c == "20000" && d == "etc") {
                location.href='result12.html';
                } else if (((a == "5") || (a == "4")) && b == "loudness" && c == "20000" && d == "japan") {
                location.href='result13.html';
                } else {
                alert('해당하는 술집이 없습니다.');
                }
      });

});
 