//Gallery page image display
const modal = document.getElementById("img-modal");
        const galleryImages = document.querySelectorAll('.gallery-image');

// Add click event listeners to each image
        function setupImageClickHandlers(galleryImages) {
            galleryImages.forEach(function(imgElement) {
                imgElement.addEventListener('click', function() {
                    const imgUrl = imgElement.src;
                    const imgAlt = imgElement.alt;
                    displayModal(imgUrl, imgAlt);
                });
            });
        }
         
//display modal with clicked image
        function displayModal(imgUrl, imgAlt) {
            modal.innerHTML = `<div class="modal-content" id ="modal-content">
                <span onclick ="closeModal()" class="close">&times</span>
                <img src="${imgUrl}" alt="${imgAlt}"></img>
                <div class="image-text"><h2>${imgAlt}</h2></div></div>`;
            modal.style.display = "flex";
        }
        setupImageClickHandlers(galleryImages);
        
       function closeModal() {
                modal.style.display = "none";
           }
                    
// When the user clicks outside of the modal, close it
          window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

