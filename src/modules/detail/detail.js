import React from 'react';
import './detail.scss';
import picture1 from '../../assets/img/user-5.jpg';
import picture2 from '../../assets/img/user-1.jpg';
import picture3 from '../../assets/img/user-4.jpg';
import picture4 from '../../assets/img/user-6.jpg';


const detail = () => {
    return (
        <div className="detail">
            <div className="description">
                <p className="paragraph">
                    Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' 
                </p>
                <p className="paragraph">
                    Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir.
                </p>
                <ul className="list">
                    <li className="list__item">Sahile yakın</li>
                    <li className="list__item">Kahvaltı dahil</li>
                    <li className="list__item">Ücretsiz havalimanı taşıma</li>
                    <li className="list__item">Ücretsiz wifi</li>
                    <li className="list__item">Klima</li>
                    <li className="list__item">Evcil hayvan girebilir</li>
                    <li className="list__item">Yanabcı dil desteği</li>
                    <li className="list__item">Aileye uygun</li>
                </ul>
                <div className="recommend">
                    <p className="recommend__count">
                        Kamil and 3 arkadaşı bu oteli öneriyor.
                </p>
                    <div className="recommend__friends">
                        <img src={picture1} alt="Friend 1" className="recommend__photo"></img>
                        <img src={picture2} alt="Friend 2" className="recommend__photo"></img>
                        <img src={picture3} alt="Friend 3" className="recommend__photo"></img>
                        <img src={picture4} alt="Friend 4" className="recommend__photo"></img>
                    </div>
                </div>
            </div>
            <div className="user-reviews">
                <figure className="review">
                    <blockquote className="review__text">
                        Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir.
                        Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek.
                     </blockquote>
                    <figcaption className="review__user">
                        <img src={picture1} alt="User 1" className="review__photo"></img>
                        <div className="review__user-box">
                            <p className="review__user-name">Kamil Çobanoğlu</p>
                            <p className="review__user-date">14 Şubat 2019</p>
                        </div>
                        <div className="review__rating">7.8</div>
                    </figcaption>
                </figure>

                <figure className="review">
                    <blockquote className="review__text">
                        Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir.
                     </blockquote>
                    <figcaption className="review__user">
                        <img src={picture2} alt="User 2" className="review__photo"></img>
                        <div className="review__user-box">
                            <p className="review__user-name">Baaddin Sabun</p>
                            <p className="review__user-date">18 Aralik 2018</p>
                        </div>
                        <div className="review__rating">9.2</div>
                    </figcaption>
                </figure>

                <button className="btn-inline">Show all <span>&rarr;</span></button>
            </div>
    
        </div>
    );
}

export default detail;