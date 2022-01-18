import React from "react";
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <>
            <div className="page-container">
                <section className="section">
                    <p>
                        This is the homepage of YogaShare
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

                    <p>To register, click  <Link to="/signup">here</Link></p>
                    <p>To login, click  <Link to="/signin">here</Link></p>
                </section>
            </div>
        </>
    );
}

export default Home;