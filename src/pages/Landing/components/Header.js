import {memo} from "react";
import Button from "../../../components/Button";
import ToggleButton from "../../../components/Toggle";

const Header = memo(() => {
    const style = {
        padding: "10px 5px",
        borderBottom: "1px solid",
        marginBottom: "10px",
        display: "flex",
        gap: "5px",
        justifyContent: "flex-end",
    };
    return (
        <header style={style}>
            <Button>Courses</Button>
            <Button>Course Type</Button>
            <ToggleButton />
        </header>
    );
});

export default Header;
