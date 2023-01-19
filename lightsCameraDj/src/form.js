import React, { useEffect, useState } from 'react'
const ContactForm = () => {
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
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-4 col-md-3 padding-tb-7">
                  <div class="padding-lr-5">Email Address</div>
                </div>
                <div class="col-sm-8 col-md-9">
                  <input
                    type="text"
                    class="form-control width90hack"
                    id="email"
                    name="email"
                  />
                </div>
                <div class="cf"></div>
                <div style="height:0px;"></div>
              </div>
              <div class="form-group">
                <div class="col-sm-4 col-md-3 padding-tb-7">
                  <div class="padding-lr-5">Telephone</div>
                </div>
                <div class="col-sm-8 col-md-9">
                  <input
                    type="tel"
                    class="form-control width90hack"
                    id="telephone"
                    name="telephone"
                  />
                </div>
                <div class="cf"></div>
                <div style="height:0px;"></div>
              </div>
              <div class="form-group">
                <div class="col-sm-4 col-md-3 padding-tb-7">
                  <div class="padding-lr-5">Type Of Event</div>
                </div>
              </div>
              <div class="col-sm-8 col-md-9">
                <select
                  name="event_type"
                  class="form-control responsive-form-select"
                >
                  <option value="">Please select...</option>
                  <option>Banquet</option>
                  <option>Birthday Party</option>
                  <option>Class Reunion</option>
                  <option>Community Celebration</option>
                  <option>Holiday Party</option>
                  <option>Corporate Event</option>
                  <option>Family Reunion</option>
                  <option>Fundraiser</option>
                  <option>Graduation Celebration</option>
                  <option>Night Club / Bar Dance</option>
                  <option>Picnic</option>
                  <option>Private Party</option>
                  <option>Prom</option>
                  <option>Quinceanera</option>
                  <option>School Dance</option>
                  <option>Sweet 16</option>
                  <option>Wedding Anniversary</option>
                  <option>Wedding</option>
                  <option>Micro Wedding</option>
                  <option>Bridal Show</option>
                  <option>Mitzvah</option>
                  <option>Food Tasting</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default ContactForm
