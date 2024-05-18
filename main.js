
        let cartItems = [];
        let prices = [];

        function addToCart1(productName, price) {
            cartItems.push(productName);
            prices.push(price);
            updateCart();
        }
           function addToCart2(productName, price) {
                cartItems.push(productName);
                prices.push(price);
                updateCart();
            }
               function addToCart3(productName, price) {
                    cartItems.push(productName);
                    prices.push(price);
                    updateCart();
                }
                   function addToCart4(productName, price) {
                        cartItems.push(productName);
                        prices.push(price);
                        updateCart();
                    }
                       function addToCart5(productName, price) {
                            cartItems.push(productName);
                            prices.push(price);
                            updateCart();
                        }
                           function addToCart6(productName, price) {
                                cartItems.push(productName);
                                prices.push(price);
                                updateCart();
                            }

        function removeFromCart(index) {
            cartItems.splice(index, 1);
            prices.splice(index, 1);
            updateCart();
        }

        function updateCart() {
            const cartList = document.getElementById('cart-list');
            const totalPriceSpan = document.getElementById('total-price');
            let totalPrice = 0;

            cartList.innerHTML = '';
            cartItems.forEach((item, index) => {
                const li = document.createElement('li');
                li.textContent = `${item} - ₹${prices[index]}`;
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Cancel';
                deleteBtn.onclick = () => removeFromCart(index);
                li.appendChild(deleteBtn);
                cartList.appendChild(li);
                totalPrice += parseFloat(prices[index]);
            });

            totalPriceSpan.textContent = `₹${totalPrice.toFixed(2)}`;
        }

        var requests = [];

            function loadContent(buttonIndex) {
                var request = new XMLHttpRequest();
                var targetElementId = 'ajax-content' + buttonIndex;
                var url = 'page' + buttonIndex + '.html';

                request.onreadystatechange = function () {
                    if (request.readyState === 4 && request.status === 200) {
                        document.getElementById(targetElementId).innerHTML = request.responseText;
                    }
                };

                request.open('GET', url);
                request.send();
                hideButton(buttonIndex);
            }

            function hideButton(buttonIndex) {
                document.getElementById('button' + buttonIndex).style.display = 'none';
            }
        