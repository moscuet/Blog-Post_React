import React from 'react';
import '../assets/style/footer.css';

const footerData = [
    {
        title: 'Developed by Michele Zucca, Mostafizur Rahman, David Hauser, Denis Austin',
    },

    {
        title: 'My GitHub',
        link: 'https://github.com/micahsuomi'
    }
]


let formattedData = footerData.map((data, index) => <a href={data.link} key={index}><p>{data.title}</p></a>)

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                {formattedData}
            </div>
        </footer>
    )
}

export default Footer;