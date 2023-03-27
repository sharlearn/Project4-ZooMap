"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("locations", [
      {
        name: "Australasia",
        description:
          "While most of the world's marsupials are found in Australia, marsupials also occur naturally in New Guinea, Indonesia and surrounding islands and the Americas. Besides the grey kangaroos and agile wallabies from Australia, this exhibit also showcases the tree kangaroos from Papua New Guinea.",
        type: "zone",
        latitude: 1.406,
        longitude: 103.79336,
      },
      {
        name: "Elephants of Asia",
        description:
          "Revered in Hinduism and Buddhism, elephants have profoundly influenced the Asian way of life since their domestication 4,000 years ago. Featuring Burmese-style architecture, this one-hectare exhibit showcases these largest of living land animals and their associated history and culture.",
        type: "zone",
        latitude: 1.40526,
        longitude: 103.79567,
      },
      {
        name: "Fragile Forest",
        description:
          "Step into this 20,000 cubic metre biodome that mimics a tropical rainforest habitat. Come face-to-face with its furry and feathered inhabitants as you journey through the various strata of the rainforest. What's more, close encounters of the spineless kind await you at Discovery Outpost!",
        type: "zone",
        latitude: 1.4022,
        longitude: 103.79526,
      },
      {
        name: "Great Rift Valley of Ethiopia",
        description:
          "Together with the nimble Nubian ibexes, the Hamadryas baboons rule the rugged rockscape. Explore further to meet the meerkats, black-backed jackals and rock hyraxes. Also stop by the rustic dwelling huts recreating life in the Konso and Amharic villages.",
        type: "zone",
        latitude: 1.40521,
        longitude: 103.79339,
      },
      {
        name: "Primate Kingdom",
        description:
          "Each primate species is designated its own 'island'. Add to that a landscaping of trees, a surrounding moat and you get 'castles' in which our furry rulers dwell. Here, our primates need not be king of the jungle to rule their own kingdom!",
        type: "zone",
        latitude: 1.40525,
        longitude: 103.79474,
      },
      {
        name: "Rainforest KidzWorld",
        description:
          "Swing, splash, slide, hop, jump! Let your hair down and play your heart out here. Take a spin on the Wild Animal Carousel, say hello to the falabellas and hop by Buddy Barn to cosy up to some furry friends.",
        type: "zone",
        latitude: 1.40309,
        longitude: 103.79635,
      },
      {
        name: "Reptile Garden",
        description:
          "RepTopia. Tortoise Shell'ter. Sungei Buaya. All these exhibits and more can be found on the sprawling grounds of Reptile Garden. Come enter the dragon's lair and learn more about the lives and loves of these prehistoric creatures that have been around since the age of the dinosaurs.",
        type: "zone",
        latitude: 1.403,
        longitude: 103.79472,
      },
      {
        name: "RepTopia",
        description:
          "Home to over 60 species of reptiles and amphibians, a third of which have never been seen here before, RepTopia takes you on a tour of four unique geographical zones. Multi-species displays, keeper demos, interactive stations and play elements interface to make this a most 'snake'-tacular zone.",
        type: "zone",
        latitude: 1.40252,
        longitude: 103.79476,
      },
      {
        name: "Tortoise Shell-ter",
        description:
          "Tortoise Shell-ter is a naturalistic sanctuary offering optimum conditions for our chelonian collection to breed and display their natural behaviour. Here, you can learn about our 'shell-ebrities' - some of the world's rarest tortoises - and ongoing conservation efforts to increase their numbers.",
        type: "zone",
        latitude: 1.40315,
        longitude: 103.79499,
      },
      {
        name: "Treetops Trail",
        description:
          "Replicating a rainforest habitat, Treetops Trail showcases animals at different layers of a forest.",
        type: "zone",
        latitude: 1.40484,
        longitude: 103.79142,
      },
      {
        name: "Wild Africa",
        description:
          "Africa boasts a diverse range of habitats, from tropical rainforests to harsh deserts. The animals found there have adapted accordingly in no end of amazing ways. As a result, the continent counts among its endemic species the tallest, the fastest and the largest creatures on land.",
        type: "zone",
        latitude: 1.40322,
        longitude: 103.79376,
      },
      {
        name: "Free Ranging Orangutan Island",
        description: null,
        type: "zone",
        latitude: 1.40369,
        longitude: 103.79383,
      },
      {
        name: "Free Ranging Orangutan Boardwalk",
        description: null,
        type: "zone",
        latitude: 1.40371,
        longitude: 103.79423,
      },
      {
        name: "Restroom by the main entrance.",
        description: null,
        type: "Restroom",
        latitude: 1.40438,
        longitude: 103.79102,
      },
      {
        name: "Restroom by Ah Meng Restaurant",
        description: null,
        type: "Restroom",
        latitude: 1.40436,
        longitude: 103.79347,
      },
      {
        name: "Restroom at Reptile Garden",
        description: null,
        type: "Restroom",
        latitude: 1.40244,
        longitude: 103.79465,
      },
      {
        name: "Restroom at Rainforest Kidzworld",
        description: null,
        type: "Restroom",
        latitude: 1.40338,
        longitude: 103.79744,
      },
      {
        name: "Restroom by KFC",
        description: null,
        type: "Restroom",
        latitude: 1.40353,
        longitude: 103.79676,
      },
      {
        name: "Restroom near Primate Kingdom",
        description: null,
        type: "Restroom",
        latitude: 1.4053,
        longitude: 103.7942,
      },
      {
        name: "Restroom near Pavilion by the Lake",
        description: null,
        type: "Restroom",
        latitude: 1.40599,
        longitude: 103.79445,
      },
      {
        name: "Ah Meng Bistro",
        description: null,
        type: "Restaurant",
        latitude: 1.4039,
        longitude: 103.79353,
      },
      {
        name: "Ah Meng Restaurant",
        description: null,
        type: "Restaurant",
        latitude: 1.40415,
        longitude: 103.7936,
      },
      {
        name: "Kentucky Fried Chicken",
        description: null,
        type: "Restaurant",
        latitude: 1.40349,
        longitude: 103.79684,
      },
      {
        name: "Food & Drink Kiosk",
        description: null,
        type: "Food & Drink Kiosk",
        latitude: 1.40528,
        longitude: 103.79605,
      },
      {
        name: "Nursing Room",
        description: null,
        type: "Nursing Room",
        latitude: 1.40338,
        longitude: 103.79744,
      },
      {
        name: "Nursing Room",
        description: null,
        type: "Nursing Room",
        latitude: 1.40338,
        longitude: 103.79744,
      },
      {
        name: "Diaper Changing Facility",
        description: null,
        type: "Diaper Changing Facility",
        latitude: 1.40338,
        longitude: 103.79744,
      },
      {
        name: "Diaper Changing Facility",
        description: null,
        type: "Diaper Changing Facility",
        latitude: 1.40338,
        longitude: 103.79744,
      },
      {
        name: "Stroller, Wheelchairs, Wagons & Electric Scooters Rental",
        description: null,
        type: "Stroller, Wheelchairs, Wagons & Electric Scooters Rental",
        latitude: 1.40453,
        longitude: 103.79101,
      },
      {
        name: "Viewing for Guests with Disabilities",
        description: null,
        type: "Viewing for Guests with Disabilities",
        latitude: 1.40458,
        longitude: 103.79494,
      },
      {
        name: "Viewing for Guests with Disabilities",
        description: null,
        type: "Viewing for Guests with Disabilities",
        latitude: 1.40346,
        longitude: 103.79648,
      },
      {
        name: "Tram Stop #1",
        description: null,
        type: "Tram Stop",
        latitude: 1.40427,
        longitude: 103.79379,
      },
      {
        name: "Tram Stop #2",
        description: null,
        type: "Tram Stop",
        latitude: 1.40585,
        longitude: 103.7945,
      },
      {
        name: "Tram Stop #3",
        description: null,
        type: "Tram Stop",
        latitude: 1.40311,
        longitude: 103.79362,
      },
      {
        name: "Tram Stop #4",
        description: null,
        type: "Tram Stop",
        latitude: 1.40188,
        longitude: 103.79585,
      },
      {
        name: "KFC",
        description: null,
        type: "Restaurant",
        latitude: 1.40353,
        longitude: 103.79676,
      },
      {
        name: "Food and Drink Kiosk by Elephants of Asia",
        description: null,
        type: "Food & Drink Kiosk",
        latitude: 1.40488,
        longitude: 103.79547,
      },
      {
        name: "Food and Drink Kiosk by Shaw Foundation Amphitheatre",
        description: null,
        type: "Food & Drink Kiosk",
        latitude: 1.40458,
        longitude: 103.79494,
      },
      {
        name: "Water Dispenser",
        description: null,
        type: "Water Dispenser",
        latitude: 1.40338,
        longitude: 103.79744,
      },
      {
        name: "Water dispenser near KFC",
        description: null,
        type: "Water Dispenser",
        latitude: 1.40353,
        longitude: 103.79676,
      },
      {
        name: "Water Dispenser",
        description: null,
        type: "Water Dispenser",
        latitude: 1.40527,
        longitude: 103.79416,
      },
      {
        name: "Pavilion by the Lake",
        description: null,
        type: "Shelter",
        latitude: 1.40604,
        longitude: 103.79446,
      },
      {
        name: "Garden with a View",
        description: null,
        type: "Shelter",
        latitude: 1.4033,
        longitude: 103.79524,
      },
      {
        name: "First Aid Station",
        description: null,
        type: "First Aid Station",
        latitude: 1.40331,
        longitude: 103.79702,
      },
      {
        name: "AED",
        description: null,
        type: "AED",
        latitude: 1.40346,
        longitude: 103.79618,
      },
      {
        name: "AED",
        description: null,
        type: "AED",
        latitude: 1.4039,
        longitude: 103.79353,
      },
      {
        name: "Cool Zone",
        description: null,
        type: "Cool Zone",
        latitude: 1.40415,
        longitude: 103.7936,
      },
      {
        name: "Cool Zone",
        description: null,
        type: "Cool Zone",
        latitude: 1.40608,
        longitude: 103.79354,
      },
      {
        name: "Cool Zone",
        description: null,
        type: "Cool Zone",
        latitude: 1.40353,
        longitude: 103.79676,
      },
      {
        name: "Cool Zone",
        description: null,
        type: "Cool Zone",
        latitude: 1.40252,
        longitude: 103.79476,
      },
      {
        name: "Cool Zone",
        description: null,
        type: "Cool Zone",
        latitude: 1.40181,
        longitude: 103.79467,
      },
      {
        name: "Wildlife Experiences Meeting Point",
        description: null,
        type: "Wildlife Experiences Meeting Point",
        latitude: 1.40446,
        longitude: 103.79127,
      },
      {
        name: "Lockers by Wet Play area",
        description: null,
        type: "Lockers",
        latitude: 1.40338,
        longitude: 103.79744,
      },
      {
        name: "Rainforest Kidzworld Gift Shop",
        description: null,
        type: "Gift Shop",
        latitude: 1.40325,
        longitude: 103.79655,
      },
      {
        name: "Australasia Gift Shop",
        description: null,
        type: "Gift Shop",
        latitude: 1.40576,
        longitude: 103.79319,
      },
      {
        name: "Mandai Mart",
        description: null,
        type: "Gift Shop",
        latitude: 1.40465,
        longitude: 103.79092,
      },
      {
        name: "First Aid Station",
        description: null,
        type: "First Aid Station",
        latitude: 1.40331,
        longitude: 103.79704,
      },
      {
        name: "Picnic Area",
        description: null,
        type: "Picnic Area",
        latitude: 1.4044,
        longitude: 103.79204,
      },
      {
        name: "Animal Playground",
        description: null,
        type: "Shows",
        latitude: 1.40381,
        longitude: 103.79317,
      },
      {
        name: "Shaw Foundation Amphitheater",
        description: null,
        type: "Shows",
        latitude: 1.40458,
        longitude: 103.79494,
      },
      {
        name: "Houbii Spot Rope Course",
        description: null,
        type: "Play Area",
        latitude: 1.40307,
        longitude: 103.79547,
      },
      {
        name: "Rainforest Kidzworld Amphitheatre",
        description: null,
        type: "Shows",
        latitude: 1.40346,
        longitude: 103.79648,
      },
      {
        name: "Elephants of Asia",
        description: null,
        type: "Shows",
        latitude: 1.40526,
        longitude: 103.79567,
      },
      {
        name: "Wet Play",
        description: null,
        type: "Play Area",
        latitude: 1.40342,
        longitude: 103.79716,
      },
      {
        name: "Celebes Crested Monkey Enclosure",
        description: null,
        type: "Enclosure",
        latitude: 1.40224,
        longitude: 103.79594,
      },
      {
        name: "Chimpanzee Enclosure",
        description: null,
        type: "Enclosure",
        latitude: 1.40274,
        longitude: 103.79609,
      },
      {
        name: "Leopard Enclosure",
        description: null,
        type: "Enclosure",
        latitude: 1.40167,
        longitude: 103.79464,
      },
      {
        name: "Tigers",
        description: null,
        type: "Zone",
        latitude: 1.40474,
        longitude: 103.79305,
      },
      {
        name: "Sun Bear Enclosure",
        description: null,
        type: "Enclosure",
        latitude: 1.40329,
        longitude: 103.79444,
      },
      {
        name: "African Penguin Enclosure",
        description: null,
        type: "Enclosure",
        latitude: 1.40397,
        longitude: 103.79412,
      },
      {
        name: "Otter Enclosure",
        description: null,
        type: "Enclosure",
        latitude: 1.40471,
        longitude: 103.79201,
      },
      {
        name: "Babirusa Enclosure",
        description: null,
        type: "Enclosure",
        latitude: 1.40466,
        longitude: 103.79249,
      },
      {
        name: "Naked Mole Rat Enclosure",
        description: null,
        type: "Enclosure",
        latitude: 1.40189,
        longitude: 103.79479,
      },
      {
        name: "Proboscis Monkey Enclosure",
        description: null,
        type: "Enclosure",
        latitude: 1.402,
        longitude: 103.79582,
      },
      {
        name: "Pygmy Hippo Enclosure",
        description: null,
        type: "Enclosure",
        latitude: 1.40521,
        longitude: 103.79299,
      },
      {
        name: "Red-Ruffed Lemur Enclosure",
        description: null,
        type: "Enclosure",
        latitude: 1.4041,
        longitude: 103.79317,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("locations", null, {});
  },
};
