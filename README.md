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

UML Diagram:<br>
![Model](https://github.com/GSD678/CS361_Project/blob/main/frontend/public/UML.png)

