import menu1 from "../images/menu_1.jpg";
import menu2 from "../images/menu_2.jpg";
import menu3 from "../images/menu_3.jpg";

function Menu() {
  return (
    <section className="services" id="services" data-aos="zoom-in">
      <h2 className="title">Our Menu</h2>

      <div className="cards">

        <div className="card">
          <img src={menu1} alt="" />
          <h3>Espresso</h3>
          <p>Strong and rich coffee for coffee lovers.</p>
        </div>

        <div className="card">
          <img src={menu2} alt="" />
          <h3>Cappuccino</h3>
          <p>Creamy coffee with smooth milk foam.</p>
        </div>

        <div className="card">
          <img src={menu3} alt="" />
          <h3>Latte</h3>
          <p>Delicious coffee blended with fresh milk.</p>
        </div>

      </div>
    </section>
  );
}

export default Menu;