import React from 'react'
import Home from '../../assets/img/image 10.png'
//import Bar from '../../assets/img/Button.png'
import Title_bar from '../../assets/img/3.png'
import Top1 from '../../assets/img/Rectangle 325.png'
import Top2 from '../../assets/img/Rectangle 325 (1).png'
import Bottom1 from '../../assets/img/Rectangle 325 (2).png'
import Bottom2 from '../../assets/img/Rectangle 325 (3).png'
import Arrow from '../../assets/img/Forward Arrow.png'
import Prada from '../../assets/img/Prada.svg'
import Burberry from '../../assets/img/Burberry.svg'
import Boss from '../../assets/img/Boss.svg'
import Catier from '../../assets/img/Catier.svg'
import Gucci from '../../assets/img/Gucci.svg'
import Tiffany from '../../assets/img/Tiffany & Co.svg'
import Frame1 from '../../assets/img/Frame 2.png'
import Frame2 from '../../assets/img/Frame 56.png'
import Video from '../../assets/img/Video.png'
import Product1 from '../../assets/img/Rectangle 321.png'
import Product2 from '../../assets/img/Rectangle 321 (1).png'
import Indicator from '../../assets/img/Indicator.png'
import Open_title from '../../assets/img/Logo.png'
import Open1 from '../../assets/img/Miroodles Sticker.png'
import Open2 from '../../assets/img/Miroodles Sticker (1).png'
import Open3 from '../../assets/img/Miroodles Sticker (2).png'
import Open4 from '../../assets/img/Miroodles Sticker (3).png'
import Bottom_bar from '../../assets/img/–.png'
import Insta_white from '../../assets/img/Instagram.png'
import Black1 from '../../assets/img/Rectangle 332.png'
import Black2 from '../../assets/img/Rectangle 333.png'
import Black3 from '../../assets/img/Rectangle 334.png'
import Black4 from '../../assets/img/Rectangle 335.png'
import Footer from '../section/Footer'

const Homepage = () => {
  return (
    <div>
      <div className="Homepage_wrap">
        <div className="Homepage">
            <h4>LUXURY<br />
            FASHION<br />
            &ACCESSORIES</h4>
            <div>
           <img src={Home} alt="" />
           </div>
          </div>
        <div className="Section1_wrap">
          <div className="title">
           <h3>NEW ARRIVAL</h3>
           <img src={Title_bar} alt="" />
           <p>All   Apparel   Dress   Tshirt   Bag</p>
          </div>
          <div className="top">
            <div className="top_img">
              <div className="img1">
              <img src={Top1} alt="" />
              <h3>21WN reversible angora<br/>
                cardigan</h3>
                <p>$120</p></div>
                <div className="img2">
              <img src={Top2} alt="" />
              <h3>21WN reversible angora<br/>
                cardigan</h3>
                <p>$120</p></div>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom_img">
              <div className="img1">
              <img src={Bottom1} alt="" />
              <h3>21WN reversible angora<br/>
                cardigan</h3>
                <p>$120</p></div>
                <div className="img2">
              <img src={Bottom2} alt="" />
              <h3>Oblong bag</h3>
                <p>$120</p></div>
            </div>

            <h2>Explore More</h2>
            <img src={Arrow} alt="" />
            </div>

          <div className="logo">
            <img src={Title_bar} alt="" />
            <div className="top">
              <img src={Prada} alt="" />
              <img src={Burberry} alt="" />
              <img src={Boss} alt="" />
            </div>
            <div className="bottom">
              <img src={Catier} alt="" />
              <img src={Gucci} alt="" />
              <img src={Tiffany} alt="" />
            </div>
            <img src={Title_bar} alt="" />

          </div>
          <div className="collection">
            <h3>COLLECTIONS</h3>
            <img src={Frame1} alt="" />
            <div>
            <img src={Frame2} alt="" /></div>
            <img src={Video} alt="" />
          </div>
          
          <div className="justforyou">
            <h2>JUST FOR YOU</h2>
            <div className="bar">
              <img src={Title_bar} alt="" />
            </div>
            <div className="product">
              <div className="img1">
              <img src={Product1} alt="" />
              <h3>Harris Tweed Three button<br/>
              Jacket</h3>
              <p>$120</p></div>
              <div className="img2">
                <img src={Product2} alt="" /></div>
            </div>
            <div className="indicator">
            <img src={Indicator} alt="" /></div>
          </div>

          <div className="trending">
            <h3>@TRENDING</h3>
            <div className="top">
            <div className="box1"><p>#2021</p></div>
            <div className="box2"><p>#spring</p></div>
            <div className="box3"><p>#collection</p></div>
            <div className="box4"><p>#fall</p></div>
            </div>
            <div className="bottom">
            <div className="box5"><p>#dress</p></div>
            <div className="box6"><p>#autumncollection</p></div>
            <div className="box7"><p>#openfashion</p></div>
            </div>
          </div>

          <div className="open">
            <div className="title">
              <img src={Open_title} alt="" />
              <p>Making a luxurious lifestyle accessible<br/>
              for a generous group of women is our<br/>
              daily drive.</p>
            </div>
            <div className="title_bar">
              <img src={Title_bar} alt="" />
            </div>
            <div className="top">
              <div className="top1">
                <img src={Open1} alt="" />
                <p>Fast shipping. Free on<br/>
                orders over $25.</p></div>
                <div className="top2">
                <img src={Open2} alt="" />
                <p>Sustainable process<br/>
                from start to finish.</p></div></div>
            <div className="bottom">
              <div className="bottom1">
                <img src={Open3} alt="" />
                <p>Fast shipping. Free on<br/>
                orders over $25.</p></div>
                <div className="bottom2">
                <img src={Open4} alt="" />
                <p>Fast shipping.<br/>
                Free on orders over $25.</p></div></div>

              <div className="bottom_img">
              <img src={Bottom_bar} alt="" />
            </div>
            </div>
            
            <div className="followus">
              <h2>FOLLOW US</h2>
              <div className="insta">
              <img src={Insta_white} alt="" /></div>
              <div className="top">
                <img src={Black1} alt="" />
                <img src={Black2} alt="" />
              </div>
              <div className="bottom">
                <img src={Black3} alt="" />
                <img src={Black4} alt="" />
              </div>
            </div>
            
            
          </div>

        </div>

        
        
           
        </div>
        
        
  )
}

export default Homepage;
