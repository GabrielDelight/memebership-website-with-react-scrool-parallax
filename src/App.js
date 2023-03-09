import "./App.css";
import { useParallax } from "react-scroll-parallax";

const App = () => {
  const scaleCParallax = useParallax({
    // rotateY: [360 ],
    scaleX: [0, 3, "easeInQuad"],
  });

  const parallaxRotateY = useParallax({
    rotateY: [0, 360],
  });

  const parallaxRotateY2 = useParallax({
    rotateY: [0, 360],
  });

  const parallaxRotateY3 = useParallax({
    rotateY: [0, 360],
  });

  const parallaxEasing = useParallax({
    easing: "easeOutQuad",
    translateX: [-340, 100],
  });

  const parallaxEasingLeft = useParallax({
    easing: [1, -0.75, 0.5, 1.34],
    translateX: [0, -260],
    translateY: [1100],
  });

  return (
    <div>
      <header>

        <div className="logo">
          <img src="https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-m-design_460848-10168.jpg" />
        </div>
        <nav>
          <li>Home</li>
          <li>About</li>
          <li>Team</li>
          <li>Services</li>
          <li>Learn more</li>
        </nav>
      </header>
      <section className="bg-container">
        <img
          ref={parallaxRotateY.ref}
          src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <div className="absolute-text">
          <h1 ref={parallaxEasing.ref}>MEMBERSHIP WEBSITE</h1>
          <h2 ref={parallaxEasingLeft.ref}>For members only non profitable</h2>
        </div>
      </section>
      <br />

      <section className="card-container" ref={scaleCParallax.ref}>
        <div className="card">
          <img src="https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          
        </div>

        <div className="card">
          <img src="https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
         
        </div>
      </section>
      
      <br />
      <br />
      <section className="card-container">
        <div className="card" ref={parallaxRotateY2.ref}>
          <img src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800" />
        </div>

        <div ref={parallaxRotateY3.ref} className="card">
          <img src="https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </div>
      </section>
      <br />
      
      <section className="subscribe">
        <h1>Subscribe to our news letter</h1>
        <br />
        <input type="email" placeholder="youremail@gmail.com" />
        <button>Subscribe</button>
      </section>
    </div>
  );
};
export default App;
