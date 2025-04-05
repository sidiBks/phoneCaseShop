// get data from products.json
let products = null
fetch('data/products.json')
    .then(res => res.json())
    .then(data => {
        products = data
        console.log(products)
        addDatatoHTML()
    })

// add data product to HTML
let listProduct = document.querySelector('.listProduct')
function addDatatoHTML() {
    products.forEach(product => {
        // create new element item
        let newProduct = document.createElement('a')
        newProduct.href = '/detail.html?id=' + product.id
        newProduct.classList.add('item')
        newProduct.innerHTML = `
            <img src="${product.image}"> 
            <h2>${product.title}</h2>
            <div class="price">${product.price}</div>
        `

        // add this element in listProduct class
        listProduct.appendChild(newProduct)
    });
}