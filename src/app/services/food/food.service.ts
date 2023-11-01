import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodByTitle(title:string):Food{
    return this.getAll().find(food => food.title === title)!;
  }

  getAll():Food[]{
    return [
      {        
        title: "Beef Brisket",
        tags: ['dinner', 'beef brisket'],
        imageUrl: '/assets/images/beefBrisket.png',
        cookTime: '6 hrs, 40 min',
        serves: '8',
        ingredientsArray: [ {ingredientTitle: 'Ingredients', ingredients: ['2kg Beef Brisket', 'Dry rub', '4 tbsp dark brown sugar',
       ' 4 tbsp smoked paprika can substitute regular paprika',
        '2 tbsp coarse salt',
        '1 tbsp ground black pepper',
        '2 tsp garlic powder',
        '2 tsp onion powder',
        '1 tsp cumin',
        '1 tsp ground coriander',
        '1 tsp cayenne pepper'
      ]}],
        steps:['Mix dry rub ingredients. (This recipe for dry rub will cover a 2.7Kg lb brisket. So will probably have a little left over)', 'Take brisket flat out of the package, lay it on a cutting board and pat it dry with a paper towel.', 'Spread a generous amount of dry rub on top, flip the brisket over and spread a generous amount of dry rub over that side. Make sure there is a good amount of seasoning and rub it all over all the sides of the brisket. Massage the rub into every nook and cranny and make sure it’s nicely coated all over.', 'Wrap rubbed brisket in a couple of layers of foil, covering it tight. Place wrapped brisket in a pan or a dish just in case some juices leak out, so that it doesn’t leak all over the refrigerator.', 'Refrigerate the brisket overnight or up to 12 hours. Take the brisket out of the refrigerator an hour before cooking it, unwrap and let it get to room temperature.', 'Preheat oven to 150C and place a rack inside the large roasting pan. Lay a couple of sheets of foil that are long enough to loosely cover the brisket, criss-cross, on top of the rack. (You can layer the bottom of the roasting pan with aluminum foil to catch whatever drippings might leak through.)', 'Place the brisket, fat cap up, in the middle of aluminum foil prepared in the roasting pan. Bring the aluminum foil together and close it, covering the brisket loosely, leaving a little space between the brisket and the foil.', 'Place in the oven and bake for about 1 hour and 15 minutes per 500g, until the brisket reaches about 180°. Use a meat thermometer to measure the thickest part of the brisket. (My 2kg brisket takes about 5 1/2 hours but there are many factors that can affect exact time. Meat itself will take different time and brisket can also stall at a certain temperature in the oven much like a smoker. Use a leave-in meat thermometer to monitor the temperature of your brisket and that way you won’t have to keep opening the oven .)', 'Open the foil and place back in the oven. Bake brisket for another 45 minutes to an hour.','Take the brisket out onto the cutting board, tent it with a sheet of foil, and let it rest for 30 minutes.','When cutting the brisket; make sure to cut against the grain. ']

      },
      {        
        title: 'Chicken Shwarma',
        tags: ['lunch', 'dinner', 'chicken shwarma'],
        imageUrl: '/assets/images/chickenShawarma.png',
        cookTime: '20 min',
        serves: '4-5',
        ingredientsArray: [{
          ingredientTitle: "Ingredients",
          ingredients: [
            '1kg chicken thighs',
            '1 lrg clove garlic',
            '1 tbsp ground coriander',
            '1 tbsp ground cumin',
            '1 tbsp ground cardamon',
            '1 tsp cayanne pepper',
            '2 tsp smoked paprika',
            '2 tsp salt',
            '2 tbsp lemon juice',
            '3 tbsp olive oil',
            'black pepper to taste'
          ]
        }],
        steps: ["mix spices/oil/lemon juice and marinade chicken overnight",
      'Fry until cooked.']
      },
      {        
        title: 'Roast Potatoes',
        tags: ['lunch', 'dinner', 'vegetarian', 'crispy roast potatoes'],
        imageUrl: '/assets/images/crispyRoastPotatoes.png',
        cookTime: '1 hr',
        serves: '4',
        ingredientsArray: [
          {ingredientTitle: 'Ingredients',
          ingredients: [
          "8 cups water",
          "28gm salt",
          "1/2 tsp baking soda",
          "2kg potatoes",
          "5 tbsp olive oil",
          "Rosemary (minced)",
          "3 cloves garlic",
        ]}],
        steps: [
          "Boil water with salt and baking soda then add potatoes cut into large chunks",
          "Boil for 10 minutes",
          "While potatoes are boiling, cook herbs and garlic with olive oil in pan on medium heat until garlic is browned.",
          "Strain garlic and herbs out while keeping the oil in a separate bowl.",
          "Drain potatoes and let steam for a little bit. Then add salt, pepper, oil mix and toss hard so the edges are roughed up.",
          "Preheat oven to 230C then place potatoes spaced apart on tray lined with baking paper.",
          "Cook for 20 minutes then flip followed every 10 minutes with another flip until golden brown.",
          "Add herbs to serve"
        ],
      },
      {        
        title: 'Dhal',
        tags: ['dinner', 'vegetarian', 'dhal', 'curry'],
        imageUrl: '/assets/images/dhal.png',
        cookTime: '1 hr, 30 min',
        serves: '4',
        ingredientsArray: [
          {ingredientTitle: 'Ingredients', ingredients: [
          "1 Cup Brown onion (chopped)",
          "2 Cloves Garlic",
          "1 Tbsp Ginger",
          "1 Small Carrot",
          "1 Cup Dried red lentils",
          "1 Small Tomato (sliced)",
          "1 tsp Cumin",
          "1 tsp Coriander",
          "1 tsp Tumeric",
          "1/4 tsp Cardomom",
          "1/4 tsp Cinnamon",
          "1/4 tsp Cayanne pepper",
          "2 Tbsp Tomato paste",
          "1 Tbsp Olive or Sesame oil",
          "4 Cups Water/Stock",
          "1 Small tin Coconut cream",
        ]}],
        steps: [
          "Saute onion, garlic and ginger until translucent. (Add carrot midway through)",
          "Turn down and add spices.",
          "Add water/stock, coconut cream, tomato and salt.",
          "Bring to a low boil, turn down and simmer covered for 30 minutes.",
          "Reduce for as long as you like for a thicker dhal.",
        ],
      },
      {        
        title: 'Eggplant Dumplings',
        tags: ['lunch', 'dinner', 'vegetarian', 'eggplant dumplings'],
        imageUrl: '/assets/images/eggplantDumplings.png',
        cookTime: '1 hr, 50 min',
        serves: '4',
        ingredientsArray: [
          {ingredientTitle: 'Ingredients',
          ingredients:[
          "90gm fresh breadcrumbs, ideally sourdough (ie, from 2-3 slices)",
          "4 aubergines, cut into roughly 2.5cm cubes (1kg net weight)",
          "150ml olive oil",
          "Salt and black pepper",
          "100gm ricotta",
          "75gm parmesan, finely grated, plus extra to serve",
          "2½ tbsp parsley leaves, finely chopped",
          "1 whole egg, plus 1 yolk extra",
          "1½ tbsp plain flour",
          "6 garlic cloves, peeled and crushed",
          "4 tbsp basil leaves, roughly chopped",
          "600gm tinned peeled plum tomatoes (ie 1½ 400g tins), blitzed smooth",
          "1½ tsp tomato paste",
          "1½ tsp caster sugar",
          "¼ tsp chilli flakes",
          "¾ tsp paprika",
          "2 tsp fresh oregano leaves, finely chopped",
          "45gm pitted kalamata olives, torn in half",
        ]}],
        steps: [
          "Heat the oven to 180C (160C fan). Spread out the breadcrumbs on an oven tray and bake for 12 minutes, until lightly browned and dried out. Remove, leave to cool and turn up the oven to 240C (220C).",
          "On a large oven tray lined with baking paper, toss the aubergines in 75ml oil, half a teaspoon of salt and a good grind of pepper. Spread out on the tray, bake for 30 minutes, tossing once halfway, until golden brown, then chop into a chunky mash and put in a large bowl. Mix in the ricotta, parmesan, parsley, egg, extra yolk, flour, breadcrumbs, a third of the garlic, two and a half tablespoons of basil, a quarter-teaspoon of salt and a good grind of pepper. With lightly oiled hands, shape the mix into 16 golf-ball-sized dumplings, each weighing about 55g, and compress so they hold together.",
          "Heat two tablespoons of oil in a large, nonstick frying pan on a medium-high flame, and fry half the dumplings for three to four minutes, turning them until golden brown all over (adjust the heat if they’re browning too much), then transfer to a plate and repeat with the rest of the dumplings.",
          "Heat the remaining two tablespoons of oil in the same pan, fry the remaining garlic for a minute, until fragrant, then stir in the tomatoes, tomato paste, sugar, chilli, paprika, oregano, a teaspoon of salt and a good grind of pepper, and cook, stirring occasionally, for eight minutes, or until thickened slightly. Pour in 400ml water, bring to a simmer, then lower the heat to medium and simmer for 10 minutes. Add the dumplings and cook for 15 minutes, or until cooked through.",
          "Remove from the heat, scatter over the olives, the last of the basil and a grating of parmesan, and serve straight from the pan.",
        ],
      },
      {        
        title: 'Freekeh Salad',
        tags: ['dinner', 'lunch', 'vegetarian', 'freekeh', 'salad'],
        imageUrl: '/assets/images/freekeh.png',
        cookTime: '30 min',
        serves: '8',
        ingredientsArray: [
        {ingredientTitle: 'Ingredients', 
        ingredients: 
        ['1 bunch coriander, chopped',
          '1/2 bunch parsley, chopped',
          '1/2 red onion, finely diced',
          '1 cup freekah (or cracked wheat or quinoa)',
          '1/2 cup Puy lentils',
          '2 tbsp toasted pumpkin seeds',
          '2 tbsp toasted slivered almonds',
          '2 tbsp toasted pine nuts',
          '2 tbsp baby capers',
          '1/2 cup currants',
          'Juice of 1 lemon',
          '3 tbsp extra virgin olive oil',
          'Sea salt to taste',
          '1 pomegranate, deseeded, to serve'
        ]}],
        steps: ['Blanch freekah and lentils separately in boiling water until both just cooked. ', 'Drain well and allow to cool. ', 'Mix the yoghurt, ground cumin and honey until combined. ','In a medium bowl, place the coriander, parsley, red onion, freekah, lentils, toasted nuts, capers, currants, lemon juice and olive oil. Mix well and season to taste.', 'Place into serving dish and top with cumin yoghurt and pomegranate seeds.' ]
      },
      {        
        title: 'Frittata',
        tags: ['lunch', 'dinner', 'vegetarian', 'frittata', 'vegetarian'],
        imageUrl: '/assets/images/frittata.png',
        cookTime: '1 hr',
        serves: '4',
        ingredientsArray: [
          {ingredientTitle: 'Ingredients',
          ingredients: [
          "6 eggs",
          "2 tbsp thickened cream",
          "Salt and Pepper",
          "2 tsp garlic (minced)",
          "1 cup whatever other veggies you want",
          "1 brown onion",
          "8 small cup mushrooms",
          "Feta",
        ]}],
        steps: [
          "Cook off the mushrooms and onion in pan on low heat until soft.",
          "Preheat oven to 180C. Prepare oven tray lined with baking paper then add eggs after lightly beating and mix with other ingredients.",
        ],
      },
      {        
        title: 'Khao Soi',
        tags: ['lunch', 'dinner', 'khao soi'],
        imageUrl: '/assets/images/khaoSoi.png',
        cookTime: '35 min',
        serves: '4',
        ingredientsArray: [
        {ingredientTitle: 'Meatball Ingredients',
        ingredients:
        [ '500gm Chicken mince',
        '2 Spring onions (finely chopped)',
        '2 Cloves garlic (crushed)',
        '1 Grated Lemongrass (white part only)',
        '1 tsp Ginger',
        '3 Kaffir lime leaves (finely chopped)']
        },
        {ingredientTitle: 'Poaching Liquid Ingredients',
        ingredients:
         ['2 tbsp Red curry paste',
        '600ml Coconut milk',
        '400ml Chicken stock',
        '1 Tbsp Fish sauce',
        '1 Lime (juiced and zested)']
        },
        {ingredientTitle: 'To Serve',
        ingredients: 
        ['Egg/Rice Noodles',
        'Coriander Leaves',
        'Fried Shallots',
        '2 Cups of greens (broccoli/spinach)'
        ]
        }],
        steps: [
          'Combine meatball ingredients, rolling into golf ball sized portions. Set aside.',
          'Heat oil in large frying pan, add curry paste and cook until darkened.',
          'Add rest of poaching ingredients and bring to the boil.',
          'Reduce heat and add chicken simmering for 15-20 minutes or until tender. Take meatballs out.',
          'Add your greens in to cook for 5 minutes.',
          'Serve with noodles.'
        ]
      },
      {        
        title: 'Thai Fishcakes',
        tags: ['lunch', 'dinner', 'thai fishcakes'],
        imageUrl: '/assets/images/thaiFishcakes.png',
        cookTime: '35 min',
        serves: '2',
        ingredientsArray: [
        {ingredientTitle: 'Ingredients',
        ingredients:[
          "425gm Tuna",
          "4 Spring Onions (finely sliced)",
          "2 Tbsp chopped coriander",
          "1/4 cup Red curry Paste",
          "1/4 cup flour",
          "3 eggs lightly beaten",
          "3 Kaffir Lime Leaves (finely chopped)",
        ]}],
        steps: [
          "Mix all ingredients well in a bowl",
          "Fry off in pan on medium high heat until golden",
        ],
      },
      {
        title: 'Tofu Wontons',
        tags: ['lunch', 'dinner', 'tofu wontons', 'vegetarian'],
        imageUrl: '/assets/images/tofuWontons.png',
        cookTime: '50 min',
        serves: '4',
        ingredientsArray: [
          {ingredientTitle: 'Ingredients',
          ingredients:[
          '25 wontons wrappers',
          '1/2 cup firm tofu',
          '1 green onion, finely chopped',
          '1 bok choy leaf, shredded',
          '4 water chestnuts, finely chopped',
          '2 tablespoons shredded carrot',
          '1 large egg, lightly beaten',
          '1/4 teaspoon salt',
          'Pinch freshly ground black pepper',
          '1 tablespoon soy sauce',
          '2 teaspoons minced fresh ginger',
          '1 teaspoon sugar',
          '1 teaspoon sesame oil' 
        ]}],
        steps: ['Drain the tofu, place in a bowl and mash with a fork. ', 'Lightly beat the egg with the salt and pepper. Combine the mashed tofu and vegetables with the egg; add the soy sauce, ginger, sugar, and sesame oil. and gently mix together. ', 'Prepare a small bowl with water. Carefully separate the wrappers. It’s best to work with the wrappers at room temperature so they’re pliable and won’t easily break. ', 'Place 1 wrapper on a flat surface or on your palm. ', 'Dip your finger in the bowl of water and trace the edges of the wrapper. Add 1/2 – 1 tbsp of the filling (note that the amount of filling will depend on the size of your wrapper and type of fold you’re doing). Press down the filling to pack it tightly. Fold the wrapper into half until you have a triangle. Carefully press down on the filling to remove any air pockets. Then seal the edges tight. ', 'Flip over the triangle. Carefully press down the centre of the triangle. Dab one bottom corner of the triangles with water. ', 'Afterwards, bring both ends together. Press down both tips to seal well. Repeat this for the rest of the wrappers until you have all your wontons. ', 'While you work on each wonton, you can cover your made wontons with a towel to prevent them from drying out. ', 'IMPORTANT WONTON FOLDING TIP: Be sure to keep the sides/edges of the wrapper cleaning try not to get any of the filling on it. This way you’ll be able to seal the wontons well. When filling gets on the edges of the wrapper, some of the oil will make it slippery and hard to seal the wrapper together. ', 'Heat a large pot with water. Add a pinch of salt. Leave to boil over medium high heat. Once the water is boiling, add in 8-10 wontons, or depending on the size of your pot. ', 'Leave to boil for 2-3 minutes, moving around with a spoon to prevent the wontons from sticking to the bottom, until the wontons float and wrappers are translucent. Remove from the water and transfer to a large plate or bowl. Repeat this for the rest of the wontons. ']
      },
      {
        title: 'Ramen Chicken',
        tags: ['lunch', 'dinner', 'ramen chicken'],
        imageUrl: '/assets/images/ramenChicken.png',
        cookTime: '45 min', 
        serves: '4',
        ingredientsArray: [
        {ingredientTitle: 'Marinade Ingredients',
        ingredients: [
          '2 tbsp mirin',
          '1 tbsp dark soy sauce (Or mushroom dark soy sauce) double the amount of light soy sauce (below) if you don’t have dark soy sauce',
          '1 tbsp light soy sauce',
          '1/4 tsp cayenne pepper',
          '2 garlic cloves (chopped finely)',
          '4 pieces chicken thigh boneless, skin off or on'
        ]},
        {ingredientTitle: 'Glaze Ingredients',
        ingredients: [
          '2 tsp brown sugar',
          '2 tbsp dark soy sauce (or mushroom dark soy sauce) or 1 tbsp light soy sauce + 1 tbsp water'
        ]},
        {ingredientTitle: 'Ramen',
        ingredients: [
          '4-5 cups good quality chicken stock (preferably no sodium or low sodium)',
          '4 stalks of spring onions trimmed and cut in half',
          '4-5 cloves garlic',
          '2 inch piece of ginger sliced',
          '4 red chili or 1 tbsp dried chili flakes (crushed red pepper) omit if you don’t like spicy food',
          '1/4 cup light soy sauce',
          '1/4 cup mirin',
          '1 cup shiitake mushrooms stems trimmed and sliced, or cut in half',
          '350gm dried ramen noodles or (or 4 portions of fresh ramen noodles)'
        ]},
        {ingredientTitle: 'Extras',
        ingredients: [
          '4 large eggs',
          '2 bunches of spinach or 4 shanghai bok choy or any Asian greens',
          'Soy sauce',
          'Sesame oil',
          'Garlic',
          '4 stalks of spring onions (sliced finely)',
          'Sliced radishes or bean sprouts',
          'Ramen eggs marinated or plain',
          'Chili garlic oil'
        ]}
        ],
        steps: [
          'Place all the ingredients for the chicken marinade in a bowl. Mix well to coat the chicken. If time permits, allow the chicken to marinate for at least 1 hour.',
          'Preheat oven to 220°C, and place an oven rack in the top third of your oven. Line a baking sheet with parchment paper.',
          'Place the chicken pieces on the baking sheet, skin side down (or smooth side down), evenly spaced apart. Then place the baking sheet in the preheated oven (upper third).',
          'Let the chicken roast for 15 minutes. While the chicken is cooking, mix the brown sugar and dark soy sauce for the glaze, and start making the ramen.',
          'After 15 minutes, flip the chicken pieces over and spoon the glaze over them. Let the chicken cook for a further 10 – 15 minutes. Then remove from the oven and let them cool down.',
          'Slice the chicken and set aside.',
          'While the caramelized soy chicken is cooking in the oven, make the ramen base.',
          'Place two saucepans on the stove.',
          'As an optional step, you can chop the garlic and ginger. Or you can add them whole or sliced and strain the ramen stock to remove the large pieces of garlic and ginger later. ',
          'In one saucepan (Pot 1), place the stock, ginger, garlic, spring onions, chili (if using), soy sauce and mirin. Stir and cover the pot. Let it come to a boil at medium high – high heat. Then lower the heat to medium and let it simmer for 25 minutes. Taste the base and add more soy sauce if needed. ',
          'While Pot 1 is simmering, add water to the second pot (Pot 2), and bring it to a boil. Add the dried noodles to the boiling water, and cook according to package directions. I prefer cooking the noodles for ONE MINUTE LESS than what’s recommended on the package, as the noodles will continue to cook for a bit longer when served with hot broth. The straight ramen noodles I use here take 3 minutes to cook. Drain the noodles and divide into 4 bowls and set aside. ',
          'When the ramen base in Pot 1 has cooked for about 20 – 25 minutes, strain to remove the garlic, ginger, chili and spring onions (or only the spring onions and chili). Add the strained stock back into the pot and add the mushrooms, and let it cook for a further 5 minutes until the mushrooms have softened. The ramen base is now ready. '
        ]
      },
      {
        title: 'Mongolian Beef',
        tags: ['dinner', 'mongolian beef'],
        imageUrl: '/assets/images/mongolianBeef.png',
        cookTime: '45 min',
        serves: '4',
        ingredientsArray: [
        {ingredientTitle: 'Ingredients',
        ingredients: ['225gms flank steak',
          '1 tsp vegetable oil (plus 1/3 cup for frying)',
          '1 tsp soy sauce',
          '1 tbsp cornstarch (plus 1/4 cup for dredging, divided; if doubling the recipe, increase cornstarch accordingly)',
          '2 tbsp brown sugar',
          '1/4 cup hot water (or hot low sodium chicken or beef stock)',
          '1/4 cup low sodium soy sauce or 1 1/2 tbsp water and 2 1/2 tbsp regular soy sauce',
          '1/2 tsp ginger (minced)',
          '5 dried red chili peppers (optional)',
          '2 cloves garlic (chopped)',
          '1 tbsp cornstarch (mixed with 1 tbsp water to make a slurry)',
          '2 scallions (cut into 1-inch long slices on the diagonal)'
        ]}],
        steps: ['Combine the sliced beef with 1 tsp oil, 1 tsp soy sauce, and 1 tbsp cornstarch. Marinate for 1 hour. The beef should still be quite moist after it has marinated. If it looks too dry, add a tablespoon of water to it. ', 'Next, dredge the marinated beef slices in the remaining 1/4 cup of cornstarch until lightly coated. ', 'In a small bowl, mix brown sugar and hot water (or low sodium chicken or beef stock) until the sugar is dissolved. Mix in 1/4 cup low sodium soy sauce. If you don’t have low sodium soy sauce, substitute 2 1/2 tablespoons regular soy sauce and 1 1/2 tbsp water. The saltiness of various soy sauce brands varies, so give the sauce a taste, and adjust the amounts of sugar/soy sauce/water/stock to your own taste. ','Heat 1/3 cup vegetable oil in the wok over high heat. Just before the oil starts to smoke, spread the flank steak pieces evenly in the wok, and sear for 1 minute (depending upon the heat of your wok). Turn over and let the other side sear for another 30 seconds. Remove to a sheet pan. Tilt it slightly to let the oil drain to one side (lean it on a cookbook or cutting board). The beef should be seared with a crusty coating.', 'Drain the oil from the wok, leaving 1 tablespoon behind, and turn the heat to medium-high. Add the ginger and dried chili peppers, if using. After about 15 seconds, add the garlic. Stir for another 10 seconds and add the premixed sauce. ', 'Let the sauce simmer for about 2 minutes and slowly stir in the cornstarch slurry mixture. Cook until the sauce has thickened enough to coat the back of a spoon. ', 'Add the beef and scallions and toss everything together for another 30 seconds. There should be almost no liquid, as the sauce should be clinging to the beef. If you still have sauce, increase the heat slightly and stir until thickened. Plate and serve with steamed rice.' ]
      },
      {
        title: 'Spicy Dry Beef',
        tags: ['dinner', 'spicy dry beef'],
        imageUrl: '/assets/images/spicyDry.jpg',
        cookTime: '1-2 hrs',
        serves: '4',
        ingredientsArray: [
          {ingredientTitle: 'Ingredients',
          ingredients: [
          '1kg Sliced beef',
          '1 tbsp chilli sauce',
          '3 tbsp tamari',
          '1 tbsp sugar (optional)',
          '3-4 pieces licorice root',
          '1 thumb sized piece ginger',
          '2 star anise',
          '1/4 tsp cloves'
        ]}],
        steps: ['Saute sliced beef then cover with water ', 'Add spices then simmer until reduced ', 'If you want, add sliced onion 15 minutes before serving ', 'Cook until tender & almost dry ']
      },
      {
        title: 'Veggie Bowl',
        tags: ['dinner', 'veggie bowl', 'vegetarian'],
        imageUrl: '/assets/images/veggieBowl.jpg',
        cookTime: '1 hr',
        serves: '2',
        ingredientsArray: [
          {ingredientTitle: 'Ingredients',
          ingredients:[
          "1 Potato",
          "1/2 Sweet Potato",
          "1 Carrot",
          "8 Brussel Sprouts",
          "1 cup Egg White",
          "Large handful Spinach",
          "1 Avocado",
          "50gm Danish Feta",
          "Garlic",
          "Black Sesame",
          "Nutritional Yeast",
        ]}],
        steps: [
          "Chop Potato, sweet potato and carrot into bite sized chunks. Oil and salt and pepper them and place into oven tray then shake nutritional yeast on top. Bake for 1 Hour at 180°C. ",
          "Chop Brussel srouts and cook on medium/low heat for 20-25 minutes in oil and butter. Turn the heat to medium and add handful of spinach in the last 5 minutes to saute through.",
          "Cook Egg white in pan on medium heat and flip after 5 minutes or when egg white is not runny on top. ",
          "Place all in bowl and add slice avo on top, followed by crumbled feta and sesame seeds ",
        ],
      },
      {
        title: 'Morrocan Chickpea',
        tags: ['lunch', 'dinner', 'morrocan chickpea salad', 'salad', 'vegetarian'],
        imageUrl: '/assets/images/morrocanChickpea.png',
        cookTime: '1 hr',
        serves: '4',
        ingredientsArray: [
          {ingredientTitle: 'Ingredients',
          ingredients:[
          "1 can Chickpeas (rinsed and drained)",
          "1/2 Cup Olive oil",
          "1 Clove minced garlic",
          "1 heaped tsp Coriander",
          "1 heaped tsp Cumin",
          "1 heaped tsp Tumeric",
          "1 heaped tsp Smoked Paprika",
          "Salt and Pepper to taste",
          "1 Red onion",
          "Feta",
          "1/4 Pumpkin",
          "1 Carrot",
          "1/2 Sweet Potato",
          "Fresh green salad veggies",
          "Parsley",
          "Mint",
        ]}],
        steps: [
          "Preheat over to 200°C, bake chickpeas for around 40 minutes, tossing every 15 or so minutes. (Beware of spitting oil) ",
          "Chop roasting veggies and bake alongside chickpeas",
          "Make green salad and stir chickpeas through while still warm, add chopped herbs, top with roast veg and feta.",
        ],
      },
      {
        title: 'Zucchini Fritters',
        tags: ['lunch', 'breakfast', 'dinner', 'zucchini fritters', 'vegetarian'],
        imageUrl: '/assets/images/zucchiniFritters.png',
        cookTime: '35 min',
        serves: '2',
        ingredientsArray: [
          {ingredientTitle: 'Ingredients',
          ingredients: [
          "2 Zucchini (medium sized)",
          "1/3 Cup Peas",
          "1/4 Red onion",
          "Parmesan or Feta",
          "2 Cloves Garlic (crushed)",
          "3 Eggs",
          "1/4 Cup Flour",
        ]}],
        steps: [
          "Grate zucchini, lightly salt and leave for at least 15 minutes then squeeze moisture out.",
          "Thinly slice onions then add to zucchini along with peas, cheese, flour then beat eggs into mixture.",
          "Lightly fry in minimum oil.",
        ],
      },
      {
        title: 'Summer Chickpea',
        tags: ['lunch', 'dinner', 'chickpea salad', 'salad', 'vegetarian'],
        imageUrl: '/assets/images/summerChickpea.png',
        cookTime: '1 hr',
        serves: '2',
        ingredientsArray: [
          {ingredientTitle: 'Ingredients',
          ingredients:[
          "1 Can Chickpeas (rinsed and drained)",
          "2 handfuls ripe cherry tomatos",
          "4 Tbsp Olive oil",
          "1/2 Lemon",
          "1/4 Red onion (chopped)",
          "Salt and Pepper",
          "Basil and Mint (chopped)",
          "Feta",
          "Baby Spinach",
        ]}],
        steps: [
          "Warm chickpeas in frying pan with a little oil.",
          "Mix chopped tomatos, chickpeas, olive oil, lemon juice, red onion, salt and pepper. Leave for at least 30 minutes.",
          "Mix through however many herbs you desire.",
          "Place spinach on bottom of bowls with chickpea mix on top.",
          "Crumble feta over everything.",
        ],
      },
      {
        title: 'Vietnamese Noodle',
        tags: ['dinner','lunch', 'vietnamese noodle salad', 'salad', 'vegetarian'],
        imageUrl: '/assets/images/vietnameseNoodle.jpg',
        cookTime: '30 min',
        serves: '2',
        ingredientsArray: [
        {ingredientTitle: 'Nuoc Cham Sauce Ingredients',
        ingredients: [
          '3 Cloves Garlic (minced)',
          '1 Lime (juiced)',
          '2 Tbsp Rice wine vinegar',
          '1/4 Cup Fish sauce',
          '3 Tbsp Sugar',
          '1 Red chilli (sliced)',
          '1/2 Cup Cold water',
          'Sesame oil (optional)'
        ]},
        {ingredientTitle: 'Marinade Ingredients',
        ingredients: [
          "2 Chicken Breasts or 4 Thighs",
          "2 Cloves Minced garlic",
          "1 Lime (juiced)",
          "2 Tbsp Fish sauce",
          "1 Tbsp Soy sauce",
          "2 Tbsp Brown sugar",
          "1 Tbsp vegetable oil",
        ]},
        {ingredientTitle: 'Salad Ingredients',
        ingredients: [
          "1/2 Cucumber",
          "1 Carrot",
          "Peanuts (roughly chopped)",
          "1 Pack vermicelli noodles",
          "1/4 Red onion",
        ]}
        ],
        steps: ["Boil noodles for 3 minutes then strain and rinse with cold water.",
        "Cook chicken in pan until golden on outside.",
        "Cut cucumber, red onion and carrot into small strips.",
        "Mix everything but chicken in bowl and add Nuoc Cham sauce.",
        "Portion salad out, add chicken to top then sprinkle peanuts over."]
      },
      {
        title: 'Waldorf Salad',
        tags: ['dinner', 'lunch', 'salad', 'waldorf salad', 'vegetarian'],
        imageUrl: '/assets/images/waldorf.png',
        cookTime: '20 min',
        serves: '2',
        ingredientsArray: [
          {ingredientTitle: 'Dressing Ingredients',
        ingredients: [
          "1/2 Lemon (juiced)",
          "1/2 Cup Mayonnaise",
          "3/4 Cup Orange juice",
          "1/2 tsp Orange zest",
          "Honey (only add if necessary)"
        ]},
        {ingredientTitle: 'Salad Ingredients',
        ingredients: [
          "3 Large Apples (cut into chunks)",
          "3/4 Cup cubed cheddar cheese (optional)",
          "1/2 cup toasted nuts",
          "1 stalk celery (chopped)",
          "Lettuce"
        ]}
        ],
        steps: ["Whisk together the dressing ingredients.",
        "Toss all other ingredients together with dressing.",
        "Once combined, let chill then serve on a bed of fresh lettuce with rounds of ginger for garnish."]
      },
      {
        title: 'Peanut Soba',
        tags: ['dinner', 'lunch', 'salad', 'peanut soba', 'vegetarian'],
        imageUrl: '/assets/images/peanutSoba.png',
        cookTime: '25 min',
        serves: '4-8',
        ingredientsArray: [
          {ingredientTitle: 'Salad Ingredients',
        ingredients: [
          "120gm soba noodles or whole wheat spaghetti",
          "1 very small purple or green cabbage quartered and cored (about 6 cups shredded)",
          "12 Brussels sprouts, nubby ends removed, or additional cabbage (about 2 cups shredded)",
          "4 carrots (peeled)",
          "1 bunch of green onions (trimmed and sliced into thin rounds)"
        ]},
        {ingredientTitle: 'Peanut Seseame Dressing',
        ingredients: [
          "1/2 cup peanut butter",
          "3 Tbsp white wine vinegar or rice vinegar",
          "3 Tbsp toasted sesame oil",
          "3 Tbsp reduced-sodium tamari or other soy sauce",
          "2 Tbsp honey or maple syrup",
          "1 Tbsp finely grated fresh ginger",
          "2 garlic cloves, pressed or minced"
        ]},
        {ingredientTitle: 'Garnish',
        ingredients: [
          "Sprinkle of coarsely chopped peanuts",
          "Handful of cilantro, coarsely torn",
          "1 lime, sliced into wedges",
          "Optional, for spice lovers: sriracha or chili-garlic sauce"
        ]}
        ],
        steps: ["Cook the soba noodles: Bring a large pot of water to boil and cook the noodles according to package directions. Drain and rinse with cold water before returning to the pot.",
        "Prepare the vegetables: This is easier in a food processor than by hand. If using a food processor, shred the cabbage and sprouts with the slicing disk, then grate the carrots using the grating disk. Or use a chef’s knife to chop the cabbage and sprouts into thin strips, then coarsely grate the carrots.",
        "Prepare the dressing: In a 2-cup liquid measuring cup or medium bowl, whisk together the dressing ingredients until smooth. If the mixture should be thick but drizzly; if it’s too thick, whisk in water in 1 tablespoon increments until it is (at which point you might need to add a little salt, to taste, since the flavors have been diluted).",
        "In a large serving bowl, combine the cooked soba noodles, shredded cabbage and sprouts, grated carrots, and chopped green onions. Pour dressing over the vegetables and toss to coat (you may or may not need all of the dressing). For best flavor, let the slaw marinate for 20 minutes before serving.",
        "Serve slaw with a sprinkling of chopped peanuts, torn cilantro, and a lime wedge. Serve with sriracha on the side if you’d like a spicy kick. This slaw keeps very well for a few days (covered and refrigerated). Before serving, wake up the flavors with a dash of lime juice or vinegar and more fresh cilantro."]
      },
      {
        title: 'Ottolenghi Carrot',
        tags: ['dinner', 'ottolenghi carrot', 'salad', 'vegetarian'],
        imageUrl: '/assets/images/roastedCarrots.png',
        cookTime: '1 hr 10 mins',
        serves: '4',
        ingredientsArray: [
          {ingredientTitle: 'Salad Ingredients',
        ingredients: [
          "1kg Carrots (peeled and cut on a lengthways angle)",
          "3 tbsp olive oil (plus 1.5 tbsp to serve)",
          "1 1/2 tbsp maple syrup",
          "10g mint leaves",
          "5g dill",
          "8 dried apricots (finely sliced, 70gms)",
          "30g salted and roasted almonds (roughly chopped)",
          "Salt and pepper"
        ]},
        {ingredientTitle: 'Chamoy Ingredients',
        ingredients: [
          "40gm dried apricots",
          "1 tsp maple syrup",
          "2 tsp sumac",
          "45ml lime juice (plus 2 tsp to serve)",
          "1 1/2 tsp Aleppo chili flakes (or 3/4 tsp regular chili flakes)",
          "1 small garlic clove",
          "2 tbsp olive oil"
        ]}
        ],
        steps: ["Preheat oven to 240C fan-forced.",
        "In a large bowl, mix the carrots with the oil, maple syrup, 1 1/4 teaspoons of salt, and a good grind of pepper. Spread them out as much as possible over two large, 40cm x 30cm parchment-lined baking trays and roast for 18 minutes, tossing the carrots and swapping the trays halfway through, until the carrots are nicely browned but still retain a bite.",
        "While the carrots are roasting, blitz all the ingredients for the chamoy with 1/4 tsp of salt in a spice grinder or food processor until a smooth paste.",
        "As soon as the carrots are cooked, transfer them to a large bowl with the chamoy, mix well, and leave for 20 minutes to let the flavors come together.",
        "Mix the carrots with the herbs and sliced apricots and transfer to a serving platter, finish with the almonds and remaining oil and lime juice."]
      },
      {
        title: 'White Bean Salad',
        tags: ['dinner', 'white bean salad', 'salad', 'vegetarian'],
        imageUrl: '/assets/images/whiteBeanSalad.png',
        cookTime: '15 mins',
        serves: '2',
        ingredientsArray: [
          {ingredientTitle: 'Ingredients',
          ingredients:[
          "3 to 4 garlic cloves (minced)",
          "Extra virgin olive oil",
          "2 15-ounce cans cannellini beans (drained)",
          "1 cup cherry tomatoes, halved",
          "Kosher salt and black pepper",
          "1/2 teaspoon cumin",
          "1 cup chopped fresh parsley",
          "1/4 to 1/3 cup shaved Parmesan cheese",
          "3/4 cup grated Pecorino Romano",
          "Juice of half a lemon",
        ]}],
        steps: [
          "In a large pan, warm 2 tablespoons extra virgin olive oil over medium heat. Add the garlic and cook briefly, tossing regularly, until just golden.",
          "Add the cannellini beans and 1/2 cup water. Season with kosher salt, black pepper, and the spices. Add the tomatoes. Cook, stirring occasionally until warmed through (about 10 minutes)",
          "Stir in the parsley, cheese, and lemon juice.",
          "Finish with a generous drizzle of extra virgin olive oil. Serve immediately with pita or your favorite crusty bread. ",
        ],
      },
      {
        title: 'Black Bean Brownie',
        tags: ['dessert', 'black bean brownie'],
        imageUrl: '/assets/images/brownie.png',
        cookTime: '40 mins',
        serves: '8',
        ingredientsArray: [
          {ingredientTitle: 'Ingredients',
          ingredients:[
          '425gm tin blackbeans',
          '3 large eggs',
          '3/4 cup granulated sugar',
          '1/2 cup cocoa powder',
          '1/4 cup unsalted butter',
          '1 tsp baking powder',
          '1 tsp vanilla essence',
          '1/4 tsp salt',
          '50gm melted dark chocolate',
          '50-100gm choc chips'
        ]}],
        steps: ['Preheat oven to 175°C, grease and line 8x8 inch baking dish. ', 'Starting with blackbeans, bleand all ingreadients until smooth, then stir in chocolate chips. ', 'Pour into baking dish, even out and bake for 25-30 minutes. ']
      },
      {
        title: 'Coconut Cake',
        tags: ['dessert', 'coconut cake'],
        imageUrl: '/assets/images/coconutCake.jpg',
        cookTime: '35 mins',
        serves: '8',
        ingredientsArray: [
          {ingredientTitle: 'Ingredients',
          ingredients:[
          '4 large eggs',
          '1 cup coconut milk',
          '1/2 cup granulated sugar',
          '1 tbsp vanilla essence',
          '3/4 cup coconut flour',
          '1/4 tsp salt',
          '1 tsp baking powder',
          '1 tbsp coconut oil'
        ]}],
        steps: ['Preheat oven to 180°C, grease and line 8x8 tin with coconut oil. ', 'Whisk together eggs, coconut milk, sugar and vanilla. ', 'Add in coconut flour and whisk until smooth (if too thick, add coconut oil). ', 'Add baking powder and salt. ', 'Transfer to tray, smooth top and bake for 20 minutes or until cooked (top may not brown). ']
      },
      {
        title: 'Banana Bread',
        tags: ['dessert', 'banana bread'],
        imageUrl: '/assets/images/bananabread.jpg',
        cookTime: '1 hr 10 mins',
        serves: '8',
        ingredientsArray:[{
          ingredientTitle: 'Ingredients',
          ingredients: [
            "2 large overripe bananas",
            '2 eggs',
            'vanilla essense',
            '1/3-1/2 cup coconut oil',
            '1/2 cup maple syrup (or brown sugar)',
            '1 cup wholemeal self raising flour',
            '3/4 cup oatmeal',
            '1 tsp baking powder',
            '1 tsp nutmeg',
            '1 tsp cinnamon',
            'pinch of salt',
            '2-4 medjool dates'
          ]
        }],
        steps:[
          'Mash bananas with a fork',
          'Beat together eggs, vanilla and coconut oil',
          'Combine all dry ingredients in a large bowl and add egg mix until smooth',
          'Add bananas and chopped dates',
          'Bake for 50-60 mins at 200C (bottom shelf is best)'
        ]
      },
      {
        title: 'Fish Curry',
        tags: ['dinner', 'lunch', 'fish curry', 'curry'],
        imageUrl: '/assets/images/fishCurry.jpg',
        cookTime: '1 hr 20 mins',
        serves: '4',
        ingredientsArray:[
          {ingredientTitle: 'Ingredients',
        ingredients:[
          'Chopped onions',
          'Garlic',
          'Pumpkin',
          'Carrot',
          'Sweet potato',
          'Parsnip',
          'Brocolli',
          'Spring onions',
          'Snow peas',
          'Bok Choy',
          'Coriander to serve',
          'Any seafood',
          '4 tsp red curry paste (medium heat)',
          '1 cup coconut milk'
        ]}
        ],
        steps:[
          "Saute onions and garlic in a generous amount of oil, then add the rest of the hard vegetables and saute lightly",
          "Take off heat and add curry paste. Fry lightly at very low heat until fragrant",
          "Add coconut milk and water to just cover all ingredients. Simmer very lightly on low heat with the lid on for at least 1 hour or until the pumpkin has either dissolved or is very soft.",
          "Turn up to slightly higher heat and add greens to cook.",
          "Take off heat and add seafood. Let sit for a few minutes then serve and add chopped coriander garnish"]
      },
      {
        title: 'Lumberjack Cake',
        tags: ['dessert', 'lumberjack cake'],
        imageUrl: '/assets/images/lumberjackCake.jpeg',
        cookTime: '1 hr 30 mins',
        serves: '10',
        ingredientsArray:[
          {ingredientTitle: 'Cake ingredients',
        ingredients: [
          '2 apples (400gm) peeled, cored and chopped finely',
          '1 cup finely chopped dried dates',
          '1 tsp bicarb soda',
          '1 cup boiling water',
          '125gm softened butter',
          '1 tsp vanilla extract',
          '1 cup caster sugar',
          '1 egg',
          '1 1/2 cup plain flour'
        ]},
        {ingredientTitle: 'Coconut topping',
        ingredients: [
          '60gm chopped butter',
          '1/2 cup firmly packed brown sugar',
          '1/2 cup milk',
          '2/3 cup shredded coconut'
        ]}
        ],
        steps:[
          'Preheat oven to 180C or 160C fan forced',
          'Combine apples, dates, soda in large bowl, stir in water, cover and stand for 10 minutes',
          'Beat butter, vanilla, sugar and egg until fluffy then add to apple mix',
          'Add sifted flour, mix then pour into pan and cook for 50 minutes.',
          'For topping, stir all ingredients over low heat until melted and dissolved.',
          'Remove cake from oven and using spatula, spread warm topping over cake then return to over and bake for 20 minutes until browned.'
        ]
      },
      {
        title: 'Zucchini Slice',
        tags: ['dinner', 'lunch', 'zucchini slice', 'vegetarian'],
        imageUrl: '/assets/images/zucchiniSlice.jpg',
        cookTime: '1 hr',
        serves: '4',
        ingredientsArray:[
          {ingredientTitle: 'Ingredients',
        ingredients: [
          '1 large zucchini, grated and salted then squeezed(prep at least an hour beforehand)',
          '1 large onion',
          'mushrooms sauted in lemon juice (fry off early so not going into mixture hot)',
          '4-5 beaten eggs',
          'seeded mustard',
          'salt and pepper',
          'grated cheese of choice',
          'thyme',
          'tomatoes (sliced)',
          'sunflower seeds'
        ]}
        ],
        steps:[
          'Combine all ingredients and pour into well oiled baking dish',
          'Top with tomatoes and sunflower seeds',
          'bake at around 180C for 45 minutes'
        ]
      }
    ]
  }
}


/*
Template
      {
        title: 
        tags: ['dinner'],
        imageUrl: '/assets/images/'
        cookTime: 
        serves: ''
        ingredientsArray:[],
        steps:[]
      }

*/