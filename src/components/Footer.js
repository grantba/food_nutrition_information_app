import React from 'react';
import '../css/Footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <footer>
                <p>©2021 Food Nutrition Information App made with ❤️️ by Blaire Grant</p>
                <p>All nutritional information, including corresponding images, obtained through the Nutritionix API.</p>
                <a href="https://www.nutritionix.com/" target="_blank" rel="noreferrer">Powered by Nutritionix</a>
            </footer>
        </div>
    )
}
