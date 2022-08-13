
export const Card = (props)=> {
    const {allCountriesData} = props;
    return(
        <div>
            {console.log(allCountriesData)}
            {allCountriesData.map((singleData, index)=>
            <div key= {index}>
                <h2>{singleData.Country}</h2>
                <p>新規感染者: {singleData.NewConfirmed.toLocaleString()}</p>
                <p>感染者総数:{singleData.TotalConfirmed.toLocaleString()}</p>
            </div>
            )}
        </div>
    );
}