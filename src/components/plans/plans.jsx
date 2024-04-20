import React, { useState } from 'react'
import './plans.scss'
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };
export default function Plans() {


    const [switchState, setSwitchState] = useState(false);

    const handleSwitchChange = () => {
        setSwitchState(!switchState);
    };

    return (
        <div className='plans'>
            <div className="plans-wrapper">
                <div className="plans-supercharge">Supercharge your login page design with Premium features.</div>
                <div className="plans-get">Get UNLIMITED customization options for backgrounds, fonts, colors, animations,
                    priority support and more.</div>
                <div className="plans-check">Check out our pricing table below and pick the best plan for you.</div>
                <div className="plans-annual-lifetime">
                    <div className="plans-annual">Annual</div>
                    <Switch checked={switchState} onChange={handleSwitchChange} defaultChecked />
                    <div className="plans-lifetime">Lifetime</div>
                </div>
                <div className="plans-plans">
                    <div className="plans-plan1">
                        <div className="plans-basic">Basic</div>
                        <div className="plans-1site">1 Site</div>
                        <div className="plans-money">{switchState ? "$ 99.99" : "$ 39.99"}</div>
                        <div className="plans-li">{switchState ? "one-time" : ""}</div>

                        <ul className='plans-ul'>
                            <li className='plans-li'>  Background Slider</li>
                            <li className='plans-li'>  Form Animation</li>
                            <li className='plans-li'>  Customize Login Slug</li>
                            <li className='plans-li'>  Google Fonts Addition</li>
                            <li className='plans-li'>  Regular Plugin Updates</li>
                            <li className='plans-li'>  Unlimited Support</li>
                            <li className='plans-li'>  All Core Features Included</li>
                            <li className='plans-li'>  Auto-Renew Subscription</li>
                        </ul>
                        <a className='plans-a' href="https://wordpress.org/plugins/login-designer/" target='_blank' rel="noreferrer" >
                            <div className="plans-buynow">Buy Now</div></a>
                    </div>
                    <div className="plans-plan1">
                        <div className="plans-basic">Pro</div>
                        <div className="plans-1site">5 Sites</div>
                        <div className="plans-money">{switchState ? "$ 249.99" : "$ 79.99"}</div>
                        <div className="plans-li">{switchState ? "one-time" : ""}</div>

                        <ul className='plans-ul'>
                            <li className='plans-li'>  Background Slider</li>
                            <li className='plans-li'>  Form Animation</li>
                            <li className='plans-li'>  Customize Login Slug</li>
                            <li className='plans-li'>  Google Fonts Addition</li>
                            <li className='plans-li'>  Regular Plugin Updates</li>
                            <li className='plans-li'>  Unlimited Support</li>
                            <li className='plans-li'>  All Core Features Included</li>
                            <li className='plans-li'>  Auto-Renew Subscription</li>
                        </ul>
                        <a className='plans-a' href="https://wordpress.org/plugins/login-designer/" target='_blank' rel="noreferrer">
                            <div className="plans-buynow">Buy Now</div></a>
                    </div>
                    <div className="plans-plan1">
                        <div className="plans-basic">Agency</div>
                        <div className="plans-1site">30 Site</div>
                        <div className="plans-money">{switchState ? "$ 399.99" : "$ 149.99"}</div>
                        <div className="plans-li">{switchState ? "one-time" : ""}</div>

                        <ul className='plans-ul'>
                            <li className='plans-li'>  Background Slider</li>
                            <li className='plans-li'>  Form Animation</li>
                            <li className='plans-li'>  Customize Login Slug</li>
                            <li className='plans-li'>  Google Fonts Addition</li>
                            <li className='plans-li'>  Regular Plugin Updates</li>
                            <li className='plans-li'>  Unlimited Support</li>
                            <li className='plans-li'>  All Core Features Included</li>
                            <li className='plans-li'>  Auto-Renew Subscription</li>
                        </ul>
                        <a className='plans-a' href="https://wordpress.org/plugins/login-designer/" target='_blank' rel="noreferrer">
                            <div className="plans-buynow">Buy Now</div></a>
                    </div>
                    <div className="plans-plan1">
                        <div className="plans-basic">Ultimate</div>
                        <div className="plans-1site">100 Site</div>
                        <div className="plans-money">{switchState ? "$ 699.99" : "$ 289.99"}</div>
                        <div className="plans-li">{switchState ? "one-time" : ""}</div>

                        <ul className='plans-ul'>
                            <li className='plans-li'>  Background Slider</li>
                            <li className='plans-li'>  Form Animation</li>
                            <li className='plans-li'>  Customize Login Slug</li>
                            <li className='plans-li'>  Google Fonts Addition</li>
                            <li className='plans-li'>  Regular Plugin Updates</li>
                            <li className='plans-li'>  Unlimited Support</li>
                            <li className='plans-li'>  All Core Features Included</li>
                            <li className='plans-li'>  Auto-Renew Subscription</li>
                        </ul>
                        <a className='plans-a' href="https://wordpress.org/plugins/login-designer/" target='_blank' rel="noreferrer">
                            <div className="plans-buynow">Buy Now</div></a>
                    </div>
                </div>
                <div className="plans-programs">
                    <img src="assests/programs.png" alt="" />
                </div>
                <div className="plans-moneyback-14">
                    <div className="plans-moneyback">
                        <img src="assests/moneyback.png" alt="" />
                    </div>
                    <div className="plans-14-we">
                        <div className="plans-14">
                            14 DAY MONEY-BACK GUARANTEE
                        </div>
                        <div className="plans-we">
                            We are committed to your satisfaction that
                            our products will elevate your online store’s
                            performance backed by our 14-day money-back guarantee.
                        </div>
                    </div>
                </div>
                <div className="plans-everything">Everything you need for your WordPress login page</div>
                <a className='plans-a' href="https://wordpress.org/plugins/login-designer/" target='_blank' rel="noreferrer" >
                    <div className="plans-downloadnow">Download Now</div></a>
            </div>
        </div>
    )
}
