
class Product {
    //class fields --> fields define properties for a class
    title;
    imageUrl;
    price;
    description;

    constructor(title, imageUrl, price, description) {
        //class properties
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }
}
class Component {
    render(){

    }
    constructor(renderHook) {
        this.hook = renderHook;
        this.render();
    }
    createRootElement(tag, cssClassName, attributes) {
        const rootElement = document.createElement(tag);
        if (cssClassName) {
            rootElement.className = cssClassName;
        }
        if (attributes && attributes.length > 0) {
            for (const attr of attributes) {
                rootElement.setAttribute(attr.name, attr.value);
            }
        }

        document.getElementById(this.hook).append(rootElement);
        return rootElement;

    }
}

class ElementAttribute {
    constructor(attrName, attrValue) {
        this.name = attrName;
        this.value = attrValue;
    }
}

class ShoppingCart extends Component{
    items = [];
    get totalAmount() {
        return this.items.reduce((prev, curr) => prev + curr.price, 0)
    };
    set cartItems(value) {
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount}</h2>`;
    }
    addProduct(product) {
        this.items.push(product);
        this.cartItems = [...this.items];
    }
    constructor(app){
        super(app);
    }
    render() {
        const cartEl=this.createRootElement('section','cart');
        cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order now</button>
        `;
        this.totalOutput = cartEl.querySelector('h2');
    }
}
class ProductItem extends Component{
    product;
    constructor(product,id) {
        super(id);
        this.product = product;
    }
    addToCart(e) {
        App.addProductToCart(this.product);
    }
    render() {
        const prodEl = this.createRootElement('li','product-item');
        prodEl.innerHTML = `
            <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}"/>
            <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to cart</button>
            </div>
            </div>
            `;
        const addToCartBtn = prodEl.querySelector('button');
        addToCartBtn.addEventListener('click', this.addToCart.bind(this))
    }
}

class ProductList extends Component{
    products = [

        new Product('A pillow',
            'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGlsbG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            89.99,
            'A pillow with you might like - or not'),

        new Product('A Carpet',
            'https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FycGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            89.99,
            'A carpet with you might like - or not')

    ];
    constructor(hook) { 
        super(hook);
    }
    render() {
        const prodList = this.createRootElement('ul','product-list',[new ElementAttribute('id','product-list')]);
        this.products.forEach(product => {
            const prodEl = new ProductItem(product,'product-list');
        });
    }
}
class Shop extends Component{
    constructor(){
        super();
    }
    render() {
        this.cart = new ShoppingCart('app');
        new ProductList('app');
    }
}
class App {
    static init() {
        const shop = new Shop();
        shop.render();
        this.cart = shop.cart;
    }
    static addProductToCart(product) {
        this.cart.addProduct(product);
    }
}


App.init();