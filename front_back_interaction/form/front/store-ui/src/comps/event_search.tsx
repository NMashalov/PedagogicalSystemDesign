import { Outlet, useNavigate} from "react-router-dom";
import { useState } from "react";
import { Row } from "react-bootstrap";

export const EventSearch = () => {
    const [searchString,setSearchString] = useState<string>('')
    const navigate = useNavigate();
    return (
        <Row className="w-25 p-3">
            <input 
                onChange={e => {
                    setSearchString(e.target.value)
                }}
                value={searchString}
            />
            <button onClick={() => navigate(`/event/${searchString}`)}>Search</button>
            <Outlet />
        </Row>
    )
}