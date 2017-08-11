# **Track Suggester**

#### Project Portfolio, 08.11.2017

## _By Riki Montgomery_

### Description

_(Week 2) JavaScript & jQuery Project._

## Setup Instructions

1. _Access my [Repository](https://github.com/rikimontgomery/track-suggester) or my [portfolio domain](https://rikimontgomery.github.io/track-suggester/)._

* _You can view the directory files online or clone them from my repository._

2. _Make sure your have a text editor and your own GitHub account setup to work with your terminal._

3. _Break things._

## Known Bugs

_Unfortunately I didn't get to add as much custom styling or creative content as I wanted. I spent hours trying to debug my final messages. #finalMessage2 and #finalMessage3 like to crop up when I don't want them to, either by themselves or below the correct #finalMessage. I think the parameters in my if else statements are to complex. I should have taken the time to write them out first._

```
if ((macPc === 'PC' && money < 50000 && swallow === "I don't know")) {
  alert("You're looking in the wrong industry.")
  return;
} else if ((macPc === 'PC' && swallow === 'African or european?' || "I don't know" && money > 50000)) {
  $("#course1").empty().append(courseChoice1);
  $("#courseChoice1").slideToggle(800);
  $("#finalMessage1").show();
} else if ((macPc === 'Mac' && swallow === "I don't know" && money < 50000)) {
  $("#course2").empty().append(courseChoice2);
  $("#courseChoice2").slideToggle(800);
  $("#finalMessage2").show();
} else {
  $("#course3").empty().append(courseChoice3);
  $("#courseChoice3").slideToggle(800);
  $("#finalMessage3").show();
};
```

## Support and contact details

If you have any questions or concerns please contact [Riki Montgomery]: mailto:mostriki820@gmail.com

### License

MIT License

Copyright (c) 2017 Riki Montgomery
