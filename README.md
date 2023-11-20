# CS361_Project

# Partner Microservice:

How to request data:

Send a post request to the following URL:
URL: https://elitemma.vercel.app/api/partner/getURL <br>
<br>Method: "POST" <br>

For the request body, send it as a JSON with the following format and using the id of the technologies: <br>

Request Body: <br>
<p>
{ 
    "frontend": 1,
    "backend" : 2,
    "database": 3,
    "styling": 3,
    "deployment": 5
}
</p>

How to recieve the data: <br>
The endpoint will send the following response as a JSON: <br>
<p>
{
    
    "React": "https://reactjs.org/",
    "Django": "https://www.djangoproject.com/",
    "MongoDB": "https://www.mongodb.com/",
    "Material-UI": "https://mui.com/",
    "Docker": "https://www.docker.com/"

}
</p>

UML Diagram:
![Screenshot 2023-11-20 at 5.05.56 PM.png](..%2F..%2F..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2Frx%2F6z27706j2lj93mtd3fc0g0f80000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_gUCj7G%2FScreenshot%202023-11-20%20at%205.05.56%E2%80%AFPM.png)