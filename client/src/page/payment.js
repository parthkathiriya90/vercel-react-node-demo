import React from 'react';
import { Link } from 'react-router-dom';

export default function Payment() {
  return (
    <>
      <section className='choose-payment-section'>
        <div className='s-container'>
          <div className='payment-progress'>
            <div className='progress-div'> {/* add finish-step class for secound step */}
              <div className='number active-step'>1</div>
              <div className='progress'></div>
              <div className='number'>2</div>
            </div>
          </div>
          <div>
            <div className='payment-title'>
              <h2>Choose Your Payment Method</h2>
            </div>
            <div className='payment-method'>
              <ul className='payment-method-list'>
                <li>
                  <div className='title'>
                    <div className='radio-btn'>
                      <input type='radio' name='payment' />
                      <label>Cryptomus</label>
                    </div>
                    <i class="fa-solid fa-circle-info"></i>
                  </div>
                  <h2 className='sub-title'>Next-generation crypto payment gateway providing diversity</h2>

                  <div className='prise-div discount-high'>
                    <div className='cancle-prise'>$59.90</div>
                    <div className='pay-prise'>$56.91</div>
                    <div className='discount'>5% <i class="fa-solid fa-arrow-down"></i></div>
                  </div>
                </li>
                <li>
                  <div className='title'>
                    <div className='radio-btn'>
                      <input type='radio' name='payment' />
                      <label>Solidgate</label>
                    </div>
                    <i class="fa-solid fa-circle-info"></i>
                  </div>
                  <h2 className='sub-title'>Apple pay / Google Pay / Visa / Mastercard</h2>

                  <div className='prise-div no-discount'>
                    <div className='pay-prise'>$59.90</div>
                  </div>
                </li>
                <li>
                  <div className='title'>
                    <div className='radio-btn'>
                      <input type='radio' name='payment' />
                      <label>Checkout</label>
                    </div>
                    <i class="fa-solid fa-circle-info"></i>
                  </div>
                  <h2 className='sub-title'>Apple pay / Google Pay / Visa / Mastercard</h2>

                  <div className='prise-div no-discount'>
                    <div className='pay-prise'>$59.90</div>
                  </div>
                </li>
                <li>
                  <div className='title'>
                    <div className='radio-btn'>
                      <input type='radio' name='payment' />
                      <label>Cardinity</label>
                    </div>
                    <i class="fa-solid fa-circle-info"></i>
                  </div>
                  <p>--3D secure is required</p>
                  <h2 className='sub-title'> Visa / Mastercard</h2>
                  <div className='prise-div low-discount'>
                    <div className='cancle-prise'>$59.90</div>
                    <div className='pay-prise'>$62.90</div>
                    <div className='discount'>5% <i class="fa-solid fa-arrow-up"></i></div>
                  </div>
                </li>
              </ul>
            </div>
            <div className='select-btn'>
              <Link to='##' className='blue-btn disabled'>Select</Link>
            </div>
          </div>

          <div>
            <div className='payment-title'>
              <h2>Pay by Cryptomus</h2>
            </div>
            <div className='payment-form'>
              <form>
                <div className='row'>
                  <div className='col'>
                    <div className='input-box'>
                      <label>Bill Type</label>
                      <select>
                        <option value=''>Individual</option>
                        <option value=''>Corporate</option>
                      </select>
                    </div>
                    <div className='input-box'>
                      <label>Country</label>
                      <select>
                        <option value=''>Afghanistan </option>
                        <option value=''>Aland Islands </option>
                        <option value=''> Albania</option>
                        <option value=''>Algeria </option>
                        <option value=''> American Samoa </option>
                        <option value=''>  Andorra </option>
                        <option value=''>Angola </option>
                        <option value=''>Anguilla </option>
                        <option value=''>Antarctica </option>
                        <option value=''> Antigua and Barbuda </option>
                        <option value=''> Argentina </option>
                        <option value=''>  Armenia </option>
                        <option value=''> Aruba </option>
                        <option value=''>  Australia </option>
                        <option value=""> Azerbaijan </option>
                        <option value=""> Bahamas </option>
                        <option value=""> Bahrain </option>
                        <option value=""> Bangladesh </option>
                        <option value=""> Barbados </option>
                        <option value=""> Belarus </option>
                        <option value=""> Belgium </option>
                        <option value=""> Belize </option>
                        <option value=""> Benin </option>
                        <option value=""> Bermuda </option>
                        <option value=""> Bhutan </option>
                        <option value=""> Bolivia </option>
                        <option value=""> Bonaire, Sint Eustatius and Saba </option>
                        <option value=""> Bosnia and Herzegovina </option>
                        <option value=""> Botswana </option>
                        <option value=""> Bouvet Island </option>
                        <option value=""> Brazil </option>
                        <option value=""> British Indian Ocean Territory </option>
                        <option value=""> Brunei Darussalam </option>
                        <option value=""> Bulgaria </option>
                        <option value=""> Burkina Faso </option>
                        <option value=""> Burundi </option>
                        <option value=""> Cambodia </option>
                        <option value=""> Cambodia </option>
                        <option value=""> Canada </option>
                        <option value=""> Cape Verde </option>
                        <option value=""> Cayman Islands </option>
                        <option value=""> Central African Republic </option>
                        <option value=""> Chad </option>
                        <option value=""> Chile </option>
                        <option value=""> China </option>
                        <option value=""> Christmas Island </option>
                        <option value=""> Christmas Island </option>
                        <option value=""> Colombia </option>
                        <option value=""> Comoros </option>
                        <option value=""> Congo </option>
                        <option value=""> Congo, Democratic Republic of the Congo </option>
                        <option value=""> Cook Islands </option>
                        <option value=""> Costa Rica </option>
                        <option value=""> Cote D'Ivoire </option>
                        <option value=""> Croatia </option>
                        <option value=""> Cuba </option>
                        <option value=""> Curacao </option>
                        <option value=""> Cyprus </option>
                        <option value=""> Czech Republic </option>
                        <option value=""> Denmark </option>
                        <option value=""> Djibouti </option>
                        <option value=""> Dominica </option>
                        <option value=""> Dominican Republic </option>
                        <option value=""> Ecuador </option>
                        <option value=""> Egypt </option>
                        <option value=""> El Salvador </option>
                        <option value=""> Equatorial Guinea </option>
                        <option value=""> Eritrea </option>
                        <option value=""> Estonia </option>
                        <option value=""> Ethiopia </option>
                        <option value=""> Falkland Islands (Malvinas) </option>
                        <option value=""> Faroe Islands </option>
                        <option value=""> Fiji </option>
                        <option value=""> Finland </option>
                        <option value=""> France </option>
                        <option value=""> French Guiana </option>
                        <option value=""> French Polynesia </option>
                        <option value=""> French Southern Territories </option>
                        <option value="">  Gabon  </option>
                        <option value=""> Gambia </option>
                        <option value=""> Georgia </option>
                        <option value=""> Germany </option>
                        <option value=""> Ghana </option>
                        <option value=""> Gibraltar </option>
                        <option value=""> Greece </option>
                        <option value=""> Greenland </option>
                        <option value=""> Grenada </option>
                        <option value=""> Guadeloupe </option>
                        <option value=""> Guam </option>
                        <option value=""> Guatemala </option>
                        <option value=""> Guernsey </option>
                        <option value=""> Guinea </option>
                        <option value=""> Guinea-Bissau </option>
                        <option value=""> Guyana </option>
                        <option value=""> Haiti </option>
                        <option value=""> Heard Island and McDonald Islands </option>
                        <option value=""> Holy See (Vatican City State) </option>
                        <option value=""> Honduras </option>
                        <option value=""> Hong Kong </option>
                        <option value=""> Hungary </option>
                        <option value=""> Iceland </option>
                        <option value=""> India </option>
                        <option value=""> Indonesia </option>
                        <option value=""> Iran, Islamic Republic of </option>
                        <option value=""> Iraq </option>
                        <option value=""> Ireland </option>
                        <option value=""> Isle of Man </option>
                        <option value=""> Israel </option>
                        <option value=""> Italy </option>
                        <option value=""> Jamaica </option>
                        <option value=""> Japan </option>
                        <option value=""> Jersey </option>
                        <option value=""> Jordan </option>
                        <option value=""> Kazakhstan </option>
                        <option value=""> Kenya </option>
                        <option value=""> Kiribati </option>
                        <option value=""> Korea, Democratic People's Republic of </option>
                        <option value=""> Korea, Republic of </option>
                        <option value="">Kosovo </option>
                        <option value="">Kuwait </option>
                        <option value="">Kyrgyzstan</option>
                        <option value="">Lao People's Democratic Republic</option>
                        <option value="">Latvia</option>
                        <option value="">Lebanon</option>
                        <option value="">Lesotho</option>
                        <option value="">Liberia</option>
                        <option value="">Libya</option>
                        <option value="">Liechtenstein</option>
                        <option value="">Lithuania</option>
                        <option value="">Luxembourg</option>
                        <option value="">Macao</option>
                        <option value="">Madagascar</option>
                        <option value="">Malawi</option>
                        <option value="">Malaysia</option>
                        <option value="">Maldives</option>
                        <option value="">Mali</option>
                        <option value="">Malta</option>
                        <option value="">Marshall Islands</option>
                        <option value="">Martinique</option>
                        <option value="">Mauritania</option>
                        <option value="">Mauritius</option>
                        <option value="">Mayotte</option>
                        <option value="">Mexico</option>
                        <option value="">Micronesia, Federated States of</option>
                        <option value="">Moldova, Republic of</option>
                        <option value="">Monaco</option>
                        <option value="">Mongolia</option>
                        <option value="">Montenegro</option>
                        <option value="">Montserrat</option>
                        <option value="">Morocco</option>
                        <option value="">Mozambique</option>
                        <option value="">Myanmar</option>
                        <option value="">Namibia</option>
                        <option value="">Nauru</option>
                        <option value="">Nepal</option>
                        <option value="">Netherlands</option>
                        <option value="">Netherlands Antilles</option>
                        <option value="">New Caledonia</option>
                        <option value="">New Zealand</option>
                        <option value="">Nicaragua</option>
                        <option value="">Niger</option>
                        <option value="">Nigeria</option>
                        <option value="">Niue</option>
                        <option value="">Norfolk Island</option>
                        <option value="">Northern Mariana Islands</option>
                        <option value="">Norway</option>
                        <option value="">Oman</option>
                        <option value="">Pakistan</option>
                        <option value="">Palau</option>
                        <option value="">Palestinian Territory, Occupied</option>
                        <option value="">Panama</option>
                        <option value="">Papua New Guinea</option>
                        <option value="">Paraguay</option>
                        <option value="">Peru</option>
                        <option value="">Philippines</option>
                        <option value="">Pitcairn</option>
                        <option value="">Poland</option>
                        <option value="">Portugal</option>
                        <option value="">Puerto Rico</option>
                        <option value="">Montenegro</option>
                        <option value="">Qatar</option>
                        <option value="">Reunion</option>
                        <option value="">Romania</option>
                        <option value="">Russian Federation</option>
                        <option value="">Saint Barthelemy</option>
                        <option value=""> Saint Helena </option>
                        <option value=""> Saint Kitts and Nevis </option>
                        <option value=""> Saint Lucia </option>
                        <option value=""> Saint Martin </option>
                        <option value=""> Saint Pierre and Miquelon </option>
                        <option value=""> Saint Vincent and the Grenadines </option>
                        <option value=""> Samoa </option>
                        <option value=""> San Marino </option>
                        <option value=""> Sao Tome and Principe </option>
                        <option value=""> Saudi Arabia </option>
                        <option value=""> Senegal </option>
                        <option value=""> Serbia </option>
                        <option value=""> Serbia and Montenegro </option>
                        <option value=""> Seychelles </option>
                        <option value=""> Sierra Leone </option>
                        <option value=""> Singapore </option>
                        <option value=""> St Martin </option>
                        <option value=""> Slovakia </option>
                        <option value=""> Solomon Islands </option>
                        <option value=""> Somalia </option>
                        <option value=""> South Africa </option>
                        <option value=""> South Georgia and the South Sandwich Islands </option>
                        <option value=""> South Sudan </option>
                        <option value=""> Spain </option>
                        <option value=""> Sri Lanka </option>
                        <option value=""> Sudan </option>
                        <option value=""> Suriname </option>
                        <option value=""> Svalbard and Jan Mayen </option>
                        <option value=""> Swaziland </option>
                        <option value=""> Sweden </option>
                        <option value=""> Switzerland </option>
                        <option value=""> Syrian Arab Republic </option>
                        <option value=""> Taiwan, Province of China </option>
                        <option value=""> Tajikistan </option>
                        <option value=""> Tanzania, United Republic of </option>
                        <option value=""> Thailand </option>
                        <option value=""> Timor-Leste </option>
                        <option value=""> Togo </option>
                        <option value=""> Tokelau </option>
                        <option value=""> Tonga </option>
                        <option value=""> Trinidad and Tobago </option>
                        <option value=""> Tunisia </option>
                        <option value=""> Turkey </option>
                        <option value=""> Turkmenistan </option>
                        <option value=""> Turks and Caicos Islands </option>
                        <option value=""> Tuvalu </option>
                        <option value=""> Ukraine </option>
                        <option value=""> United Arab Emirates </option>
                        <option value=""> United Kingdom </option>
                        <option value=""> United States </option>
                        <option value=""> United States Minor Outlying Islands </option>
                        <option value=""> Uruguay </option>
                        <option value=""> Vanuatu </option>
                        <option value=""> Wallis and Futuna </option>
                        <option value=""> Western Sahara </option>
                        <option value=""> Yemen </option>
                        <option value=""> Zambia </option>
                      </select>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='input-box'>
                      <label>Full Name*</label>
                      <input type='text' />
                    </div>
                    <div className='input-box'>
                      <label>Address</label>
                      <input type='text' />
                    </div>
                  </div>
                  <div className='col'>
                    <div className='input-box'>
                      <label>E-Mail*</label>
                      <input type='text' />
                      <p className='accept-terms'> <input type='checkbox' className='checkbox' />I have read, understood, and agree to the <Link to='##'>Terms of Services, Distance Sales Agreement.</Link></p>
                    </div>
                    <div className='input-box'>
                      <label>Phone*</label>
                      <div className='select-country-code'>
                        <div className='select-country-box'>
                          <div className='country'>
                            <span className='flag'>Ax</span>
                            <i class="fa-solid fa-angle-down"></i>
                            <span className='country-code'>+358-18</span>
                          </div>
                          <div className='select-country-list-box'>
                            <div className='input-box'>
                              <input type='text' placeholder='Search' />
                            </div>
                            <ul>
                              <li>
                                <span className='flag'>ax</span>
                                <span>Aland Islands</span>
                                <span className='code'>+358-18</span>
                              </li>
                              <li>
                                <span className='flag'>ax</span>
                                <span>Aland Islands</span>
                                <span className='code'>+358-18</span>
                              </li>
                              <li>
                                <span className='flag'>ax</span>
                                <span>Aland Islands</span>
                                <span className='code'>+358-18</span>
                              </li>
                              <li>
                                <span className='flag'>ax</span>
                                <span>Aland Islands</span>
                                <span className='code'>+358-18</span>
                              </li>
                              <li>
                                <span className='flag'>ax</span>
                                <span>Aland Islands</span>
                                <span className='code'>+358-18</span>
                              </li>
                              <li>
                                <span className='flag'>ax</span>
                                <span>Aland Islands</span>
                                <span className='code'>+358-18</span>
                              </li>
                              <li>
                                <span className='flag'>ax</span>
                                <span>Aland Islands</span>
                                <span className='code'>+358-18</span>
                              </li>
                              <li>
                                <span className='flag'>ax</span>
                                <span>Aland Islands</span>
                                <span className='code'>+358-18</span>
                              </li>
                              <li>
                                <span className='flag'>ax</span>
                                <span>Aland Islands</span>
                                <span className='code'>+358-18</span>
                              </li>
                              <li>
                                <span className='flag'>ax</span>
                                <span>Aland Islands</span>
                                <span className='code'>+358-18</span>
                              </li>
                              <li>
                                <span className='flag'>ax</span>
                                <span>Aland Islands</span>
                                <span className='code'>+358-18</span>
                              </li>
                              <li>
                                <span className='flag'>ax</span>
                                <span>Aland Islands</span>
                                <span className='code'>+358-18</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <input type='text' />
                      </div>
                      <p className='accept-terms'> <input type='checkbox' className='checkbox' />I have read, understood, and agree to the <Link to='##'>Privacy Policy , SMS Terms. Read more.</Link></p>

                    </div>
                  </div>
                  <div className='col'>
                    <div className='input-box half-col'>
                      <label>Zip Code</label>
                      <input type='text' />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className='different-information'>
              <input type='checkbox' id='checkbox' />
              <label for='checkbox'>My billing information is different than my contact information.</label>
            </div>
            <div className='payment-form'>
              <form>
                <div className='row'>
                  <div className='col'>
                    <div className='input-box'>
                      <label>Bill Type</label>
                      <select>
                        <option value=''>Individual</option>
                        <option value=''>Corporate</option>
                      </select>
                    </div>
                    <div className='input-box'>
                      <label>Country</label>
                      <select>
                        <option value=''>Afghanistan </option>
                        <option value=''>Aland Islands </option>
                        <option value=''> Albania</option>
                        <option value=''>Algeria </option>
                        <option value=''> American Samoa </option>
                        <option value=''>  Andorra </option>
                        <option value=''>Angola </option>
                        <option value=''>Anguilla </option>
                        <option value=''>Antarctica </option>
                        <option value=''> Antigua and Barbuda </option>
                        <option value=''> Argentina </option>
                        <option value=''>  Armenia </option>
                        <option value=''> Aruba </option>
                        <option value=''>  Australia </option>
                        <option value=""> Azerbaijan </option>
                        <option value=""> Bahamas </option>
                        <option value=""> Bahrain </option>
                        <option value=""> Bangladesh </option>
                        <option value=""> Barbados </option>
                        <option value=""> Belarus </option>
                        <option value=""> Belgium </option>
                        <option value=""> Belize </option>
                        <option value=""> Benin </option>
                        <option value=""> Bermuda </option>
                        <option value=""> Bhutan </option>
                        <option value=""> Bolivia </option>
                        <option value=""> Bonaire, Sint Eustatius and Saba </option>
                        <option value=""> Bosnia and Herzegovina </option>
                        <option value=""> Botswana </option>
                        <option value=""> Bouvet Island </option>
                        <option value=""> Brazil </option>
                        <option value=""> British Indian Ocean Territory </option>
                        <option value=""> Brunei Darussalam </option>
                        <option value=""> Bulgaria </option>
                        <option value=""> Burkina Faso </option>
                        <option value=""> Burundi </option>
                        <option value=""> Cambodia </option>
                        <option value=""> Cambodia </option>
                        <option value=""> Canada </option>
                        <option value=""> Cape Verde </option>
                        <option value=""> Cayman Islands </option>
                        <option value=""> Central African Republic </option>
                        <option value=""> Chad </option>
                        <option value=""> Chile </option>
                        <option value=""> China </option>
                        <option value=""> Christmas Island </option>
                        <option value=""> Christmas Island </option>
                        <option value=""> Colombia </option>
                        <option value=""> Comoros </option>
                        <option value=""> Congo </option>
                        <option value=""> Congo, Democratic Republic of the Congo </option>
                        <option value=""> Cook Islands </option>
                        <option value=""> Costa Rica </option>
                        <option value=""> Cote D'Ivoire </option>
                        <option value=""> Croatia </option>
                        <option value=""> Cuba </option>
                        <option value=""> Curacao </option>
                        <option value=""> Cyprus </option>
                        <option value=""> Czech Republic </option>
                        <option value=""> Denmark </option>
                        <option value=""> Djibouti </option>
                        <option value=""> Dominica </option>
                        <option value=""> Dominican Republic </option>
                        <option value=""> Ecuador </option>
                        <option value=""> Egypt </option>
                        <option value=""> El Salvador </option>
                        <option value=""> Equatorial Guinea </option>
                        <option value=""> Eritrea </option>
                        <option value=""> Estonia </option>
                        <option value=""> Ethiopia </option>
                        <option value=""> Falkland Islands (Malvinas) </option>
                        <option value=""> Faroe Islands </option>
                        <option value=""> Fiji </option>
                        <option value=""> Finland </option>
                        <option value=""> France </option>
                        <option value=""> French Guiana </option>
                        <option value=""> French Polynesia </option>
                        <option value=""> French Southern Territories </option>
                        <option value="">  Gabon  </option>
                        <option value=""> Gambia </option>
                        <option value=""> Georgia </option>
                        <option value=""> Germany </option>
                        <option value=""> Ghana </option>
                        <option value=""> Gibraltar </option>
                        <option value=""> Greece </option>
                        <option value=""> Greenland </option>
                        <option value=""> Grenada </option>
                        <option value=""> Guadeloupe </option>
                        <option value=""> Guam </option>
                        <option value=""> Guatemala </option>
                        <option value=""> Guernsey </option>
                        <option value=""> Guinea </option>
                        <option value=""> Guinea-Bissau </option>
                        <option value=""> Guyana </option>
                        <option value=""> Haiti </option>
                        <option value=""> Heard Island and McDonald Islands </option>
                        <option value=""> Holy See (Vatican City State) </option>
                        <option value=""> Honduras </option>
                        <option value=""> Hong Kong </option>
                        <option value=""> Hungary </option>
                        <option value=""> Iceland </option>
                        <option value=""> India </option>
                        <option value=""> Indonesia </option>
                        <option value=""> Iran, Islamic Republic of </option>
                        <option value=""> Iraq </option>
                        <option value=""> Ireland </option>
                        <option value=""> Isle of Man </option>
                        <option value=""> Israel </option>
                        <option value=""> Italy </option>
                        <option value=""> Jamaica </option>
                        <option value=""> Japan </option>
                        <option value=""> Jersey </option>
                        <option value=""> Jordan </option>
                        <option value=""> Kazakhstan </option>
                        <option value=""> Kenya </option>
                        <option value=""> Kiribati </option>
                        <option value=""> Korea, Democratic People's Republic of </option>
                        <option value=""> Korea, Republic of </option>
                        <option value="">Kosovo </option>
                        <option value="">Kuwait </option>
                        <option value="">Kyrgyzstan</option>
                        <option value="">Lao People's Democratic Republic</option>
                        <option value="">Latvia</option>
                        <option value="">Lebanon</option>
                        <option value="">Lesotho</option>
                        <option value="">Liberia</option>
                        <option value="">Libya</option>
                        <option value="">Liechtenstein</option>
                        <option value="">Lithuania</option>
                        <option value="">Luxembourg</option>
                        <option value="">Macao</option>
                        <option value="">Madagascar</option>
                        <option value="">Malawi</option>
                        <option value="">Malaysia</option>
                        <option value="">Maldives</option>
                        <option value="">Mali</option>
                        <option value="">Malta</option>
                        <option value="">Marshall Islands</option>
                        <option value="">Martinique</option>
                        <option value="">Mauritania</option>
                        <option value="">Mauritius</option>
                        <option value="">Mayotte</option>
                        <option value="">Mexico</option>
                        <option value="">Micronesia, Federated States of</option>
                        <option value="">Moldova, Republic of</option>
                        <option value="">Monaco</option>
                        <option value="">Mongolia</option>
                        <option value="">Montenegro</option>
                        <option value="">Montserrat</option>
                        <option value="">Morocco</option>
                        <option value="">Mozambique</option>
                        <option value="">Myanmar</option>
                        <option value="">Namibia</option>
                        <option value="">Nauru</option>
                        <option value="">Nepal</option>
                        <option value="">Netherlands</option>
                        <option value="">Netherlands Antilles</option>
                        <option value="">New Caledonia</option>
                        <option value="">New Zealand</option>
                        <option value="">Nicaragua</option>
                        <option value="">Niger</option>
                        <option value="">Nigeria</option>
                        <option value="">Niue</option>
                        <option value="">Norfolk Island</option>
                        <option value="">Northern Mariana Islands</option>
                        <option value="">Norway</option>
                        <option value="">Oman</option>
                        <option value="">Pakistan</option>
                        <option value="">Palau</option>
                        <option value="">Palestinian Territory, Occupied</option>
                        <option value="">Panama</option>
                        <option value="">Papua New Guinea</option>
                        <option value="">Paraguay</option>
                        <option value="">Peru</option>
                        <option value="">Philippines</option>
                        <option value="">Pitcairn</option>
                        <option value="">Poland</option>
                        <option value="">Portugal</option>
                        <option value="">Puerto Rico</option>
                        <option value="">Montenegro</option>
                        <option value="">Qatar</option>
                        <option value="">Reunion</option>
                        <option value="">Romania</option>
                        <option value="">Russian Federation</option>
                        <option value="">Saint Barthelemy</option>
                        <option value=""> Saint Helena </option>
                        <option value=""> Saint Kitts and Nevis </option>
                        <option value=""> Saint Lucia </option>
                        <option value=""> Saint Martin </option>
                        <option value=""> Saint Pierre and Miquelon </option>
                        <option value=""> Saint Vincent and the Grenadines </option>
                        <option value=""> Samoa </option>
                        <option value=""> San Marino </option>
                        <option value=""> Sao Tome and Principe </option>
                        <option value=""> Saudi Arabia </option>
                        <option value=""> Senegal </option>
                        <option value=""> Serbia </option>
                        <option value=""> Serbia and Montenegro </option>
                        <option value=""> Seychelles </option>
                        <option value=""> Sierra Leone </option>
                        <option value=""> Singapore </option>
                        <option value=""> St Martin </option>
                        <option value=""> Slovakia </option>
                        <option value=""> Solomon Islands </option>
                        <option value=""> Somalia </option>
                        <option value=""> South Africa </option>
                        <option value=""> South Georgia and the South Sandwich Islands </option>
                        <option value=""> South Sudan </option>
                        <option value=""> Spain </option>
                        <option value=""> Sri Lanka </option>
                        <option value=""> Sudan </option>
                        <option value=""> Suriname </option>
                        <option value=""> Svalbard and Jan Mayen </option>
                        <option value=""> Swaziland </option>
                        <option value=""> Sweden </option>
                        <option value=""> Switzerland </option>
                        <option value=""> Syrian Arab Republic </option>
                        <option value=""> Taiwan, Province of China </option>
                        <option value=""> Tajikistan </option>
                        <option value=""> Tanzania, United Republic of </option>
                        <option value=""> Thailand </option>
                        <option value=""> Timor-Leste </option>
                        <option value=""> Togo </option>
                        <option value=""> Tokelau </option>
                        <option value=""> Tonga </option>
                        <option value=""> Trinidad and Tobago </option>
                        <option value=""> Tunisia </option>
                        <option value=""> Turkey </option>
                        <option value=""> Turkmenistan </option>
                        <option value=""> Turks and Caicos Islands </option>
                        <option value=""> Tuvalu </option>
                        <option value=""> Ukraine </option>
                        <option value=""> United Arab Emirates </option>
                        <option value=""> United Kingdom </option>
                        <option value=""> United States </option>
                        <option value=""> United States Minor Outlying Islands </option>
                        <option value=""> Uruguay </option>
                        <option value=""> Vanuatu </option>
                        <option value=""> Wallis and Futuna </option>
                        <option value=""> Western Sahara </option>
                        <option value=""> Yemen </option>
                        <option value=""> Zambia </option>
                      </select>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='input-box'>
                      <label>Full Name*</label>
                      <input type='text' />
                    </div>
                    <div className='input-box'>
                      <label>E-Mail*</label>
                      <input type='text' />
                    </div>
                  </div>
                  <div className='col'>
                    <div className='input-box'>
                      <label>Phone*</label>
                      <div className='select-country-code'>
                        <div className='select-country-box'>
                          <div className='country'>
                            <span className='flag'>Ax</span>
                            <i class="fa-solid fa-angle-down"></i>
                            <span className='country-code'>+358-18</span>
                          </div>
                          <div className='select-country-list-box'>
                            <div className='input-box'>
                              <input type='text' placeholder='Search' />
                            </div>
                            <ul>
                              <li>
                                <span className='flag'>ax</span>
                                <span>Aland Islands</span>
                                <span className='code'>+358-18</span>
                              </li>
                              <li>
                                <span className='flag'>ax</span>
                                <span>Aland Islands</span>
                                <span className='code'>+358-18</span>
                              </li>
                              <li>
                                <span className='flag'>ax</span>
                                <span>Aland Islands</span>
                                <span className='code'>+358-18</span>
                              </li>
                              <li>
                                <span className='flag'>ax</span>
                                <span>Aland Islands</span>
                                <span className='code'>+358-18</span>
                              </li>
                              <li>
                                <span className='flag'>ax</span>
                                <span>Aland Islands</span>
                                <span className='code'>+358-18</span>
                              </li>
                              <li>
                                <span className='flag'>ax</span>
                                <span>Aland Islands</span>
                                <span className='code'>+358-18</span>
                              </li>
                              <li>
                                <span className='flag'>ax</span>
                                <span>Aland Islands</span>
                                <span className='code'>+358-18</span>
                              </li>
                              <li>
                                <span className='flag'>ax</span>
                                <span>Aland Islands</span>
                                <span className='code'>+358-18</span>
                              </li>
                              <li>
                                <span className='flag'>ax</span>
                                <span>Aland Islands</span>
                                <span className='code'>+358-18</span>
                              </li>
                              <li>
                                <span className='flag'>ax</span>
                                <span>Aland Islands</span>
                                <span className='code'>+358-18</span>
                              </li>
                              <li>
                                <span className='flag'>ax</span>
                                <span>Aland Islands</span>
                                <span className='code'>+358-18</span>
                              </li>
                              <li>
                                <span className='flag'>ax</span>
                                <span>Aland Islands</span>
                                <span className='code'>+358-18</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <input type='text' />
                      </div>
                    </div>
                    <div className='input-box'>
                      <label>Address</label>
                      <input type='text' />
                    </div>
                  </div>
                  <div className='col half-col'>
                    <div className='input-box'>
                      <label>Zip Code</label>
                      <input type='text' />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className='select-btn'>
              <Link to='##' className='blue-btn'>Pay by Cryptomus</Link>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
