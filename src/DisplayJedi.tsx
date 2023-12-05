const DisplayJedi = () => {

    const jedi = ['Obi-Wan Kenobi', 
    'Mace Windu', 
    'Yaddle - Deceased', 
    'Yoda', 
    'Shaak Ti',
    'Plo Koon', 
    'Ki-Adi-Mundi', 
    'Saesee Tiin', 
    'Eeth Koth', 
    'Agen Kolar', 
    'Kit Fisto', 
    'Adi Gallia - Deceased',
    'Even Piell - Deceased',
    'Oppo Rancisis',
    'Coleman Kcaj',
    'Depa Billaba',
    'Stass Allie',
    'Anakin Skywalker - Jedi Knight'
]

    return (
        <div>
            <div>
                    <h1>Jedi Council</h1>
                    <h3>Clone Wars</h3>
            </div>

            <div className="transbox">
                {jedi.map((master, idx) => {
                    // If we were continuing this project, each link would lead to each Masters information, for now it is just a general link.
                    return <p key={idx} className="jedi"><a href="https://clonewars.fandom.com/wiki/Jedi_High_Council" target="blank">{master}</a> <br /></p>
                })}
            </div>

        </div>

    )
}

export default DisplayJedi