/**
 *
 * main() will be run when you invoke this action
 *
 * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
 *
 * @return The output of this action, which must be a JSON object.
 *
 */
var request = require("request-promise");
const DiscoveryV1 = require("watson-developer-cloud/discovery/v1");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


async function main(params) {
  if (params.type === "api") {
    try {
        const summary = await request({
            method: "GET",
            uri: "https://api.covid19api.com/summary",
            json: true,
        });
        
        if(params.location)
        {
            country = params.location;
            const uri = `https://coronavirus-19-api.herokuapp.com/countries/${country}`;
    
            const data = await request({
                method: "GET",
                uri: uri,
                json: true,
            });
            
            return {
                result: `Total Cases: ${data.cases}\nTotal Deaths: ${data.deaths}\nTotal Recovered: ${data.recovered}\n`,
            };
            
           /* for(var i=0; i < data.covid19.recordLocation.length; i++)
            {
                if(data.covid19.recordLocation[i].toLowerCase() === params.location.toLowerCase())
                {
                    return {
                    result: `Total Cases: ${data.covid19.confirmed[i]}\n`}
                }
            }; */
            
            return { error: "did not find location" };
        }
      
      let totalCases = summary.Global.TotalConfirmed;
      let totalDeaths = summary.Global.TotalDeaths;
      let totalRecovered = summary.Global.TotalRecovered;

      return {
        result: `Total Cases: ${totalCases}\nTotal Deaths: ${totalDeaths}\nTotal Recovered: ${totalRecovered}\n\nSource: Johns Hopkins CSSE`,
      };
    } catch (err) {
      return { error: "it failed : " + err };
    }
  } else {
    const discovery = new DiscoveryV1({
      version: "2019-03-25",
      iam_apikey: params.api_key,
      url: params.url,
    });

    const offset = getRandomInt(50);

    const queryParams = {
      environment_id: params.env_id,
      collection_id: params.collection_id,
      natural_language_query:
        "corona virus " + params.input || "corona virus news",
      count: 3,
      offset: offset,
    };
    try {
      data = await discovery.query(queryParams);
      let response = data.results.map((v, i) => {
        return `${v.title}
                 ${v.text}
                 ${v.url}`;
      });
      return {
        result:
          "Here are some news articles we found. We can’t verify the accuracy of all of these sources.\n\n" +
          response.join("\n\n"),
      };
    } catch (err) {
      return { error: "it failed : " + err };
    }
  }
}
