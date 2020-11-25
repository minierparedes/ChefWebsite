import React from 'react'

function Dashboard() {
    return (
        <div className="form-container">
            <form action="">
                <div className="form-row">
                    <div className="form-column">
                        <input type="text" className="form-control" placeholder="title"></input>
                    </div>
                    <div className="form-column">
                        <input type="text" className="form-control" placeholder="ingredients"></input>
                    </div>
                    <div className="form-column">
                        <input type="text" className="form-control" placeholder="direction"></input>
                    </div>
                    <div className="form-column">
                        <input type="text" className="form-control" placeholder="???? "></input>
                    </div>
                    <div className="form-column">
                        <input type="text" className="form-control" placeholder="image upload"></input>
                    </div>
                    <button className="button">Add a post</button>
                </div>
            </form>

        </div>
    )
}

export default Dashboard
