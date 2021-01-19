import React, { Component } from 'react'
import GallerySmall from '../../Data/GalleryData';
import { FiExternalLink } from 'react-icons/fi';
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';
import { IoDocumentTextOutline, IoColorPaletteSharp } from 'react-icons/io5';
import { VscChromeClose } from 'react-icons/vsc';


class Gallery extends Component {
    state = {
        all: true,
        web: false,
        graph: false,
        modal: false,
        currentImage: 0,
    }

    webDesign = () => {
        this.setState({
            all: false,
            web: true,
            graph: false,
            currentImage: 0
        })
    }
    graphDesign = () => {
        this.setState({
            all: false,
            web: false,
            graph: true,
            currentImage: 0
        })
    }
    allPortfolio = () => {
        this.setState({
            all: true,
            web: false,
            graph: false,
            currentImage: 0
        })
    }
    closeModal = () => {
        this.setState({
            modal: false,
            currentImage: 0
        })
    }
    imageClickOpen = (e) => {
        this.setState({
            modal: true,
            currentImage: e.target.id - 1,
        });
    }
    nextSlide = () => {
        if (this.state.currentImage < GallerySmall.length - 1) {
            this.setState({
                currentImage: this.state.currentImage + 1
            })
        } else {
            this.setState({
                currentImage: 0
            })
        }
    }

    prevSlide = () => {
        if (this.state.currentImage > 0) {
            this.setState({
                currentImage: this.state.currentImage - 1
            })
        } else {
            this.setState({
                currentImage: GallerySmall.length - 1
            })
        }
    }

    render() {

        const all = GallerySmall;
        const web = GallerySmall.filter(el => el.filter === "Web dizajn")
        const graph = GallerySmall.filter(el => el.filter === "Grafički dizajn")
        return (
            <section className="gallery" >
                <div className="gallery__wrap">

                    <div className="gallery__box">
                        <h2 className="gallery__h2">galerija</h2>
                        <div className="gallery__nav">
                            <ul className="gallery__ul">
                                <li className={this.state.all ? "gallery__li active--filter" : "gallery__li"}
                                    onClick={this.allPortfolio}>Sve</li>
                                <li className={this.state.web ? "gallery__li active--filter" : "gallery__li"}
                                    onClick={this.webDesign}>Web dizajn</li>
                                <li className={this.state.graph ? "gallery__li active--filter" : "gallery__li"}
                                    onClick={this.graphDesign}>Grafički dizajn</li>
                            </ul>
                        </div>
                        <div className="gallery__elements">
                            {this.state.all ? all.map(el => {
                                return (<img onClick={this.imageClickOpen} key={el.alt} id={el.id} src={el.src} alt={el.alt} className="gallery__img" />)
                            }) : null}
                            {this.state.web ? web.map(el => {
                                return (<img onClick={this.imageClickOpen} key={el.alt} id={el.id} src={el.src} alt={el.alt} className="gallery__img" />);
                            }) : null}
                            {this.state.graph ? graph.map(el => {
                                return (<img onClick={this.imageClickOpen} key={el.alt} id={el.id} src={el.src} alt={el.alt} className="gallery__img" />);
                            }) : null}
                        </div>
                    </div>
                </div>
                <div className={this.state.modal ? "modal" : "hide"}>
                    <div className="modal__back" onClick={this.closeModal}></div>
                    <div className="modal__glass">
                        <button className="modal__close" onClick={this.closeModal}> <VscChromeClose /></button>
                        <div className="modal__leftbox">
                            <h1 className="modal__h1">{all[this.state.currentImage].title}</h1>
                            {this.state.all ? <img src={all[this.state.currentImage].src} alt={all[this.state.currentImage].src} className="modal__img" /> : null}
                            {this.state.web ? <img src={all[this.state.currentImage].src} alt={all[this.state.currentImage].src} className="modal__img" /> : null}
                            {this.state.graph ? <img src={all[this.state.currentImage].src} alt={all[this.state.currentImage].src} className="modal__img" /> : null}
                        </div>
                        <div className="modal__rightbox">
                            <div className="modal__rightboxwrap">
                                <a target="_blank" rel="noreferrer" href={all[this.state.currentImage].link} className="modal__linkbox">
                                    <FiExternalLink className="modal__icon" />
                                    <div>
                                        <h2 className="modal__h2">Web stranica</h2>
                                        <p className="modal__p">{all[this.state.currentImage].link}</p>
                                    </div>
                                </a>
                                <div className="modal__linkbox" onClick={this.nextSlide}>
                                    <MdSkipNext className="modal__icon" />
                                    <div>
                                        <h2 className="modal__h2">Sledeća</h2>
                                        <p className="modal__p">{all[this.state.currentImage + 1 < 14 ? this.state.currentImage + 1 : 0].title}</p>
                                    </div>
                                </div>
                                <div className="modal__linkbox">
                                    <MdSkipPrevious className="modal__icon" />
                                    <div>
                                        <h2 className="modal__h2" onClick={this.prevSlide}>Prethodna</h2>
                                        <p className="modal__p">{all[this.state.currentImage - 1 > 0 ? this.state.currentImage - 1 : 14].title}</p>
                                    </div>
                                </div>
                                <div className="modal__linkbox" style={{ cursor: "default" }}>
                                    <IoDocumentTextOutline className="modal__icon" />
                                    <div>
                                        <h2 className="modal__h2">Opis</h2>
                                        <p className="modal__p">Lorem, ipsum dolor sit amet consectetur ores repellendus debitis quae Lorem, ipsum dolor sit amet consectetur ores epellendusores repellendus debitis quae Lorem, ipsum dolor sit amet consectetur ores repellendus debitis quae?</p>
                                    </div>
                                </div>
                                <div className="modal__linkbox" style={{ cursor: "default" }}>
                                    <IoColorPaletteSharp className="modal__icon" />
                                    <div>
                                        <h2 className="modal__h2">Dizajn</h2>
                                        <p className="modal__p">{all[this.state.currentImage].design}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

export default Gallery
