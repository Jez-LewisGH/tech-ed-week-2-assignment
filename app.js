const thumbNailContainer = document.getElementById('thumbNailContainer')
const displayImage = document.getElementById('displayImage')


let images = [
    {
        src: './images/tree.webp',
        alt: 'Photo of a tree on the horizon and set against the sky'

    },
    {
        src: './images/canoe.webp',
        alt: 'Photo of somebody white-water canoeing'
    },
    {
        src: './images/fire.webp',
        alt: 'Photo of somebody white-water canoeing'
    },
    {
        src: './images/umbrella.webp',
        alt: 'Photo of someone struggling with an ubrella in high winds'
    }
]

function createThumbnails() {

    images.forEach(function (image) {

        let imageElem = document.createElement('img')

        imageElem.src = image.src
        imageElem.alt = image.alt

        imageElem.addEventListener('click', function() {
            console.log(image)
            createBigImage(image)
        })

        imageElem.setAttribute('tabindex', '0')

        thumbNailContainer.appendChild(imageElem)
    })
}

createThumbnails()

function createBigImage(img) {
    displayImage.innerHTML = ''
    const bigImage = document.createElement('img')

    bigImage.src = img.src
    bigImage.alt = img.alt
    displayImage.appendChild(bigImage)
}

