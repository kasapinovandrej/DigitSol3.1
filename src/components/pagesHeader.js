import React from 'react';

const pagesHeader = (props) => {
    return (
        <section className="pageshero">
            <div className='pageshero__wrap'>
                <img src={props.img1} alt={`${props.img1}`} className='pageshero__img pageshero__img--left' />
                <h1 className='pageshero__h1'>{props.title}</h1>
                <img src={props.img2} alt={`${props.img1}`} className='pageshero__img pageshero__img--right' />
            </div>
        </section>
    )
}

export default pagesHeader;
