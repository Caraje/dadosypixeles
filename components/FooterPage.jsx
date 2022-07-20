import Link from 'next/link'
import React from 'react'
import { sections } from '../utils/sections'
import { listSocialNetwork } from '../utils/SocialNetworksList'
import MenuSections from './layout/MenuSections'
import MenuSocialNetwork from './layout/MenuSocialNetwork'
import Navbar from './layout/Navbar'

const FooterPage = () => {
    return (
        <div className='container footerpage'>
            <nav className='hidden'>
                <ul className='menu__group '>
                    {
                        sections.map(sec => (
                            <MenuSections key={sec.url} url={sec.url} name={sec.name} isFooter={true}/>
                        
                        ))
                        }
                </ul>
            </nav>

            <div className='home__page__highlight__social '>                
            {
                listSocialNetwork.map((net, id ) => ( 
                    <MenuSocialNetwork key={id} name={net.name} url={net.url} icon={net.icon} />
                ))        
            }
            </div>
        </div>
    )
}

export default FooterPage