let testType= 'Regression'
switch(testType)
{
    case 'Intergration':
        {
            console.log("Perform Intergration testing")
            break
        }
        case 'Sanity':
            {
                console.log("Perform Sanity testing")
                break
            } 
        case 'UserAcceptance':
            {
                console.log("Perform User acceptance testing")
                break
            }  
        case 'Regression':
            {
                console.log("Perform Regression testing")
                //break
            }
            default:
                console.log("Perform Smoke testing")
}