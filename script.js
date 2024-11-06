async function displayData() {
    const giphyApi = "PjvdqKiTPO2mLJwv0Z5YBjdHulb8coGn";
    const endPintGet = 'https://api.giphy.com/v1/gifs/search?api_key=PjvdqKiTPO2mLJwv0Z5YBjdHulb8coGn&q=robot&limit=27&offset=0&rating=g&lang=en&bundle=messaging_non_clips';
    try {
        const response = await fetch (endPintGet);
        if (!response.ok) {
          throw new Error("Response was not successful");
        }
        let data = await response.json();
        let section_image = document.getElementById("section_image");
        section_image.innerHTML = "";
    
        data.data.forEach((element) => {
          const newImage = document.createElement("img");
          newImage.src = element.images.original.url;
          newImage.className = "giphy_img";
          section_image.appendChild(newImage);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    
    document.getElementById("searchButton").addEventListener("click", () => {
      const searchTerm = document.getElementById("searchTerm").value;
      if (searchTerm) {
        displayData(searchTerm);
      } else {
        alert("Please enter a search term");
      }
    });