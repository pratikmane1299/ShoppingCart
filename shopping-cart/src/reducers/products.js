import ChuroCupcake from '../assets/images/churo_cupcake.jpg';
import CocacolaCupcake from '../assets/images/cocacola_cupcake.jpg';
import GhostMarshmelloCupcake from '../assets/images/ghost_marshmallow_cupcakes.jpg';
import IceCreamCake from '../assets/images/ice_cream_cake.jpg';
import LimeCoconutCupcake from '../assets/images/Lime_coconut_cupcake.jpg';
import RedVelvetCake from '../assets/images/red_velvet_cake.jpg';
import TorteCake from '../assets/images/torte_cake.jpg';

const products = [
  {
    id: 1,
    name: 'Churo cupcake',
    price: 30,
    image: ChuroCupcake
  },
  {
    id: 2,
    name: 'Cocacola cupcake',
    price: 50,
    image: CocacolaCupcake
  },
  {
    id: 3,
    name: 'Ghost marshmello cupcake',
    price: 20,
    image: GhostMarshmelloCupcake
  },
  {
    id: 4,
    name: 'Ice-cream cake',
    price: 320,
    image: IceCreamCake
  },
  {
    id: 5,
    name: 'Lime coconut cupcake',
    price: 45,
    image: LimeCoconutCupcake
  },
  {
    id: 6,
    name: 'Red velvet cake',
    price: 280,
    image: RedVelvetCake
  },
  {
    id: 7,
    name: 'Torte cake',
    price: 100,
    image: TorteCake
  }
]

export default function productsReducer(state = products, action) {
  switch (action.type) {
    default:
      return state
  }
}
