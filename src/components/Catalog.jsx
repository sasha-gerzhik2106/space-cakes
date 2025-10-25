const Catalog = () => {
  const cakes = [
    { id: 1, name: "Лавандовый мечта", price: "1.200 ₽" },
    { id: 2, name: "Фиолетовая галактика", price: "1.500 ₽" },
    { id: 3, name: "Сиреневый рассвет", price: "1.800 ₽" },
  ];

  return (
    <section className="catalog">
      <h2>Наши торты</h2>
      <div className="catalog-grid">
        {cakes.map((cake) => (
          <div key={cake.id} className="cake-card">
            <div className="cake-image">🍰</div>
            <h3>{cake.name}</h3>
            <p>{cake.price}</p>
            <button>Заказать</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalog;
