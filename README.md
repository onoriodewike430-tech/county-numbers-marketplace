const numbers = [
  {
    id: 1,
    number: "+1 (415) 555-0142",
    area: "San Francisco",
    category: "popular",
    badge: "Hot",
    description: "A premium local number with strong business visibility in the Bay Area.",
    price: 699,
    tags: ["Business", "Local"]
  },
  {
    id: 2,
    number: "+1 (212) 555-0187",
    area: "New York",
    category: "business",
    badge: "New",
    description: "High-value city number ideal for professional branding and customer trust.",
    price: 899,
    tags: ["Corporate", "Prime"]
  },
  {
    id: 3,
    number: "+1 (310) 555-0119",
    area: "Los Angeles",
    category: "luxury",
    badge: "Luxury",
    description: "A premium California number crafted for upscale service brands.",
    price: 1199,
    tags: ["Luxury", "Premium"]
  },
  {
    id: 4,
    number: "+1 (312) 555-0170",
    area: "Chicago",
    category: "popular",
    badge: "Popular",
    description: "An accessible, memorable number for growing local teams and agencies.",
    price: 549,
    tags: ["Retail", "Local"]
  },
  {
    id: 5,
    number: "+1 (404) 555-0138",
    area: "Atlanta",
    category: "business",
    badge: "Top pick",
    description: "Built for startups, consultancies, and professional service providers.",
    price: 649,
    tags: ["Startup", "Business"]
  },
  {
    id: 6,
    number: "+1 (202) 555-0144",
    area: "Washington",
    category: "luxury",
    badge: "Elite",
    description: "Premium D.C. number with a polished and trustworthy business identity.",
    price: 1499,
    tags: ["Elite", "Government"]
  }
];

const productGrid = document.getElementById("product-grid");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderProducts(filter = "all") {
  const visibleNumbers =
    filter === "all" ? numbers : numbers.filter((item) => item.category === filter);

  productGrid.innerHTML = visibleNumbers
    .map(
      (item) => `
        <article class="product-card" data-category="${item.category}">
          <div class="product-top">
            <span class="product-badge">${item.badge}</span>
            <span class="product-price">$${item.price}</span>
          </div>

          <div>
            <h3>${item.number}</h3>
            <div class="meta">
              <span>${item.area}</span>
              <span>${item.category}</span>
            </div>
          </div>

          <p>${item.description}</p>

          <div class="product-actions">
            <button class="btn btn-secondary">Details</button>
            <button class="btn btn-primary add-to-cart" data-number="${item.number}" data-price="${item.price}">Buy</button>
          </div>
        </article>
      `
    )
    .join("");

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const number = button.dataset.number;
      const price = Number(button.dataset.price);
      const currentTotal = Number(sessionStorage.getItem("countyCartTotal") || 0);
      const currentCount = Number(sessionStorage.getItem("countyCartCount") || 0);

      sessionStorage.setItem("countyCartTotal", String(currentTotal + price));
      sessionStorage.setItem("countyCartCount", String(currentCount + 1));

      alert(`Added ${number} to your cart.`);
    });
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.filter);
  });
});

renderProducts();
