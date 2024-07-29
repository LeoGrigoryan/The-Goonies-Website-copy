const Ball = document.querySelector('header .BallParent .Ball')
const ScaleParent = document.querySelector('.Welcome .BesideElement')
const ScaleLeaves = document.querySelector('.Welcome .leaves')
const MainName = document.querySelector('.Welcome .name')
const Mouse = document.querySelector('.Welcome .mouse')
const Plot = document.querySelector('.Welcome .Plot')
const PlotText = document.querySelector('.Welcome .Plot p')
const PlotLine = document.querySelector('.Welcome .line')
const BlackWindow = document.querySelector('.Welcome .BlackWindow')
const Goonies = document.querySelectorAll('.Goonies .item')
const GooniesPar = document.querySelector('.Goonies')
const CoinKeyParent = document.querySelector('.Coins-Key')
const CoinKeyPictures = document.querySelectorAll('.Coins-Key img')
const CoinKeyText = document.querySelector('.Coins-Key h2')
const MapArea = document.querySelector('.MapParent')
const Map = document.querySelector('.MapParent img')
const MapButton = document.querySelector('.OpenMap')
const MapClose = document.querySelector('.MapParent button')
const Pulses = document.querySelectorAll('.MapParent .all .window')
const PulsContexts = document.querySelectorAll('.MapParent .all .window .context')
const ScrollObject = document.querySelectorAll('.All-About .item .ScrollObject')
const AllAbout = document.querySelector('.All-About')
const Skull = document.querySelector('.Skull-People .Skull')
const People = document.querySelector('.Skull-People .People')
const SkullParent = document.querySelector('.Skull-People')
const Gallery = document.querySelector('.Gallery')
const GalleryImages = document.querySelectorAll('.Gallery .noxes')
const GalleryOpenButton = document.querySelector('.Gallery .TextParent .MainText')
const GalleryCloseButton = document.querySelector('.Gallery .TextParent .X-Button')
const HeaderLis = document.querySelectorAll('header nav ul li')
const LinesParent = document.querySelector('.LinesParent')
const Lines = document.querySelectorAll('.LinesParent .line')
const Footer = document.querySelector('footer')
const FooterLine = document.querySelector('footer .line')
const FooterH = document.querySelector('footer h2')
const FooterP = document.querySelector('footer p')
const FooterB = document.querySelector('footer button')
let arr = [ScaleParent.parentElement.parentElement.offsetHeight / 1.5, GooniesPar.offsetTop, AllAbout.offsetTop, Gallery.offsetTop]
HeaderLis.forEach((item, index) => {
    item.onclick = () => {
        document.documentElement.scrollTop = arr[index];
    }
})
let cur = 0;
FooterB.onclick = () => {
    document.documentElement.scrollTop = 0;
}
GalleryOpenButton.onclick = () => {
    GalleryImages.forEach((item, index) => {
        item.style.translate = 'none';
        item.style.scale = 1;
    })
    GalleryOpenButton.style.opacity = 0;
    GalleryOpenButton.style.visibility = 'hidden';
    setTimeout(() => {
        GalleryCloseButton.style.scale = 1;
    }, 400);
    setTimeout(() => {
        GalleryCloseButton.style.transitionDuration = .7 + 's';
        GalleryCloseButton.style.rotate = 360 + 'deg';
        GalleryCloseButton.style.top = 88 + '%';
    }, 1100);
    Lines.forEach((item, index) => {
        item.style.height = 0;
    })
}
GalleryCloseButton.onclick = () => {
    GalleryImages.forEach((item, index) => {
        item.style.translate = null;
        item.style.scale = null;
    })
    GalleryCloseButton.style.transitionDuration = null;
    GalleryCloseButton.style.top = null;
    GalleryCloseButton.style.rotate = null;
    setTimeout(() => {
        GalleryCloseButton.style.scale = null;
    }, 400);
    setTimeout(() => {
        GalleryOpenButton.style.opacity = null;
        GalleryOpenButton.style.visibility = null;
    }, 1100);
    Lines.forEach((item, index) => {
        item.style.height = null;
    })
}
Pulses.forEach((item, index) => {
    item.onmouseenter = () => {
        Map.style.opacity = .4;
        PulsContexts[index].style.width = 20 + 'vw';
    }
    item.onmouseleave = () => {
        if (index < 2) {
            Pulses[index + 1].style.display = 'flex';
        } else {
            PulsContexts.forEach((elem, index) => {
                elem.style.width = 0;
            })
        }
        Map.style.opacity = null;
        PulsContexts[index].style.width = null;
    }
})
MapButton.onclick = (e) => {
    document.body.style.overflow = 'hidden';
    MapArea.style = 'clip-path: circle(70.7% at 50% 50%);';
    setTimeout(() => {
        Map.parentElement.style.opacity = 1;
    }, 300);
    Map.parentElement.style.left = 20 + -e.clientX / 35 + '%';
    Map.parentElement.style.top = -e.clientY / 20 + '%';
}
MapClose.onclick = () => {
    document.body.style.overflow = 'visible';
    MapArea.style = null;
    Map.parentElement.style.opacity = null;
}
MapArea.onmousemove = (e) => {
    MapArea.style.backgroundPosition = `${e.clientX / 40}% ${e.clientY / 40}%`;
    Map.parentElement.style.left = 20 + -e.clientX / 35 + '%';
    Map.parentElement.style.top = -e.clientY / 20 + '%';
}
window.onscroll = () => {
    Ball.style.opacity = scrollY * .00035;
    MainName.style.opacity = 1 - scrollY * .002;
    if (scrollY <= ScaleParent.parentElement.parentElement.offsetHeight / 1.8) {
        ScaleParent.style.scale = 1 + scrollY * .00015;
    } else {
        ScaleParent.style.scale = 1.4;
    }
    if (scrollY <= ScaleParent.parentElement.parentElement.offsetHeight / 2.5) {
        ScaleLeaves.style.scale = 1 + scrollY * .0006;
    } else {
        ScaleLeaves.style.scale = 1.6;
    }
    if (scrollY >= ScaleParent.parentElement.parentElement.offsetHeight / 2.5) {
        Plot.style.visibility = 'visible';
        Plot.style.opacity = (scrollY - ScaleParent.parentElement.parentElement.offsetHeight / 2.5) * .004;
        Mouse.style.opacity = 1 - (scrollY - ScaleParent.parentElement.parentElement.offsetHeight / 2.5) * .004;
        PlotText.style.top = 4 - (scrollY - ScaleParent.parentElement.parentElement.offsetHeight / 2.5) * .008 + 'vw';
    } else {
        Plot.style.visibility = null;
    }
    if (scrollY >= ScaleParent.parentElement.parentElement.offsetHeight / 2.1) {
        PlotLine.style.height = (scrollY - ScaleParent.parentElement.parentElement.offsetHeight / 2.1) * .03 + 'vw';
        PlotText.style.top = .25 + 'vw';
        BlackWindow.style.opacity = (scrollY - ScaleParent.parentElement.parentElement.offsetHeight / 2.1) * .003;
        Plot.style.opacity = 1;
    } else {
        BlackWindow.style.opacity = 0;
    }
    if (scrollY >= ScaleParent.parentElement.parentElement.offsetHeight / 2) {
        ScaleLeaves.style.top = -10 - (scrollY - ScaleParent.parentElement.parentElement.offsetHeight / 2) * .15 + '%';
    } else {
        ScaleLeaves.style.top = null;
    }
    if (scrollY >= ScaleParent.parentElement.parentElement.offsetHeight / 1.75) {
        ScaleParent.style.opacity = 1 - (scrollY - ScaleParent.parentElement.parentElement.offsetHeight / 1.75) * .001;
    }
    if (scrollY >= ScaleParent.parentElement.parentElement.offsetHeight / 1.45) {
        PlotLine.parentElement.style.alignItems = 'end';
        PlotLine.style.height = 15 - (scrollY - ScaleParent.parentElement.parentElement.offsetHeight / 1.45) * .025 + 'vw';
        PlotText.parentElement.style.opacity = 1 - (scrollY - ScaleParent.parentElement.parentElement.offsetHeight / 1.45) * .0045;
    } else {
        PlotLine.parentElement.style.alignItems = null;
    }
    if (scrollY >= ScaleParent.parentElement.parentElement.offsetHeight / 1.15) {
        PlotLine.style.height = 0;
    }
    if (scrollY >= CoinKeyParent.offsetTop / 1.2) {
        GooniesPar.style.opacity = 1 - (scrollY - CoinKeyParent.offsetTop / 1.2) * .0022;
        CoinKeyText.style.top = 55 - (scrollY - CoinKeyParent.offsetTop / 1.2) * .0022 + '%';
    }
    if (scrollY >= CoinKeyParent.offsetTop / 1.1) {
        CoinKeyText.style.top = 65 - (scrollY - CoinKeyParent.offsetTop / 1.1) * .03 + '%';
        CoinKeyText.style.opacity = (scrollY - CoinKeyParent.offsetTop / 1.1) * .002;
    }
    if (scrollY >= GooniesPar.offsetTop / 1.45) {
        MapButton.style.left = -10 + '%';
    }else {
        MapButton.style.left = null;
    }
    if (scrollY >= GooniesPar.offsetTop / .95) {
        MapButton.style.left = null;
    }
    if (scrollY >= GooniesPar.offsetTop) {
        CoinKeyPictures[0].style.rotate = 40 - (scrollY - GooniesPar.offsetTop) * .045 + 'deg';
        CoinKeyPictures[1].style.top = 100 - (scrollY - GooniesPar.offsetTop) * .1 + '%';
        CoinKeyPictures[2].style.top = (scrollY - GooniesPar.offsetTop) * .11 + '%';
        CoinKeyPictures[2].style.opacity = .7 - (scrollY - GooniesPar.offsetTop) * .0003;
        CoinKeyPictures[2].style.rotate = (scrollY - GooniesPar.offsetTop) * .5 + 'deg';
    }
    if (scrollY <= GooniesPar.offsetTop / .96) {
        CoinKeyPictures[0].style.rotate = null;
        CoinKeyPictures[1].style.top = null;
        CoinKeyPictures[2].style.top = null;
        CoinKeyPictures[2].style.opacity = null;
        CoinKeyPictures[2].style.rotate = null;
    }
    if (scrollY >= GooniesPar.offsetTop / .9) {
        CoinKeyPictures[3].style.top = 30 + (scrollY - GooniesPar.offsetTop / .9) * .10 + '%';
        CoinKeyPictures[3].style.rotate = -(scrollY - GooniesPar.offsetTop / .9) * .22 + 'deg';
        CoinKeyPictures[4].style.top = 90 - (scrollY - GooniesPar.offsetTop / .9) * .1 + '%';
        CoinKeyPictures[4].style.rotate = (scrollY - GooniesPar.offsetTop / .9) * .5 + 'deg';
        CoinKeyPictures[3].style.opacity = .7 - (scrollY - GooniesPar.offsetTop / .9) * .00003;
    } else {
        CoinKeyPictures[3].style.top = null;
        CoinKeyPictures[3].style.rotate = null;
        CoinKeyPictures[4].style.top = null;
        CoinKeyPictures[4].style.rotate = null;
        CoinKeyPictures[3].style.opacity = null;
    }

    if (scrollY >= AllAbout.offsetTop / 1.15) {
        ScrollObject[0].style.opacity = (scrollY - AllAbout.offsetTop / 1.15) * .0015;
        if (100 - (scrollY - AllAbout.offsetTop / 1.15) * .25 >= 0) {
            ScrollObject[1].style.right = 100 - (scrollY - AllAbout.offsetTop / 1.15) * .25 + '%';
        } else {
            ScrollObject[1].style.right = 0;
        }
        if (100 - (scrollY - AllAbout.offsetTop / 1.15) * .25 >= 0) {
            ScrollObject[2].style.top = 100 - (scrollY - AllAbout.offsetTop / 1.15) * .25 + '%';
        } else {
            ScrollObject[2].style.top = 0;
        }
    }
    if (scrollY >= AllAbout.offsetTop / 1.05) {
        ScrollObject[3].style.opacity = (scrollY - AllAbout.offsetTop / 1.05) * .0020;
        ScrollObject[4].style.opacity = (scrollY - AllAbout.offsetTop / 1.05) * .0020;
        ScrollObject[6].style.opacity = (scrollY - AllAbout.offsetTop / 1.05) * .0020;
        if (100 - (scrollY - AllAbout.offsetTop / 1.05) * .45 >= 0) {
            ScrollObject[5].style.bottom = 100 - (scrollY - AllAbout.offsetTop / 1.05) * .45 + '%';
        } else {
            ScrollObject[5].style.bottom = 0;
        }
    }
    if (scrollY >= SkullParent.offsetTop / 1.15) {
        if (1 + (scrollY - SkullParent.offsetTop / 1.15) * .002 <= 2.35) {
            Skull.style.scale = 1 + (scrollY - SkullParent.offsetTop / 1.15) * .002;
        } else {
            Skull.style.scale = 2.35 + (scrollY - SkullParent.offsetTop / 1.15) * .00008;
        }
        Skull.style.rotate = (scrollY - SkullParent.offsetTop / 1.15) * .015 + 'deg';
    }
    if (scrollY >= SkullParent.offsetTop / 1.05) {
        if (50 - (scrollY - SkullParent.offsetTop / 1.05) * .075 >= 20) {
            People.style.top = 50 - (scrollY - SkullParent.offsetTop / 1.05) * .075 + '%';
        } else {
            People.style.top = 20 - (scrollY - SkullParent.offsetTop / 1.05) * .0003 + '%';
            People.style.opacity = .8 + (scrollY - SkullParent.offsetTop / 1.05) * .003;
        }
    }
    if (scrollY >= Gallery.offsetTop / 1.2) {
        LinesParent.style.gap = 45 - (scrollY - Gallery.offsetTop / 1.2) * .06 + 'vw';
    }
    if (scrollY >= Gallery.offsetTop / 1.15) {
        GalleryImages[0].style.opacity = 1;
        setTimeout(() => {
            GalleryImages[1].style.opacity = 1;
            setTimeout(() => {
                GalleryImages[2].style.opacity = 1;
                setTimeout(() => {
                    GalleryImages[3].style.opacity = 1;
                    setTimeout(() => {
                        GalleryImages[4].style.opacity = 1;
                    }, 400);
                    setTimeout(() => {
                        GalleryImages[5].style.opacity = 1;
                        setTimeout(() => {
                            GalleryImages[6].style.opacity = 1;
                            setTimeout(() => {
                                GalleryImages[7].style.opacity = 1;
                                setTimeout(() => {
                                    GalleryImages[8].style.opacity = 1;
                                    setTimeout(() => {
                                        GalleryImages[9].style.opacity = 1;
                                        setTimeout(() => {
                                            GalleryImages[10].style.opacity = 1;
                                        }, 200);
                                    }, 200);
                                }, 200);
                            }, 200);
                        }, 200);
                    }, 200);
                }, 200);
            }, 200);
        }, 200);
    }
    if (scrollY >= Footer.offsetTop / 1.12) {
        Gallery.style.opacity = 1 - (scrollY - Footer.offsetTop / 1.12) * .0022
    }
    if (scrollY >= Footer.offsetTop / 1.08) {
        if (100 - (scrollY - Footer.offsetTop / 1.08) * .5 >= 0) {
            FooterLine.style.height = 100 - (scrollY - Footer.offsetTop / 1.08) * .5 + '%';
        }else {
            FooterLine.style.height = 0;
        }
    }
    if (scrollY >= Footer.offsetTop / 1.07) {
        FooterP.style.opacity = (scrollY - Footer.offsetTop / 1.07) * .0022;
    }
    if (scrollY >= Footer.offsetTop / 1.05) {
        FooterB.style.opacity = (scrollY - Footer.offsetTop / 1.05) * .0022;
        FooterH.style.opacity = (scrollY - Footer.offsetTop / 1.05) * .0022;
        if (2.5 - (scrollY - Footer.offsetTop / 1.05) * .01 >= .6) {
            FooterB.style.top = 2.5 - (scrollY - Footer.offsetTop / 1.05) * .01 + 'vw';
            FooterH.style.top = 4 - (scrollY - Footer.offsetTop / 1.05) * .02 + 'vw';
        }else {
            FooterB.style.top = .6 + 'vw';
            FooterH.style.top = 0;
        }
    }
    
    // let arr = [ScaleParent.parentElement.parentElement.offsetHeight / 1.5, GooniesPar.offsetTop, AllAbout.offsetTop, Gallery.offsetTop]
    if (scrollY >= ScaleParent.parentElement.parentElement.offsetHeight / 1.5) {
        Ball.style.left = HeaderLis[0].offsetLeft;
    }
    if (scrollY >= GooniesPar.offsetTop / 1.2) {
        Ball.style.left = HeaderLis[1].offsetLeft - HeaderLis[1].offsetWidth * 1.8 + 'px';
    }else {
        Ball.style.left = 0;
    }
    if (scrollY >= AllAbout.offsetTop / 1.1) {
        Ball.style.left = HeaderLis[2].offsetLeft - HeaderLis[2].offsetWidth * 2.1 + 'px';
    }
    if (scrollY >= Gallery.offsetTop / 1.075) {
        Ball.style.left = HeaderLis[3].offsetLeft - HeaderLis[3].offsetWidth * 2.2 + 'px';
    }
}