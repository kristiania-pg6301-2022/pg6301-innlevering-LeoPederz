import * as React from "react";
import * as ReactDOM from "react-dom";

function Application() {
    return <h1>Hello World</h1>
}

ReactDOM.render(
    <Application/>,
    document.getElementById("app")
);