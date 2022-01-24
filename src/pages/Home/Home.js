import React from "react";
import './Home.css';
import {Link, useHistory} from 'react-router-dom';
import PageHeader from "../../components/PageHeader/PageHeader";
import logo from '../../assets/ohm.png';
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";


function Home() {
    const history = useHistory();

    function handleClick() {
        history.push("/media");
    }
    return (
        <>
            <PageHeader icon={logo} title="Welcome to YogaShare!"/>
            <div className="page-container">
                <section className="section">
                    <p>
                        Welcome to YogaShare! On this page you can watch video's and listen to audio's posted by
                        certified yoga teachers.
                    </p>
                    <p>
                        Ab aliquid amet animi aperiam assumenda, atque autem dolorum ducimus et excepturi ipsa magnam
                        nemo
                        nulla
                        possimus provident,
                        quos ratione repellendus sed sequi tempore! Accusantium amet commodi deleniti exercitationem
                        impedit
                        obcaecati quis repudiandae!
                    </p>
                    <p>
                        Consectetur eligendi ipsam odio repellendus sequi veniam voluptas? Adipisci at consectetur eaque
                        fuga
                        hic inventore ipsa magnam
                        provident vitae. Ad animi commodi consectetur, corporis dicta doloremque dolorum error hic
                        inventore
                        iste laudantium libero magnam
                        mollitia necessitatibus nemo nesciunt nihil non obcaecati odio odit pariatur quae quaerat quas
                        quisquam
                        quos rem sapiente sequi
                        similique sint vero?
                    </p>
                    <p>
                        Accusamus aliquam aliquid blanditiis consequatur est et minima mollitia neque
                        non, odit perspiciatis placeat
                        provident quos, similique sit totam vero. Beatae consequatur cupiditate rerum?
                    </p>
                    <p>
                        Consectetur eligendi ipsam odio repellendus sequi veniam voluptas? Adipisci at consectetur eaque
                        fuga
                        hic inventore ipsa magnam
                        provident vitae. Ad animi commodi consectetur, corporis dicta doloremque dolorum error hic
                        inventore
                        iste laudantium libero magnam
                        mollitia necessitatibus nemo nesciunt nihil non obcaecati odio odit pariatur quae quaerat quas
                        quisquam
                        quos rem sapiente sequi
                        similique sint vero?
                    </p>

                    <p>To register, click  <Link to="/signup" className="link">here</Link></p>
                    <p>To login, click  <Link to="/signin" className="link">here</Link></p>

                    <Button
                        className="round-button"
                        type="button"
                        onClick={handleClick}
                        text="WATCH NOW!"
                    >
                    </Button>
                </section>
            </div>
            <Footer/>

        </>
    );
}

export default Home;