import React from 'react'
import './about.css'
import ME from '../../assets/IMG_0398 copy.JPG' 
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

export const lang_change_about = () => {

  var data = {
    "English": {
      "title": "Get To Know"
    },
    "Arabic": {
      "title": "أعرف "
    }
  }
  var data1 = {
    "English": {
      "title": "About Me"
    },
    "Arabic": {
      "title": "عني"
    }
  }
  var data2 = {
    "English": {
      "title": "Experience"
    },
    "Arabic": {
      "title": "الخبرة"
    }
  }
  var data3 = {
    "English": {
      "title": "2+ Years Working While Studying"
    },
    "Arabic": {
      "title": "٢+ سنوات أثناء الدراسة"
    }
  }
  var data4 = {
    "English": {
      "title": "Projects"
    },
    "Arabic": {
      "title": "المشاريع"
    }
  }
  var data5 = {
    "English": {
      "title": "35+ Completed"
    },
    "Arabic": {
      "title": "٣٥+ مكتمل"
    }
}
  var data6 = {
    "English": {
      "title": "Clients"
    },
    "Arabic": {
      "title": "العملاء"
    }
}
  var data7 = {
    "English": {
      "title": "3+ Worldwide"
    },
    "Arabic": {
      "title": "٣+ عالمياً"
    }
}
  var data8 = {
    "English": {
      "title": "Enthusiastic and responsible job seeker with strong engineering skills looking for an entry level position. Eager to collaborate with colleagues to complete the company's mission. A computer engineer who is proficient in various aspects of technology use, development and management. Keen to evolve in line with prevailing technologies and consumer needs. Committed to ensuring the highest levels of efficiency and reliability through a wise and solid technological understanding."
    },
    "Arabic": {
      "title": "باحث عن عمل متحمس و مسؤول اتمتع بمهارات هندسية قوية ابحث عن منصب مبتدى. حريص على التعاون مع الزملاء لإكمال مهمة الشركة. مهندس كمبيوتر بارع في مختلف جوانب إستخدام التكنولوجيا وتطويرها وإدارتها. حريص على التطور بما يتماشى مع التقنيات السائدة وإحتياجات المستهلكين. ملتزم بضمان أعلى مستويات الكفاءة والموثوقية من خلال فهم تكنولوجي حكيم ومتين."
    }
}
  var data9 = {
    "English": {
      "title": "Let's Talk"
    },
    "Arabic": {
      "title": "لنتحدث"
    }
}


  const a = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('.lang_get_to_know').textContent = data[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });

  const b = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('.lang_about_me').textContent = data1[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const c = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('.lang_experiance').textContent = data2[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const d = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('.lang_exp_years').textContent = data3[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const e = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('.lang_projects').textContent = data4[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const f = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('.lang_num_pro').textContent = data5[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const g = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('.lang_client').textContent = data6[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const h = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('.lang_num_client').textContent = data7[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const i = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('.lang_bio').textContent = data8[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const j = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_let_talk').textContent = data9[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });

}
const About = () => {
  return (
    <section id='about'>
      <h5 className='lang_get_to_know'>Get To Know</h5>
      <h2 className='lang_about_me'>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5 className='lang_experiance'>Experience</h5>
              <small className='lang_exp_years'>2+ Years Working While Studying</small>
            </article>           
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5 className='lang_projects'>Projects</h5>
              <small className='lang_num_pro'>35+ Completed</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5 className='lang_client'>Clients</h5>
              <small className='lang_num_client'>3+ Worldwide</small>
            </article>
          </div>
          <p className='lang_bio'>
          Enthusiastic and responsible job seeker with strong engineering skills looking for an entry level position. Eager to collaborate with colleagues to complete the company's mission. A computer engineer who is proficient in various aspects of technology use, development and management. Keen to evolve in line with prevailing technologies and consumer needs. Committed to ensuring the highest levels of efficiency and reliability through a wise and solid technological understanding.
          </p>
          <a href="#contact" id='lang_let_talk' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About