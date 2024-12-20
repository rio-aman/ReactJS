// import React from 'react'

function Card({username}) {
    console.log(username)
    return (
        <div className="container center">
            <div className="card">
                <h2>Card</h2>
                <hr />
                <p>{username} ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button>Next</button>
            </div>
        </div>
    )
}

export default Card