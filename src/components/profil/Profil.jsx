import "./ProfilStyle.css";

export default function profil() {
  return (
    <div className="bg-profil">
      <div className="navbar container">
        <div className="kiri">
          <div className="homenav">
            <a href="">PT</a>
          </div>
        </div>
        <div className="kanan">
          <div className="aboutnav">
            <a href="">About</a>
          </div>
          <div className="portfolionav">
            <a href="">Portfolio</a>
          </div>
          <div className="contactnav">
            <a href="">Contact</a>
          </div>
        </div>
      </div>

      <div className="container profile">
        <div className="profile-left">
          <div className="profile-contain">Hello, I'm</div>
          <div className="profile-contain" id="pt">
            Patrick Thelysander!
          </div>
          <div className="student">Computer Science Student at</div>
          <div className="student sunib">
            <span id="binus">BINUS </span>
            <span id="univ">University</span>
          </div>
        </div>
        <div className="profile-right">
          <img src="./foto-patrick.png" alt="profile-photo" id="foto" />
        </div>
      </div>
    </div>
  );
}
