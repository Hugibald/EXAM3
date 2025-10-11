import { IProducts } from './iproducts.interface';

// The products in my store
export let PRODUCTS: IProducts[] = [
  {
    id: 1,
    name: 'Dragon Egg',
    image: 'DragonEgg.png',
    description:
      'Behold the egg of one of the mightiest creatures in existence. Warm to the touch, it hums softly with untamed power. Will you hatch it and raise a dragon of your own, training it as a loyal companion and guardian… or will you admire its mystical beauty from afar, a rare treasure for your collection, or will you use it in a powerful potion? The possibilities are endless!',
    price: 200,
    availability: true,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Fairy',
    image: 'Fairy.png',
    description:
      "Tiny, sparkling, and full of beauty, these little fairies bring magic wherever they go. Keep them as playful companions fluttering around your home, or enlist them as helpful assistants for small tasks — tidying your desk, watering plants, or keeping tiny corners in order. They fit into the tiniest of spaces and thus are ideal for tasks where room is limited. As children's companions they are the ideal doll-house inhabitant and under the right circumfaces are easy to breed.",
    price: 50,
    availability: true,
    quantity: 1,
  },
  {
    id: 3,
    name: 'Ghost',
    image: 'Ghost.png',
    description:
      'Get your very own ghost for your own home! Not just a decorative companion, this spectral friend can ward off unwanted visitors, play gentle pranks, or simply keep you company during quiet evenings. Its form flickers like mist, appearing and disappearing as you command. Some say your ghost may even whisper secrets of the otherworld — though whether they are gentle and helpful or frightening depends entirely on your wish.',
    price: 10,
    availability: true,
    quantity: 1,
  },
  {
    id: 4,
    name: 'Jackalope',
    image: 'Jackalope.png',
    description:
      "With long ears, tiny antlers, and a twitching nose, the jackalope is one of nature's most charming and elusive cryptids. Perfect as a magical companion for children and adults alike, it loves hopping through gardens, hiding in tall grass and cuddling. Its playful spirit will brighten any room and bring joy into your family's life.",
    price: 100,
    availability: true,
    quantity: 1,
  },
  {
    id: 5,
    name: 'Pocket Dragon',
    image: 'PocketDragon.png',
    description:
      "NEW!!! Fresh from the legendary Pikewenk Mountains, these tiny pocket dragons are the perfect companions for the adventurous soul. Compact yet fiery, they can light campfires, kindle lanterns, and offer the warmth of a dragon's breath wherever you roam. Buy yours today and let your journeys be forever filled with sparks and wonder!",
    price: 20,
    availability: true,
    quantity: 1,
  },
  {
    id: 6,
    name: 'Unicorn',
    image: 'Unicorn.png',
    description:
      'Elegant, rare, and impossibly shy, unicorns are creatures of pure magic. Their presence is said to bring calm, inspire courage, and illuminate even the darkest corners. Available only in springtime, each unicorn is carefully raised and gently nurtured, forming a bond that lasts a lifetime. Keep it as a companion, a guardian, or simply a reminder that true magic exists.',
    price: 1000,
    availability: false,
    quantity: 1,
  },
];
