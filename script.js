function putQuote(response) {
    $("#setQuote").html(response.quoteText);

    let author = response.quoteAuthor == '' ? 'Anonymous' : response.quoteAuthor;
    $("#setAuthor").html("- " + author);
    $("body").css("background", randomColor());

    let twitterPostUrl =
        "https://twitter.com/intent/tweet?text="
        + encodeURIComponent(response.quoteText)
        + "-" + encodeURIComponent(response.quoteAuthor);

    $(".tweet-out a")
    .css("visibility", "visible")
    .attr("href", twitterPostUrl);
}



$("#genQuote").click(function() {
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
    .done(putQuote)
    .fail(() => console.log("Failed to get the quote. Try again."));
});
