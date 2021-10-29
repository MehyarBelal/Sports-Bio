let option1 = document.querySelector("#one");
let option2 = document.querySelector("#two");
let option3 = document.querySelector("#three");
let dropdown = document.querySelector("#selected");
$(".btn-nba").click(function () {
  //   option1.innerHTML = "Lebron James";

  $("#one").val("Lebron James").change();
  $("#two").val("Stepth Curry").change();
  let img = document.querySelector("img");
  $("#three").val("Giannis Antetokounmpo").change();
  option1.innerHTML = "Lebron James";
  option2.innerHTML = "Stepth Curry";
  option3.innerHTML = "Giannis Antetokounmpo";

  $("#selected").change(function () {
    if (dropdown.value == "Lebron James") {
      $("p").html(
        'LeBron Raymone James Sr. (/ləˈbrɒn/; born December 30, 1984) is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association (NBA). Nicknamed "King James", he is widely considered one of the greatest players in NBA history and is frequently compared to Michael Jordan in debates over the greatest basketball player ever.[1] The only player to have won NBA championships with three franchises (the Cleveland Cavaliers, the Miami Heat, and the Lakers) as NBA Finals MVP,[2] James has competed in ten NBA Finals, eight of them consecutively with the Heat and the Cavaliers from 2011 to 2018. His accomplishments include four NBA championships, four NBA MVP awards, four NBA Finals MVP awards, and two Olympic gold medals. During his 18-year career, James holds the record for all-time playoffs points, is third in all-time points, and eighth in career assists. James has been selected to the All-NBA Team a record 17 times (with a record of 13 First Team selections and 11 consecutive First Team selections, the latter of which is shared with Jordan and Karl Malone), made the NBA All-Defensive First Team five times, and has been named an All-Star 17 times, including three All-Star MVP selections. In 2021, he was selected to the NBA 75th Anniversary Team.'
      );

      img.src =
        "https://upload.wikimedia.org/wikipedia/commons/c/cf/LeBron_James_crop.jpg";
    } else if (dropdown.value == "Stepth Curry") {
      img.src =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Stephen_Curry_Shooting_%28cropped%29.jpg/800px-Stephen_Curry_Shooting_%28cropped%29.jpg";
      $("p").html(
        "Wardell Stephen Curry II (/ˈstɛfən/ STEF-ən; born March 14, 1988[1]) is an American professional basketball player for the Golden State Warriors of the National Basketball Association (NBA). He plays the point guard position, and is widely regarded as one of the greatest point guards of all time. Many analysts and players have called him the greatest shooter in NBA history.[2] He is credited with revolutionizing the game of basketball by inspiring teams to regularly utilize the three-point shot.[3][4][5] A seven-time NBA All-Star, Curry has been named the NBA Most Valuable Player (MVP) twice and has won three NBA championships with the Warriors."
      );
    } else if (dropdown.value == "Giannis Antetokounmpo") {
      img.src =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Giannis_Antetokounmpo_%2824845003687%29_%28cropped%29.jpg/800px-Giannis_Antetokounmpo_%2824845003687%29_%28cropped%29.jpg";

      $("p").html(
        "Giannis Sina Ugo Antetokounmpo is a Greek professional basketball player for the Milwaukee Bucks of the National Basketball Association. Antetokounmpos nationality, in addition to his size, speed and ball-handling skills have earned him the nickname Greek Freak"
      );
    }
  });
});

$(".btn-soccer").click(function () {
  //   option1.innerHTML = "Lebron James";

  $("#one").val("Cristiano Ronaldo").change();
  $("#two").val("Mohamed Salah").change();
  let img = document.querySelector("img");
  $("#three").val("Sadio Mane").change();
  option1.innerHTML = "Cristiano Ronaldo";
  option2.innerHTML = "Mohamed Salah";
  option3.innerHTML = "Sadio Mane";

  $("#selected").change(function () {
    if (dropdown.value == "Cristiano Ronaldo") {
      $("p").html(
        "Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for Premier League club Manchester United and captains the Portugal national team"
      );

      img.src =
        "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg";
    } else if (dropdown.value === "Mohamed Salah") {
      img.src =
        "https://lh3.googleusercontent.com/4_RQnPzpxTTJk4xK1XZh1hBUdo2DUuj6a2cEq7vCCxkhRRP5ZDFoJ6ig-5KAff6QTgbq1GqvzC3aoOX6XEE53eRuOTgPYzTVfw";
      $("p").html(
        "Mohamed Salah Hamed Mahrous Ghaly is an Egyptian professional footballer who plays as a forward for Premier League club Liverpool and captains the Egypt national team. Considered one of the best players in the world, he is known for his finishing, dribbling, and speed."
      );
    } else if (dropdown.value == "Sadio Mane") {
      img.src =
        "https://www.coachesvoice.com/wp-content/uploads/2019/04/MeaneMobile.png";

      $("p").html(
        "Sadio Mané is a Senegalese professional footballer who plays as a winger for Premier League club Liverpool and the Senegal national team. Mané finished fourth for the 2019 Ballon d'Or, and in the award for the Best FIFA Men's Player he ranked fifth in 2019 and fourth in 2020"
      );
    }
  });
});
