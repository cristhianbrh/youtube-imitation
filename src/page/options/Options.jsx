import "./Options.css";
export const Options = ({ optionAct, setOptionAct }) => {

    return (
        <div className="OptionsPage">
            <div className={(optionAct === 0) ? "OptionsPageOption__active" : ""} onClick={() => setOptionAct(0)}>
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" ><g>
                    {(optionAct === 0) ?
                        <path d="M4,10V21h6V15h4v6h6V10L12,3Z" ></path>
                        :
                        <path d="M12,4.33l7,6.12V20H15V14H9v6H5V10.45l7-6.12M12,3,4,10V21h6V15h4v6h6V10L12,3Z" ></path>
                    }
                </g></svg>
                <p>Principal</p>
            </div>
            <div className={(optionAct === 1) ? "OptionsPageOption__active" : ""} onClick={() => setOptionAct(1)}>
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g height="24" viewBox="0 0 24 24" width="24" >
                    {(optionAct === 1) ?
                        <path d="M17.77 10.32c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zM10 14.65v-5.3L15 12l-5 2.65z"></path>
                        :
                        <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
                    }
                </g></svg>
                <p>Shorts</p>
            </div>
            <div className={(optionAct === 2) ? "OptionsPageOption__active" : ""} onClick={() => setOptionAct(2)}>
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g>
                    {(optionAct === 2) ?
                        <path d="M20,7H4V6h16V7z M22,9v12H2V9H22z M15,15l-5-3v6L15,15z M17,3H7v1h10V3z" ></path>
                        :
                        <path d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z" ></path>
                    }
                </g></svg>
                <p>Suscripciones</p>
            </div>

            <hr />

            <div className={(optionAct === 3) ? "OptionsPageOption__active" : ""} onClick={() => setOptionAct(3)}>
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g>
                    {(optionAct === 3) ?
                        <path d="M4,20h14v1H3V6h1V20z M21,3v15H6V3H21z M17,10.5L11,7v7L17,10.5z" ></path>
                        :
                        <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
                    }
                </g></svg>
                <p>Biblioteca</p>
            </div>
            <div className={(optionAct === 4) ? "OptionsPageOption__active" : ""} onClick={() => setOptionAct(4)}>
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g >
                    {(optionAct === 4) ?
                        <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,2C8.73,2,5.8,3.44,4,5.83V3.02H2V9h6V7H5.62 C7.08,5.09,9.36,4,12,4c4.41,0,8,3.59,8,8s-3.59,8-8,8s-8-3.59-8-8H2c0,5.51,4.49,10,10,10s10-4.49,10-10S17.51,2,12,2z" ></path>
                        :
                        <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z" ></path>
                    }
                </g></svg>
                <p>Historial</p>
            </div>

            <hr />

            <div className={(optionAct === 5) ? "OptionsPageOption__active" : ""} onClick={() => setOptionAct(5)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                    {(optionAct === 5) ?
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                        :
                        <>
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </>
                    }
                </svg>
                <p>Información</p>
            </div>
        </div>
    )
}