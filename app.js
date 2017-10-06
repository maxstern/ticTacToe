// blue: #0B708A
// red: #D73A31

const $squares = $('.square');

let player= 'blue';

let takenAll = [];
let takenP1 = [];
let takenP2 = [];


function reset() {
  takenAll = [];
  takenP1 = [];
  takenP2 = [];
  $squares.css('background', 'white')
  $('.body').css('background-color', 'white');
  $('.reset').css('opacity', 0);
  $('.winner').css('opacity', 0);
  $('.square').css('border-color', '#D0D3C5');

}

$('.reset').click(function(){
    reset();
});



// change border to player color
$(document).ready(function(){
  $(".square").hover(function(){

    if (player === 'one') {
    $(this).css("border-color","#0B708A");
    } else {
    $(this).css("border-color","#D73A31");
    }

  },function(){
    $(this).css("border-color","");
  });
});







function switchPlayer() {
    if (player === 'one') {
      player = 'two'
    } else {
      player = 'one'
    }
  }




function checkIfWon(arr) {
  let counter = {
    a: 0,
    b: 0,
    c: 0,
    one: 0,
    two: 0,
    three: 0,
    diag: 0
  };

    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === 'a') {
      counter.a += 1;
      }
      if (arr[i][0] === 'b') {
      counter.b += 1;
      }
      if (arr[i][0] === 'c') {
      counter.c += 1;
      }
      if (arr[i][1] === '1') {
      counter.one += 1;
      }
      if (arr[i][1] === '2') {
      counter.two += 1;
      }
      if (arr[i][1] === '3') {
      counter.three += 1;
      };

      if ( arr.includes('a1') && arr.includes('b2') && arr.includes('c3') ) {
      counter.diag += 3;
      };

      if ( arr.includes('a3') && arr.includes('b2') && arr.includes('c1') ) {
      counter.diag += 3;
      };

  for (let square in counter) {
    if (counter[square] === 3) {
      return true;
    };
  };
};
};




// change square background color
function changeBgColor(player, element) {
  if (player === 'one') {
    element.css('background-color', '#D73A31')
  } else {
    element.css('background-color', '#0B708A')
  }
}







function clickSquare() {


  $squares.click(function(ev) {


    const $squareClicked = $(ev.currentTarget);
    const squareId = ev.currentTarget.id;


    // checks if square is already taken
    if (takenAll.includes(squareId)) {
      console.log('already taken')
    } else {
      takenAll.push(squareId)


      switchPlayer();



      changeBgColor(player, $squareClicked);


      // add taken square to correct player
      if (player === 'one') {
        takenP1.push(squareId)
      } else {
        takenP2.push(squareId)
      };



        if (checkIfWon(takenP1) === true) { // check if p1 won...
          console.log("Player 1 won");
          $('.body').css('background-color', '#D73A31');
          $('.square').css('background-color', '#D73A31');
          $('.winner').text('Red Wins');
          $('.winner').css('opacity', 100);
          $('.reset').css('opacity', 100);

        };
        if (checkIfWon(takenP2) === true) { // check if p2 won...
          console.log("Player 2 won");
          $('.body').css('background-color', '#0B708A');
          $('.square').css('background-color', '#0B708A');
          $('.winner').text('Blue Wins');
          $('.winner').css('opacity', 100);
          $('.reset').css('opacity', 100);
        };

        // if draw
        if (takenAll.length === 9) {
          $('.body').css('background-color', '#D0D3C5');
          $('.square').css('background-color', '#D0D3C5');
          $('.square').css('border-color', '#032B2F');
          $('.winner').text('Draw!');
          $('.winner').css('opacity', 100);
          $('.reset').css('opacity', 100);
        };
        };

    });

};



clickSquare();

/*
      if ( arr.includes('a1') && arr.includes('b2') && arr.includes('c3') ) {
      counter.diag += 3;
      console.log("DIAG");
      };

      if ( arr.includes('a3') && arr.includes('b2') && arr.includes('c1') ) {
      counter.diag += 3;
      console.log("DIAG");
      };
*/
