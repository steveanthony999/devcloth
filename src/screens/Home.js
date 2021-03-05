import './home.scss';

const Home = () => {
  return (
    <div className='homepage'>
      {/* SECTION: HERO SLIDER */}
      <div className='hero'>
        <div className='inner-hero'>
          <h1>JS COLLECTION 2021</h1>
          <span>Shop Now</span>
        </div>
        <div className='inner-hero'>
          <span>IMAGE HERE</span>
        </div>
      </div>
      {/* SECTION: MAIN GRID */}
      {/* ACTIVE WEAR */}
      <h1>Active Wear</h1>
      {/* TEES */}
      <h1>Tees</h1>
      {/* HOODIES */}
      <h1>Hoodies</h1>
      {/* ACCESSORIES */}
      <h1>Accessories</h1>
      {/* SECTON: RECENT PRODUCTS */}
      <h1>Recent Products</h1>
      {/* SECTION: SALE */}
      <h1>DEAL OF THE WEEK 40% off</h1>
      <h1>10% off</h1>
      {/* SECTION: INFO */}
      <span>Free Delivery</span>
      <span>90 Day Returns</span>
      <span>Secure Payment</span>
      {/* SECTION: ABOUT */}
      <h1>Since Y2K21</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        doloremque quisquam explicabo repellat vitae voluptatibus accusantium
        odit quia magnam quibusdam!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ab
        veritatis quisquam saepe maiores laborum tempora cumque natus veniam
        soluta.
      </p>
      <span>Shop Now</span>
      {/* SECTION: BLOG */}
      <h1>From the Blog</h1>
      {/* SECTION: FOOTER */}
      <h1>Sign up now & get 10% off</h1>
      <span>email address</span>
      <span>Send</span>
    </div>
  );
};

export default Home;
