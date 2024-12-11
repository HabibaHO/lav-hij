// استرجاع بيانات العربة من localStorage
function getCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    return cartItems ? cartItems : []; // إذا كانت العربة فارغة، نرجع مصفوفة فارغة
}

// وظيفة لعرض المنتجات في العربة
function displayCart() {
    const cartItems = getCartItems();
    const cartList = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');

    // تفريغ محتوى العربة الحالي
    cartList.innerHTML = '';
    let totalPrice = 0;

    // إضافة كل منتج في العربة
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - السعر: ${item.price} جنيه`;
        cartList.appendChild(li);
        totalPrice += item.price;
    });

    // عرض إجمالي السعر
    totalPriceElement.textContent = `:Total Price ${total.price} Egp`;
}

// التحقق من الحقول وعرض رسالة عند إتمام الدفع
function handlePayment(event) {
    event.preventDefault(); // منع السلوك الافتراضي للنموذج

    // الحصول على البيانات من النموذج
    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // التحقق من الحقول المطلوبة
    if (!name || !address || !phone) {
        alert('يرجى ملء جميع الحقول المطلوبة!');
        return;
    }

    // إذا كانت البيانات مكتملة، الانتقال إلى صفحة التأكيد
    window.location.href = "confirmation.html";  // تأكد من المسار الصحيح
}

// ربط دالة التوجيه عند إرسال النموذج
document.getElementById('paymentForm').addEventListener('submit', handlePayment);

// عرض المنتجات في العربة عند تحميل الصفحة
displayCart();
const cartItems = ["Product 1", "Product 2", "Product 3"]; // المنتجات
const prices = [100, 200, 300]; // الأسعار

// عرض المنتجات
const cartItemsList = document.getElementById("cartItems");
cartItems.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  cartItemsList.appendChild(li);
});

// عرض إجمالي السعر
const totalPrice = prices.reduce((acc, price) => acc + price, 0);
document.getElementById("totalPrice").textContent = Total Price: $${totalPrice};