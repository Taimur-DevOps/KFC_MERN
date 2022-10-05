const products = [
  {
    imageUrl: "./assests/AlaCarte/zingerStackerCombo.png",
    Name: "Zinger Stacker Combo",
    desc: "Stacker + 1 Regular fries+ 1 Regular drink",
    price: "RS 740",
  },
  {
    imageUrl: "./assests/AlaCarte/ZingerStacker.png",

    Name: "Zinger Stacker",
    desc: "Double chicken fillet, jalapenos, spicy mayo, lettuce and cheese with our signature Vietnamese Sauce",
    price: " RS 530",
  },
  {
    imageUrl: "./assests/AlaCarte/ZingerCombo.png",

    Name: "Zinger Combo ",
    desc: "A portrait of our hero- crispy Zinger fillet, signature mayo and lettuce- sandwiched between a sesame seed bun",
    price: "RS 710",
  },
  {
    imageUrl: "./assests/AlaCarte/ZingerBurger.png",

    Name: "Zinger Burger",
    desc: "A portrait of our hero- crispy Zinger fillet, signature mayo and lettuce- sandwiched between a sesame seed bun",
    price: "RS 500",
  },
  {
    imageUrl: "./assests/AlaCarte/twisterCombo.png",

    Name: "Twister Combo",
    desc: "Twister + 1 Regular fries+ 1 Regular drink",
    price: "RS 710",
  },
  {
    imageUrl: "./assests/AlaCarte/Twister.png",

    Name: "Twister",
    desc: "Tender chicken strips, black pepper mayo, diced tomatoes and lettuce- wrapped in a tortilla",
    price: "RS 500",
  },
  {
    imageUrl: "./assests/AlaCarte/MightyZinger.png",

    Name: "Mighty Zinger Combo ",
    desc: "Mighty Zinger + regular drink",
    price: "RS 710",
  },
  {
    imageUrl: "./assests/AlaCarte/mighty.png",

    Name: "Mighty Zinger ",
    desc: "Our signature Zinger but Bigger! Double Zinger fillet with a combination of spicy and plain mayo, lettuce and cheese- sandwiched between a sesame seed bun",
    price: "RS 500",
  },
  {
    imageUrl: "./assests/AlaCarte/kentucky.png",

    Name: "Kentucky Burger Combo ",
    desc: "Kentucky burger + 1 regular fries+ 1 regular drink",
    price: "RS 710",
  },
  {
    imageUrl: "./assests/AlaCarte/kentuckyBurger.png",

    Name: "Kentucky Burger",
    desc: "OG Zinger fillet layered with beef pepperoni, crispy fried onions, cheese and smokey BBQ sauce- sandwiched between an herb and black sesame bun",
    price: "RS 500",
  },
  {
    imageUrl: krunch,
    Name: "Krunch Burger",
    desc: "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
    price: "RS 220",
  },
  {
    imageUrl: krunchChickenCombo,
    Name: "Krunch Chicken Combo",
    desc: "1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken + 1 regular drink",
    price: " RS 460",
  },
  {
    imageUrl: Pc3sChicken,
    Name: "3Pcs Chicken",
    desc: "3 pieces of Hot and Crispy Fried Chicken",
    price: "RS 470",
  },
  {
    imageUrl: ChickenandChips,
    Name: "Chicken N Chips",
    desc: "2 pieces of Hot and Crispy Fried Chicken+ fries+ dinner roll+ signature Vietnamese Sauce",
    price: "RS 440",
  },
  {
    imageUrl: KrunchwithFiresandDrink,
    Name: "Krunch With Fries N Drink ",
    desc: "Krunch + 1 regular Fries + 1 regular Drink",
    price: "RS 430",
  },
  {
    imageUrl: KrunchBurgerwithDrink,
    Name: "Krunch Burger + Drink",
    desc: "1 Krunch burger + 1 regular drink",
    price: " RS 300",
  },
  {
    imageUrl: Zingeratha,
    Name: "Zingeratha ",
    desc: "Crispy chicken, sliced onions, tangy imli chutney, mint mayo, wrapped in a soft paratha",
    price: "RS 290",
  },
  {
    imageUrl: RicenSpice,
    Name: "Rice N Spice",
    desc: "Spiced, buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce",
    price: "RS 290",
  },
  {
    imageUrl: Deal3,
    Name: "MidnightDeal3 ",
    desc: "Mighty Zinger + regular drink",
    price: "RS 590",
  },
  {
    imageUrl: Deal2,
    Name: "MidnightDeal2",
    desc: "Spiced, buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce",
    price: " RS 290",
  }, 
  {
    imageUrl: Deal1,
    Name: "MidnightDeal1",
    desc: "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
    price: "RS 220",
  },
  {
    imageUrl: festival3,
    Name: "festival 3",
    desc: "An ultimate meal for the fam. It includes 4 Zinger burgers + 4 pieces Hot and Crispy Chicken + 2 dinner rolls + 1.5 Ltr drink",
    price: "RS 1995",
  },
  {
    imageUrl: festival2,
    Name: "festival 2",
    desc: "A hearty meal for the fam. It includes 2 Zinger burgers + 2 Krunch burgers + 4 pieces Hot and Crispy Chicken + 2 dinner rolls + 1.5 Ltr drink",
    price: " RS 1795",
  },
  {
    imageUrl: festival1,
    Name: "festival 1 ",
    desc: "A feel-good meal for the fam. It includes 4 Krunch burgers+ 4 pieces Hot and Crispy Chicken + 1.5 Ltr drink",
    price: "RS 1595",
  },
  {
    imageUrl: valueBucket,
    Name: "Value Bucket ",
    desc: "Our pride and joy: hand-breaded and fried to perfection in house. 9 pcs of Colonel’s Signature Crispy Fried Chicken. It's finger lickin' good. Rs. 50 from Every Bucket Sold Goes to Mitao Bhook Foundation",
    price: "RS 1430",
  },
  {
    imageUrl: xtreme,
    Name: "Xtreme Duo Box",
    desc: "The irresistible combo of 2 signature Zingers + 2 pcs Hot & Crispy Chicken + 1 large fries + 2 drinks",
    price: "RS 1220",
  },
  {
    imageUrl: crispyDuo,
    Name: "Crispy Duo Box",
    desc: "Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 large fries + 2 drinks",
    price: " RS 1020",
  },
  {
    imageUrl: wowBox,
    Name: "Wow Meal Box ",
    desc: "Feel good with 1 signature Zinger + 1 pc Hot & Crispy Chicken + 1 regular fries + 1 drink + 1 fresh coleslaw",
    price: "RS 810",
  },
  {
    imageUrl: boneless,
    Name: "Boneless Meal Box",
    desc: "Hassle free boneless experience with 4 chicken strips + 1 coleslaw + 1 regular fries + 1 drink + 1 dip + 1 dinner roll",
    price: "RS 580",
  },
  {
    imageUrl: CrispyBox,
    Name: "Crispy Box",
    desc: "In mood for something crispy? Get 2 pcs Hot & Crispy Chicken + 1 regular fries + 1 regular drink + 1 coleslaw",
    price: "RS 540",
  },
  {
    imageUrl: KrunchBurger,
    Name: "Krunch Burger",
    desc: "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
    price: "RS 220",
  },
  {
    imageUrl: Rice,
    Name: "Rice",
    desc: "Spiced, buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce",
    price: " RS 290",
  },
  {
    imageUrl: Midnightmeal,
    Name: "Midnight ",
    desc: "Mighty Zinger + regular drink",
    price: "RS 590",
  },
  {
    imageUrl: Midnightmeal,
    Name: "Xtreme Duo Box",
    desc: "The irresistible combo of 2 signature Zingers + 2 pcs Hot & Crispy Chicken + 1 large fries + 2 drinks",
    price: "RS 1220",
  },

];
