import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/profolio/Fa_twitter_bot_d5ecc471-f2b2-4df1-a248-99a8a7058e92 copy.png'
import IMG2 from '../../assets/profolio/Fa_web_scraping_bot_662d656d-ade4-4b9b-a7d6-bef1c34d1976 copy.png'
import IMG3 from '../../assets/profolio/Fa_price_monitoring_bot_f408e189-66e8-4444-84f2-6f3d74de7bc0 copy.png'
import IMG4 from '../../assets/spotify_480x360.webp'
import IMG5 from '../../assets/profolio/Fa_Google_map_bot_searching_for_destination_bfed05d8-c701-4613-b96d-d275bfabe402 copy.png'
import IMG6 from '../../assets/APIs_480x360.webp'
import IMG7 from '../../assets/Data_science_480x360.webp'
import IMG8 from '../../assets/video_processing_480x360.webp'
import IMG9 from '../../assets/Box_office_480x360.webp'
import IMG10 from '../../assets/Screenshot_2023-01-05_at_1.32.50_PM_480x360.png'
import IMG11 from '../../assets/Screenshot_2022-11-11_at_9.30.01_PM_480x360.png'
import IMG12 from '../../assets/profolio/Fa_face_recognition_system_for_attendance_9f74798a-8999-4078-9f5b-1279b42a7248.png'
import IMG13 from '../../assets/fr.png_480x360.webp'
import IMG14 from '../../assets/profolio/Fa_plate_detection_system_for_traffic_violation_7ccfccc5-da6e-49a3-831e-978878cfd1af copy.png'
import IMG15 from '../../assets/portfolio5.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Twitter Bot',
    github: 'https://github.com/Fareslharbi',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Web Scraping bot',
    github: 'https://github.com/Fareslharbi',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Price Monitoring Bot',
    github: 'https://github.com/Fareslharbi',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Spotify API',
    github: 'https://github.com/Fareslharbi',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Google Maps API',
    github: 'https://github.com/Fareslharbi',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Rest API',
    github: 'https://github.com/Fareslharbi',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Data Science Pipline',
    github: 'https://github.com/Fareslharbi',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 8,
    image: IMG8,
    title: 'Video Processing',
    github: 'https://github.com/Fareslharbi',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 9,
    image: IMG9,
    title: 'Box Office Scraping',
    github: 'https://github.com/Fareslharbi',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 10,
    image: IMG10,
    title: 'Admin Dashboard',
    github: 'https://github.com/Fareslharbi',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 11,
    image: IMG11,
    title: 'Personal Portfolio Website'
  },
  {
    id: 12,
    image: IMG12,
    title: 'Face Recognition Application',
    github: 'https://github.com/Fareslharbi',
    demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
    
  {
    id: 13,
    image: IMG13,
    title: 'Face Recognition Website',
    github: 'https://github.com//Fareslharbi',
    demo: 'https://dribbble.com//12017-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
    
  },

  {
    id: 14,
    image: IMG14,
    title: 'Plate Detection for Traffic violation',
    github: 'https://github.com/Fareslharbi',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
  {
    id: 15,
    image: IMG15,
    title: 'Music Controller Web App architecture',
    github: 'https://github.com/Fareslharbi',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  }
]
export const lang_change_portfolio = () => {

  var data0 = {
    "English": {
      "title": "My Recent Work"
    },
    "Arabic": {
      "title": "أعمالي الأخيره"
    }
  }
  var data1 = {
    "English": {
      "title": "Portfolio"
    },
    "Arabic": {
      "title": "مَلَفّ"
    }
  }
const x0 = document.querySelector('#togBtn').addEventListener('input', (event) => {
  document.querySelector('.lang_work').textContent = data0[event.currentTarget.checked ? 'Arabic' : 'English'].title;
});
const x1 = document.querySelector('#togBtn').addEventListener('input', (event) => {
  document.querySelector('.lang_portfolio').textContent = data1[event.currentTarget.checked ? 'Arabic' : 'English'].title;
});
}

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5 className='lang_work'>My Recent Work</h5>
      <h2 className='lang_portfolio'>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, title, image, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3 className='lang_title'>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'rel="noopener noreferrer" target='_blank'>Github</a>
                  {/* <a href={demo} className='btn  btn-primary'rel="noopener noreferrer" target='_blank'>Live Demo</a> */}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio