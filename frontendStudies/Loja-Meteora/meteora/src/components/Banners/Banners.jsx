import "../Banners/Banners.sass";
import banner1 from "../../assets/img/banner1.png";
import banner2 from "../../assets/img/banner2.png";
import banner3 from "../../assets/img/banner3.png";

function Banners() {
  return (
    <div class="banners">
      <div class="slide-banners">
        <img src={banner1} alt="" />
        <img src={banner2} alt="" />
        <img src={banner3} alt="" />
      </div>
    </div>
  );
}

export default Banners;
