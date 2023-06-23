import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://citygol.com/wp-content/uploads/2023/04/Bouquet-with-sunflowers-2.jpg.webp"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit ameft consectetur adipisicing elit. Fugiat
          voluptatibus ipsa velit nulla perspiciatis
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className='sidebarIcon fab fa-facebook-square'></i>
        <i className='sidebarIcon fab fa-twitter-square'></i>
        <i className='sidebarIcon fab fa-pinterest-square'></i>
        <i className='sidebarIcon fab fa-instagram-square'></i>
        </div>
      </div>
    </div>
  );
}
