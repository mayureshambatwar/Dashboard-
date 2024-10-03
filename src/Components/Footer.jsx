import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer id='footer' className='footer'>
        <div className="copyright">
            &copy; Copyright
            <strong>
                <span>
                    @2024 All Rights Reserved
                </span>
            </strong>
        </div>
        <div className="credits">
            Designed by <a href="">Mayuresh</a>
        </div>
    </footer>
  )
}

export default Footer