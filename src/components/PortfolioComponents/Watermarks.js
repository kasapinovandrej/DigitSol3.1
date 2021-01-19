import React from 'react'
import { TiHtml5 } from 'react-icons/ti';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoReact } from 'react-icons/io5';
import { SiJavascript, SiWordpress } from 'react-icons/si';

const Watermarks = () => {
    return (

        <section className="svg">
            <div className="svg__wrap">
                <TiHtml5 className="svg__img" />
                <IoLogoCss3 className="svg__img" />
                <SiJavascript className="svg__img" />
                <IoLogoReact className="svg__img" />
                <SiWordpress className="svg__img" />
            </div>
        </section>

    )
}

export default Watermarks
