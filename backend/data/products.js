const products = [
  {
    category: "alacarte",
    imageUrl: "http://localhost:8080/images/zingerStackerCombo.png",
    name: "Zinger Stacker Combo",
    desc: "Stacker + 1 Regular fries+ 1 Regular drink",
    price: 740,
  },
  {
    category: "alacarte",
    imageUrl: "http://localhost:8080/images/ZingerStacker.png",

    name: "Zinger Stacker",
    desc: "Double chicken fillet, jalapenos, spicy mayo, lettuce and cheese with our signature Vietnamese Sauce",
    price: 530,
  },
  {
    category: "alacarte",
    imageUrl: "http://localhost:8080/images/ZingerCombo.png",

    name: "Zinger Combo ",
    desc: "A portrait of our hero- crispy Zinger fillet, signature mayo and lettuce- sandwiched between a sesame seed bun",
    price: 710,
  },
  {
    category: "alacarte",
    imageUrl: "http://localhost:8080/images/ZingerBurger.png",

    name: "Zinger Burger",
    desc: "A portrait of our hero- crispy Zinger fillet, signature mayo and lettuce- sandwiched between a sesame seed bun",
    price: 500,
  },
  {
    category: "alacarte",
    imageUrl: "http://localhost:8080/images/twisterCombo.png",

    name: "Twister Combo",
    desc: "Twister + 1 Regular fries+ 1 Regular drink",
    price: 710,
  },
  {
    category: "alacarte",
    imageUrl: "http://localhost:8080/images/Twister.png",

    name: "Twister",
    desc: "Tender chicken strips, black pepper mayo, diced tomatoes and lettuce- wrapped in a tortilla",
    price: 500,
  },
  {
    category: "alacarte",
    imageUrl: "http://localhost:8080/images/MightyZinger.png",

    name: "Mighty Zinger Combo ",
    desc: "Mighty Zinger + regular drink",
    price: 710,
  },
  {
    category: "alacarte",
    imageUrl: "http://localhost:8080/images/mighty.png",

    name: "Mighty Zinger ",
    desc: "Our signature Zinger but Bigger! Double Zinger fillet with a combination of spicy and plain mayo, lettuce and cheese- sandwiched between a sesame seed bun",
    price: 500,
  },
  {
    category: "alacarte",
    imageUrl: "http://localhost:8080/images/kentuckyBurger.png",

    name: "Kentucky Burger Combo ",
    desc: "Kentucky burger + 1 regular fries+ 1 regular drink",
    price: 710,
  },
  {
    category: "alacarte",
    imageUrl: "http://localhost:8080/images/kentucky.png",

    name: "Kentucky Burger",
    desc: "OG Zinger fillet layered with beef pepperoni, crispy fried onions, cheese and smokey BBQ sauce- sandwiched between an herb and black sesame bun",
    price: 500,
  },

  {
    category: "everydayValue",
    imageUrl: "http://localhost:8080/images/krunch.png",

    name: "Krunch Burger",
    desc: "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
    price: 220,
  },
  {
    category: "everydayValue",
    imageUrl: "http://localhost:8080/images/krunchChickenCombo.png",

    name: "Krunch Chicken Combo",
    desc: "1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken + 1 regular drink",
    price: 460,
  },
  {
    category: "everydayValue",
    imageUrl: "http://localhost:8080/images/Pc3sChicken.png",

    name: "3Pcs Chicken",
    desc: "3 pieces of Hot and Crispy Fried Chicken",
    price: 470,
  },
  {
    category: "everydayValue",
    imageUrl: "http://localhost:8080/images/ChickenandChips.png",

    name: "Chicken N Chips",
    desc: "2 pieces of Hot and Crispy Fried Chicken+ fries+ dinner roll+ signature Vietnamese Sauce",
    price: 440,
  },
  {
    category: "everydayValue",
    imageUrl: "http://localhost:8080/images/KrunchwithFiresandDrink.png",

    name: "Krunch With Fries N Drink ",
    desc: "Krunch + 1 regular Fries + 1 regular Drink",
    price: 430,
  },
  {
    category: "everydayValue",
    imageUrl: "http://localhost:8080/images/KrunchBurgerwithDrink.png",

    name: "Krunch Burger + Drink",
    desc: "1 Krunch burger + 1 regular drink",
    price: 300,
  },
  {
    category: "everydayValue",
    imageUrl: "http://localhost:8080/images/Zingeratha.png",

    name: "Zingeratha ",
    desc: "Crispy chicken, sliced onions, tangy imli chutney, mint mayo, wrapped in a soft paratha",
    price: 290,
  },
  {
    category: "everydayValue",
    imageUrl: "http://localhost:8080/images/RicenSpice.png",

    name: "Rice N Spice",
    desc: "Spiced, buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce",
    price: 290,
  },

  {
    category: "midnightDeal",
    imageUrl: "http://localhost:8080/images/Deal3.png",

    name: "MidnightDeal3 ",
    desc: "Mighty Zinger + regular drink",
    price: 590,
  },
  {
    category: "midnightDeal",
    imageUrl: "http://localhost:8080/images/Deal2.png",

    name: "MidnightDeal2",
    desc: "Spiced, buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce",
    price: 290,
  },
  {
    category: "midnightDeal",
    imageUrl: "http://localhost:8080/images/Deal1.png",

    name: "MidnightDeal1",
    desc: "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
    price: 220,
  },

  {
    category: "sharing",
    imageUrl: "http://localhost:8080/images/festival3.png",

    name: "festival 3",
    desc: "An ultimate meal for the fam. It includes 4 Zinger burgers + 4 pieces Hot and Crispy Chicken + 2 dinner rolls + 1.5 Ltr drink",
    price: 1995,
  },
  {
    category: "sharing",
    imageUrl: "http://localhost:8080/images/festival2.png",

    name: "festival 2",
    desc: "A hearty meal for the fam. It includes 2 Zinger burgers + 2 Krunch burgers + 4 pieces Hot and Crispy Chicken + 2 dinner rolls + 1.5 Ltr drink",
    price: 1795,
  },
  {
    category: "sharing",
    imageUrl: "http://localhost:8080/images/festival1.png",

    name: "festival 1 ",
    desc: "A feel-good meal for the fam. It includes 4 Krunch burgers+ 4 pieces Hot and Crispy Chicken + 1.5 Ltr drink",
    price: 1595,
  },
  {
    category: "sharing",
    imageUrl: "http://localhost:8080/images/valueBucket.png",

    name: "Value Bucket ",
    desc: "Our pride and joy: hand-breaded and fried to perfection in house. 9 pcs of Colonel’s Signature Crispy Fried Chicken. It's finger lickin' good. Rs. 50 from Every Bucket Sold Goes to Mitao Bhook Foundation",
    price: 1430,
  },

  {
    category: "signature",
    imageUrl: "http://localhost:8080/images/xtreme.png",
    name: "Xtreme Duo Box",
    desc: "The irresistible combo of 2 signature Zingers + 2 pcs Hot & Crispy Chicken + 1 large fries + 2 drinks",
    price: 1220,
  },
  {
    category: "signature",
    imageUrl: "http://localhost:8080/images/crispyDuo.png",

    name: "Crispy Duo Box",
    desc: "Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 large fries + 2 drinks",
    price: 1020,
  },
  {
    category: "signature",
    imageUrl: "http://localhost:8080/images/wowBox.png",
    name: "Wow Meal Box ",
    desc: "Feel good with 1 signature Zinger + 1 pc Hot & Crispy Chicken + 1 regular fries + 1 drink + 1 fresh coleslaw",
    price: 810,
  },
  {
    category: "signature",
    imageUrl: "http://localhost:8080/images/boneless.png",

    name: "Boneless Meal Box",
    desc: "Hassle free boneless experience with 4 chicken strips + 1 coleslaw + 1 regular fries + 1 drink + 1 dip + 1 dinner roll",
    price: 580,
  },
  {
    category: "signature",
    imageUrl: "http://localhost:8080/images/CrispyBox.png",

    name: "Crispy Box",
    desc: "In mood for something crispy? Get 2 pcs Hot & Crispy Chicken + 1 regular fries + 1 regular drink + 1 coleslaw",
    price: 540,
  },

  {
    category: "snacksBeverges",
    imageUrl: "http://localhost:8080/images/wowBox.png",
    name: "Krunch Burger",
    desc: "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
    price: 220,
  },
  {
    category: "snacksBeverges",
    imageUrl: "http://localhost:8080/images/boneless.png",

    name: "Rice",
    desc: "Spiced, buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce",
    price: 290,
  },
  {
    category: "snacksBeverges",
    imageUrl: "http://localhost:8080/images/CrispyBox.png",

    name: "Midnight ",
    desc: "Mighty Zinger + regular drink",
    price: 590,
  },
  {
    category: "snacksBeverges",
    imageUrl: "http://localhost:8080/images/crispyDuo.png",

    name: "Xtreme Duo Box",
    desc: "The irresistible combo of 2 signature Zingers + 2 pcs Hot & Crispy Chicken + 1 large fries + 2 drinks",
    price: 220,
  },
];

module.exports = products;
