let browser="Chrome Browser"
function checkBrowserversion(callback)
{
    console.log("Browser version")
    setTimeout(function()
    {
        callback()
    } , 2000)
}
function check()
{
    console.log("is " +browser)
}
checkBrowserversion(check)


