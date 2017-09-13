# Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
# Also, the URL is missing a crutial component, find out what it is and insert it too!

url = "https//www.reddit.com/r/nevertellmethebots"
def url_fixer():
    new_url = url[:38] + "odds" + "/"
    print(new_url)

url_fixer()