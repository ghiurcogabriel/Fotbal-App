import axios from "axios";

export const getTeamsInfo = async (teamName) => {

    try {
        const {
            data
        } = await axios.get(
            `https://api-football-v1.p.rapidapi.com/v3/teams`,
            {
                params: {
                    name: teamName,
                },
                headers: {
                  'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                  'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
                }  
            }
        )
        
        return data;
    } catch (error) {
        console.log(error)
    }
};
