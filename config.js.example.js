//Copy this file to config.js and specify your own settings

export let ESCAPP_APP_SETTINGS = {
  //Settings that can be specified by the authors
  //backgroundImg: undefined, //backgroundImg can be "NONE", a URL, or undefined to use the skin default.
  actionAfterSolve: "SHOW_MESSAGE", //actionAfterSolve can be "NONE" or "SHOW_MESSAGE".
  skin: "STANDARD", //skin can be "STANDARD", "RETRO", "RETRO_JUNGLE", "RETRO_REALISTIC" or "FUTURISTIC".
  locale:"es",
  leftTitle: "Correct",
  rightTitle: "Incorrect",
  confirmationText: "Confirm",
  //backgroundImg: "https://github.com/sonsoleslp/balticsea2025/blob/main/docs/food/322875f4cf96155821b6.png?raw=true",
  message: "Well done!",
  initialImages: JSON.stringify([
    { id: 1, title: "wine",  src: "https://github.com/sonsoleslp/balticsea2025/blob/main/docs/food/images/food/wine.png?raw=true" },
    { id: 2, title: "candy", src: "https://github.com/sonsoleslp/balticsea2025/blob/main/docs/food/images/food/candy.png?raw=true"  },
    { id: 3, title: "fish", src: "https://github.com/sonsoleslp/balticsea2025/blob/main/docs/food/images/food/fish.png?raw=true"  },
    { id: 4, title: "banana", src: "https://github.com/sonsoleslp/balticsea2025/blob/main/docs/food/images/food/banana.png?raw=true"  },
    { id: 5, title: "cherry jam", src: "https://github.com/sonsoleslp/balticsea2025/blob/main/docs/food/images/food/jam.png?raw=true"  },
    { id: 6, title: "bread", src: "https://github.com/sonsoleslp/balticsea2025/blob/main/docs/food/images/food/bread.png?raw=true"  },
    { id: 7, title: "espresso machiato", src: "https://github.com/sonsoleslp/balticsea2025/blob/main/docs/food/images/food/coffee.png?raw=true"  },
    { id: 8, title: "tomato", src: "https://github.com/sonsoleslp/balticsea2025/blob/main/docs/food/images/food/tomato.png?raw=true"  },
    { id: 9, title: "caca"}
  ]),
   
  escappClientSettings: {
    endpoint:"https://escapp.es/api/escapeRooms/id",
    linkedPuzzleIds: [1],
    rtc: false,
    preview: false
  },
};