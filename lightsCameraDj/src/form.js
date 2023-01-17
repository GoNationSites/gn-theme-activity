import React, { useEffect, useState } from 'react'
const ContactForm = () => {
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [year, setYear] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [fianceName, setFianceName] = useState('');
  const [formData, setFormData] = useState({
    checkdate: "",
    djidnumber: "10097",
    action: "add_information_request",
    month: "43",
    day: "43",
    year: "43",
    first_name: "",
    last_name: "",
    organization: "",
    email: "",
    telephone: "",
    type_of_event: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    // handle form submission here, such as sending a POST request to the server
  }

  useEffect(() => {
    const script = document.createElement('script')
    const scriptDiv = document.querySelector('#script-id')
    script.src =
      'https://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js'
    script.type = 'text/javascript'

    scriptDiv.appendChild(script)
  }, [])
  return (
    <>
      <div id="script-id"></div>
      <form
        method="post"
        action="https://lcdjsevents.com/request_information.asp"
        onSubmit={handleSubmit}
        name="reqinfoform"
        style={{ margin: '10px 20px' }}
      >
        <input type="hidden" name="checkdate" value="" />
        <input type="hidden" name="djidnumber" value="10097" />
        <input type="hidden" name="action" value="add_information_request" />
        <div className="djepcode">
          <div
            style={{
              fontSize: '10pt',
              fontFamily: 'Roboto, Verdana, Arial',
              color: '#000000',
              backgroundColor: '#E62802',
            }}
            align="center"
          >
            <div style={{ padding: '8px' }}>
              <strong>
                Lights Camera DJs
                <br />
                Request For Information Form
              </strong>
            </div>
          </div>
          <div style={{ padding: '13px', color: '#000000' }}>
            <div className="form-group">
              <div className="col-sm-4 col-md-3 padding-tb-7">
                <div className="padding-lr-5">Date Of Event</div>
              </div>
              <div className="col-sm-8 col-md-9">
                <span className="metro-table" id="date_select">
                  <select
                    name="month"
                    className="form-control monthselect"
                    style={{ float: 'left', width: '31%', margin: '2px' }}
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                  >
                    <option value="43">Month</option>
                    <option value="1">January (1)</option>
                    <option value="2">February (2)</option>
                    <option value="3">March (3)</option>
                    <option value="4">April (4)</option>
                    <option value="5">May (5)</option>
                    <option value="6">June (6)</option>
                    <option value="7">July (7)</option>
                    <option value="8">August (8)</option>
                    <option value="9">September (9)</option>
                    <option value="10">October (10)</option>
                    <option value="11">November (11)</option>
                    <option value="12">December (12)</option>
                  </select>
                  <select
                    name="day"
                    className="form-control dayselect"
                    style={{ float: 'left', width: '31%', margin: '2px' }}
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                  >
                    <option value="43">Day</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="17">18</option>
                    <option value="17">19</option>
                    <option value="17">20</option>
                    <option value="17">21</option>
                    <option value="17">22</option>
                    <option value="17">23</option>
                    <option value="17">24</option>
                    <option value="17">25</option>
                    <option value="17">26</option>
                    <option value="17">27</option>
                    <option value="17">28</option>
                    <option value="17">29</option>
                    <option value="17">30</option>
                    <option value="17">31</option>
                  </select>
                  <select
                    name="year"
                    className="form-control yearselect"
                    style={{ float: 'left', width: '31%', margin: '2px' }}
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  >
                    <option value="43">Year</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                    <option value="2032">2032</option>
                    <option value="2033">2033</option>
                    <option value="2034">2034</option>
                    <option value="2035">2035</option>
                    <option value="2036">2036</option>
                    <option value="2037">2037</option>
                  </select>
                </span>
              </div>
              <div className="form-group">
                <div className="col-sm-4 col-md-3 padding-tb-7">
                  <div className="padding-lr-5">First Name</div>
                </div>
                <div className="col-sm-8 col-md-9">
                  <input
                    type="text"
                    className="form-control width90hack"
                    id="first_name"
                    name="first_name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="cf"></div>
                <div style={{ height: '0px' }}></div>
              </div>
              <div className="form-group">
                <div className="col-sm-4 col-md-3 padding-tb-7">
                  <div className="padding-lr-5">Last Name</div>
                </div>
                <div className="col-sm-8 col-md-9">
                <input
                    type="text"
                    className="form-control width90hack"
                    id="first_name"
                    name="first_name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-4 col-md-3 padding-tb-7">
                  <div className="padding-lr-5">Fiance Full Name</div>
                </div>
                <div className="col-sm-8 col-md-9">
                <input
                    type="text"
                    className="form-control width90hack"
                    id="fiance_name"
                    name="fiance_name"
                    value={fianceName}
                    onChange={(e) => setFianceName(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-4 col-md-3 padding-tb-7">
                  <div className="padding-lr-5">Fiance Full Name</div>
                </div>
                <div className="col-sm-8 col-md-9">
                <input
                    type="text"
                    className="form-control width90hack"
                    id="fiance_name"
                    name="fiance_name"
                    value={fianceName}
                    onChange={(e) => setFianceName(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-4 col-md-3 padding-tb-7">
                  <div className="padding-lr-5">Organizatione</div>
                </div>
                <div className="col-sm-8 col-md-9">
                <input
                    type="text"
                    className="form-control width90hack"
                    id="organization"
                    name="organization"
                    value={fianceName}
                    onChange={(e) => setFianceName(e.target.value)}
                  />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default ContactForm
