// get the url of the current page and select the corresponding nav item
const url = window.location.pathname;
const activePage = url.substring(url.lastIndexOf('/') + 1);

// for each a tag in the class navbar, check if the href matches the current page
// if it does, add the class z-primary-color to the a tag
$('.navbar a').each(function () {
    let linkPage = this.href.substring(this.href.lastIndexOf('/') + 1);

    if (activePage == linkPage) {
        $(this).addClass('z-primary-color');
    }
});