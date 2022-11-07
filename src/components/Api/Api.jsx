import axios from "axios";

export const getTeamsInfo = async (teamName) => {

    try {
        const {
            data
        } = await axios.get(
            `https://api-football-v1.p.rapidapi.com/v3/teams`,
            {
                params: {
                    id: 529,
                    name: teamName,
                },
                headers: {
                  'X-RapidAPI-Key': 'ec08c63f78msheb589bbe32d52d3p16a396jsn0b9522db490d',
                  'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }  
            }
        )
        
        return data;
    } catch (error) {
        console.log(error)
    }
};
