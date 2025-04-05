// get data from products.json
let products = null;
fetch('data/products.json')
    .then(res => {
        return res.json();
    })
    .then(data => {
        products = data;
        console.log(products);
        showDetail();
    })

// find this product
function showDetail() {
    let detail = document.querySelector('.detail');
    let productId = new URLSearchParams(window.location.search).get('id');
    let thisProduct = products.filter(value => {
        return value.id == productId;
    })[0];

    // if there is no product with id = productId
    // => return to home page
    if (!thisProduct) {
        window.location.href = '/';
        return;
    }

    // if product exists, add data to HTML
    detail.querySelector('.image img').src = thisProduct.image;
    detail.querySelector('.content .title').innerText = thisProduct.title;
    detail.querySelector('.price').innerText = thisProduct.price;
    detail.querySelector('.description').innerText = thisProduct.description;

    // add similar products
    let listProduct = document.querySelector('.listProduct');
    products.filter(value => value.id != productId)
        .forEach(product => {
            let newProduct = document.createElement('a');
            newProduct.href = '/detail.html?id=' + product.id;
            newProduct.classList.add('item');
            newProduct.innerHTML = `
                <img src="${product.image}">
                <h2>${product.title}</h2>
                <div class="price">${product.price}</div>
            `;
            listProduct.appendChild(newProduct);
        });
}