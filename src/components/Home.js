import React from 'react';

class Home extends React.Component {
  componentDidMount() {
    const hero = document.querySelector('.hero');
    const text = hero.querySelector('div');
    const walk = 4; // 4px

    function shadow(e) {
      const { offsetWidth: width, offsetHeight: height } = hero;
      let { offsetX: x, offsetY: y } = e;

      if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
      }

      const xWalk = Math.round((x / width * walk) - (walk / 2));
      const yWalk = Math.round((y / height * walk) - (walk / 2));

      text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(0, 0, 0, .15)`;
    }

    hero.addEventListener('mousemove', shadow);
  }
  render() {
    return (
      <main className='pt4 hero'>
        <div className="tc pv4 pv6-ns">
          <h1 className="f4 f3-ns fw6 dark-gray avenir">Hi, I'm Kristjana!</h1>
          <h2 className="f6 mid-gray fw2 ttu tracked baskerville">Architect Visualizer</h2>
  
          <a className="f6 grow dib v-mid ph3 pv2 mb3 dark-gray" href="https://www.facebook.com/kristjana.xharja" target="_blank" rel="noopener noreferrer" >
            <i className="fab fa-facebook-f fa-2x"></i>
          </a>
          <a className="f6 grow dib v-mid ph3 pv2 mb3 dark-gray" href="mailto:kristjana.xharja@gmail.com" target="_blank" rel="noopener noreferrer" >
            <i className="fas fa-envelope fa-2x"></i>
          </a>
        </div>
      </main>
    )
  }
}

export default Home;