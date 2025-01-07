//Describtion:

//My Solution:
function domainName(url){
    url = url.trim();
    
    let urlString = url.replace(/(^\w+:|^)\/\//, '').replace('www.', '');
    urlString = urlString.split(/[/?#]/)[0];
    
    let domainSection = urlString.split(".");
    
    if (/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(domainSection[0])) {
        return domainSection[0];
    }
    
    let domain = domainSection[0];
    
    return domain;
  }

//Other solutions:
function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };

//Another one:
function domainName(url){
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
  }