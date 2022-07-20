import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const MenuSections = ({url, name, isFooter, close}) => {

    const { asPath, pathname } = useRouter()

    return (
        <li className={`${asPath === `/${name.replace(/\s+/g, '').toLowerCase()}` ? 'active' : '' } ${isFooter ? 'footer_item' : ' menu_item' }`}>
            <Link href={url} passHref onClick={close}>
                <a>
                    {name}
                </a>
            </Link>
        </li>
    )
}

export default MenuSections