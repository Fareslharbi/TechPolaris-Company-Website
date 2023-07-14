import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


export const lang_change_experience = () => {

  var data_exp = {
    "English": {
      "title": "Experienced"
    },
    "Arabic": {
      "title": "متمرس"
    }
  }
  var data_inter = {
    "English": {
      "title": "Intermediate"
    },
    "Arabic": {
      "title": "متوسط"
    }
  }
  var data_beg = {
    "English": {
      "title": "Beginner"
    },
    "Arabic": {
      "title": "مبتدئ"
    }
  }

  var data = {
    "English": {
      "title": "The Skills I Have"
    },
    "Arabic": {
      "title": "المهارات التي أمتلكها"
    }
  }
  var data1 = {
    "English": {
      "title": "My Experience"
    },
    "Arabic": {
      "title": "خبرتي"
    }
  }
  var data2 = {
    "English": {
      "title": "Frontend Development"
    },
    "Arabic": {
      "title": "تطوير الواجهة الأمامية"
    }
  }
  var data3 = {
    "English": {
      "title": "Backend Development"
    },
    "Arabic": {
      "title": "التطوير الخلفي للمواقع"
    }
}
  var data4 = {
    "English": {
      "title": "Machine Learning"
    },
    "Arabic": {
      "title": "التعلم الألي"
    }
}
  var data5 = {
    "English": {
      "title": "General"
    },
    "Arabic": {
      "title": "عام"
    }
}

  const exp_1 = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_exp').textContent = data_exp[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const exp_2 = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_exp1').textContent = data_exp[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const exp_3 = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_exp2').textContent = data_exp[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const exp_4 = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_exp3').textContent = data_exp[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const exp_5 = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_exp4').textContent = data_exp[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const exp_6 = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_exp5').textContent = data_exp[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const exp_7 = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_exp6').textContent = data_exp[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const exp_8 = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_exp7').textContent = data_exp[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const exp_9 = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_exp8').textContent = data_exp[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const exp_10 = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_exp9').textContent = data_exp[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });

  const inter_1 = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_inter').textContent = data_inter[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const inter_2 = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_inter1').textContent = data_inter[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const inter_3 = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_inter2').textContent = data_inter[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const inter_4 = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_inter3').textContent = data_inter[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const inter_5 = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_inter4').textContent = data_inter[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const inter_6 = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_inter5').textContent = data_inter[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const inter_7 = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_inter6').textContent = data_inter[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const inter_8 = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_inter7').textContent = data_inter[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const inter_9 = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_inter8').textContent = data_inter[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const inter_10 = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_inter9').textContent = data_inter[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const inter_11 = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_inter10').textContent = data_inter[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const inter_12 = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_inter11').textContent = data_inter[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });




  const beg_1 = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_beg').textContent = data_beg[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const beg_2 = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_beg1').textContent = data_beg[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const beg_3 = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_beg2').textContent = data_beg[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const beg_4 = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_beg3').textContent = data_beg[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });


  const d = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('.lang_skill').textContent = data[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const e = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('.lang_experience').textContent = data1[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const f = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('.lang_front').textContent = data2[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const g = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('.lang_backend').textContent = data3[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const h = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('.lang_ml').textContent = data4[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const i = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('.lang_general').textContent = data5[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });

}
const Experience = () => {
  return (
    <section id='experience'>
      <h5 className='lang_skill'>The Skills I Have</h5>
      <h2 className='lang_experience'>My Experience</h2>

      <div className="container experience__container">
        {/* start of frontend */}
      <div className="experience__frontend">
          <h3 className='lang_front'>Frontend Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4 className='lang_html'>HTML & CSS</h4>
                <small id='lang_exp' className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4 className='lang_jq'>jQuery</h4>
                <small id='lang_inter' className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4 className='lang_tkinter'>Tkinter</h4>
                <small id='lang_exp1' className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4 className='lang_javascript'>Javascript</h4>
                <small id='lang_inter1' className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4 className='lang_react'>React</h4>
                <small id='lang_inter2' className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4 className='lang_bootstrap'>Bootstrap</h4>
                <small id='lang_exp2' className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* end of frontend */}
        {/* start of backend */}
        <div className="experience__backend">
        <h3 className='lang_backend'>Backend Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4 className='lang_python'>Python</h4>
                <small id='lang_exp3' className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4 className='lang_django'>Django</h4>
                <small id='lang_inter3' className='text-light'>Intermediate</small>
              </div>             
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4 className='lang_mysql'>MYSQL</h4>
                <small id='lang_inter4' className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4 className='lang_javascript'>Javascript</h4>
                <small id='lang_inter5' className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4 className='lang_node'>NodeJS</h4>
                <small id='lang_beg' className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4 className='lang_express'>ExpressJS</h4>
                <small id='lang_beg1' className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
          {/* end of backend */}
          {/* start of AI */}
        <div className="experience__frontend">
          <h3 className='lang_ml'>Machine Learning</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4 className='lang_scrape'>Web Scraping</h4>             
                <small id='lang_exp4' className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4 className='lang_pd'>Pandas</h4>
                
                <small id='lang_exp5' className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4 className='lang_re'>Regular Expressions</h4>             
                <small id='lang_inter6' className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4 className='lang_opencv'>OpenCV</h4>
                
                <small id='lang_exp6' className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4 className='lang_tf'>Tensorflow</h4>
                
                <small id='lang_beg2' className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4 className='lang_cnn'>CNN</h4>
                
                <small id='lang_inter7' className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4 className='lang_npy'>NumPy</h4>
                <small id='lang_inter8' className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4 className='lang_scipy'>SciPy</h4>
                <small id='lang_inter9' className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* end of AI */}
        {/* start of basics */}
        <div className="experience__frontend">
          <h3 className='lang_general'>General</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4 className='lang_ms'>Embedded Systems</h4>
                <h5 className='lang_raz'>Raspberry Pi & Arduino</h5>
                <small id='lang_exp7' className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4 className='lang_api'>API's</h4>
                <h5 className='lang_apis'>Rest, Fast API's</h5>
                <small id='lang_inter10' className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4 className='lang_mo'>Microsoft Office</h4>
                <h5 className='lang_mos'>Excel, Word, PowerPoint</h5>
                <small id='lang_exp8' className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4 className='lang_fil'>Files</h4>
                <h5 className='lang_crd'>Create-Read-Download</h5>
                <small id='lang_exp9' className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4 className='lang_adt'>Algorithm & Data Structure</h4>
                <h5 className='lang_ssha'>Sort, Search, Hashing Algorithms</h5>
                <small id='lang_inter11' className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4 className='lang_3d'>3D Design</h4>
                <h5 className='lang_blender'>Blender</h5>
                <small id='lang_beg3' className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
        {/* end of basics */}
      </div>
    </section>
  )
}

export default Experience