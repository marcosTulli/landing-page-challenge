export interface Ability {
  ability: {
    name: string;
    url: string;
  };
}
export interface Sprite {
  front_shiny: string;
  front_default: string;
}

export interface Item {
  name: string;
}
export interface Pokemon {
  id: number;
  name: string;
  abilities: Ability[];
  sprites: Sprite;
  height: number;
  weight: number;
  held_items: Item[];
}
