import './navbar.scss';
function Navbar() {
  return (
    <div className='navbar'>
        {/* Sidebar */}
        <div className='wrapper'>
            <span>Prachi Dimote</span>
            <div className='social'>
                <a href='#'><img src='/linkedinicon.png' alt='image' /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar