import mustache from "../assets/images/mustache.png";

export default function character() {
    return(
        <div className="character">
        <div className="hat">
            <div className="hat-top"></div>
            <div className="hat-mid hat-mid1"></div>
            <div className="hat-mid hat-mid2"></div>
            <div className="hat-mid hat-mid3"></div>
        </div>
        <div className="head">
            <div className="triangle triangle-right"></div>
            <div className="triangle triangle-left"></div>
            <div className="ear ear-right"></div>
            <div className="ear ear-left"></div>
            <div className="head-main"></div>
            <div className="mouth">
                <div className="mouth-shine"></div>
            </div>
            <img alt="" src={mustache} className="mustache"></img>
        </div>
        <div className="neck">
            <div className="neck-skin">
                <div className="neck-left"></div>
                <div className="neck-right"></div>
            </div>
        </div>
        <div className="shirt">
            <div className="shirt-top">
                <div className="shirt-top-right"></div>
                <div className="shirt-top-left"></div>
            </div>

            <div className="shirt-bottom">
            <div className="shirt-bottom-right"></div>
                <div className="shirt-bottom-left"></div>
            </div>
        </div>
    </div>
    );
}