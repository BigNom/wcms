## Deploy

run these commands

```sh
yarn build
```

## Check Build

```sh
serve -s build
```

### Alternatively run

```sh
firebase serve
```

this will generate an optimsed build

both will be serve at localhost:5000

## Deploy

```sh
firebase deploy
```

git status
git add .
git commit -m 'message'
git push origin

## Demo at
https://wcms-6fcb2.firebaseapp.com

     <HomeFlex>
       <Hero />
       <CustomFlex>
         <ContactForm />
         <div>
            <div>
              <GMaps style={{ width: "100%", height: "400px" }} />
            </div>
         </div>
         
       </CustomFlex>
       <Footer />
     </HomeFlex>
    );

    32em = 768px
    48 = 1152px
    64 = 1536px
    80 = 1920px

    # Steps to get searched by google
    Chrome and Bing not found
    Duck Duck Go found
    ##Removed 
    <Provider></Provider>
    No improvement
    React Helmet
    No improvement

    Removed <Contact> Route

    Removing call to goolgemaps from index.html removes google error

    ## meta tags
    Meta descriptions can be any length, but search engines generally truncate snippets longer than 160 characters. It is best to keep meta descriptions long enough that they're sufficiently descriptive, but shorter than that 160-character limit.

# Updated robots.txt file
User-agent: *
Disallow: /maps/api/js/AuthenticationService.Authenticate
Disallow: /maps/api/js/QuotaService.RecordEvent

##Google Search Console

## Favicon Generator
https://www.favicon-generator.org/