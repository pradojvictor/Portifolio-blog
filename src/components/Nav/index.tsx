import styled from "styled-components";
import Link from "../Link";

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 5vh;
    font-size: 1.2rem;
    ul {
        list-style: none;
        display: flex;
        gap: 1rem;
    }
    li {
        letter-spacing: 3px;
    }
`;

export default function Nav() {
    return (
        <NavContainer>
            <div className="mobile-menu">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
            </div>

            <ul>
                <li>
                    <Link redirect="/" classname="li-nav" name="home" />
                </li>
                <li>
                    <Link redirect="/work" classname="li-nav" name="work" />
                </li>
                <li>
                    <Link redirect="/blog" classname="li-nav" name="blog" />
                </li>

            </ul>
        </NavContainer>
    )
}