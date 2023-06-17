import './TopBar.css'
import image01 from "./../assets/images/01.jfif"

export default function TopBar() {
  return (
    <div className='top'>
      <div className="topLeft">
        <i className='topIcon fab fa-facebook-square'></i>
        <i className='topIcon fab fa-twitter-square'></i>
        <i className='topIcon fab fa-pinterest-square'></i>
        <i className='topIcon fab fa-instagram-square'></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img className='topImage' src={image01} alt="girl on the bench" />
        <i className='topSearchIcon fas fa-search'></i>
        </div>
    </div>
  )
}


