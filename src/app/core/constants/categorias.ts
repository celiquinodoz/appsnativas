import { Categoria } from "../interfaces/categoria";

export const CATEGORIAS: Categoria[] = [
    {
        nombre: 'Hambuguesas',
        id: 1,
        fotoUrl: "https://recetasdeusa.com/wp-content/uploads/2022/05/Hamburguesa-americana-1-scaled.jpg",
        productos: [{
          nombre:"Hamburguesa con queso",
          precio: 1000,
          descripcion: "",
          imagen: "https://sabor.eluniverso.com/wp-content/uploads/2023/09/1hqq-scaled.jpg"
        },
        {
          nombre:"Hamburguesa completa",
          precio: 1500,
          descripcion: "",
          imagen: "https://openbaratlanta.com/wp-content/uploads/2023/04/hamburguesa-2028707-scaled.webp"
        },
        {
          nombre:"Hamburguesa americana",
          precio: 3500,
          descripcion: "",
          imagen: "https://www.clarin.com/img/2022/05/27/0HXb0UR0v_2000x1500__1.jpg"
        },
        {
          nombre:"Hamburguesa de pollo",
          precio: 2000,
          descripcion: "",
          imagen: "https://assets.unileversolutions.com/recipes-v2/231513.jpg"
          
        }]
    },
    {
        nombre: 'Pizzas',
        id: 2,
        fotoUrl: "https://img-global.cpcdn.com/recipes/5422e9144d489156/1200x630cq70/photo.jpg",
        productos: [
          {
            nombre: 'Pizza de pepperoni',
            precio: 1000,
            descripcion: "Pizza con pepperoni.",
            imagen:
              'https://i0.wp.com/lopezdoriga.com/wp-content/uploads/2017/05/little-caesars.jpg?fit=3200%2C1680&ssl=1',
          },
          {
            nombre: 'Pizza napolitana',
            precio: 1200,
            descripcion: "Pizza con tomate y oliva.",
            imagen:
              'https://video-images.vice.com/articles/5b0e70d7d1bbdd00086e4c71/lede/1527673068177-featuredimage-80.jpeg?crop=1xw:1xh;center,center',
          },
          {
            nombre: 'Pizza de piña',
            precio: 1300,
            descripcion: "Pizza que combina piña y jamón.",
            imagen:
              'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2022/10/20/pizza.jpeg',
          },
        ]
    },
    {
        nombre: 'Postres',
        id: 3,
        fotoUrl: "https://i.blogs.es/d519e3/tarta-de-queso-y-cafe-sin-horno/840_560.jpeg",
        productos: [
          {
            nombre: 'Tiramisú',
            precio: 800,
            descripcion: "Clasico tiramisú al estilo italiano.",
            imagen: 'https://img2.rtve.es/v/6897051?w=1600&preview=1684846584492.jpg',
          },
          {
            nombre: 'Chocotorta',
            precio: 800,
            descripcion: "Porción de chocotorta.",
            imagen:
              'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/09/14170007/chocotorta-destacada.jpg',
          },
          {
            nombre: 'Cheesecake',
            precio: 800,
            descripcion: "Tarta de queso y frutilla",
            imagen:
              'https://images.aws.nestle.recipes/original/e5031b84f0a99c3fc745fd6316103876_no-bake_strawberry_swirl_white_cheesecake_long_right.jpg',
          },
        ]
    },
    {
        nombre: 'Bebidas',
        id: 4,
        fotoUrl: "https://www.consumer.es/app/uploads/2021/12/calorias-bebidas-alcoholicas.jpg",
        productos: [{
          nombre: 'Agua',
          precio: 100,
          descripcion: "Agua mineral 500cc",
          imagen:
            'https://carrefourar.vtexassets.com/arquivos/ids/269108-800-450?v=638074044545330000&width=800&height=450&aspect=true',
        },
        {
          nombre: 'Coca cola',
          precio: 100,
          descripcion: "Lata coca cola 500cc",
          imagen:
            'https://marcaporhombro.com/wp-content/uploads/2015/03/coca.jpg',
        },
        {
          nombre: 'Fanta Uva',
          precio: 100,
          descripcion: "Fanta 500cc sabor uva",
          imagen:
            'https://carrefourar.vtexassets.com/arquivos/ids/332920/7790895648670_E02.jpg?v=638212197029330000',
        },]
    }
]
