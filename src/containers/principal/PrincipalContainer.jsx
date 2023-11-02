import { useEffect, useRef, useState } from "react";
import { VideoRecommendation } from "../../components/videoRecommendation/VideoRecommendation";
import "./PrincipalContainer.css";
export const PrincipalContainer = () => {


    const [dataVid, setDataVid] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character").then(result => result.json())
            .then(result => {
                setDataVid(result.results);
                setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(true)
            });
    }, [])



    return (
        <>
            <div className="PrincipalContainer">
                <div className="categoriesCont">
                    <div>
                        <button>Todos</button>
                        <button>Videojuegos</button>
                    </div>
                </div>
                <div className="videoListContainer">
                    {
                        (!isLoading) && 
                        dataVid.map((element, index) => 
                            <VideoRecommendation key={"Principal_VideoRecommendation_"+index} title={element.name} image={element.image} created={new Date(element.created)}
                                vistas={((element.episode).length).toString()}/>
                        ) 
                    }

                </div>
            </div>
        </>
    )
}