// add nav toggle
    // grab ul and add classList of show
    // toggle class of the ul when burger icon is clicked

// can add comments on the blog page
    // add a submit event listener on the form of the blog page
    // check if there is any text on the name and comment
    // create new elements in the commentsContainer div and dynamically add the comments to the elements
        // create profile.div, div.imageContainer with img inside, div.commentTextContent with h5 and p inside
        // get current date and add it to h5
        // get the text content of the name and comment and add it to h5 and p
        
const getOrdinal = (date) => {
    const j = date % 10;
    const k = date % 100;

    if (j == 1 && k != 11) {
        return date + "st,";
    } else if (j == 2 && k != 12) {
        return date + "nd,";
    } else if (j == 3 && k != 13) {
        return date + "rd,";
    } else {
        return date + "th,";
    }
}

const getDate = () => {
    let d = new Date();
    const day = d.toLocaleString("default", { weekday: "long" });
    const month = d.toLocaleString("default", { month: "long" });
    const date = d.getDate();
    const year = d.getFullYear();
    const fullDate = `${day} ${month} ${getOrdinal(date)} ${year}`
    return fullDate;
}

const createProfile = () => {
    const commentsContainer = document.querySelector('.commentsContainer');
        const profile = document.createElement('div');
        profile.classList.add('profile');
        commentsContainer.appendChild(profile);
    
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('imageContainer');
        profile.appendChild(imageContainer);
    
        const image = document.createElement('img');
        image.src = "https://picsum.photos/200/200";
        imageContainer.appendChild(image);
    
        const commentTextContent = document.createElement('div');
        commentTextContent.classList.add('commentTextContent');
        profile.appendChild(commentTextContent);
    
        const commentor = document.createElement('h5');
        commentTextContent.appendChild(commentor);
        commentor.textContent = `${getDate()} by ${theName.value}`;
    
        const theComment = document.createElement('p');
        commentTextContent.appendChild(theComment);
        theComment.textContent = commentText.value;
}

const blogForm = document.querySelector('.myFormBlog');
const commentText = document.getElementById('comment');
const theName = document.getElementById('name');
blogForm.addEventListener('submit', function(event) {
    event.preventDefault();
    createProfile();

    commentText.value = "";
    theName.value = "";
});

const navBar = document.querySelector('.navLinks');
const burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
    navBar.classList.toggle('showLinks');
});