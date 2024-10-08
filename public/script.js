let participants = document.getElementById('participants');

fetch('https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-cc56ce79-08c0-4dc2-8be7-c6eabd473581/cloud/getParticipants')
    .then(response => response.json())
    .then(body => {
        body.forEach(element => {
            let cardDiv = document.createElement('div');
            cardDiv.className = "card";
            cardDiv.style = "width: 18rem;"

            let cardImage = document.createElement('img');
            cardImage.src = element.profilePicture
            cardImage.className = "card-img-top"

            let cardDetails = document.createElement('div');
            cardDetails.className = "card-body"

            let cardDetailsTitle = document.createElement('h5')
            cardDetailsTitle.innerHTML = element.name
            cardDetailsTitle.className = "card-title"

            let cardDetailsDescription = document.createElement('p')
            cardDetailsDescription.innerHTML = element.course
            cardDetailsDescription.className = "card-text"

            let cardDetailsAction = document.createElement('a')
            cardDetailsAction.href = "#"
            cardDetailsAction.className = "btn btn-primary"
            cardDetailsAction.innerHTML = "View Details"

            cardDetails.appendChild(cardDetailsTitle)
            cardDetails.appendChild(cardDetailsDescription)
            cardDetails.appendChild(cardDetailsAction)

            cardDiv.appendChild(cardImage)
            cardDiv.appendChild(cardDetails)

            participants.append(cardDiv)
        });
    })