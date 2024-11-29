browsers=( "browserstack:iPhone 11 Pro Max@13" "browserstack:iPhone XS Max@12" "browserstack:iPhone 11@13" "browserstack:iPhone XR@12" "browserstack:iPhone 13 Pro@15" "browserstack:iPhone 12@14" "browserstack:Samsung Galaxy S21 Plus@11.0" "browserstack:Samsung Galaxy S21 Ultra@11.0" )

if [ -z "$1" ] || [ -z "$2" ]
then echo "You miss an argument please check"
else
    echo "The script is running"
    for i in "${browsers[@]}"
    do
        npx gherkin-testcafe "${i}" features/$1.feature step-definitions/$1.ts --env=$2
    done    
fi