export class GeoDBService{
    public getCityByName(cityName: string): void{

        let test =   fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/cities", {
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
		        "x-rapidapi-key": "undefined"
	        }
        })
        .then(response => {
	        console.log(response);
        })
        .catch(err => {
	        console.error(err);
        });
        console.log(test);
    }
}