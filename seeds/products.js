const products = [
    {
        name: 'Iphone X',
        price: 400,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate tempus magna ut euismod.',
        image: 'https://manzanarota.com/wp-content/uploads/2019/07/iphone-x-pantalla-bateria-carga-reparacion-manzana-rota.jpg',
    },
    {
        name: 'Iphone X',
        price: 400,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate tempus magna ut euismod.',
        image: 'https://manzanarota.com/wp-content/uploads/2019/07/iphone-x-pantalla-bateria-carga-reparacion-manzana-rota.jpg',
    },
    {
        name: 'Iphone X',
        price: 400,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate tempus magna ut euismod.',
        image: 'https://manzanarota.com/wp-content/uploads/2019/07/iphone-x-pantalla-bateria-carga-reparacion-manzana-rota.jpg',
    },
    {
        name: 'Iphone X',
        price: 400,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate tempus magna ut euismod.',
        image: 'https://manzanarota.com/wp-content/uploads/2019/07/iphone-x-pantalla-bateria-carga-reparacion-manzana-rota.jpg',
    },
    {
        name: 'Iphone X',
        price: 400,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate tempus magna ut euismod.',
        image: 'https://manzanarota.com/wp-content/uploads/2019/07/iphone-x-pantalla-bateria-carga-reparacion-manzana-rota.jpg',
    },
    {
        name: 'PlayStation 5',
        price: 450,
        description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse dictum vehicula hendrerit.',
        image: 'https://i.blogs.es/9dee5c/143354-games-feature-sony-playstation-5-release-date-rumours-and-everything-you-need-to-know-about-ps5-image1-cvz3adase9/450_1000.jpg',
    },
    {
        name: 'PlayStation 5',
        price: 450,
        description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse dictum vehicula hendrerit.',
        image: 'https://i.blogs.es/9dee5c/143354-games-feature-sony-playstation-5-release-date-rumours-and-everything-you-need-to-know-about-ps5-image1-cvz3adase9/450_1000.jpg',
    },
    {
        name: 'PlayStation 5',
        price: 450,
        description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse dictum vehicula hendrerit.',
        image: 'https://i.blogs.es/9dee5c/143354-games-feature-sony-playstation-5-release-date-rumours-and-everything-you-need-to-know-about-ps5-image1-cvz3adase9/450_1000.jpg',
    },
    {
        name: 'PlayStation 5',
        price: 450,
        description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse dictum vehicula hendrerit.',
        image: 'https://i.blogs.es/9dee5c/143354-games-feature-sony-playstation-5-release-date-rumours-and-everything-you-need-to-know-about-ps5-image1-cvz3adase9/450_1000.jpg',
    },
    {
        name: 'PlayStation 5',
        price: 450,
        description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse dictum vehicula hendrerit.',
        image: 'https://i.blogs.es/9dee5c/143354-games-feature-sony-playstation-5-release-date-rumours-and-everything-you-need-to-know-about-ps5-image1-cvz3adase9/450_1000.jpg',
    },
    {
        name: 'Xbox Series X',
        price: 500,
        description: 'Suspendisse sed metus eget eros condimentum laoreet. Vivamus ac euismod nibh. Nullam quis ullamcorper arcu. Mauris tincidunt ligula nec luctus tincidunt.',
        image: 'https://compass-ssl.xbox.com/assets/f0/85/f085c120-d3d5-4424-8b70-eb25deaa326e.png?n=XBX_A-BuyBoxBGImage01-D.png',
    },
    {
        name: 'Xbox Series X',
        price: 500,
        description: 'Suspendisse sed metus eget eros condimentum laoreet. Vivamus ac euismod nibh. Nullam quis ullamcorper arcu. Mauris tincidunt ligula nec luctus tincidunt.',
        image: 'https://compass-ssl.xbox.com/assets/f0/85/f085c120-d3d5-4424-8b70-eb25deaa326e.png?n=XBX_A-BuyBoxBGImage01-D.png',
    },
    {
        name: 'Xbox Series X',
        price: 500,
        description: 'Suspendisse sed metus eget eros condimentum laoreet. Vivamus ac euismod nibh. Nullam quis ullamcorper arcu. Mauris tincidunt ligula nec luctus tincidunt.',
        image: 'https://compass-ssl.xbox.com/assets/f0/85/f085c120-d3d5-4424-8b70-eb25deaa326e.png?n=XBX_A-BuyBoxBGImage01-D.png',
    },
    {
        name: 'Xbox Series X',
        price: 500,
        description: 'Suspendisse sed metus eget eros condimentum laoreet. Vivamus ac euismod nibh. Nullam quis ullamcorper arcu. Mauris tincidunt ligula nec luctus tincidunt.',
        image: 'https://compass-ssl.xbox.com/assets/f0/85/f085c120-d3d5-4424-8b70-eb25deaa326e.png?n=XBX_A-BuyBoxBGImage01-D.png',
    },
    {
        name: 'Xbox Series X',
        price: 500,
        description: 'Suspendisse sed metus eget eros condimentum laoreet. Vivamus ac euismod nibh. Nullam quis ullamcorper arcu. Mauris tincidunt ligula nec luctus tincidunt.',
        image: 'https://compass-ssl.xbox.com/assets/f0/85/f085c120-d3d5-4424-8b70-eb25deaa326e.png?n=XBX_A-BuyBoxBGImage01-D.png',
    },
    {
        name: 'PC Gaming',
        price: 829,
        description: 'Nulla mollis, sapien eu lacinia elementum, lorem nisi lobortis lectus, nec tempus arcu nulla eu est. Quisque sem orci, egestas at eleifend egestas, elementum quis elit.',
        image: 'https://m.media-amazon.com/images/I/61JgpF6k4ML._AC_SS450_.jpg',
    },
    {
        name: 'PC Gaming',
        price: 829,
        description: 'Nulla mollis, sapien eu lacinia elementum, lorem nisi lobortis lectus, nec tempus arcu nulla eu est. Quisque sem orci, egestas at eleifend egestas, elementum quis elit.',
        image: 'https://m.media-amazon.com/images/I/61JgpF6k4ML._AC_SS450_.jpg',
    },
    {
        name: 'PC Gaming',
        price: 829,
        description: 'Nulla mollis, sapien eu lacinia elementum, lorem nisi lobortis lectus, nec tempus arcu nulla eu est. Quisque sem orci, egestas at eleifend egestas, elementum quis elit.',
        image: 'https://m.media-amazon.com/images/I/61JgpF6k4ML._AC_SS450_.jpg',
    },
    {
        name: 'PC Gaming',
        price: 829,
        description: 'Nulla mollis, sapien eu lacinia elementum, lorem nisi lobortis lectus, nec tempus arcu nulla eu est. Quisque sem orci, egestas at eleifend egestas, elementum quis elit.',
        image: 'https://m.media-amazon.com/images/I/61JgpF6k4ML._AC_SS450_.jpg',
    },
    {
        name: 'PC Gaming',
        price: 829,
        description: 'Nulla mollis, sapien eu lacinia elementum, lorem nisi lobortis lectus, nec tempus arcu nulla eu est. Quisque sem orci, egestas at eleifend egestas, elementum quis elit.',
        image: 'https://m.media-amazon.com/images/I/61JgpF6k4ML._AC_SS450_.jpg',
    },
    {
        name: 'Xiaomi Black Shark',
        price: 400,
        description: 'Curabitur eget risus non eros bibendum egestas. Ut ultricies nunc sed ante dapibus, non porttitor nulla feugiat.',
        image: 'https://www.mi-store.com.au/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/b/l/black_shark_3_pro_1.jpg',
    },
    {
        name: 'Xiaomi Black Shark',
        price: 400,
        description: 'Curabitur eget risus non eros bibendum egestas. Ut ultricies nunc sed ante dapibus, non porttitor nulla feugiat.',
        image: 'https://www.mi-store.com.au/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/b/l/black_shark_3_pro_1.jpg',
    },
    {
        name: 'Xiaomi Black Shark',
        price: 400,
        description: 'Curabitur eget risus non eros bibendum egestas. Ut ultricies nunc sed ante dapibus, non porttitor nulla feugiat.',
        image: 'https://www.mi-store.com.au/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/b/l/black_shark_3_pro_1.jpg',
    },
    {
        name: 'Xiaomi Black Shark',
        price: 400,
        description: 'Curabitur eget risus non eros bibendum egestas. Ut ultricies nunc sed ante dapibus, non porttitor nulla feugiat.',
        image: 'https://www.mi-store.com.au/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/b/l/black_shark_3_pro_1.jpg',
    },
    {
        name: 'Xiaomi Black Shark',
        price: 400,
        description: 'Curabitur eget risus non eros bibendum egestas. Ut ultricies nunc sed ante dapibus, non porttitor nulla feugiat.',
        image: 'https://www.mi-store.com.au/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/b/l/black_shark_3_pro_1.jpg',
    },
    {
        name: 'Boxing Gloves',
        price: 30,
        description: 'Duis condimentum odio eu orci interdum, sit amet vehicula ligula egestas. Quisque leo dolor, accumsan a erat nec, posuere dignissim lorem.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/61rBwlyO65L._AC_SX425_.jpg',
    },
    {
        name: 'Boxing Gloves',
        price: 30,
        description: 'Duis condimentum odio eu orci interdum, sit amet vehicula ligula egestas. Quisque leo dolor, accumsan a erat nec, posuere dignissim lorem.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/61rBwlyO65L._AC_SX425_.jpg',
    },
    {
        name: 'Boxing Gloves',
        price: 30,
        description: 'Duis condimentum odio eu orci interdum, sit amet vehicula ligula egestas. Quisque leo dolor, accumsan a erat nec, posuere dignissim lorem.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/61rBwlyO65L._AC_SX425_.jpg',
    },
    {
        name: 'Boxing Gloves',
        price: 30,
        description: 'Duis condimentum odio eu orci interdum, sit amet vehicula ligula egestas. Quisque leo dolor, accumsan a erat nec, posuere dignissim lorem.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/61rBwlyO65L._AC_SX425_.jpg',
    },
    {
        name: 'Boxing Gloves',
        price: 30,
        description: 'Duis condimentum odio eu orci interdum, sit amet vehicula ligula egestas. Quisque leo dolor, accumsan a erat nec, posuere dignissim lorem.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/61rBwlyO65L._AC_SX425_.jpg',
    },
]

module.exports = products;
