import React from 'react'

function DocsComponent() {
    return (
        <div className="d-flex" id="wrapper">

            {/* <!-- Sidebar --> */}
            <div className="col-2 bg-light border-right" id="sidebar-wrapper">
                <div className="list-group list-group-flush">
                    <a href="https://www.google.com" className="list-group-item list-group-item-action bg-light">Pagination</a>
                    <a href="https://www.google.com" className="list-group-item list-group-item-action bg-light">Image lazy Logding</a>
                    <a href="https://www.google.com" className="list-group-item list-group-item-action bg-light">Form Submit</a>
                    <a href="https://www.google.com" className="list-group-item list-group-item-action bg-light">API Call</a>
                    <a href="https://www.google.com" className="list-group-item list-group-item-action bg-light">Profile</a>
                    <a href="https://www.google.com" className="list-group-item list-group-item-action bg-light">Status</a>
                </div>
            </div>
            {/* <!-- /#sidebar-wrapper --> */}

            {/* <!-- Page Content --> */}
            <div id="page-content-wrapper" class="col-10">

                <div className="container-fluid">
                    <h1 className="mt-4">Simple Sidebar</h1>
                    <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
                    <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>. The top navbar is optional, and just for demonstration. Just create an element with the <code>#menu-toggle</code> ID which will toggle the menu when clicked.</p>
                </div>
            </div>
            {/* <!-- /#page-content-wrapper --> */}

        </div>
        // <!-- /#wrapper-- >
    )
}

export default DocsComponent
