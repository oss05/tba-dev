import React from 'react';
import pdf from '../assets/pdf.png'

const Badge = props => {
    return (
        <div className="badgePublic">
            <section className="izqBadge">
                <h2>
                    {props.año} <br />
                </h2>
                <article>
                    <p className="p1">
                        {props.data.areas.publicaciones.nombreCompleto}
                        {props.descripcionAño}
                    </p>
                    <p className="p2">
                        {props.data.areas.publicaciones.nombreCompleto}
                        <br/>
                        {props.envio}
                        {props.fecha}
                    </p>
                </article>

            </section>
            <section className="derBadge">
                <a target="_blank" href={props.linkPdf}><img src={pdf} alt="pdf img" /></a>
            </section>
        </div>
    )
}

export default Badge;