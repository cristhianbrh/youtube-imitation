import "./VideoRecommendation.css";
export const VideoRecommendation = ({
        title="La Programación es el único futuro que nos llevará a la ...", 
        data="Mr addmin",
        image="./Img/videoImg.png",
        created = new Date(),
        vistas = "3,9928"
})=>{
    

    return (
        <div className="VideoRecommendation">
            <img src={image} alt="" />
            <div>
                <img src="./Img/logo.png" alt="" />
                <div>
                    <p>{title}</p>
                    <p>{data}</p>
                    <p>{vistas} vistas . {created.getDay()}/{created.getMonth()}/{created.getFullYear()}</p>
                </div>
            </div>
        </div>
    )
}