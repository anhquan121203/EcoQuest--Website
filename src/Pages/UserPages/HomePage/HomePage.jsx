import React from "react";
import "./HomePage.css";
import { MdOutlineLocalDining, MdOutlineSecurity, MdTravelExplore } from "react-icons/md";
import { FaMap } from "react-icons/fa";

function HomePage() {
  return (
    <div>
      <main>
        <section
          className="hero"
          aria-label="Travel hero banner background with search"
        >
          <div
            className="hero-content"
            role="region"
            aria-describedby="hero-subtitle"
          >
            <h1 className="hero-title">
              Du lịch bền vững - Trải nghiệm không giới hạn!
            </h1>
            <p className="hero-subtitle" id="hero-subtitle">
              🔎 Tìm kiếm điều khiến bạn hạnh phúc mọi lúc, mọi nơi!
            </p>
            <form
              className="search-bar"
              role="search"
              aria-label="Travel search form"
            >
              <input
                type="text"
                name="destination"
                placeholder="Where to?"
                aria-label="Search destination"
                required
              />
              <select name="travel-type" aria-label="Select travel type">
                <option value="hotels" selected>
                  Hotels
                </option>
                <option value="flights">Flights</option>
                <option value="car-rentals">Car Rentals</option>
                <option value="tours">Tours</option>
              </select>
              <button type="submit" aria-label="Search travel options">
                Search
              </button>
            </form>
          </div>
        </section>

        {/* Features */}
        <section className="features" aria-label="Travel features highlights">

          <div className="feature-item" tabIndex={0}>
            <MdTravelExplore className="feature-icon" />
            <h3 className="feature-title">Discover the possibilities</h3>
            <p className="feature-desc">
              Search hotels, flights, car rentals, and much more
            </p>
          </div>

          <div className="feature-item" tabIndex={0}>
            <MdOutlineLocalDining className="feature-icon" />
            <h3 className="feature-title">Enjoy deals &amp; delights</h3>
            <p className="feature-desc">
              Exclusive offers and savings curated for you
            </p>
          </div>

          <div className="feature-item" tabIndex={0}>
            <FaMap className="feature-icon" />
            <h3 className="feature-title">Explorer made easy</h3>
            <p className="feature-desc">
              Personalized guides and seamless trip planning
            </p>
          </div>

          <div className="feature-item" tabIndex={0}>
            <MdOutlineSecurity className="feature-icon" />
            <h3 className="feature-title">Travel you can trust</h3>
            <p className="feature-desc">
              Secure booking and reliable support anytime
            </p>
          </div>
        </section>

        {/* Top Destination For Your Next Vacation ***************************************************************************************************************************/}
        <h2 className="section-header">
          Top Destination For Your Next Vacation
        </h2>
        <section
          className="top-destinations"
          aria-label="Top travel destinations"
        >
          <a
            href="#"
            className="destination-card"
            tabIndex={0}
            aria-label="View details about Bali destination"
          >
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b12fa3e9-1dad-4860-a401-31203be13565.png"
              alt="Beautiful temple with mountain background in Bali"
              className="destination-img"
            />
            <span className="destination-name">Bali</span>
          </a>
          <a
            href="#"
            className="destination-card"
            tabIndex={0}
            aria-label="View details about Bangkok destination"
          >
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b4efde37-23a0-4c61-87ee-b757f918595c.png"
              alt="Iconic temple in Bangkok city"
              className="destination-img"
            />
            <span className="destination-name">Bangkok</span>
          </a>
          <a
            href="#"
            className="destination-card"
            tabIndex={0}
            aria-label="View details about Cancun destination"
          >
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8ae29030-40aa-4014-97f4-6416d2d510e5.png"
              alt="Tropical beach and palm trees in Cancun"
              className="destination-img"
            />
            <span className="destination-name">Cancun</span>
          </a>
          <a
            href="#"
            className="destination-card"
            tabIndex={0}
            aria-label="View details about Nha Trang destination"
          >
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cf762bd5-6564-464e-8c6c-217f8e09f440.png"
              alt="City skyline and bay view of Nha Trang"
              className="destination-img"
            />
            <span className="destination-name">Nha Trang</span>
          </a>
        </section>

        {/* Trip Ideas To Inspire You ***************************************************************************************************************************/}
        <h2 className="section-header">Trip Ideas To Inspire You</h2>
        <section className="trip-ideas" aria-label="Inspirational trip ideas">
          <article
            className="trip-idea-card trip-idea-1"
            tabIndex={0}
            aria-label="South Bali trip idea with scenic nature"
          >
            <h3 className="trip-idea-title">
              South Bali (Kuta, Canggu, Uluwatu, Jimbaran)
            </h3>
            <p className="trip-idea-subtitle">
              A sun-soaked paradise filled with breathtaking beaches and vibrant
              culture.
            </p>
            <button className="trip-idea-btn">See All Activities</button>
          </article>
          <article
            className="trip-idea-card trip-idea-2"
            tabIndex={0}
            aria-label="Beyond the City trip idea with nightscape"
          >
            <h3 className="trip-idea-title">Beyond the City</h3>
            <p className="trip-idea-subtitle">
              Escape the crowds and immerse yourself in nature, history, and
              tranquility.
            </p>
            <button className="trip-idea-btn">See All Activities</button>
          </article>
        </section>

        {/* Popular Activities ***************************************************************************************************************************/}
        <h2 className="section-header">Popular Activities</h2>
        <section
          className="popular-activities"
          aria-label="Popular travel activities"
        >
          <div className="activities-grid">
            <article
              className="activity-card"
              tabIndex={0}
              aria-label="Snorkeling activity at Bali beach"
            >
              <img
                className="activity-img"
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/11e58e7a-56d4-49d4-bdba-c7c876da4543.png"
                alt="Underwater snorkeling scene with coral reef"
              />
              <div className="activity-content">
                <h3 className="activity-title">Coral Reef Snorkeling</h3>
                <p className="activity-desc">
                  Explore the underwater paradise along Bali's pristine coast.
                </p>
                <div className="activity-tags">
                  <span className="tag">Outdoor</span>
                  <span className="tag">Water</span>
                </div>
                <div>
                  <span className="price">$78</span>
                  <span className="old-price">$99</span>
                </div>
              </div>
            </article>
            <article
              className="activity-card"
              tabIndex={0}
              aria-label="Temple walk tour in Bangkok"
            >
              <img
                className="activity-img"
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6be8222f-2bf2-446e-a123-803c0eb8e5ff.png"
                alt="Group walking in a historic temple in Bangkok"
              />
              <div className="activity-content">
                <h3 className="activity-title">Temple Walk Tour</h3>
                <p className="activity-desc">
                  Discover hidden gems in the heart of Bangkok's cultural
                  heritage.
                </p>
                <div className="activity-tags">
                  <span className="tag">Walking</span>
                  <span className="tag">History</span>
                </div>
                <div>
                  <span className="price">$55</span>
                </div>
              </div>
            </article>
            <article
              className="activity-card"
              tabIndex={0}
              aria-label="Boat trip in Cancun"
            >
              <img
                className="activity-img"
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7a70ebf3-a241-48c8-868f-557baece5a04.png"
                alt="Small boat sailing near sunny beach in Cancun"
              />
              <div className="activity-content">
                <h3 className="activity-title">Boat Trip</h3>
                <p className="activity-desc">
                  Relax on a scenic boat tour along Cancun's stunning coastline.
                </p>
                <div className="activity-tags">
                  <span className="tag">Boat</span>
                  <span className="tag">Relax</span>
                </div>
                <div>
                  <span className="price">$48</span>
                  <span className="old-price">$62</span>
                </div>
              </div>
            </article>
            <article
              className="activity-card"
              tabIndex={0}
              aria-label="Food tour in Nha Trang"
            >
              <img
                className="activity-img"
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b5a1e90d-1682-4456-8ca8-42de6ab2ce2c.png"
                alt="Street food market and dishes in Nha Trang"
              />
              <div className="activity-content">
                <h3 className="activity-title">Food Tour</h3>
                <p className="activity-desc">
                  Taste and explore local cuisine and vibrant street markets.
                </p>
                <div className="activity-tags">
                  <span className="tag">Food</span>
                  <span className="tag">Cultural</span>
                </div>
                <div>
                  <span className="price">$34</span>
                </div>
              </div>
            </article>
            {/* Repeat more activity cards as needed */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
