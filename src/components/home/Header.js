import React from "react";

const Header = () => {
    return (
        <div className="header-container">
            <div className="container" style={{ height: "100%" }}>
                <div className="header-container-ins">
                    <div className="header-container-left col-5">
                        <a href="#" className="header-container-left-a">
                            track your order
                        </a>
                        <a href="#" style={{ padding: "1.5rem" }}>
                            <b>Call:</b> 0912 366 093
                        </a>
                    </div>
                    <div className="header-container-left col-2">
                        <a href="#" className="header-container-left-a">
                            VN
                        </a>
                        <a href="#" style={{ padding: "1.5rem" }}>
                            EU
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
